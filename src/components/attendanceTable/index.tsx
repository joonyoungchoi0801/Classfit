import { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import * as S from './AttendanceTable.styles';
import type { AttendanceTableProps } from './AttendanceTable.types';
import paginationLeft from '@/assets/attendanceTable/paginationLeft.svg';
import paginationRight from '@/assets/attendanceTable/paginationRight.svg';
import circle_Black from '@/assets/attendanceTable/circle_Black.svg';
import circle_Blue from '@/assets/attendanceTable/circle_Blue.svg';
import triangle_Black from '@/assets/attendanceTable/triangle_Black.svg';
import triangle_Blue from '@/assets/attendanceTable/triangle_Blue.svg';
import absent_Black from '@/assets/attendanceTable/absent_Black.svg';
import absent_Blue from '@/assets/attendanceTable/absent_Blue.svg';
import SelectedCheckBoxIcon from '@/assets/info/selectedCheckBox.svg';
import CheckBoxIcon from '@/assets/info/checkBox.svg';

import { AxiosResponse } from 'axios';
import { getAllAttendance, getAllAttendanceDetail } from '@/api/attendanceAPI';
import { AttendanceResponse, StudentData } from '@/types/attendance.type';
import StudentInfoModal from '../modal/studentInfoModal';
import useClassStore from '@/store/classStore';

function AttendanceTable({
  selectedMonth,
  isEditMode,
  setStudentData,
}: AttendanceTableProps) {
  const [keyword, setKeyword] = useState('');
  const [originalStudents, setOriginalStudents] = useState<StudentData[]>([]);
  const [students, setStudents] = useState<StudentData[]>([]);
  const [currentDate, setCurrentDate] = useState(new Date());
  const [isAllChecked, setIsAllChecked] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState<string>('');
  const [weekOffset, setWeekOffset] = useState(0);
  const [page, setPage] = useState(0);
  const { grade, class: className } = useParams<{
    grade?: string;
    class?: string;
  }>();

  const { mainClassId, subClassId } = useClassStore();

  const location = useLocation();
  const url = location.pathname;

  useEffect(() => {
    const fetchAttendanceData = async () => {
      try {
        if (url === '/manage/attendance/all') {
          const response: AxiosResponse<AttendanceResponse> =
            await getAllAttendance(weekOffset, page);
          const attendanceData = response.data;
          if (attendanceData.statusCode === 200) {
            const formattedData = attendanceData.data.map((student) => ({
              ...student,
              isChecked: false,
              attendance: student.attendance.map((record) => ({
                ...record,
                status: record.status || '출석',
              })),
            }));
            setOriginalStudents(formattedData);
            setStudents(formattedData);
          } else {
            console.error('Error:', attendanceData.error.message);
          }
        } else if (!!grade && !!className) {
          const response: AxiosResponse<AttendanceResponse> =
            await getAllAttendanceDetail(
              weekOffset,
              page,
              mainClassId,
              subClassId
            );
          const attendanceData = response.data;
          if (attendanceData.statusCode === 200) {
            const formattedData = attendanceData.data.map((student) => ({
              ...student,
              isChecked: false,
              attendance: student.attendance.map((record) => ({
                ...record,
                status: record.status || '출석',
              })),
            }));
            setOriginalStudents(formattedData);
            setStudents(formattedData);
          } else {
            console.error('Error:', attendanceData.error.message);
          }
        }
      } catch (error) {
        console.error('Error fetching attendance data:', error);
      }
    };
    fetchAttendanceData();
  }, [weekOffset, page, url]);

  const getIconByStatus = (status: string, isEditMode: boolean) => {
    if (status === '출석') return isEditMode ? circle_Black : circle_Blue;
    if (status === '지각') return isEditMode ? triangle_Black : triangle_Blue;
    if (status === '결석') return isEditMode ? absent_Black : absent_Blue;
    return circle_Blue;
  };

  useEffect(() => {
    if (selectedMonth !== currentDate.getMonth() + 1) {
      const newDate = new Date();
      newDate.setMonth(selectedMonth - 1, 1);
      setCurrentDate(newDate);
    }
  }, [selectedMonth]);

  useEffect(() => {
    const filteredStudents = originalStudents.filter((student) =>
      student.name.includes(keyword)
    );
    setStudents(filteredStudents);
  }, [keyword]);

  useEffect(() => {
    const checkedStudents = students.filter((student) => student.isChecked);
    setStudentData(checkedStudents);
  }, [students]);

  const handleKeywordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setKeyword(e.target.value);
  };

  const handleAllCheck = () => {
    setIsAllChecked(!isAllChecked);
    setStudents(
      students.map((student) => ({
        ...student,
        isChecked: !isAllChecked,
      }))
    );
  };

  const handleStudentCheck = (name: string) => {
    setStudents((prevStudents) => {
      const updatedStudents = prevStudents.map((student) =>
        student.name === name
          ? { ...student, isChecked: !student.isChecked }
          : student
      );

      const allChecked = updatedStudents.every((student) => student.isChecked);
      setIsAllChecked(allChecked);

      return updatedStudents;
    });
  };

  const calculateWeekDates = (currentDate: Date) => {
    const weekDates = [];
    const dayOfWeek = currentDate.getDay() === 0 ? 7 : currentDate.getDay();
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - dayOfWeek + 1);

    for (let i = 0; i < 7; i++) {
      const date = new Date(startOfWeek);
      date.setDate(startOfWeek.getDate() + i);

      const month = date.getMonth() + 1;
      const day = date.getDate();

      const formattedDay = day < 10 ? `0${day}` : `${day}`;
      const dayLabel = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'][
        date.getDay()
      ];

      const isToday = date.toDateString() === new Date().toDateString();

      weekDates.push({ date: `${month}/${formattedDay}${dayLabel}`, isToday });
    }

    return weekDates;
  };

  const weekDates = calculateWeekDates(currentDate);

  const handlePrevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
    setWeekOffset(weekOffset - 1);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
    setWeekOffset(weekOffset + 1);
  };

  const handleStudentNameClick = (name: string) => {
    setSelectedStudent(name);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleStatusClick = (studentName: string, date: string) => {
    setStudents((prevStudents) =>
      prevStudents.map((student) =>
        student.name === studentName
          ? {
              ...student,
              attendance: student.attendance.map((attendanceRecord) =>
                attendanceRecord.date === date
                  ? {
                      ...attendanceRecord,
                      status:
                        attendanceRecord.status === '출석'
                          ? '지각'
                          : attendanceRecord.status === '지각'
                            ? '결석'
                            : '출석',
                    }
                  : attendanceRecord
              ),
            }
          : student
      )
    );
  };

  return (
    <S.Table>
      <S.TableHeader>
        <S.SearchContainer>
          <S.CheckBox
            as='img'
            src={isAllChecked ? SelectedCheckBoxIcon : CheckBoxIcon}
            alt='Select All'
            onClick={handleAllCheck}
          />
          <S.SearchInput
            placeholder='이름검색'
            onChange={handleKeywordChange}
          />
        </S.SearchContainer>
        <S.ArrowButton
          src={paginationLeft}
          alt='Previous Week'
          onClick={handlePrevWeek}
        />
        {weekDates.map(({ date, isToday }, index) => (
          <S.PaginationItem
            key={index}
            style={{
              color: isToday ? 'var(--color-blue)' : 'var(--color-black)',
            }}
          >
            {date}
          </S.PaginationItem>
        ))}
        <S.ArrowButton
          src={paginationRight}
          alt='Next Week'
          onClick={handleNextWeek}
        />
      </S.TableHeader>

      <S.TableBody>
        {students.map((student, i) => (
          <S.TableRow key={student.name + i} $isSelected={student.isChecked}>
            <S.StudentName>
              <S.CheckBox
                as='img'
                src={student.isChecked ? SelectedCheckBoxIcon : CheckBoxIcon}
                alt='Check Student'
                onClick={() => handleStudentCheck(student.name)}
              />
              <S.StudentNameText
                onClick={() => handleStudentNameClick(student.name)}
              >
                {student.name}
              </S.StudentNameText>
            </S.StudentName>
            <S.Blank />
            {weekDates.map((date) => {
              const attendanceRecord = student.attendance.find(
                (record) => record.date === date.date.slice(0, 5)
              );
              const statusIcon = getIconByStatus(
                attendanceRecord?.status || '',
                isEditMode
              );

              return (
                <S.PaginationItem key={date.date}>
                  <S.StatusIcon
                    src={statusIcon}
                    alt={attendanceRecord?.status}
                    onClick={() =>
                      handleStatusClick(student.name, date.date.slice(0, 5))
                    }
                  />
                </S.PaginationItem>
              );
            })}
            <S.Blank />
          </S.TableRow>
        ))}
      </S.TableBody>
      {isModalOpen && (
        <StudentInfoModal
          name={selectedStudent}
          gender='여'
          grade={1}
          className='A'
          tags='수학반'
          studentPhone='010-0000-0000'
          parentPhone='010-0000-0000'
          address='서울시'
          detailInfo='서울고 재학'
          counseling=''
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </S.Table>
  );
}

export default AttendanceTable;
