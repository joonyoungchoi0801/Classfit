export interface AttendanceRecord {
  date: string;
  status: string;
}

export interface Student {
  name: string;
  attendance: AttendanceRecord[];
}
