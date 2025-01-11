export interface Category {
  id: number;
  name: string;
  color: string;
}

export interface Attendee {
  id: number;
  name: string;
  email: string;
}

export interface RegisterData {
  name: string;
  eventType: EventType;
  categoryId: number;
  startDate: string;
  endDate: string;
  isAllDay: boolean;
  eventRepeatType?: EventRepeatType;
  repeatEndDate?: string | null;
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
}
