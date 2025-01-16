import { DriveData } from '@/components/layout/drive/driveoption/DriveOption.type';

export interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedItems: DriveData[] | undefined;
  type: string | undefined;
}
