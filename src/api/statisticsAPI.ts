import { AxiosResponse } from 'axios';
import instance from './instance';
import { API_STATISTICS } from '@/constants/API';
import type {
  statisticsDateResponse,
  statisticsDateDetail,
  statisticsMemberResponse,
  statisticsMemberDetail,
} from '@/types/statistics.type';

//출결 통계 날짜별
export const getStatisticsDates = (
  startDate: string,
  endDate: string,
  subClassId: number
): Promise<AxiosResponse<statisticsDateResponse>> => {
  return instance({
    url: API_STATISTICS.DATE,
    method: 'GET',
    params: { startDate, endDate, subClassId },
  });
};

// 출결 통계 날짜별 상세
export const getStatisticsDateDetail = (
  date: string,
  subClassId: number,
  status: string
): Promise<AxiosResponse<statisticsDateDetail>> => {
  return instance({
    url: API_STATISTICS.DATE_DETAIL,
    method: 'GET',
    params: { date, subClassId, status },
  });
};

// 출결 통계 구성원별
export const getStatisticsMember = (
  startDate: string,
  endDate: string
): Promise<AxiosResponse<statisticsMemberResponse>> => {
  return instance({
    url: API_STATISTICS.MEMBER,
    method: 'GET',
    params: { startDate, endDate },
  });
};

// 출결 통계 구성원별 상세
export const getStatisticsMemberDetail = (
  studentId: number,
  month: number,
  status: string
): Promise<AxiosResponse<statisticsMemberDetail>> => {
  return instance({
    url: API_STATISTICS.MEMBER_DETAIL,
    method: 'GET',
    params: { studentId, month, status },
  });
};
