import React, { useState, useEffect } from 'react';
import * as S from './CategoryModal.styles';
import { colorMapping } from '@/utils/colorMapping';
import { CategoryModalProps } from './CategoryModal.types';

const CategoryModal = ({ isOpen, type, onClose, onSave }: CategoryModalProps) => {
  const [categoryName, setCategoryName] = useState('');
  const [isColorPaletteOpen, setIsColorPaletteOpen] = useState(false);
  const [selectedColorKey, setSelectedColorKey] = useState<string>('');
  const [selectedColorValue, setSelectedColorValue] = useState<string>('');

  useEffect(() => {
    if (isOpen) {
      setCategoryName('');
      setSelectedColorKey('');
      setSelectedColorValue('');
    }
  }, [isOpen]);

  const handleCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleColorIconClick = () => {
    setIsColorPaletteOpen(!isColorPaletteOpen);
  };

  const handleColorSelect = (key: string, value: string) => {
    setSelectedColorKey(key);
    setSelectedColorValue(value);
    setIsColorPaletteOpen(false);
  };

  const handleSave = () => {
    if (categoryName.trim() && selectedColorKey) {
      onSave(categoryName, selectedColorKey);
      onClose();
    }
  };

  const colorPalette = Object.entries(colorMapping);

  return (
    isOpen && (
      <S.ModalOverlay>
        <S.ModalContent>
          <S.ModalTitle>새 카테고리 만들기</S.ModalTitle>
          <S.Divider />
          <S.CategoryLabel>카테고리명</S.CategoryLabel>
          <S.InputWrapper>
            <S.CategoryInput
              value={categoryName}
              onChange={handleCategoryNameChange}
              placeholder="카테고리명 입력"
            />
            <S.CategoryIcon
              $selectedColor={selectedColorValue}
              onClick={handleColorIconClick}
            />
            {isColorPaletteOpen && (
              <S.ColorPalette>
                {colorPalette.map(([key, value]) => (
                  <S.ColorOption
                    key={key}
                    color={value}
                    onClick={() => handleColorSelect(key, value)}
                  />
                ))}
              </S.ColorPalette>
            )}
          </S.InputWrapper>
          <S.ButtonsContainer>
            <S.CancelButton onClick={onClose}>취소</S.CancelButton>
            <S.SaveButton onClick={handleSave}>저장</S.SaveButton>
          </S.ButtonsContainer>
        </S.ModalContent>
      </S.ModalOverlay>
    )
  );
};

export default CategoryModal;
