export interface CalendarEventData {
  id: string;
  name: string;
  eventType: string;
  startDate: string;
  endDate: string;
}

export interface CalendarEvent {
  id: string;
  title: string;
  start: string;
  end: string;
}

export interface EventPatchData {
  name: string;
  eventType: string;
  categoryId: number;
  startDate: string;
  endDate: string;
  isAllDay: boolean;
  eventRepeatType: string;
  repeatEndDate: string;
}
