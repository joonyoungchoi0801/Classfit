import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@/components/button';
import * as S from './StudentInfoModal.styles';
import type { StudentInfoModalProps } from './StudentInfoModal.types';
import GirlIcon from '@/assets/modal/girl.svg';
import BoyIcon from '@/assets/modal/boy.svg';

const StudentInfoModal = ({
  studentDetailData,
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
            <S.ProfileImage
              src={studentDetailData.gender === 'FEMALE' ? GirlIcon : BoyIcon}
              alt='학생 이미지'
            />
          </S.ProfileImageWrapper>
          <S.InfoWrapper>
            <S.Info>
              <S.FieldWrapper>
                <S.FieldValue>{studentDetailData.name}</S.FieldValue>
                <S.Separator>|</S.Separator>
                <S.FieldValue>
                  {studentDetailData.gender == 'FEMALE' ? '여' : '남'}
                </S.FieldValue>
              </S.FieldWrapper>
              <S.FieldWrapper>
                <S.FieldValue>{studentDetailData.grade}</S.FieldValue>
                <S.Separator>|</S.Separator>
                <S.FieldValue>{studentDetailData.subClassList[0]}</S.FieldValue>
              </S.FieldWrapper>
              {/* <S.FieldValue>{studentDetailData.}</S.FieldValue> */}
            </S.Info>
          </S.InfoWrapper>
        </S.Content>
        <S.MoreInfoWrapper>
          <S.FieldLabel>학생 연락처</S.FieldLabel>
          <S.InputField value={studentDetailData.studentNumber} readOnly />
        </S.MoreInfoWrapper>
        <S.MoreInfoWrapper>
          <S.FieldLabel>학부모 연락처</S.FieldLabel>
          <S.InputField value={studentDetailData.parentNumber} readOnly />
        </S.MoreInfoWrapper>
        <S.MoreInfoWrapper>
          <S.FieldLabel>주소</S.FieldLabel>
          <S.InputField value={studentDetailData.address} readOnly />
        </S.MoreInfoWrapper>
        <S.MoreInfoWrapper>
          <S.FieldLabel>상세정보</S.FieldLabel>
          <S.TextArea value={studentDetailData.remark} readOnly />
        </S.MoreInfoWrapper>
        <S.MoreInfoWrapper>
          <S.FieldLabel>상담일지</S.FieldLabel>
          <S.TextArea
            placeholder='정보를 입력해주세요'
            value={studentDetailData.counselingLog}
          />
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
