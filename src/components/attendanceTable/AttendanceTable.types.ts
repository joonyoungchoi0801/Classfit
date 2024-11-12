export interface Student {
  id: number;
  name: string;
  status: string;
}

export interface AttendanceTableProps {
  selectedMonth: number;
  isEditMode: boolean;
}
