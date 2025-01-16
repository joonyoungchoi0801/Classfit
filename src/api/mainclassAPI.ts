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

export const deleteMainClass = (mainClassId: number) => {
  return instance({
    url: API_MAINCLASS.MAINCLASSEDIT(mainClassId),
    method: 'DELETE',
  });
};

export const patchMainClass = (mainClassId: number, data: MainClassData) => {
  return instance({
    url: API_MAINCLASS.MAINCLASSDETAIL(mainClassId),
    method: 'PATCH',
    data,
  });
};
