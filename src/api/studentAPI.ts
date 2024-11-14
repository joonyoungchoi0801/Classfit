import instance from './instance';

import { API_STUDENT } from '@/constants/API';

import type {
  GetStudentResponse,
  PatchedStudentData,
  StudentData,
} from '@/types/student.type';
import { AxiosResponse } from 'axios';

export const getStudent = (): Promise<AxiosResponse<GetStudentResponse>> => {
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
  const params = new URLSearchParams();
  studentIds.forEach((id) => params.append('studentIds', id.toString()));
  return instance({
    url: `${API_STUDENT.STUDENT}?${params.toString()}`,
    method: 'DELETE',
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
