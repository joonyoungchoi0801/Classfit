export interface ClassDropDownProps {
  options: { subClassId: number; subClassName: string }[];
  value?: string[];
  placeholder?: string;
  onChange: (optionId: number) => void;
}
