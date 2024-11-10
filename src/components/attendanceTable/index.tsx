import { useEffect, useState } from 'react';
import * as S from './AttendanceTable.styles';
import type { AttendanceTableProps } from './AttendanceTable.types';
import search from '@/assets/attendanceTable/search.svg';
import paginationLeft from '@/assets/attendanceTable/paginationLeft.svg';
import paginationRight from '@/assets/attendanceTable/paginationRight.svg';
import circle from '@/assets/attendanceTable/circle.svg';
import triangle from '@/assets/attendanceTable/triangle.svg';
import absent from '@/assets/attendanceTable/absent.svg';

interface AttendanceRecord {
  date: string;
  status: string;
}

interface Student {
  name: string;
  attendance: AttendanceRecord[];
}

const mockData: Student[] = [
  {
    name: '최준영',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '출석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
  {
    name: '심유정',
    attendance: [
      { date: '11/01', status: '출석' },
      { date: '11/02', status: '지각' },
      { date: '11/03', status: '결석' },
      { date: '11/04', status: '출석' },
      { date: '11/05', status: '출석' },
      { date: '11/06', status: '출석' },
      { date: '11/07', status: '출석' },
      { date: '11/08', status: '출석' },
      { date: '11/09', status: '출석' },
      { date: '11/10', status: '출석' },
      { date: '11/11', status: '출석' },
      { date: '11/12', status: '출석' },
      { date: '11/13', status: '결석' },
      { date: '11/14', status: '출석' },
      { date: '11/15', status: '출석' },
      { date: '11/16', status: '출석' },
      { date: '11/17', status: '출석' },
      { date: '11/18', status: '결석' },
      { date: '11/19', status: '출석' },
      { date: '11/20', status: '출석' },
      { date: '11/21', status: '출석' },
      { date: '11/22', status: '출석' },
      { date: '11/23', status: '지각' },
      { date: '11/24', status: '출석' },
      { date: '11/25', status: '출석' },
      { date: '11/26', status: '결석' },
      { date: '11/27', status: '출석' },
      { date: '11/28', status: '출석' },
      { date: '11/29', status: '출석' },
      { date: '11/30', status: '출석' },
    ],
  },
];

function AttendanceTable({ selectedMonth }: AttendanceTableProps) {
  const [students, setStudents] = useState<Student[]>(mockData);
  const [currentDate, setCurrentDate] = useState(new Date());

  useEffect(() => {
    if (selectedMonth !== currentDate.getMonth() + 1) {
      const newDate = new Date();
      newDate.setMonth(selectedMonth - 1, 1);
      setCurrentDate(newDate);
    }
  }, [selectedMonth]);

  const calculateWeekDates = (currentDate: Date) => {
    const weekDates = [];
    const dayOfWeek = currentDate.getDay();
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

      weekDates.push(`${month}/${formattedDay}${dayLabel}`);
    }

    return weekDates;
  };

  const weekDates = calculateWeekDates(currentDate);

  const handlePrevWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() - 7);
    setCurrentDate(newDate);
  };

  const handleNextWeek = () => {
    const newDate = new Date(currentDate);
    newDate.setDate(currentDate.getDate() + 7);
    setCurrentDate(newDate);
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
          <S.SearchInput placeholder='이름검색' />
          <S.SearchIcon src={search} alt='search icon' />
        </S.SearchContainer>
        <S.ArrowButton
          src={paginationLeft}
          alt='Previous Week'
          onClick={handlePrevWeek}
        />
        {weekDates.map((date, index) => (
          <S.PaginationItem key={index}>{date}</S.PaginationItem>
        ))}
        <S.ArrowButton
          src={paginationRight}
          alt='Next Week'
          onClick={handleNextWeek}
        />
      </S.TableHeader>
      <S.TableBody>
        {mockData.map((student) => (
          <S.TableRow key={student.name}>
            <S.StudentName>
              <S.CheckBox type='checkbox' />
              {student.name}
            </S.StudentName>
            <S.Blank />
            {weekDates.map((date) => {
              const attendanceRecord = student.attendance.find(
                (record) => record.date === date.slice(0, 5)
              );

              let statusIcon;
              switch (attendanceRecord?.status) {
                case '출석':
                  statusIcon = circle;
                  break;
                case '지각':
                  statusIcon = triangle;
                  break;
                case '결석':
                  statusIcon = absent;
                  break;
                default:
                  statusIcon = circle;
              }

              return (
                <S.PaginationItem key={date}>
                  <S.StatusIcon
                    src={statusIcon}
                    alt={attendanceRecord?.status}
                    onClick={() => handleStatusClick(student.name, date)}
                  />
                </S.PaginationItem>
              );
            })}
            <S.Blank />
          </S.TableRow>
        ))}
      </S.TableBody>
    </S.Table>
  );
}

export default AttendanceTable;
