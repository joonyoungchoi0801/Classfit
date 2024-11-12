import React, { useState } from 'react';
import * as S from './DropDown.styles';
import type { DropDownProps } from './DropDown.types';

function DropDown({
  options = [],
  placeholder = '선택',
  onChange,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>();

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  return (
    <S.SelectWrapper>
      <S.SelectButton onClick={() => setIsOpen((prev) => !prev)}>
        {selectedOption || placeholder}
      </S.SelectButton>
      {isOpen && (
        <S.OptionsList>
          {options.map((option, index) => (
            <S.OptionItem key={index} onClick={() => handleOptionClick(option)}>
              {option}
            </S.OptionItem>
          ))}
        </S.OptionsList>
      )}
    </S.SelectWrapper>
  );
}

export default DropDown;
