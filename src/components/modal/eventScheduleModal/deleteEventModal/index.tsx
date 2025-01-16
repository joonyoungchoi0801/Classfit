import React, { useState, useEffect } from 'react';
import * as S from './DeleteEventModal.styels';
import { CalendarEvent } from '@/components/calendar/fullcalendar/calendar.type';
import { deleteCalendarEvent } from '@/api/calendarAPI';

const formatDateTime = (date: string) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hour = String(d.getHours()).padStart(2, '0');
  const minute = String(d.getMinutes()).padStart(2, '0');
  return `${month}/${day} ${hour}:${minute}`;
};

interface DeleteEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  event: CalendarEvent;
}

const DeleteEventModal = ({ isOpen, onClose, onConfirm, event }: DeleteEventModalProps) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleConfirmClick = async () => {
    try {
      const eventId = parseInt(event.id, 10);
      await deleteCalendarEvent(eventId);
      setShowAlert(true);
    } catch (error) {
      console.error('이벤트 삭제 실패:', error);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
    onClose();
    onConfirm();
  };

  return (
    <>
      {isOpen && (
        <S.ModalOverlay>
          <S.ModalContent>
            {!showAlert ? (
              <>
                <S.Title>선택일정을 삭제하시겠습니까?</S.Title>
                <S.Message>{`${formatDateTime(event.start)} ~ ${formatDateTime(event.end)}`}</S.Message>
                <S.Message>{event.title}의 일정이 삭제될 예정입니다.</S.Message>
                <S.ButtonContainer>
                  <S.CancelButton onClick={onClose}>취소</S.CancelButton>
                  <S.ConfirmButton onClick={handleConfirmClick}>확인</S.ConfirmButton>
                </S.ButtonContainer>
              </>
            ) : (
              <>
                <S.Title>삭제가 완료되었습니다.</S.Title>
                <S.ButtonContainer>
                  <S.ConfirmButton onClick={handleAlertClose}>확인</S.ConfirmButton>
                </S.ButtonContainer>
              </>
            )}
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  );
}

export default DeleteEventModal;