import instance from './instance';

import { API_STUDENT } from '@/constants/API';

import type { PatchedStudentData, StudentData } from '@/types/student.type';

export const getStudent = () => {
  return instance({
    url: API_STUDENT.STUDENT,
    method: 'GET',
  });
};

export const postStudent = (data: StudentData) => {
  return instance({
    url: API_STUDENT.STUDENT,
    method: 'POST',
    data,
  });
};

export const getStudentDetail = (studentId: number) => {
  return instance({
    url: API_STUDENT.STUDENTDETAIL(studentId),
    method: 'GET',
  });
};

export const deleteStudent = (studentIds: number[]) => {
  return instance({
    url: API_STUDENT.STUDENT,
    method: 'DELETE',
    params: { studentIds: studentIds },
  });
};

export const patchStudentDetail = (
  studentId: number,
  data: PatchedStudentData
) => {
  return instance({
    url: API_STUDENT.STUDENTDETAIL(studentId),
    method: 'PATCH',
    data,
  });
};

export const getStudentSearch = (name: string) => {
  return instance({
    url: API_STUDENT.STUDENTSEARCH,
    method: 'GET',
    params: { name: name },
  });
};
