import { AxiosResponse } from 'axios';
import instance from './instance';
import { API_CATEGORY } from '@/constants/API';
import type {
  CategoryResponse,
  AddCategoryResponse,
} from '@/types/category.type';

export const getCategories = (): Promise<AxiosResponse<CategoryResponse>> => {
  return instance({
    url: API_CATEGORY.CATEGORY_LIST,
    method: 'GET',
  });
};

export const createCategory = (
  name: string,
  color: string,
  type: 'PERSONAL' | 'SHARED'
): Promise<AxiosResponse<AddCategoryResponse>> => {
  return instance({
    url: API_CATEGORY.CATEGORY,
    method: 'POST',
    data: {
      name,
      color,
      type,
    },
  });
};
