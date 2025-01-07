import { useEffect, useState } from 'react';
import * as S from './AttendanceModal.styles';

interface AttendanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  studentNames: string[];
  type: 'PRESENT' | 'LATE' | 'ABSENT';
  date: string;
}

const AttendanceModal = ({ isOpen, onClose, studentNames, type, date }: AttendanceModalProps) => {
  if (!isOpen) return null;

  return (
    <S.ModalOverlay onClick={onClose}>
      <S.ModalContent onClick={(e) => e.stopPropagation()}>
        <S.ModalHeader>
          <S.ModalTitle>
            {type === 'PRESENT' ? '출석' : type === 'LATE' ? '지각' : '결석'}명단
            <S.DateText>{date}</S.DateText>
          </S.ModalTitle>
        </S.ModalHeader>
        <S.Divider />
        <S.StudentList>
          {studentNames.length === 0 ? (
            <S.NoStudents>학생명단이 없습니다.</S.NoStudents>
          ) : (
            studentNames.map((name, index) => <S.StudentItem key={index}>{name}</S.StudentItem>)
          )}
        </S.StudentList>

        <S.CloseButton onClick={onClose}>확인</S.CloseButton>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default AttendanceModal;