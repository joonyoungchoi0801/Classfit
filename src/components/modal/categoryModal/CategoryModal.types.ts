export interface CategoryModalProps {
  isOpen: boolean;
  type: 'PERSONAL' | 'SHARED';
  onClose: () => void;
  onSave: (categoryName: string, color: string) => void;
}
