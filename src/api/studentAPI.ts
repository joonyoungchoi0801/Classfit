import { API_STUDENT } from '@/constants/API';

import instance from './instance';

export const getStudentDetail = (studentId: number) => {
  return instance({
    url: API_STUDENT.STUDENTDETAIL(studentId),
    method: 'GET',
  });
};
