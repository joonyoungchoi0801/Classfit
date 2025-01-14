import { API_CALENDAR, API_CATEGORY } from '@/constants/API';
import instance from './instance';
import {
  CalendarEvent,
  CalendarModal,
  Category,
  NewCategory,
} from '@/types/calendar.type';

export const postCalendarCategory = (data: Category) => {
  return instance({
    method: 'post',
    url: API_CATEGORY.CATEGORY,
    data,
  });
};

export const deleteCalendarCategory = (categoryId: number) => {
  return instance({
    method: 'delete',
    url: API_CATEGORY.CATEGORY_ID(categoryId),
  });
};

export const patchCalendarCategory = (
  categoryId: number,
  data: NewCategory
) => {
  return instance({
    method: 'patch',
    url: API_CATEGORY.CATEGORY_ID(categoryId),
    data,
  });
};

export const getCalendarCategoryList = () => {
  return instance({
    method: 'get',
    url: API_CATEGORY.CATEGORY_LIST,
  });
};
// calendar category related API

export const postCalendarModal = (data: CalendarModal) => {
  return instance({
    method: 'post',
    url: API_CALENDAR.MODAL,
    data,
  });
};

export const postCalendarEvent = (data: CalendarEvent) => {
  return instance({
    method: 'post',
    url: API_CALENDAR.EVENT,
    data,
  });
};

export const getAttendeeList = () => {
  return instance({
    method: 'get',
    url: API_CALENDAR.MEMBER,
  });
};

export const getCalendarEvent = (
  calendarType: string,
  year: number,
  month: number
) => {
  return instance({
    method: 'get',
    url: API_CALENDAR.MONTH,
    params: {
      calendarType,
      year,
      month,
    },
  });
};

// 모달 일정 상세 조회
export const getCalendarEventDetail = (eventId: number) => {
  return instance({
    url: API_CALENDAR.EVENT_DETAIL(eventId),
    method: 'GET',
  });
};

export const patchCalendarEvent = (eventId: number, data: CalendarModal) => {
  return instance({
    method: 'patch',
    url: API_CALENDAR.EVENT_DETAIL(eventId),
    data,
  });
};

export const deleteCalendarEvent = (eventId: number) => {
  return instance({
    method: 'delete',
    url: API_CALENDAR.EVENT_DETAIL(eventId),
  });
};
