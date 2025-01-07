import { AxiosResponse } from 'axios';
import instance from './instance';
import { API_CATEGORY } from '@/constants/API';
import type { CategoryResponse } from '@/types/category.type';

export const getCategories = (): Promise<AxiosResponse<CategoryResponse>> => {
  return instance({
    url: API_CATEGORY.CATEGORY_LIST,
    method: 'GET',
  });
};
