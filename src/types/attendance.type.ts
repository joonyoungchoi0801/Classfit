export interface AttendanceStatus {
  id: number;
  date: string;
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
