import React, { useState, useEffect } from 'react';
import * as S from './Attendance.styles';
import AttendanceTable from '@/components/attendanceTable';
import ManageLayout from '@/components/layout/managelayout';
import dropdwon from '@/assets/dropdown.svg';

function Attendance() {
  const currentMonth = new Date().getMonth() + 1;
  const months = Array.from({ length: currentMonth }, (_, i) => i + 1);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(currentMonth);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMonthSelect = (month: number) => {
    setSelectedMonth(month);
    setIsDropdownOpen(false);
  };

  return (
    <ManageLayout>
      <S.Container>
        <p>학생관리 {'>'} 1학년 {'>'} A반</p>
        <S.AttendanceTitle>학생 출결 관리</S.AttendanceTitle>
        <S.ButtonGroup>
          <S.LeftButtons>
            <button>SMS 보내기</button>
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
                    <S.DropdownItem key={month} onClick={() => handleMonthSelect(month)}>
                      {month}월
                    </S.DropdownItem>
                  ))}
                </S.DropdownList>
              )}
              <S.FileDownloadButton>출결 문서 다운</S.FileDownloadButton>
            </S.DownloadContainer>
            <button>편집</button>
          </S.RightButtons>
        </S.ButtonGroup>
        <AttendanceTable />
      </S.Container>
    </ManageLayout>
  )
}

export default Attendance;