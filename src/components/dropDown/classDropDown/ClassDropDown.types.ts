export interface ClassDropDownProps {
  options: { subClassId: number; subClassName: string }[];
  value?: string;
  placeholder?: string;
  onChange?: (optionId: number) => void;
  onChange2?: (optionId: number, optionName: string) => void;
  isInitialized?: boolean;
}
