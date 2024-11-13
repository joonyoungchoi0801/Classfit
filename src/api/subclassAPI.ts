import instance from './instance';

import { API_SUBCLASS } from '@/constants/API';

import type { SubClassData } from '@/types/subclass.type';

export const postSubClass = (data: SubClassData, memberNo: number) => {
  return instance({
    url: API_SUBCLASS.SUBCLASS,
    method: 'POST',
    data,
    headers: {
      'member-no': memberNo,
    },
  });
};

export const deleteSubClass = (memberNo: number, subClassId: number) => {
  return instance({
    url: API_SUBCLASS.SUBCLASSEDIT(subClassId),
    method: 'DELETE',
    headers: {
      'member-no': memberNo,
    },
  });
};

export const patchSubClass = (
  data: SubClassData,
  memberNo: number,
  subClassId: number
) => {
  return instance({
    url: API_SUBCLASS.SUBCLASSEDIT(subClassId),
    method: 'PATCH',
    data,
    headers: {
      'member-no': memberNo,
    },
  });
};
