import { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import './customcalendar.css';

import * as S from '../Calendar.styles';

import { CalendarEvent, CalendarEventData } from './calendar.type';
import { getCalendarEvent } from '@/api/calendarAPI';
import { useParams } from 'react-router-dom';
import ScheduleRegisterModal from '@/components/modal/scheduleRegisterModal';

const CalendarComponent = () => {
  const { calendarType } = useParams();
  const [eventData, setEventData] = useState<CalendarEvent[]>();
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth() + 1
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<string>(''); // 클릭한 날짜

  useEffect(() => {
    const getCalendarData = async () => {
      const response = await getCalendarEvent(
        calendarType || '',
        currentYear,
        currentMonth
      );
      response.data.data.map((event: CalendarEventData) => {
        const { id, name, startDate, endDate } = event;
        setEventData((prev) =>
          prev
            ? [...prev, { id, title: name, start: startDate, end: endDate }]
            : [{ id, title: name, start: startDate, end: endDate }]
        );
      });
    };
    getCalendarData();
  }, []);

  const handleEventDrop = (info: any) => {
    const event = info.event;
    const start = event.start;
    const end = event.end;
    console.log(event);
    console.log(start);
    console.log(end);
  }; // 이벤트가 드래그되었을 때 발생하는 이벤트 api생성되면 추후 연결
  const handleEventClick = (info: any) => {
    console.log(info.event);
  };

  const handleDatesSet = (dateInfo: any) => {
    const start = dateInfo.start;
    const end = dateInfo.end;
    const midDate = new Date((start.getTime() + end.getTime()) / 2);
    setCurrentMonth(midDate.getMonth() + 1);
    setCurrentYear(midDate.getFullYear());
  };

  const handleDateClick = (info: any) => {
    const clickedDate = info.dateStr; // 클릭된 날짜를 받아옴
    console.log("클릭한 날짜: ", clickedDate);
    setSelectedDate(clickedDate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false); // 모달 닫기
  };

  return (
    <S.CalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        locale='ko'
        locales={[koLocale]}
        events={eventData}
        editable={true}
        droppable={true}
        eventDrop={handleEventDrop}
        eventClick={handleEventClick}
        datesSet={handleDatesSet}
        dateClick={handleDateClick}
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }}
      />
      <ScheduleRegisterModal
        isOpen={isModalOpen}
        onClose={closeModal}
        selectedDate={selectedDate} // 선택된 날짜를 모달에 전달
      />
    </S.CalendarContainer>
  );
};

export default CalendarComponent;
