import * as S from './DateStatistics.styles';
import paginationLeft from '@/assets/attendanceTable/paginationLeft.svg';
import paginationRight from '@/assets/attendanceTable/paginationRight.svg';
import dropdwon from '@/assets/buttonIcon/dropdown.svg';
import { getStatisticsDates, getStatisticsDateDetail } from '@/api/statisticsAPI';
import useClassList from '@/hooks/useClassList';
import { useState, useEffect } from 'react';
import { statisticsDateData, statisticsDateDetail } from '@/types/statistics.type';
import formatDateToISO from '@/utils/formatDate';
import AttendanceModal from './AttendanceModal';

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
    const weekday = (currentDate.getDay() === 0 ? 6 : currentDate.getDay() - 1);

    daysInMonth.push({
      date: currentDate.getDate(),
      weekday,
    });
    currentDate.setDate(currentDate.getDate() + 1);
  }

  return daysInMonth;
};

function DateStatistics() {
  const [monthOffset, setMonthOffset] = useState(0);
  const { months, currentMonth } = getLastSixMonths(monthOffset);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedClass, setSelectedClass] = useState({
    mainClass: '',
    subClassId: 0,
    subClassName: ''
  });
  const [datesInMonth, setDatesInMonth] = useState<{ date: number, weekday: number }[]>([]);
  const [currentPage, setCurrentPage] = useState(0); // 현재 페이지 (7일씩 끊어서)
  const { classList } = useClassList();
  const [statisticsData, setStatisticsData] = useState<statisticsDateData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [attendingStudents, setAttendingStudents] = useState<string[]>();
  const [attendanceType, setAttendanceType] = useState<'PRESENT' | 'LATE' | 'ABSENT'>('PRESENT');

  const handleValueClick = async (date: string, type: 'PRESENT' | 'LATE' | 'ABSENT') => {
    try {
      const isoDate = formatDateToISO(date);
      const response = await getStatisticsDateDetail(isoDate, selectedClass.subClassId, type);
      const studentData = response.data.data;

      setAttendingStudents(studentData);
    } catch (error) {
      console.error("Failed to fetch student attendance details:", error);
      setAttendingStudents([]); // 에러 시 빈 데이터 설정
    }

    // 모달 상태 업데이트
    setSelectedDate(date);
    setAttendanceType(type);
    setIsModalOpen(true);
  };


  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

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

  const handleSelectClass = (mainClass: string, subClass: { subClassId: number; subClassName: string }) => {
    setSelectedClass({
      mainClass,
      subClassId: subClass.subClassId,
      subClassName: subClass.subClassName,
    });
    setIsDropdownOpen(false);
  };

  useEffect(() => {
    if (!selectedClass.mainClass || !selectedClass.subClassId) return; // 클래스 선택이 안 됐으면 무시

    const startDate = formatDateToISO(`${currentMonth}/01`); // 현재 월의 1일을 ISO 형식으로 변환
    const endDate = formatDateToISO(`${currentMonth}/${datesInMonth[datesInMonth.length - 1]?.date}`); // 마지막 날을 ISO 형식으로 변환

    const fetchStatisticsDates = async () => {
      try {
        const response = await getStatisticsDates(startDate, endDate, selectedClass.subClassId); // 선택된 SubClass의 ID 전달
        setStatisticsData(response.data.data);
      } catch (error) {
        console.error("Failed to fetch statistics data:", error);
      }
    };

    fetchStatisticsDates();
  }, [selectedClass, currentMonth, datesInMonth, monthOffset]);

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

  const weekDates = getCurrentWeekDates().map((dateInfo) => `${currentMonth}/${dateInfo.date}(${['월', '화', '수', '목', '금', '토', '일'][dateInfo.weekday]})`);

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
            <S.Placeholder>{selectedClass.mainClass ? `${selectedClass.mainClass} ${selectedClass.subClassName}` : '구분'}</S.Placeholder>
            <S.DropdownButton src={dropdwon} alt='dropdown icon' />
          </S.DropdownClass>
          {isDropdownOpen && (
            <S.DropdownList>
              {Object.keys(classList).map((mainClass) => (
                classList[mainClass].map((subClass) => (
                  <S.DropdownItem
                    key={`${mainClass}-${subClass.subClassId}`}
                    onClick={() => handleSelectClass(mainClass, subClass)}
                  >
                    {`${mainClass} ${subClass.subClassName}`}
                  </S.DropdownItem>
                ))
              ))}
            </S.DropdownList>
          )}

          <S.PaginationContainer>
            <S.ArrowButton
              src={paginationLeft}
              alt='Previous Week'
              onClick={handlePrevPage}
            />
            {weekDates.map((date, index) => (
              <S.DatePaginationItem key={index}>
                {date}
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
            <S.Blank />
            {weekDates.map((date) => {
              const [month, day] = date.split('(')[0].split('/').map((str) => parseInt(str, 10));
              const isoDate = formatDateToISO(date);

              const statisticsRecord = statisticsData.find((record) => record.date === isoDate);

              return (
                <S.Value
                  key={date}
                  onClick={() => handleValueClick(date, 'PRESENT')}
                >
                  {statisticsRecord?.present ?? '-'}
                </S.Value>
              );
            })}
            <S.Blank />
          </S.ValueContainer>
        </S.StatisticsContainer>
        <S.StatisticsContainer>
          <S.RowTitle>결석</S.RowTitle>
          <S.ValueContainer>
            <S.Blank />
            {weekDates.map((date) => {
              const [month, day] = date.split('(')[0].split('/').map((str) => parseInt(str, 10));
              const isoDate = `${new Date().getFullYear()}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

              const statisticsRecord = statisticsData.find((record) => record.date === isoDate);

              return (
                <S.Value
                  key={date}
                  onClick={() => handleValueClick(date, 'ABSENT')}
                >
                  {statisticsRecord?.absent ?? '-'}
                </S.Value>
              );
            })}
            <S.Blank />
          </S.ValueContainer>
        </S.StatisticsContainer>
        <S.StatisticsContainer>
          <S.RowTitle>지각</S.RowTitle>
          <S.ValueContainer>
            <S.Blank />
            {weekDates.map((date) => {
              const [month, day] = date.split('(')[0].split('/').map((str) => parseInt(str, 10));
              const isoDate = `${new Date().getFullYear()}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

              const statisticsRecord = statisticsData.find((record) => record.date === isoDate);

              return (
                <S.Value
                  key={date}
                  onClick={() => handleValueClick(date, 'LATE')}
                >
                  {statisticsRecord?.late ?? '-'}
                </S.Value>
              );
            })}
            <S.Blank />
          </S.ValueContainer>
        </S.StatisticsContainer>
      </S.Table>

      <AttendanceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        studentNames={attendingStudents ? attendingStudents.flatMap(student => student) : []}
        type={attendanceType}
        date={selectedDate ?? ''}
      />
    </S.Container>
  );
}

export default DateStatistics;
