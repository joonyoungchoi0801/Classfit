import { AxiosResponse } from 'axios';
import instance from './instance';
import { API_CLASS } from '@/constants/API';
import type { GetClassInfoResponse } from '@/types/class.type';

export const getClassInfo = (): Promise<
  AxiosResponse<GetClassInfoResponse>
> => {
  return instance({
    url: API_CLASS.CLASS,
    method: 'GET',
  });
};

export const getClassList = () => {
  return instance({
    url: API_CLASS.CLASS,
  });
};
