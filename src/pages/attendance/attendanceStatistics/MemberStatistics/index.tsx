import * as S from './MemberStatistics.styles';
import { useState, useEffect } from 'react';
import paginationLeft from '@/assets/attendanceTable/paginationLeft.svg';
import paginationRight from '@/assets/attendanceTable/paginationRight.svg';
import dropdwon from '@/assets/buttonIcon/dropdown.svg';
import { statisticsMemberData } from '@/types/statistics.type';
import { getStatisticsMember } from '@/api/statisticsAPI';
import { formatDateToISO } from '@/utils/formatDate';
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

const getCurrentMonthDates = (offset = 0) => {
  const currentDate = new Date();
  currentDate.setMonth(currentDate.getMonth() - offset);
  const currentMonth = currentDate.getMonth() + 1;
  const currentYear = currentDate.getFullYear();

  // 시작일은 해당 월의 1일
  const startDate = new Date(currentYear, currentMonth - 1, 1);
  // 종료일은 해당 월의 마지막 날
  const endDate = new Date(currentYear, currentMonth, 0);

  return {
    startDate: formatDateToISO(`${currentMonth}/01`),
    endDate: formatDateToISO(`${currentMonth}/${endDate.getDate()}`),
  };
};

function MemberStatistics() {
  const [monthOffset, setMonthOffset] = useState(0);
  const { months, currentMonth } = getLastSixMonths(monthOffset);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [statisticsData, setStatisticsData] = useState<statisticsMemberData[]>(
    []
  );
  const [selectedStudent, setSelectedStudent] = useState<string | boolean>(
    false
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [studentId, setStudentId] = useState<number | null>(null); // 학생 ID 상태 추가
  const [status, setStatus] = useState<'PRESENT' | 'ABSENT' | 'LATE' | null>(
    null
  ); // 출결 상태 상태 추가

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

  const handleSelectStudent = (student: statisticsMemberData) => {
    setSelectedStudent(student.name);
    setIsDropdownOpen(false);
  };

  const handleOpenModal = (
    student: statisticsMemberData,
    status: 'PRESENT' | 'ABSENT' | 'LATE'
  ) => {
    setStatus(status); // 상태 설정
    setStudentId(student.studentId);
    setIsModalOpen(true); // 모달 열기
  };

  const handleCloseModal = () => {
    setIsModalOpen(false); // 모달 닫기
    setStatus(null); // 상태 초기화
  };

  useEffect(() => {
    const { startDate, endDate } = getCurrentMonthDates(monthOffset);

    const fetchStatisticsMember = async () => {
      try {
        const response = await getStatisticsMember(startDate, endDate);
        setStatisticsData(response.data.data);
      } catch (error) {
        console.error('Failed to fetch statistics data:', error);
      }
    };
    fetchStatisticsMember();
  }, [selectedStudent, currentMonth, monthOffset]);

  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>통계</S.Title>
        <S.ArrowButton
          src={paginationLeft}
          alt='Previous Month'
          onClick={handlePrevMonth}
        />
        <S.PaginationItem>{currentMonth}월</S.PaginationItem>
        <S.ArrowButton
          src={paginationRight}
          alt='Next Month'
          onClick={handleNextMonth}
        />
      </S.TitleWrapper>

      <S.Table>
        <S.TableHeader>
          <S.DropdownClass onClick={toggleDropdown}>
            <S.Placeholder>{selectedStudent || '구분'}</S.Placeholder>
            <S.DropdownButton src={dropdwon} alt='dropdown icon' />
          </S.DropdownClass>
          {isDropdownOpen && (
            <S.DropdownList>
              {statisticsData.map((item, index) => (
                <S.DropdownItem
                  key={index}
                  onClick={() => handleSelectStudent(item)}
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
          </S.ColumnContainer>
        </S.TableHeader>

        <S.StatisticsContainer>
          {selectedStudent
            ? // 선택된 학생만 표시
              statisticsData
                .filter((item) => item.name === selectedStudent)
                .map((item) => (
                  <S.Row key={item.name}>
                    <S.RowTitle>{item.name}</S.RowTitle>
                    <S.ValueContainer>
                      <S.Value onClick={() => handleOpenModal(item, 'PRESENT')}>
                        {item.present}
                      </S.Value>
                      <S.Value onClick={() => handleOpenModal(item, 'ABSENT')}>
                        {item.absent}
                      </S.Value>
                      <S.Value onClick={() => handleOpenModal(item, 'LATE')}>
                        {item.late}
                      </S.Value>
                    </S.ValueContainer>
                  </S.Row>
                ))
            : // 모든 학생의 데이터 표시
              statisticsData.map((item) => (
                <S.Row key={item.name}>
                  <S.RowTitle>{item.name}</S.RowTitle>
                  <S.ValueContainer>
                    <S.Value onClick={() => handleOpenModal(item, 'PRESENT')}>
                      {item.present}
                    </S.Value>
                    <S.Value onClick={() => handleOpenModal(item, 'ABSENT')}>
                      {item.absent}
                    </S.Value>
                    <S.Value onClick={() => handleOpenModal(item, 'LATE')}>
                      {item.late}
                    </S.Value>
                  </S.ValueContainer>
                </S.Row>
              ))}
        </S.StatisticsContainer>
      </S.Table>

      <AttendanceModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        month={currentMonth}
        studentId={studentId!}
        status={status!}
      />
    </S.Container>
  );
}

export default MemberStatistics;
