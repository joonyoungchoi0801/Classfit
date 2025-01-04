import { StudentData, UpdateAttendanceRequest } from '@/types/attendance.type';

export interface Student {
  id: number;
  name: string;
  status: string;
}

export interface AttendanceTableProps {
  selectedMonth: number;
  isEditMode: boolean;
  sourceStudents: StudentData[];
  setSourceStudents: (students: StudentData[]) => void;
  setStudentData: (studentData: StudentData[]) => void;
  setUpdatedStudents: (updatedStudents: UpdateAttendanceRequest[]) => void;
}
