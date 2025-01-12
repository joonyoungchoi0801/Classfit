import * as PS from '@/pages/profile/Profile.styles';
import * as S from './MyProfile.styles';
import ImageIcon from '@/components/imageIcon';
import { useState } from 'react';
import { ProfileData } from '@/types/profile.types';
import { Calendar } from 'react-date-range';
import { formatDateToYYYYMMDD } from '@/utils/formatDate';
import Button from '@/components/button';
import Modal from '@/components/modal';
import { useNavigate } from 'react-router-dom';

function MyProfile() {
  const [profile, setProfile] = useState<ProfileData>({
    email: '',
    name: '',
    phoneNumber: '',
    birth: '',
    subject: '',
  });
  const [isEdit, setIsEdit] = useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  // const [date, setDate] = useState<Date>(fomatStringToDate(profile.birth));
  const [date, setDate] = useState<Date>(new Date());
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const navigate = useNavigate();

  const handleChange = (field: string, value: string) => {
    setProfile((prevProfile) => ({
      ...prevProfile,
      [field]: value,
    }));
  };

  const handleCalendar = () => {
    if (!isEdit) {
      return;
    }
    setShowCalendar((prev) => !prev);
  };

  const handleSelectDate = (selectedDate: Date) => {
    setDate(selectedDate);
    handleChange('birth', formatDateToYYYYMMDD(selectedDate));
  };

  const handleCancel = () => {
    setIsEdit(false);
    setModalMessage('수정이 취소되었습니다');
    setOpenModal(true);
    //수정 취소되는 로직 필요
  };

  const handleConfirm = () => {
    if (!isEdit) {
      setIsEdit(true);
      return;
    }

    setIsEdit(false);
    //todo: 수정되는 로직 필요
    setModalMessage('수정이 완료되었습니다');
    setOpenModal(true);
  };

  const handleModalClose = () => {
    setOpenModal(false);
  };

  return (
    <PS.Container>
      <S.Container>
        <S.Title>프로필</S.Title>
        <S.ProfileHeaderWrapper>
          <S.Wrapper>
            <S.ImageIconWrapper>
              <ImageIcon name='ProfileImage' width='6.4rem' height='6.8rem' />
            </S.ImageIconWrapper>

            <S.BackgroundCircle />
          </S.Wrapper>
          {/* {profile && <S.Name>{profile.name}</S.Name>} */}
          <S.Name>손화영</S.Name>
        </S.ProfileHeaderWrapper>
        <S.ContentWrapper>
          <S._ContentWrapper>
            <S.Label>휴대폰 번호</S.Label>
            <S.ContentInput
              placeholder=''
              value={profile?.phoneNumber}
              onChange={(e) => handleChange('phoneNumber', e.target.value)}
              disabled={!isEdit}
            />
          </S._ContentWrapper>
          <S._ContentWrapper>
            <S.Label>이메일</S.Label>
            <S.ContentInput
              placeholder=''
              value={profile?.email}
              onChange={(e) => handleChange('email', e.target.value)}
              disabled={!isEdit}
            />
          </S._ContentWrapper>
          <S._ContentWrapper>
            <S.Label>생년월일</S.Label>
            <S.CalendarInput onClick={handleCalendar}>
              {profile?.birth || '\u00A0'}
              <S.IconWrapper>
                {showCalendar ? (
                  <ImageIcon name='CalendarFilled' size='2.2rem' />
                ) : (
                  <ImageIcon name='Calendar' size='2.2rem' />
                )}
              </S.IconWrapper>
            </S.CalendarInput>
            {showCalendar && (
              <S.CalendarWrapper>
                <Calendar
                  date={date}
                  onChange={(selectedDate) => {
                    handleSelectDate(selectedDate);
                    handleCalendar();
                  }}
                />
                <S.CalendarButtonWrapper>
                  <Button title='확인' onClick={handleCalendar} />
                </S.CalendarButtonWrapper>
              </S.CalendarWrapper>
            )}
          </S._ContentWrapper>
          <S._ContentWrapper>
            <S.Label>과목</S.Label>
            <S.ContentInput
              placeholder=''
              value={profile?.subject}
              onChange={(e) => handleChange('subject', e.target.value)}
              disabled={!isEdit}
            />
          </S._ContentWrapper>
        </S.ContentWrapper>
        <S.BottomWrapper>
          <S.ButtonWrapper>
            {isEdit && (
              <Button
                title='취소'
                textColor='var(--color-blue)'
                backgroundColor='var(--color-white)'
                borderColor='var(--color-blue)'
                isBorder={true}
                onClick={handleCancel}
              />
            )}
            <Button title={isEdit ? '저장' : '수정'} onClick={handleConfirm} />
          </S.ButtonWrapper>
        </S.BottomWrapper>
        <Modal
          message={modalMessage}
          onClose={handleModalClose}
          isOpen={openModal}
        />
      </S.Container>
    </PS.Container>
  );
}

export default MyProfile;
