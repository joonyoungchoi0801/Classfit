import { RegisterReportData, StudentOpinionData } from '@/types/report.types';
import instance from './instance';
import { API_REPORT } from '@/constants/API';

export const postReportRegister = (data: RegisterReportData) => {
  return instance({
    url: API_REPORT.REGISTER,
    method: 'POST',
    data,
  });
};

export const patchStudentOpinion = (data: StudentOpinionData[]) => {
  return instance({
    url: API_REPORT.STUDENT_OPINION,
    method: 'PATCH',
    data,
  });
};

export const getReportDetail = (reportId: number) => {
  return instance({
    url: API_REPORT.DETAIL(reportId),
    method: 'GET',
  });
};

export const deleteReport = (reportId: number) => {
  return instance({
    url: API_REPORT.DETAIL(reportId),
    method: 'DELETE',
  });
};

export const getFindReport = (
  mainClassId: number,
  subClassId: number,
  memberName: string
) => {
  return instance({
    url: API_REPORT.FIND,
    method: 'GET',
    params: {
      mainClassId,
      subClassId,
      memberName,
    },
  });
};

export const getFindExam = (
  startDate: string,
  endDate: string,
  mainClassId: number,
  subClassId: number
) => {
  return instance({
    url: API_REPORT.EXAM_FIND,
    method: 'GET',
    params: {
      startDate,
      endDate,
      mainClassId,
      subClassId,
    },
  });
};

export const getFindStudent = (mainClassId: number, subClassId: number) => {
  return instance({
    url: API_REPORT.STUDENT_FIND,
    method: 'GET',
    params: {
      mainClassId: mainClassId,
      subClassId: subClassId,
    },
  });
};
