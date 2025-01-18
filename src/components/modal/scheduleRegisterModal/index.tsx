import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ScheduleRegisterModal.styles';
import type { ScheduleRegisterModalProps } from './ScheduleRegisterModal.types';
import Button from '@/components/button';
import Schedule from './schedule';
import Todo from './todo';
import {
  RegisterModal,
  EventType,
  EventRepeatType,
} from '@/types/schedule.type';
import { postRegisterModal } from '@/api/scheduleAPI';

const ScheduleRegisterModal = ({
  isOpen,
  onClose,
  selectedDate,
}: ScheduleRegisterModalProps) => {
  const location = useLocation();
  const url = location.pathname;
  console.log(url);
  const [isSchedule, setIsSchedule] = useState(true);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<RegisterModal>({
    name: '',
    eventType: isSchedule ? EventType.SCHEDULE : EventType.TASK,
    calendarType: '',
    categoryId: null,
    startDate: '',
    endDate: '',
    isAllDay: false,
    eventRepeatType: null, // 반복 타입
    repeatEndDate: '',
  });

  useEffect(() => {
    setFormData({
      name: '',
      eventType: isSchedule ? EventType.SCHEDULE : EventType.TASK,
      calendarType: '',
      categoryId: null,
      startDate: selectedDate,
      endDate: '',
      isAllDay: false,
      eventRepeatType: null, // 반복 타입
      repeatEndDate: '',
    });
  }, [isSchedule]);

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
        onClose();
      }
    } catch (error) {
      console.error(error);
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
          <S.Button
            $isActive={!isSchedule}
            onClick={() => setIsSchedule(false)}
          >
            할일
          </S.Button>
        </S.OptionGroup>
        {isSchedule ? (
          <Schedule
            formData={formData}
            setFormData={setFormData}
            selectedDate={selectedDate}
          />
        ) : (
          <Todo
            formData={formData}
            setFormData={setFormData}
            selectedDate={selectedDate}
          />
        )}
        <S.ButtonGroup>
          <S.TextLink onClick={handleNavigateToDetails}>
            일정 상세등록
          </S.TextLink>
          <S.CloseButton title='취소' onClick={onClose}>
            취소
          </S.CloseButton>
          <Button title='저장' onClick={handleSave} />
        </S.ButtonGroup>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default ScheduleRegisterModal;
