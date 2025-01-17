import { API_EXAM } from '@/constants/API';

import instance from './instance';
import type {
  ExamData,
  ModifyExamData,
  RegisterExamData,
  StudentScoreData,
} from '@/types/exam.type';

export const getExamStudent = (examId: number) => {
  return instance({
    url: API_EXAM.EXAM(examId),
    method: 'GET',
  });
};

export const putExam = (examId: number, data: ModifyExamData) => {
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

export const registerExam = (data: RegisterExamData) => {
  return instance({
    url: API_EXAM.REGISTER,
    method: 'POST',
    data,
  });
};

export const findExam = ({
  mainClassId,
  subClassId,
  searchFilter,
  searchText,
}: {
  mainClassId?: number;
  subClassId?: number;
  searchFilter?: string;
  searchText?: string;
}) => {
  if (!searchFilter) {
    return instance({
      url: API_EXAM.EXAM_FIND,
      method: 'POST',
      data: {
        mainClassId,
        subClassId,
      },
    });
  }
  if (searchFilter === '강사명') {
    return instance({
      url: API_EXAM.EXAM_FIND,
      method: 'POST',
      data: {
        memberName: searchText,
        mainClassId,
        subClassId,
      },
    });
  }
  return instance({
    url: API_EXAM.EXAM_FIND,
    method: 'POST',
    data: {
      examName: searchText,
      mainClassId,
      subClassId,
    },
  });
};

export const scoreRegisterExam = (examId: number, data: StudentScoreData[]) => {
  return instance({
    url: API_EXAM.EXAM_SCORE(examId),
    method: 'PATCH',
    data,
  });
};

export const getExamDetail = (examId: number) => {
  return instance({
    url: API_EXAM.EXAM_DETAIL(examId),
    method: 'GET',
  });
};
