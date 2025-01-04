export interface MainClassDropDownProps {
  options: { mainClassId: number; mainClassName: string }[];
  value?: string;
  placeholder?: string;
  onChange?: (optionId: number) => void;
  onChange2?: (optionId: number, optionName: string) => void;
}
