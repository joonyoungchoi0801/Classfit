import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ScheduleRegisterModal.styles';
import type { ScheduleRegisterModalProps } from './ScheduleRegisterModal.types';
import Button from '@/components/button';
import Schedule from './schedule';
import Todo from './todo';

const ScheduleRegisterModal = ({ isOpen, onClose }: ScheduleRegisterModalProps) => {
  const [isSchedule, setIsSchedule] = useState(true);
  const navigate = useNavigate();

  if (!isOpen) return null;

  const handleNavigateToDetails = () => {
    if (isSchedule) {
      navigate('/schedule/register/schedule');
    } else {
      navigate('/schedule/register/task');
    }
  };

  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.Title>{isSchedule ? '일정 등록' : '할일 등록'}</S.Title>
        <S.Divider />
        <S.OptionGroup>
          <S.Button $isActive={isSchedule} onClick={() => setIsSchedule(true)}>
            스케줄
          </S.Button>
          <S.Button $isActive={!isSchedule} onClick={() => setIsSchedule(false)}>
            할일
          </S.Button>
        </S.OptionGroup>
        {isSchedule ? <Schedule /> : <Todo />}
        <S.ButtonGroup>
          <S.TextLink onClick={handleNavigateToDetails}>
            일정 상세보기
          </S.TextLink>
          <S.CloseButton title="취소" onClick={onClose}>취소</S.CloseButton>
          <Button title="저장" onClick={onClose} />
        </S.ButtonGroup>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default ScheduleRegisterModal;