import { API_CALENDAR, API_CATEGORY } from '@/constants/API';
import instance from './instance';
import { CalendarModal, Category, NewCategory } from '@/types/calendar.type';

export const postCalendarCategory = async (data: Category) => {
  return instance({
    method: 'post',
    url: API_CATEGORY.CATEGORY,
    data,
  });
};

export const deleteCalendarCategory = async (categoryId: number) => {
  return instance({
    method: 'delete',
    url: API_CATEGORY.CATEGORY_ID(categoryId),
  });
};

export const patchCalendarCategory = async (
  categoryId: number,
  data: NewCategory
) => {
  return instance({
    method: 'patch',
    url: API_CATEGORY.CATEGORY_ID(categoryId),
    data,
  });
};

export const getCalendarCategoryList = async () => {
  return instance({
    method: 'get',
    url: API_CATEGORY.CATEGORY_LIST,
  });
};
// calendar category related API

export const postCalendarModal = async (data: CalendarModal) => {
  return instance({
    method: 'post',
    url: API_CALENDAR.MODAL,
    data,
  });
};

export const postCalendarEvent = async (data: CalendarModal) => {
  return instance({
    method: 'post',
    url: API_CALENDAR.EVENT,
    data,
  });
};
