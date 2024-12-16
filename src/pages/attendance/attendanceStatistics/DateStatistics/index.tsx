import * as S from './DateStatistics.styles';
import paginationLeft from '@/assets/attendanceTable/paginationLeft.svg';
import paginationRight from '@/assets/attendanceTable/paginationRight.svg';
import dropdwon from '@/assets/buttonIcon/dropdown.svg';

import { useState, useEffect } from 'react';

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

// 선택한 월의 첫날부터 날짜와 요일을 계산하는 함수
const getDatesInMonth = (year: number, month: number) => {
  const firstDayOfMonth = new Date(year, month - 1, 1); // 해당 월의 첫째 날
  const lastDayOfMonth = new Date(year, month, 0); // 해당 월의 마지막 날

  const daysInMonth = [];
  let currentDate = firstDayOfMonth;

  while (currentDate <= lastDayOfMonth) {
    // getDay()는 일요일을 0으로 반환하므로, 이를 조정하여 월요일을 0, 일요일을 6으로 설정
    const weekday = (currentDate.getDay() === 0 ? 6 : currentDate.getDay() - 1);

    daysInMonth.push({
      date: currentDate.getDate(),
      weekday, // 수정된 요일 값 (월요일=0, 일요일=6)
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return daysInMonth;
};

function DateStatistics() {
  const [monthOffset, setMonthOffset] = useState(0);
  const { months, currentMonth } = getLastSixMonths(monthOffset);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [datesInMonth, setDatesInMonth] = useState<{ date: number, weekday: number }[]>([]);
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 (7일씩 끊어서)

  const subclass = [{ class: "1학년 A반" }, { class: "2학년 A반" }];

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

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * 7 < datesInMonth.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const currentMonthData = new Date();
    const currentYear = currentMonthData.getFullYear();
    setDatesInMonth(getDatesInMonth(currentYear, currentMonth));
    setCurrentPage(0); // 월이 변경되면 페이지를 1일부터 보도록 설정
  }, [currentMonth]);

  // 현재 페이지에 해당하는 7일씩 끊어서 날짜들만 반환
  const getCurrentWeekDates = () => {
    const startIdx = currentPage * 7;
    const endIdx = startIdx + 7;
    return datesInMonth.slice(startIdx, endIdx);
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
          alt='Next Month'
          onClick={handleNextMonth}
        />
      </S.TitleWrapper>

      <S.Table>
        <S.TableHeader>
          <S.DropdownClass onClick={toggleDropdown}>
            <S.Placeholder>구분</S.Placeholder>
            <S.DropdownButton src={dropdwon} alt='dropdown icon' />
          </S.DropdownClass>
          {isDropdownOpen && (
            <S.DropdownList>
              {subclass.map((item, index) => (
                <S.DropdownItem
                  key={index}
                >
                  {item.class}
                </S.DropdownItem>
              ))}
            </S.DropdownList>
          )}
          <S.PaginationContainer>
            <S.ArrowButton
              src={paginationLeft}
              alt='Previous Week'
              onClick={handlePrevPage}
            />
            {getCurrentWeekDates().map((dateInfo, index) => (
              <S.DatePaginationItem key={index}>
                {`${currentMonth}/${dateInfo.date}(${['월', '화', '수', '목', '금', '토', '일'][dateInfo.weekday]})`}
              </S.DatePaginationItem>
            ))}
            <S.ArrowButton
              src={paginationRight}
              alt='Next Week'
              onClick={handleNextPage}
            />
          </S.PaginationContainer>
        </S.TableHeader>

        <S.StatisticsContainer>
          <S.RowTitle>출석</S.RowTitle>
          <S.ValueContainer>
            <S.Value>27</S.Value>
            <S.Value>30</S.Value>
            <S.Value>30</S.Value>
            <S.Value>28</S.Value>
            <S.Value>25</S.Value>
            <S.Value>30</S.Value>
            <S.Value>30</S.Value>
          </S.ValueContainer>
        </S.StatisticsContainer>
        <S.StatisticsContainer>
          <S.RowTitle>결석</S.RowTitle>
          <S.ValueContainer>
            <S.Value>3</S.Value>
            <S.Value>0</S.Value>
            <S.Value>0</S.Value>
            <S.Value>2</S.Value>
            <S.Value>5</S.Value>
            <S.Value>0</S.Value>
            <S.Value>0</S.Value>
          </S.ValueContainer>
        </S.StatisticsContainer>
        <S.StatisticsContainer>
          <S.RowTitle>보강</S.RowTitle>
          <S.ValueContainer>
            <S.Value>1</S.Value>
            <S.Value>2</S.Value>
            <S.Value>2</S.Value>
            <S.Value>5</S.Value>
            <S.Value>0</S.Value>
            <S.Value>0</S.Value>
            <S.Value>0</S.Value>
          </S.ValueContainer>
        </S.StatisticsContainer>
        <S.StatisticsContainer>
          <S.RowTitle>기타</S.RowTitle>
          <S.ValueContainer>
            <S.Value>-</S.Value>
            <S.Value>-</S.Value>
            <S.Value>-</S.Value>
            <S.Value>-</S.Value>
            <S.Value>-</S.Value>
            <S.Value>-</S.Value>
            <S.Value>-</S.Value>
          </S.ValueContainer>
        </S.StatisticsContainer>
      </S.Table>
    </S.Container>
  );
}

export default DateStatistics;
