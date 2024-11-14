export interface DropDownProps {
  options: string[];
  value?: string;
  placeholder?: string;
  onChange: (option: string) => void;
}
