import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ScheduleRegisterModal.styles';
import type { ScheduleRegisterModalProps } from './ScheduleRegisterModal.types';
import Button from '@/components/button';
import Schedule from './schedule';
import Todo from './todo';
import { RegisterModal, EventType, EventRepeatType } from '@/types/schedule.type';
import { postRegisterModal } from '@/api/scheduleAPI';

const ScheduleRegisterModal = ({ isOpen, onClose }: ScheduleRegisterModalProps) => {
  const [isSchedule, setIsSchedule] = useState(true);
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterModal>({
    name: '',
    eventType: isSchedule ? EventType.SCHEDULE : EventType.TASK,
    categoryId: 0,  // 사이드바에서 카테고리 id 연결해야 함
    startDate: '',
    endDate: '',
    isAllDay: false,
    eventRepeatType: EventRepeatType.NONE, // 반복 타입
    repeatEndDate: '',
  });

  if (!isOpen) return null;

  const handleNavigateToDetails = () => {
    if (isSchedule) {
      navigate('/schedule/register/schedule');
    } else {
      navigate('/schedule/register/task');
    }
  };

  const handleSave = async () => {
    try {
      const response = await postRegisterModal(formData);
      if (response.status === 200) {
        console.log('등록 성공');
        onClose();
      } else {
        console.log(`오류 발생: ${response.data.message}`);
      }
    } catch (error) {
      console.error(error);
      console.log('API 호출 중 오류가 발생했습니다.');
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
        {isSchedule ? (
          <Schedule formData={formData} setFormData={setFormData} />
        ) : (
          <Todo formData={formData} setFormData={setFormData} />
        )}
        <S.ButtonGroup>
          <S.TextLink onClick={handleNavigateToDetails}>
            일정 상세보기
          </S.TextLink>
          <S.CloseButton title="취소" onClick={onClose}>취소</S.CloseButton>
          <Button title="저장" onClick={handleSave} />
        </S.ButtonGroup>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default ScheduleRegisterModal;