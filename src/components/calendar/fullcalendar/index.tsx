import { useEffect, useRef, useState } from 'react';
import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid';
import interactionPlugin from '@fullcalendar/interaction';
import koLocale from '@fullcalendar/core/locales/ko';
import './customcalendar.css';

import * as S from '../Calendar.styles';

import { CalendarEvent, CalendarEventData } from './calendar.type';
import { getCalendarEvent, dragCalendarEvent } from '@/api/calendarAPI';
import { useParams } from 'react-router-dom';
import ScheduleRegisterModal from '@/components/modal/scheduleRegisterModal';
import EventScheduleModal from '@/components/modal/eventScheduleModal';

const CalendarComponent = () => {
  const { calendarType } = useParams();
  const [eventData, setEventData] = useState<CalendarEvent[]>();
  const [currentMonth, setCurrentMonth] = useState<number>(
    new Date().getMonth() + 1
  );
  const [currentYear, setCurrentYear] = useState<number>(
    new Date().getFullYear()
  );
  const [isScheduleModalOpen, setIsScheduleModalOpen] = useState<boolean>(false); // 일정등록 모달 오픈 상태
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [isEventModalOpen, setIsEventModalOpen] = useState<boolean>(false); // 이벤트 모달 오픈 상태
  const [selectedEvent, setSelectedEvent] = useState<CalendarEvent | null>(null);

  const apiCalendarType =
    calendarType === 'my' ? 'PERSONAL' : calendarType === 'shared' ? 'SHARED' : '';

  useEffect(() => {
    const getCalendarData = async () => {
      if (!apiCalendarType) return;
      try {
        const response = await getCalendarEvent(
          apiCalendarType,
          currentYear,
          currentMonth
        );
        const fetchedData = response.data.data.map((event: CalendarEventData) => {
          const { id, name, color, eventType, startDate, endDate } = event;
          return {
            id,
            title: name,
            start: startDate,
            end: endDate,
            color: `#${color}`,
            eventType: eventType,
            extendedProps: {
              color: `#${color}`,
              eventType: eventType,
            }
          };
        });
        setEventData(fetchedData);
      } catch (error) {
        console.error('Failed to fetch calendar events:', error);
      }
    };
    getCalendarData();
  }, [apiCalendarType, currentYear, currentMonth, isEventModalOpen, isScheduleModalOpen]);

  const handleEventDrop = async (info: any) => {
    const event = info.event;
    const eventId = event.id;
    const start = event.start;
    const end = event.end;

    const startDate = start?.toISOString();
    const endDate = end?.toISOString();

    try {
      const response = await dragCalendarEvent(eventId, startDate, endDate);
      if (response.status === 200) {
        console.log('Event updated successfully');
      } else {
        console.error('Failed to update event');
      }
    } catch (error) {
      console.error('Error updating event:', error);
    }
  };

  const handleEventClick = (info: any) => {
    const event = info.event;
    setSelectedEvent({
      id: event.id,
      title: event.title,
      color: event.extendedProps.color,
      eventType: event.extendedProps.eventType,
      start: event.start,
      end: event.end,
    });
    setIsEventModalOpen(true);
  };

  const handleDatesSet = (dateInfo: any) => {
    const start = dateInfo.start;
    const end = dateInfo.end;
    const midDate = new Date((start.getTime() + end.getTime()) / 2);
    setCurrentMonth(midDate.getMonth() + 1);
    setCurrentYear(midDate.getFullYear());
  };

  const handleDateClick = (info: any) => {
    const clickedDate = info.dateStr;
    setSelectedDate(clickedDate);
    setIsScheduleModalOpen(true);
  };

  const closeScheduleModal = () => {
    setIsScheduleModalOpen(false);
    setSelectedDate('');
  };

  const closeEventModal = () => {
    setSelectedEvent(null);
    setIsEventModalOpen(false);
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
      {isScheduleModalOpen && (
        <ScheduleRegisterModal
          isOpen={isScheduleModalOpen}
          onClose={closeScheduleModal}
          selectedDate={selectedDate}
        />
      )}
      {isEventModalOpen && selectedEvent && (
        <EventScheduleModal
          isOpen={isEventModalOpen}
          onClose={closeEventModal}
          event={selectedEvent}
        />
      )}
    </S.CalendarContainer>
  );
};

export default CalendarComponent;
