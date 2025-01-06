import { AxiosResponse } from 'axios';
import instance from './instance';
import { API_STATISTICS } from '@/constants/API';
import type {
  statisticsDateResponse,
  statisticsDateDetail,
  statisticsMemberResponse,
} from '@/types/statistics.type';

//출결 통계 날짜별
export const getStatisticsDates = async (
  startDate: string,
  endDate: string,
  subClassId: number
): Promise<AxiosResponse<statisticsDateResponse>> => {
  try {
    return await instance({
      url: API_STATISTICS.DATE,
      method: 'GET',
      params: { startDate, endDate, subClassId },
    });
  } catch (error) {
    console.error('Failed to fetch statistics dates:', error);
    throw error; // 필요 시 처리 후 재던짐
  }
};

// 출결 통계 날짜별 상세
export const getStatisticsDateDetail = async (
  date: string,
  subClassId: number,
  status: string
): Promise<AxiosResponse<statisticsDateDetail>> => {
  try {
    return await instance({
      url: API_STATISTICS.DATE_DETAIL,
      method: 'GET',
      params: { date, subClassId, status },
    });
  } catch (error) {
    console.error('Failed to fetch statistics date detail:', error);
    throw error;
  }
};

// 출결 통계 구성원별
export const getStatisticsMember = async (
  startDate: string,
  endDate: string
): Promise<AxiosResponse<statisticsMemberResponse>> => {
  try {
    return await instance({
      url: API_STATISTICS.MEMBER,
      method: 'GET',
      params: { startDate, endDate },
    });
  } catch (error) {
    console.error('Failed to fetch statistics member:', error);
    throw error;
  }
};

// 출결 통계 구성원별 상세
