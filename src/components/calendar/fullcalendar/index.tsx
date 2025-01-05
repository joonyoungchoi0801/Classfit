import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import './customcalendar.css';

import * as S from '../Calendar.styles';

const CalendarComponent = () => {
  const handleEventDrop = (info: any) => {
    const event = info.event;
    const start = event.start;
    const end = event.end;
  };
  const handleEventClick = (info: any) => {
    console.log(info.event);
  };

  return (
    <S.CalendarContainer>
      <FullCalendar
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView='dayGridMonth'
        locale='ko'
        locales={[koLocale]}
        events={[
          {
            id: '1',
            title: 'Event 1',
            start: '2024-12-16T08:00:00',
            end: '2024-12-16T15:00:00',
          },
          {
            id: '2',
            title: 'Event 2',
            start: '2024-12-16T09:00:00',
            end: '2024-12-19T10:00:00',
          },
        ]}
        editable={true}
        droppable={true}
        eventDrop={handleEventDrop}
        eventClick={handleEventClick}
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
