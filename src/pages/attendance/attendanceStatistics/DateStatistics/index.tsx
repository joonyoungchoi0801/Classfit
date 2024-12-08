import * as S from './DateStatistics.styles';
import paginationLeft from '@/assets/attendanceTable/paginationLeft.svg';
import paginationRight from '@/assets/attendanceTable/paginationRight.svg';
import { useState } from 'react';

const getLastSixMonths = (offset = 0) => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - offset);
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();
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

function DateStatistics() {
  const [monthOffset, setMonthOffset] = useState(0);
  const { months, currentMonth } = getLastSixMonths(monthOffset);

  const handlePrevMonth = () => {
    if (monthOffset < 5) {
      setMonthOffset(monthOffset + 1);
    }
  };

  const handleNextMonth = () => {
    if (monthOffset > 0) {
      setMonthOffset(monthOffset - 1);
    }
  };

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>통계</S.Title>
        <S.ArrowButton
          src={paginationLeft}
          alt='Previous Month'
          onClick={handlePrevMonth}
        />
        <S.PaginationItem>
          {currentMonth}월
        </S.PaginationItem>
        <S.ArrowButton
          src={paginationRight}
          alt='Next Week'
          onClick={handleNextMonth}
        />
      </S.TitleWrapper>


    </S.Container>
  );
}

export default DateStatistics;