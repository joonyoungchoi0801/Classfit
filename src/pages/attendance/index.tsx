import React, { useState } from 'react';
import * as S from './Attendance.styles';
import AttendanceTable from '@/components/attendanceTable';
import ManageLayout from '@/components/layout/managelayout';
import dropdwon from '@/assets/dropdown.svg';
import { AttendanceTableProps } from '@/components/attendanceTable/AttendanceTable.types';
import { useNavigate } from 'react-router-dom';
import Path from '@/components/path';
import * as XLSX from 'xlsx';

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

function Attendance() {
  const currentMonth = new Date().getMonth() + 1;
  const months = Array.from({ length: currentMonth }, (_, i) => i + 1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const navigate = useNavigate();

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

  return (
    <ManageLayout>
      <S.Container>
        <Path />
        <S.AttendanceTitle>학생 출결 관리</S.AttendanceTitle>
        <S.ButtonGroup>
          <S.LeftButtons>
            <button onClick={() => navigate('./sms')}>SMS 보내기</button>
            <button>통계</button>
          </S.LeftButtons>
          <S.RightButtons>
            <S.DownloadContainer>
              <S.DropdownButton onClick={toggleDropdown}>
                {selectedMonth}월 <img src={dropdwon} alt='dropdown icon' />
              </S.DropdownButton>
              {isDropdownOpen && (
                <S.DropdownList>
                  {months.map((month) => (
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
            <button>편집</button>
          </S.RightButtons>
        </S.ButtonGroup>
        <AttendanceTable selectedMonth={selectedMonth} />
      </S.Container>
    </ManageLayout>
  );
}

export default Attendance;
