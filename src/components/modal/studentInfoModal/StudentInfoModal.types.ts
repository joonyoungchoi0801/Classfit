export interface StudentInfoModalProps {
  name: string;
  gender: string;
  grade: number;
  className: string;
  tags: string;
  studentPhone: string;
  parentPhone: string;
  address: string;
  detailInfo: string;
  counseling: string;
  isOpen: boolean;
  onClose: () => void;
}
