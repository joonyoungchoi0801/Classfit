import instance from './instance';

import { API_ATTENDANCE } from '@/constants/API';

export const getAllAttendance = (weekOffset: number, page: number) => {
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
