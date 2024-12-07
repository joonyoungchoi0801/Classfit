export interface AttendanceStatus {
  id: number;
  date: string;
  week: number; // 요일 데이터 0:월요일...6:일요일
  status: string;
}

export interface Student {
  id: number;
  name: string;
  attendance: AttendanceStatus[];
}

export interface StudentData extends Student {
  isChecked: boolean;
}

export interface AttendanceResponse {
  statusCode: number;
  resultType: string;
  data: Student[];
  error: { message: string };
  message: string;
}

export interface AttendanceStatusRequest {
  attendanceId: number;
  status: string;
}

export interface UpdateAttendanceRequest {
  studentId: number;
  attendance: AttendanceStatusRequest[];
}
