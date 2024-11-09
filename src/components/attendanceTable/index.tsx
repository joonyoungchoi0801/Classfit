import { useEffect, useState } from 'react';
import * as S from './AttendanceTable.styles';
import type { AttendanceTableProps } from './AttendanceTable.types';
import search from '@/assets/attendanceTable/search.svg';
import paginationLeft from '@/assets/attendanceTable/paginationLeft.svg';
import paginationRight from '@/assets/attendanceTable/paginationRight.svg';

function AttendanceTable({ selectedMonth }: AttendanceTableProps) {
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
      const dayLabel = ['(일)', '(월)', '(화)', '(수)', '(목)', '(금)', '(토)'][date.getDay()];

      weekDates.push(`${month}/${day}${dayLabel}`);
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

  return (
    <S.TableHeader>
      <S.SeachContainer>
        <S.SearchIcon src={search} alt='search icon' />
        <S.SearchInput placeholder='이름검색' />
        <S.Pagination>
          <S.ArrowButton src={paginationLeft} alt='Previous Week' onClick={handlePrevWeek} />
          {weekDates.map((date, index) =>
            <S.PaginationItem key={index}>{date}</S.PaginationItem>
          )}
          <S.ArrowButton src={paginationRight} alt='Next Week' onClick={handleNextWeek} />
        </S.Pagination>
      </S.SeachContainer>
    </S.TableHeader>
  );
}

export default AttendanceTable;