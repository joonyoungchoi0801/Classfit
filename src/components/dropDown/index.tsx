import { useEffect, useState } from 'react';
import * as S from './DropDown.styles';
import type { DropDownProps } from './DropDown.types';

function DropDown({
  options = [],
  value = '',
  placeholder = '선택',
  onChange,
}: DropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string>(value);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
    if (onChange) onChange(option);
  };

  useEffect(() => {
    if (value == '') {
      setSelectedOption('');
    } else {
      if (value == 'FEMALE') {
        setSelectedOption('여');
      } else if (value == 'MALE') {
        setSelectedOption('남');
      } else {
        setSelectedOption(value);
      }
    }
  }, [value]);

  return (
    <S.SelectWrapper>
      <S.SelectButton
        onClick={() => setIsOpen((prev) => !prev)}
        $selectedOption={selectedOption}
      >
        {selectedOption.length > 0 ? selectedOption : placeholder}
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
