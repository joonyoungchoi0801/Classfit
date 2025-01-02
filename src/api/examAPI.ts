import { API_EXAM } from '@/constants/API';

import instance from './instance';
import { examData, registerExamData } from '@/types/exam.type';

export const getExamStudent = (examId: number) => {
  return instance({
    url: API_EXAM.EXAM(examId),
    method: 'GET',
  });
};

export const putExam = (examId: number, data: examData) => {
  return instance({
    url: API_EXAM.EXAM(examId),
    method: 'PUT',
    data,
  });
};

export const deleteExam = (examId: number) => {
  return instance({
    url: API_EXAM.EXAM(examId),
    method: 'DELETE',
  });
};

export const registerExam = (data: registerExamData) => {
  return instance({
    url: API_EXAM.REGISTER,
    method: 'POST',
    data,
  });
};

export const findExam = () => {
  return instance({
    url: API_EXAM.EXAM_FIND,
    method: 'GET',
  });
};

export const scoreRegisterExam = (
  examId: number,
  studentId: number,
  score: number
) => {
  return instance({
    url: API_EXAM.EXAM_SCORE(examId),
    method: 'POST',
    data: { score },
  });
};

export const getExamDetail = (examId: number) => {
  return instance({
    url: API_EXAM.EXAM_DETAIL(examId),
    method: 'GET',
  });
};
