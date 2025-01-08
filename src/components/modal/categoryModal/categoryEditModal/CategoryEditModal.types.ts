export interface CategoryEditModalProps {
  isOpen: boolean;
  categoryData: { id: number; name: string; color: string } | null;
  onClose: () => void;
  // onSave: (id: number, categoryName: string, color: string) => void;
}
