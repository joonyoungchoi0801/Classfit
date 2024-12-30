import { useState } from 'react';
import * as S from './Calendar.styles';
import leftIcon from '@/assets/calendar/left.svg';
import rightIcon from '@/assets/calendar/right.svg';

const days = ['일', '월', '화', '수', '목', '금', '토'];

interface Schedule {
  id: number;
  title: string;
  start: string;
  end: string;
}

const schedules: Schedule[] = [
  {
    id: 1,
    title: '13:00 잇타 중3 수학 직보',
    start: '2024-12-16',
    end: '2024-12-17',
  },
];

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const calendarWidth = 'calc(100vw - 44rem)';
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const prevMonthDays = new Date(year, month, 0).getDate();

  const prevDays = Array.from(
    { length: firstDayOfMonth },
    (_, i) => prevMonthDays - firstDayOfMonth + i + 1
  );
  const currentDays = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const remainingDays = 35 - (prevDays.length + currentDays.length);
  const nextDays = Array.from({ length: remainingDays }, (_, i) => i + 1);

  const calendarDays = [...prevDays, ...currentDays, ...nextDays];

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleToday = () => {
    setCurrentDate(new Date());
  };

  const getScheduleBarStyle = (schedule: Schedule, day: number) => {
    const scheduleStart = new Date(schedule.start).getTime();
    const scheduleEnd = new Date(schedule.end).getTime();
    const currentDay = new Date(year, month, day).getTime();
    const totalDays = (scheduleEnd - scheduleStart) / (1000 * 60 * 60 * 24) + 1;

    const extractedWidth = parseFloat(calendarWidth.replace(/[^0-9.-]/g, ''));
    const dayWidth = extractedWidth / 7;

    if (currentDay >= scheduleStart && currentDay <= scheduleEnd) {
      const left = new Date(schedule.start).getDay() * dayWidth;
      const width = totalDays * dayWidth;

      return {
        left: `${left}%`,
        width: `${width}%`,
      };
    }

    return { display: 'none' };
  };

  return (
    <S.CalendarContainer>
      <S.CalendarHeader>
        <S.MonthButton src={leftIcon} alt='left' onClick={handlePrevMonth} />
        <S.CalendarLabel>
          {year}.{month + 1}
        </S.CalendarLabel>
        <S.MonthButton src={rightIcon} alt='right' onClick={handleNextMonth} />
        <S.CalendarButton onClick={handleToday}>오늘</S.CalendarButton>
      </S.CalendarHeader>
      <S.CalendarGrid>
        {calendarDays.map((day, index) => (
          <S.CalendarDay key={index}>
            {index < 7 && <S.CalendarDate>{days[index]}</S.CalendarDate>}
            <S.CalendarDate>{day}</S.CalendarDate>

            {schedules.map((schedule) => {
              const barStyle = getScheduleBarStyle(schedule, day);
              return (
                <S.ScheduleBar key={schedule.id} style={barStyle}>
                  {schedule.title}
                </S.ScheduleBar>
              );
            })}
          </S.CalendarDay>
        ))}
      </S.CalendarGrid>
    </S.CalendarContainer>
  );
}

export default Calendar;
