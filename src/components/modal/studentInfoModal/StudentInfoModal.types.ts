import type { StudentViewData } from '@/types/student.type';

export interface StudentInfoModalProps {
  studentDetailData: StudentViewData;
  isOpen: boolean;
  onClose: () => void;
}
