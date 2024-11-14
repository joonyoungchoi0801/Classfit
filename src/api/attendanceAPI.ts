import { AxiosResponse } from 'axios';
import instance from './instance';
import { API_ATTENDANCE } from '@/constants/API';
import { AttendanceResponse } from '@/types/attendance.type';

export const getAllAttendance = (
  weekOffset: number,
  page: number
): Promise<AxiosResponse<AttendanceResponse>> => {
  return instance({
    url: API_ATTENDANCE.ATTENDANCE,
    method: 'GET',
    params: {
      weekOffset,
      page,
    },
  });
};

export const getAllAttendanceDetail = () =>
  // 매개변수 넣기
  {
    return instance({
      url: API_ATTENDANCE.ATTENDANCEDETAIL(1, 1 /* */),
      method: 'GET',
      params: {
        // 변수넣기
      },
    });
  };
