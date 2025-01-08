import React, { useState } from 'react';
import * as S from './CategoryModal.styles';
import { colorMapping } from '@/utils/colorMapping';

interface CategoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (categoryName: string, color: string) => void;
}

const CategoryModal = ({ isOpen, onClose, onSave }: CategoryModalProps) => {
  const [categoryName, setCategoryName] = useState('');
  const [isColorPaletteOpen, setIsColorPaletteOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState<string>('');

  const handleCategoryNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCategoryName(e.target.value);
  };

  const handleColorIconClick = () => {
    setIsColorPaletteOpen(true);
  };

  const handleColorSelect = (color: string) => {
    setSelectedColor(color);
    setIsColorPaletteOpen(false);
  };

  const handleSave = () => {
    if (categoryName.trim() && selectedColor) {
      onSave(categoryName, selectedColor);
      onClose();
    }
  };

  const colorPalette = Object.values(colorMapping);

  return (
    isOpen && (
      <S.ModalOverlay>
        <S.ModalContent>
          <S.ModalTitle>새 카테고리 만들기</S.ModalTitle>
          <S.Divider />
          <S.CategoryLabel>카테고리명</S.CategoryLabel>
          <S.InputWrapper>
            <S.CategoryInput value={categoryName} onChange={handleCategoryNameChange} placeholder="카테고리명 입력" />
            <S.CategoryIcon selectedColor={selectedColor} onClick={handleColorIconClick} />
            {isColorPaletteOpen && (
              <S.ColorPalette>
                {colorPalette.map((color) => (
                  <S.ColorOption key={color} color={color} onClick={() => handleColorSelect(color)} />
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
