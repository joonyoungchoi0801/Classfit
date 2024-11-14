export interface ClassDropDownProps {
  options: { subClassId: number; subClassName: string }[];
  placeholder?: string;
  onChange: (optionId: number) => void;
}
