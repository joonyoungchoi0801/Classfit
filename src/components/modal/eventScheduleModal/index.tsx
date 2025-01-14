import React, { useState } from 'react';
import * as S from './EventScheduleModal.styles';
import editBtn from '@/assets/calendar/editBtn.svg';
import deleteBtn from '@/assets/calendar/deleteBtn.svg';
import { CalendarEvent } from '@/components/calendar/fullcalendar/calendar.type';
import DeleteEventModal from './deleteEventModal';
import EditEventModal from './editEventModal';

const formatDateTime = (date: string) => {
  const d = new Date(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  const hour = String(d.getHours()).padStart(2, '0');
  const minute = String(d.getMinutes()).padStart(2, '0');
  return `${year}/${month}/${day} ${hour}:${minute}`;
};

interface EventScheduleModalProps {
  isOpen: boolean;
  onClose: () => void;
  event: CalendarEvent;
}

const EventScheduleModal = ({ isOpen, onClose, event }: EventScheduleModalProps) => {
  const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);

  console.log(event);

  const handleDeleteClick = () => {
    setDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    setDeleteModalOpen(false);
    onClose();
  };

  const handleDeleteCancel = () => {
    setDeleteModalOpen(false);
  };

  const handleEditClick = () => {
    setEditModalOpen(true);
  }

  const handleEditCancel = () => {
    setEditModalOpen(false);
  }

  if (!isOpen) return null;

  return (
    <>
      <S.ModalOverlay>
        <S.ModalContent>
          <S.ModalHeader>
            <S.ColorBox style={{ backgroundColor: event.color }} />
            <S.ButtonGroup>
              <S.EditBtn
                src={editBtn}
                onClick={handleEditClick}
              />
              <S.DeleteBtn
                src={deleteBtn}
                onClick={handleDeleteClick}
              />
            </S.ButtonGroup>
          </S.ModalHeader>
          <S.ModalTitle>{event.title}</S.ModalTitle>
          <S.EventDate>
            {event.end === null
              ? `${formatDateTime(event.start)} ~ ${formatDateTime(event.start)}`
              : `${formatDateTime(event.start)} ~ ${formatDateTime(event.end)}`}
          </S.EventDate>
          <S.OkBtn onClick={onClose} >확인</S.OkBtn>
        </S.ModalContent>
      </S.ModalOverlay>


      <DeleteEventModal
        isOpen={isDeleteModalOpen}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        event={event}
      />

      <EditEventModal
        isOpen={isEditModalOpen}
        onClose={handleEditCancel}
        eventId={Number(event.id)}
      />
    </>
  );
};

export default EventScheduleModal;