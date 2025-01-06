import * as S from './AttendanceModal.styles';
import { useEffect, useState } from 'react';
import { getStatisticsMemberDetail } from '@/api/statisticsAPI';

interface AttendanceModalProps {
  isOpen: boolean;
  onClose: () => void;
  month: number;
  studentId: number;
  status: 'PRESENT' | 'LATE' | 'ABSENT';
}

const AttendanceModal = ({ isOpen, onClose, month, studentId, status }: AttendanceModalProps) => {
  const [attendanceDates, setAttendanceDates] = useState<string[]>([]);

  useEffect(() => {
    if (!isOpen) return;
    const fetchAttendance = async () => {
      try {
        const response = await getStatisticsMemberDetail(studentId, month, status);
        setAttendanceDates(response.data.data || []);
        console.log(response.data.data);
      } catch (error) {
        console.error('출결 세부 사항을 가져오는 데 실패했습니다:', error);
      }
    };
    fetchAttendance();
  }, [isOpen, studentId, status]);

  if (!isOpen) return null;
  return (
    <S.ModalOverlay>
      <S.ModalContent>
        <S.ModalTitle>{status === 'PRESENT' ? '출석' : status === 'LATE' ? '지각' : '결석'}일</S.ModalTitle>
        <S.Divider />
        <S.DateList>
          {attendanceDates.length === 0 ? (
            <S.NoDates>출결 정보가 없습니다.</S.NoDates>
          ) : (
            attendanceDates.map((date, index) => (
              <S.DateItem key={index}>{date}</S.DateItem>
            ))
          )}
        </S.DateList>
        <S.CloseButton onClick={onClose}>확인</S.CloseButton>
      </S.ModalContent>
    </S.ModalOverlay>
  );
};

export default AttendanceModal;