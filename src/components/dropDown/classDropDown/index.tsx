import { useEffect, useState } from 'react';
import type { ClassDropDownProps } from './ClassDropDown.types';
import * as PS from '@/components/dropDown/DropDown.styles';
import * as S from './ClassDropDown.styles';
import ImageIcon from '@/components/imageIcon';

function ClassDropDown({
  options = [],
  placeholder = '선택',
  value = '',
  onChange,
  onChange2,
  isInitialized = false,
}: ClassDropDownProps) {
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
      const option = options.find((option) => option.subClassName === value);
      if (!option) return;
      setSelectedOption([option.subClassId]);
    }
  }, [value]);

  useEffect(() => {
    if (isInitialized) {
      setSelectedOption([]);
    }
  }, [isInitialized]);

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
            ? options.find((option) => option.subClassId === selectedOption[0])
                ?.subClassName || placeholder
            : placeholder}
        <ImageIcon name='ArrowBottom' size='1.6rem' />
      </S.SelectButton>
      {isOpen && (
        <PS.OptionsList>
          {options.map((option) => (
            <PS.OptionItem
              key={option.subClassId}
              onClick={() =>
                handleOptionClick(option.subClassId, option.subClassName)
              }
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
