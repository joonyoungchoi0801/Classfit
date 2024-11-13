import { useState } from 'react';
import * as S from './Sms.styles';

import Path from '@/components/path';
import ManageLayout from '@/components/layout/managelayout';
import Label from '@/components/label';
import QuestionModal from '@/components/modal/questionModal';
import Modal from '@/components/modal';

const mockData = [
  { name: '최준영', phone: '010-1234-5678' },
  { name: '김민수', phone: '010-1234-5678' },
  { name: '이지훈', phone: '010-1234-5678' },
  { name: '김민지', phone: '010-1234-5678' },
  { name: '박지윤', phone: '010-1234-5678' },
  { name: '심유정', phone: '010-1234-5678' },
  { name: '임소현', phone: '010-1234-5678' },
];

function Sms() {
  const [message, setMessage] = useState('');
  const [phoneData, setPhoneData] = useState(mockData);
  const [isSendModalOpen, setIsSendModalOpen] = useState(false);
  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const handlePhoneNumberChange = (name: string) => {
    setPhoneData(phoneData.filter((data) => data.name !== name));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };

  const handleSend = () => {
    if (!message) return;
    setIsSendModalOpen(true);
  };

  const handleSendSms = () => {
    setIsSendModalOpen(false);
    setIsConfirmModalOpen(true);
  };

  return (
    <>
      <ManageLayout>
        <S.SmsWrapper>
          <Path />
          <S.Title>SMS 보내기</S.Title>
          <S.ContentWrapper>
            <S.Area style={{ gap: '2.2rem' }}>
              <S.ContentText>보내는 사람</S.ContentText>
              <S.Bar />
            </S.Area>
            <S.Area style={{ gap: '3.7rem' }}>
              <S.ContentText>받는 사람</S.ContentText>
              <S.Bar />
            </S.Area>
            <S.RecipientArea>
              {phoneData.map((data) => (
                <Label
                  key={data.name}
                  title={data.name}
                  onClose={() => handlePhoneNumberChange(data.name)}
                />
              ))}
            </S.RecipientArea>
            <S.BtnArea>
              <S.PhraseBtn>자주쓰는문구</S.PhraseBtn>
            </S.BtnArea>
            <S.TextArea
              placeholder='내용을 입력하세요.'
              value={message}
              onChange={handleTextChange}
            />
            <S.BtnArea>
              <S.CancelBtn>취소</S.CancelBtn>
              <S.SendBtn $isDisabled={!message} onClick={handleSend}>
                전송
              </S.SendBtn>
            </S.BtnArea>
          </S.ContentWrapper>
        </S.SmsWrapper>
      </ManageLayout>
      <QuestionModal
        title='메세지를 전송하시겠습니까 ?'
        message={`총 ${phoneData.length * 2}명에게 전송될 예정입니다.`}
        onConfirm={() => handleSendSms()}
        onCancel={() => setIsSendModalOpen(!isSendModalOpen)}
        isOpen={isSendModalOpen}
      />
      <Modal
        message='전송이 완료되었습니다.'
        isOpen={isConfirmModalOpen}
        onClose={() => setIsConfirmModalOpen(false)}
      />
    </>
  );
}

export default Sms;
