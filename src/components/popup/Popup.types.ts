export interface PopupProps {
  isOpen: boolean;
  onEdit: () => void;
  onDelete: () => void;
}

export interface MainPopupProps {
  isOpen: boolean;
  onEdit: (e: React.MouseEvent) => void;
  onDelete: () => void;
  onAdd: (e: React.MouseEvent) => void;
}
