import { AxiosResponse } from 'axios';
import instance from './instance';
import { API_ATTENDANCE } from '@/constants/API';
import {
  AttendanceResponse,
  UpdateAttendanceRequest,
} from '@/types/attendance.type';

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

export const getAllAttendanceDetail = (
  weekOffset: number,
  page: number,
  mainClassId: number,
  subClassId: number
) => {
  return instance({
    url: API_ATTENDANCE.ATTENDANCEDETAIL(mainClassId, subClassId),
    method: 'GET',
    params: {
      weekOffset,
      page,
    },
  });
};

export const AttendanceEdit = async (
  updatedStudents: UpdateAttendanceRequest[]
): Promise<AxiosResponse> => {
  try {
    const response = await instance({
      url: API_ATTENDANCE.ATTENDANCE,
      method: 'PATCH',
      data: updatedStudents,
    });

    return response;
  } catch (error) {
    console.error('Error updating attendance:', error);
    throw error;
  }
};
