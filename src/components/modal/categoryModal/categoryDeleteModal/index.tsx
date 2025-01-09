import React, { useState, useEffect } from 'react';
import * as S from './CategoryDeleteModal.styles';
import { DeleteModalProps } from './CategoryDeleteModal.types';

const CategoryDeleteModal = ({ isOpen, categoryName, onClose, onConfirm }: DeleteModalProps) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleConfirmClick = () => {
    onConfirm();
    setShowAlert(true);
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    onClose();
  };

  return (
    <>
      {isOpen && !showAlert && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.Title>카테고리를 삭제하시겠습니까?</S.Title>
            <S.Message>{categoryName}에 관한 일정이 삭제될 예정입니다.</S.Message>
            <S.ButtonContainer>
              <S.CancelButton onClick={onClose}>취소</S.CancelButton>
              <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
            </S.ButtonContainer>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
      {showAlert && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.Title>삭제가 완료되었습니다.</S.Title>
            <S.ButtonContainer>
              <S.ConfirmButton onClick={handleAlertClose}>확인</S.ConfirmButton>
            </S.ButtonContainer>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
};

export default CategoryDeleteModal;