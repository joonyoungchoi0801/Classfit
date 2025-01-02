import { useEffect, useState } from 'react';
import type { MainClassDropDownProps } from './MainClassDropDown.types';
import * as PS from '@/components/dropDown/DropDown.styles';
import * as S from './MainClassDropDown.styles';

function MainClassDropDown({
  options = [],
  placeholder = '선택',
  value = '',
  onChange,
  onChange2,
}: MainClassDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number[]>([]);

  const handleOptionClick = (option: number, optionName: string) => {
    setSelectedOption([option]);
    setIsOpen(false);
    if (onChange) onChange(option);
    if (onChange2) onChange2(option, optionName);
  };

  useEffect(() => {
    if (value && value.length > 0) {
      const option = options.find((option) => option.mainClassName === value);
      if (!option) return;
      setSelectedOption([option.mainClassId]);
    }
  }, [value]);

  // useEffect(() => {
  //   if (options.length === 0) {
  //     setSelectedOption([]);
  //   }
  // }, [options]);

  return (
    <PS.SelectWrapper>
      <S.SelectButton
        onClick={() => setIsOpen((prev) => !prev)}
        $isPlaceholder={options.length === 0 || selectedOption.length === 0}
      >
        {options.length === 0
          ? placeholder
          : selectedOption.length > 0
            ? options.find((option) => option.mainClassId === selectedOption[0])
                ?.mainClassName || placeholder
            : placeholder}
      </S.SelectButton>
      {isOpen && (
        <PS.OptionsList>
          {options.map((option) => (
            <PS.OptionItem
              key={option.mainClassId}
              onClick={() =>
                handleOptionClick(option.mainClassId, option.mainClassName)
              }
            >
              {option.mainClassName}
            </PS.OptionItem>
          ))}
        </PS.OptionsList>
      )}
    </PS.SelectWrapper>
  );
}

export default MainClassDropDown;
