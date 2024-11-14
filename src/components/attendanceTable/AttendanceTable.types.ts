import { StudentData } from '@/types/attendance.type';

export interface Student {
  id: number;
  name: string;
  status: string;
}

export interface AttendanceTableProps {
  selectedMonth: number;
  isEditMode: boolean;
  setStudentData: (studentData: StudentData[]) => void;
}
