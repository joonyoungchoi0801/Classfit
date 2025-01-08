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
            title: 'ita 수학 보강',
            start: '2025-01-01T08:00:00',
            end: '2025-01-04T15:00:00',
          },
          {
            id: '2',
            title: 'ita 국어 보강',
            start: '2025-01-16T09:00:00',
            end: '2025-01-22T10:00:00',
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
