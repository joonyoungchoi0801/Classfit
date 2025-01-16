import React, { useState, useEffect } from 'react';
import * as S from './CategoryEditModal.styles';
import { colorMapping } from '@/utils/colorMapping';
import { CategoryEditModalProps } from './CategoryEditModal.types';

const CategoryEditModal = ({ isOpen, categoryData, onClose, onSave }: CategoryEditModalProps) => {
  const [categoryName, setCategoryName] = useState('');
  const [selectedColor, setSelectedColor] = useState<string>('');
  const [isColorPaletteOpen, setIsColorPaletteOpen] = useState(false);

  useEffect(() => {
    if (isOpen && categoryData) {
      setCategoryName(categoryData.name);
      setSelectedColor(categoryData.color);
    }
  }, [isOpen, categoryData]);

  const handleCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleColorIconClick = () => {
    setIsColorPaletteOpen(!isColorPaletteOpen);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color.replace('#', ''));
    setIsColorPaletteOpen(false);
  };

  const handleSave = () => {
    if (categoryData && categoryName.trim() && selectedColor) {
      const colorWithHash = `#${selectedColor.replace('#', '')}`;
      onSave(categoryData.id, categoryName.trim(), colorWithHash);
      onClose();
    }
  };

  const colorPalette = Object.values(colorMapping);

  return (
    isOpen && (
      <S.ModalOverlay>
        <S.ModalContent>
          <S.ModalTitle>카테고리 수정</S.ModalTitle>
          <S.Divider />
          <S.CategoryLabel>카테고리명</S.CategoryLabel>
          <S.InputWrapper>
            <S.CategoryInput value={categoryName} onChange={handleCategoryNameChange} placeholder="카테고리명 입력" />
            <S.CategoryIcon $selectedColor={selectedColor} onClick={handleColorIconClick} />
            {isColorPaletteOpen && (
              <S.ColorPalette>
                {colorPalette.map((color) => (
                  <S.ColorOption
                    key={color}
                    color={color}
                    onClick={() => handleColorSelect(color)} />
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

export default CategoryEditModal;
