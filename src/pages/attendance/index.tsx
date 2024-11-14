import { useState } from 'react';
import * as S from './Attendance.styles';
import AttendanceTable from '@/components/attendanceTable';
import ManageLayout from '@/components/layout/managelayout';
import dropdwon from '@/assets/buttonIcon/dropdown.svg';
import sms from '@/assets/buttonIcon/sms.svg';
import statistics from '@/assets/buttonIcon/statistics.svg';
import Path from '@/components/path';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import * as XLSX from 'xlsx';
import mockData from '@/constants/tabledata';

interface AttendanceRecord {
  date: string;
  status: string;
}

interface Student {
  name: string;
  attendance: AttendanceRecord[];
}

function Attendance() {
  const currentMonth = new Date().getMonth() + 1;
  const months = Array.from({ length: currentMonth }, (_, i) => i + 1).slice(
    Math.max(0, currentMonth - 6)
  );
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);
  const [isEditMode, setIsEditMode] = useState(false);
  const { grade, class: classParam } = useParams();

  const navigate = useNavigate();
  const location = useLocation();
  const isSmsButtonEnabled = !!classParam || location.pathname === '/manage/attendance/all';

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMonthSelect = (month: number) => {
    setSelectedMonth(month);
    setIsDropdownOpen(false);
  };

  const downloadExcel = (data: Student[]) => {
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

    const worksheet = XLSX.utils.aoa_to_sheet(worksheetData);

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

  const toggleEditMode = () => {
    setIsEditMode((prevMode) => !prevMode);
  };

  return (
    <ManageLayout>
      <S.Container>
        <Path />
        <S.AttendanceTitle>학생출결관리</S.AttendanceTitle>
        <S.ButtonGroup>
          <S.LeftButtons>
            <S.BlueButton
              as='button'
              disabled={!isSmsButtonEnabled}
              onClick={() => navigate('./sms')}
            >
              <img src={sms} alt='sms icon' />
              SMS보내기
            </S.BlueButton>
            <S.WhiteButton>
              <img src={statistics} alt='statistics icon' />
              통계
            </S.WhiteButton>
          </S.LeftButtons>
          <S.RightButtons>
            <S.DownloadContainer>
              <S.DropdownButton onClick={toggleDropdown}>
                {selectedMonth}월 <img src={dropdwon} alt='dropdown icon' />
              </S.DropdownButton>
              {isDropdownOpen && (
                <S.DropdownList>
                  {months?.map((month) => (
                    <S.DropdownItem
                      key={month}
                      onClick={() => handleMonthSelect(month)}
                    >
                      {month}월
                    </S.DropdownItem>
                  ))}
                </S.DropdownList>
              )}
              <S.FileDownloadButton onClick={() => downloadExcel(mockData)}>
                출결 문서 다운
              </S.FileDownloadButton>
            </S.DownloadContainer>
            <S.EditButton onClick={toggleEditMode} $isEditMode={isEditMode}>
              {isEditMode ? '저장' : '편집'}
            </S.EditButton>
          </S.RightButtons>
        </S.ButtonGroup>
        <AttendanceTable
          selectedMonth={selectedMonth}
          isEditMode={isEditMode}
        />
      </S.Container>
    </ManageLayout>
  );
}

export default Attendance;
