import { useState } from 'react';
import * as S from './Sms.styles';

import Path from '@/components/path';
import ManageLayout from '@/components/layout/managelayout';

const mockData = [
  { name: '최준영' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '최준영' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '최준영' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '최준영' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '최준영' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
  { name: '김민수' },
  { name: '김민지' },
];

function Sms() {
  const [message, setMessage] = useState('');

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
  };
  return (
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
            {mockData.map((data) => (
              <S.NameBtn>{data.name}</S.NameBtn>
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
            <S.SendBtn $isDisabled={!message}>전송</S.SendBtn>
          </S.BtnArea>
        </S.ContentWrapper>
      </S.SmsWrapper>
    </ManageLayout>
  );
}

export default Sms;
