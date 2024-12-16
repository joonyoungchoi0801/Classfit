import * as S from './MemberStatistics.styles';
import { useState, useEffect } from 'react';
import paginationLeft from '@/assets/attendanceTable/paginationLeft.svg';
import paginationRight from '@/assets/attendanceTable/paginationRight.svg';
import dropdwon from '@/assets/buttonIcon/dropdown.svg';

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

function MemberStatistics() {
  const [monthOffset, setMonthOffset] = useState(0);
  const { months, currentMonth } = getLastSixMonths(monthOffset);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const students = [{ name: "김예은" }, { name: "방예원" }, { name: "백재혁" }, { name: "심유정" }, { name: "손화영" }];

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

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
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
              {students.map((item, index) => (
                <S.DropdownItem
                  key={index}
                >
                  {item.name}
                </S.DropdownItem>
              ))}
            </S.DropdownList>
          )}
          <S.ColumnContainer>
            <S.ColumnTitle>출석</S.ColumnTitle>
            <S.ColumnTitle>결석</S.ColumnTitle>
            <S.ColumnTitle>지각</S.ColumnTitle>
            <S.ColumnTitle>보강</S.ColumnTitle>
          </S.ColumnContainer>
        </S.TableHeader>

        <S.StatisticsContainer>
          <S.RowTitle>김예은</S.RowTitle>
          <S.ValueContainer>
            <S.Value>27</S.Value>
            <S.Value>2</S.Value>
            <S.Value>-</S.Value>
            <S.Value>2</S.Value>
          </S.ValueContainer>
        </S.StatisticsContainer>
        <S.StatisticsContainer>
          <S.RowTitle>방예원</S.RowTitle>
          <S.ValueContainer>
            <S.Value>30</S.Value>
            <S.Value>2</S.Value>
            <S.Value>-</S.Value>
            <S.Value>2</S.Value>
          </S.ValueContainer>
        </S.StatisticsContainer>
        <S.StatisticsContainer>
          <S.RowTitle>백재혁</S.RowTitle>
          <S.ValueContainer>
            <S.Value>27</S.Value>
            <S.Value>2</S.Value>
            <S.Value>-</S.Value>
            <S.Value>2</S.Value>
          </S.ValueContainer>
        </S.StatisticsContainer>
        <S.StatisticsContainer>
          <S.RowTitle>심유정</S.RowTitle>
          <S.ValueContainer>
            <S.Value>28</S.Value>
            <S.Value>2</S.Value>
            <S.Value>-</S.Value>
            <S.Value>2</S.Value>
          </S.ValueContainer>
        </S.StatisticsContainer>
        <S.StatisticsContainer>
          <S.RowTitle>손화영</S.RowTitle>
          <S.ValueContainer>
            <S.Value>27</S.Value>
            <S.Value>2</S.Value>
            <S.Value>-</S.Value>
            <S.Value>2</S.Value>
          </S.ValueContainer>
        </S.StatisticsContainer>
      </S.Table>
    </S.Container>
  );
}

export default MemberStatistics;