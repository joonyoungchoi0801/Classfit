import type { StudentViewData } from '@/types/student.type';

export interface StudentInfoModalProps {
  studentId: number;
  isOpen: boolean;
  onClose: () => void;
}
