import type { StudentData } from '@/types/student.type';

export interface StudentInfoModalProps {
  studentDetailData: StudentData;
  isOpen: boolean;
  onClose: () => void;
}
