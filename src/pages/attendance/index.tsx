import { useEffect, useState } from 'react';
import * as S from './Attendance.styles';
import AttendanceTable from '@/components/attendanceTable';
import ManageLayout from '@/components/layout/managelayout';
import dropdwon from '@/assets/buttonIcon/dropdown.svg';
import sms from '@/assets/buttonIcon/sms.svg';
import statistics from '@/assets/buttonIcon/statistics.svg';
import defaultImg from '@/assets/attendanceTable/default.svg';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import * as XLSX from 'xlsx';
import {
  Student,
  StudentData,
  UpdateAttendanceRequest,
} from '@/types/attendance.type';
import { Student as ExcelStudentData } from '@/pages/attendance/Attendance.type';
import { AttendanceEdit } from '@/api/attendanceAPI';
import useClassStore from '@/store/classStore';
import { ExcelData } from '@/types/excel.type';
import { excelDownload } from '@/api/excelAPI';
import { formatDate, formatStatus } from '@/utils/formatExcelData';

// 드롭다운 최근 6개월 
const getLastSixMonths = () => {
  const currentMonth = new Date().getMonth() + 1;
  const currentYear = new Date().getFullYear();

  const months = [];
  for (let i = 0; i < 6; i++) {
    const month = currentMonth - i;
    if (month > 0) {
      months.push({ year: currentYear, month });
    } else {
      months.push({ year: currentYear - 1, month: month + 12 });
    }
  }

  return { months: months.reverse(), currentMonth };
};

function Attendance() {
  const { months, currentMonth } = getLastSixMonths();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<StudentData[]>([]);
  const [updatedStudents, setUpdatedStudents] = useState<
    UpdateAttendanceRequest[]
  >([]);
  const [excelData, setExcelData] = useState<ExcelStudentData[]>();
  const [smsQuery, setSmsQuery] = useState('');
  const { subClassId } = useClassStore();
  const { grade, class: classParam } = useParams();
  const { type } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname;
  const isTableOpen = url === '/manage/attendance/all' || !!classParam;
  const isSmsButtonEnabled =
    !!classParam || location.pathname === '/manage/attendance/all';
  const isButtonGroupEnabled = url === '/manage/attendance'

  useEffect(() => {
    setIsEditMode(false);
  }, [grade, subClassId, classParam]);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMonthSelect = (month: number) => {
    setSelectedMonth(month);
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    fetchExcelData(selectedMonth);
  }, [selectedMonth, subClassId]);

  const fetchExcelData = async (month: number) => {
    try {
      if (subClassId == 0) {
        const response = await excelDownload(month);
        const data: ExcelData[] = response.data.data;
        setExcelData(
          data.map((item) => ({
            name: item.name,
            attendance: item.attendance.map((record) => ({
              date: formatDate(record.date),
              status: formatStatus(record.status),
            })),
          }))
        );
      } else {
        const response = await excelDownload(month, subClassId);
        const data: ExcelData[] = response.data.data;
        setExcelData(
          data.map((item) => ({
            name: item.name,
            attendance: item.attendance.map((record) => ({
              date: formatDate(record.date),
              status: formatStatus(record.status),
            })),
          }))
        );
      }
    } catch (error) {
      console.error('Error fetching Excel data', error);
    }
  };

  const downloadExcel = (data: ExcelStudentData[]) => {
    const dates = Array.from(
      new Set(
        data.flatMap((student) =>
          student.attendance.map((record) => record.date)
        )
      )
    ).sort();

    const worksheetData: (string | undefined)[][] = [['이름', ...dates]];

    data.forEach((student) => {
      const row: (string | undefined)[] = [student.name];
      dates.forEach((date) => {
        const record = student.attendance.find(
          (record) => record.date === date
        );
        row.push(record ? record.status : '');
      });

      worksheetData.push(row);
    });

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData); //2D 배열을 엑셀 시트 형식으로 변환

    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, '출석기록');

    const excelBuffer = XLSX.write(workbook, {
      bookType: 'xlsx',
      type: 'array',
    });

    const blob = new Blob([excelBuffer], { type: 'application/octet-stream' });

    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `출석기록 ${selectedMonth}월.xlsx`;
    link.click();

    URL.revokeObjectURL(url);
  };

  const ExcelButton = () => {
    if (excelData) {
      downloadExcel(excelData);
    }
  };

  useEffect(() => {
    const query = selectedStudent.map((student) => student.id).join(',');
    setSmsQuery(query);
  }, [selectedStudent]);

  const toggleEditMode = () => {
    setIsEditMode((prevMode) => !prevMode);
    if (isEditMode) {
      handleSaveAttendance();
    }
  };

  const handleSaveAttendance = async () => {
    try {
      await AttendanceEdit(updatedStudents);
    } catch (error) {
      alert('출결저장에 실패했습니다');
    }
  };

  const handleSmsButtonClick = () => {
    if (selectedStudent.length === 0) {
      alert('학생을 선택해주세요.');
      return;
    }
    navigate(`./sms?studentId=${smsQuery}`);
  };

  return (
    <ManageLayout>
      <S.Container>
        <S.Header>
          <S.TabButton
            isActive={location.pathname.includes('/manage/attendance')}>
            출결
          </S.TabButton>
          <S.TabButton
            isActive={type === 'statistics'}>
            통계
          </S.TabButton>
          <S.TabButton
            isActive={type === 'message'}>
            메세지함
          </S.TabButton>
        </S.Header>
        {!isButtonGroupEnabled && (
          <S.ButtonGroup>
            <S.LeftButtons>
              <S.BlueButton
                as='button'
                disabled={!isSmsButtonEnabled}
                onClick={() => handleSmsButtonClick()}
              >
                <img src={sms} alt='sms icon' />
                SMS보내기
              </S.BlueButton>
            </S.LeftButtons>
            <S.RightButtons>
              <S.DownloadContainer>
                <S.DropdownButton onClick={toggleDropdown}>
                  {selectedMonth}월 <img src={dropdwon} alt='dropdown icon' />
                </S.DropdownButton>
                {isDropdownOpen && (
                  <S.DropdownList>
                    {months?.map(({ month }) => (
                      <S.DropdownItem
                        key={month}
                        onClick={() => handleMonthSelect(month)}
                      >
                        {month}월
                      </S.DropdownItem>
                    ))}
                  </S.DropdownList>
                )}
                <S.FileDownloadButton onClick={() => ExcelButton()}>
                  출결 문서 다운
                </S.FileDownloadButton>
              </S.DownloadContainer>
              <S.EditButton onClick={toggleEditMode} $isEditMode={isEditMode}>
                {isEditMode ? '저장' : '편집'}
              </S.EditButton>
            </S.RightButtons>
          </S.ButtonGroup>
        )}
        {isTableOpen ? (
          <AttendanceTable
            selectedMonth={selectedMonth}
            isEditMode={isEditMode}
            setStudentData={(data) => {
              setSelectedStudent(data);
            }}
            setUpdatedStudents={(data) => {
              setUpdatedStudents(data);
            }}
          />
        ) : (
          <>
            <S.DefaultImageWrapper>
              <S.DefaultImage src={defaultImg} />
              <S.DefaultText>
                클래스를 추가해 자유롭게 관리하세요 !
              </S.DefaultText>
            </S.DefaultImageWrapper>
          </>
        )}
      </S.Container>
    </ManageLayout>
  );
}

export default Attendance;
