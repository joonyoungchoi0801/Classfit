import * as S from './style/class.styles';
import AcademyIcon from '@/assets/auth/class/academy.svg';
import KeyIcon from '@/assets/auth/class/key.svg';
import { useState } from 'react';

function Class() {
  const [codeValue, setCodeValue] = useState<string>('');
  const generateCode = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()-_=+[]{}|;:,.<>?';
    let result = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    setCodeValue(result);
  };
  return (
    <S.PageWrapper>
      <S.ClassWrapper>
        <S.ClassLabel>학원 정보를 입력해주세요.</S.ClassLabel>
        <S.ClassOption>
          <S.OptionTitle>
            <S.Icon src={AcademyIcon} alt='academy' />
            &nbsp;학원명
          </S.OptionTitle>
          <S.InputWrapper>
            <S.OptionInput placeholder='학원 이름을 입력해주세요' />
          </S.InputWrapper>
        </S.ClassOption>
        <S.ClassOption>
          <S.OptionTitle>
            <S.Icon src={KeyIcon} alt='academycode' />
            &nbsp;학원 코드
          </S.OptionTitle>
          <S.InputWrapper>
            <S.OptionInput
              placeholder='학원 코드 8자리를 입력해주세요'
              value={codeValue}
            />
            <S.AutoButton onClick={() => generateCode()}>
              자동 생성
            </S.AutoButton>
          </S.InputWrapper>
        </S.ClassOption>
        <S.CompleteButton>완료</S.CompleteButton>
      </S.ClassWrapper>
    </S.PageWrapper>
  );
}

export default Class;
