import { MainClassData } from '@/types/mainclass.type';
import instance from './instance';

import { API_MAINCLASS } from '@/constants/API';

export const postMainClass = (memberNo: number, data: MainClassData) => {
  return instance({
    url: API_MAINCLASS.MAINCLASS,
    method: 'POST',
    data,
    headers: {
      'member-no': memberNo,
    },
  });
};
