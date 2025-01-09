import React, { useState, useEffect } from 'react';
import * as S from './CategoryDeleteModal.styles';
import { DeleteModalProps } from './CategoryDeleteModal.types';

const CategoryDeleteModal = ({ isOpen, categoryName, onClose }: DeleteModalProps) => {
  return (
    isOpen && (
      <S.ModalOverlay>
        <S.ModalContent>
          <S.Title>카테고리를 삭제하시겠습니까 ?</S.Title>
          <S.Message>
            {categoryName}에 관한 일정이 삭제될 예정입니다.
          </S.Message>
          <S.ButtonContainer>
            <S.CancelButton onClick={onClose}>취소</S.CancelButton>
            <S.ConfirmButton>삭제</S.ConfirmButton>
          </S.ButtonContainer>
        </S.ModalContent>
      </S.ModalOverlay>
    )
  );
}

export default CategoryDeleteModal;