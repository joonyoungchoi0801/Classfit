export interface RegisterModal {
  name: string;
  eventType: EventType;
  calendarType: string;
  categoryId: number;
  startDate: string;
  endDate: string;
  isAllDay: boolean;
  eventRepeatType?: EventRepeatType;
  repeatEndDate?: string;
}

export enum EventType {
  TASK = 'TASK',
  SCHEDULE = 'SCHEDULE',
}
export enum EventRepeatType {
  NONE = 'NONE',
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

export interface RegisterModalResponse {
  statusCode: number;
  resultType: string;
  data: RegisterModal[];
  error: { message: string };
  message: string;
}
