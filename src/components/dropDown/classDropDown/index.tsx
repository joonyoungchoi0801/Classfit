import { useState } from 'react';
import type { ClassDropDownProps } from './ClassDropDown.types';
import * as PS from '@/components/dropDown/DropDown.styles';
import * as S from './ClassDropDown.styles';

function ClassDropDown({
  options = [],
  placeholder = '선택',
  onChange,
}: ClassDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number[]>([]);

  const handleOptionClick = (option: number) => {
    setSelectedOption([option]);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <PS.SelectWrapper>
      <S.SelectButton
        onClick={() => setIsOpen((prev) => !prev)}
        $isPlaceholder={options.length === 0 || selectedOption.length === 0}
      >
        {options.length === 0
          ? placeholder
          : selectedOption.length > 0
            ? options.find((option) => option.subClassId === selectedOption[0])
                ?.subClassName || placeholder
            : placeholder}
      </S.SelectButton>
      {isOpen && (
        <PS.OptionsList>
          {options.map((option) => (
            <PS.OptionItem
              key={option.subClassId}
              onClick={() => handleOptionClick(option.subClassId)}
            >
              {option.subClassName}
            </PS.OptionItem>
          ))}
        </PS.OptionsList>
      )}
    </PS.SelectWrapper>
  );
}

export default ClassDropDown;
