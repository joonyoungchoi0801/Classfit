export interface Category {
  name: string;
  color: string;
  type: string;
}

export interface NewCategory {
  newName: string;
  newColor: string;
}

export interface CalendarModal {
  name: string;
  eventType: EventType;
  calendarType: string;
  categoryId: number;
  startDate: string;
  endDate: string;
  isAllDay: boolean;
  eventRepeatType?: EventRepeatType;
  repeatEndDate?: string | null;
}

export interface CalendarEvent extends CalendarModal {
  memberIds: number[];
  location: string;
  memo: string;
}

enum EventType {
  TASK = 'TASK',
  SCHEDULE = 'SCHEDULE',
}
enum EventRepeatType {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
  NONE = 'NONE',
}
