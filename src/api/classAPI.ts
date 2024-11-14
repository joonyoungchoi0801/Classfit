import instance from './instance';
import { API_CLASS } from '@/constants/API';

export const getClassList = () => {
  return instance({
    url: API_CLASS.CLASS,
  });
};
