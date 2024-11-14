import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@/components/button';
import * as S from './StudentInfoModal.styles';
import type { StudentInfoModalProps } from './StudentInfoModal.types';
import GirlIcon from '@/assets/modal/girl.svg';

const StudentInfoModal = ({
  name,
  gender,
  grade,
  className,
  tags,
  studentPhone,
  parentPhone,
  address,
  detailInfo,
  counseling,
  isOpen,
  onClose,
}: StudentInfoModalProps) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.Header>학생정보</S.Header>
        <S.Content>
          <S.ProfileImageWrapper>
            <S.ProfileImage src={GirlIcon} alt='학생 이미지' />
          </S.ProfileImageWrapper>
          <S.InfoWrapper>
            <S.Info>
              <S.FieldWrapper>
                <S.FieldValue>{name}</S.FieldValue>
                <S.Separator>|</S.Separator>
                <S.FieldValue>{gender}</S.FieldValue>
              </S.FieldWrapper>
              <S.FieldWrapper>
                <S.FieldValue>{grade}학년</S.FieldValue>
                <S.Separator>|</S.Separator>
                <S.FieldValue>{className}반</S.FieldValue>
              </S.FieldWrapper>
              <S.FieldValue>{tags}</S.FieldValue>
            </S.Info>
          </S.InfoWrapper>
        </S.Content>
        <S.MoreInfoWrapper>
          <S.FieldLabel>학생 연락처</S.FieldLabel>
          <S.InputField value={studentPhone} readOnly />
        </S.MoreInfoWrapper>
        <S.MoreInfoWrapper>
          <S.FieldLabel>학부모 연락처</S.FieldLabel>
          <S.InputField value={parentPhone} readOnly />
        </S.MoreInfoWrapper>
        <S.MoreInfoWrapper>
          <S.FieldLabel>주소</S.FieldLabel>
          <S.InputField value={address} readOnly />
        </S.MoreInfoWrapper>
        <S.MoreInfoWrapper>
          <S.FieldLabel>상세정보</S.FieldLabel>
          <S.TextArea value={detailInfo} readOnly />
        </S.MoreInfoWrapper>
        <S.MoreInfoWrapper>
          <S.FieldLabel>상담일지</S.FieldLabel>
          <S.TextArea placeholder='정보를 입력해주세요' value={counseling} />
        </S.MoreInfoWrapper>
        <S.Footer>
          <Button
            title='닫기'
            textColor={'var(--color-white)'}
            backgroundColor={'var(--color-blue)'}
            isBorder={false}
            onClick={onClose}
          />
        </S.Footer>
      </S.ModalContainer>
    </S.ModalWrapper>,
    document.getElementById('modal-root') as HTMLElement
  );
};

export default StudentInfoModal;
