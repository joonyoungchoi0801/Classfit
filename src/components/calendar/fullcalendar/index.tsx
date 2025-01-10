import { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import './customcalendar.css';

import * as S from '../Calendar.styles';

import { CalendarEvent, CalendarEventData } from './calendar.type';
import { getCalendarEvent } from '@/api/calendarAPI';

const CalendarComponent = () => {
  const [eventData, setEventData] = useState<CalendarEvent[]>();
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth() + 1
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );

  useEffect(() => {
    const getCalendarData = async () => {
      const response = await getCalendarEvent(1, currentYear, currentMonth);
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
  };
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
        eventTimeFormat={{
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        }}
      />
    </S.CalendarContainer>
  );
};

export default CalendarComponent;
