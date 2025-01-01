import { postAcademyCreate } from '@/api/authAPI';
import * as S from './style/class.styles';
import AcademyIcon from '@/assets/auth/class/academy.svg';
import KeyIcon from '@/assets/auth/class/key.svg';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Class() {
  const [codeValue, setCodeValue] = useState<string>('');
  const [academyName, setAcademyName] = useState<string>('');
  const navigate = useNavigate();
  const generateCode = () => {
    const characters =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
    let result = '';
    for (let i = 0; i < 8; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      result += characters[randomIndex];
    }
    setCodeValue(result);
  };
  const handleAcademyNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAcademyName(e.target.value);
    console.log(academyName);
  };
  const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    const allowedCharacters = /^[A-Za-z0-9!@#$%^&*()]*$/;

    if (allowedCharacters.test(input)) {
      setCodeValue(input);
    } else {
      alert('영어, 숫자, 특수문자만 입력 가능합니다.');
    }
  };

  const handleComplete = async () => {
    try {
      const academyData = {
        email: sessionStorage.getItem('email') || '',
        name: academyName,
        code: codeValue,
      };
      await postAcademyCreate(academyData);
      navigate('/signin');
    } catch (error) {
      alert('학원 정보를 다시 입력해주세요');
    }
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
            <S.OptionInput
              placeholder='학원 이름을 입력해주세요'
              value={academyName}
              onChange={handleAcademyNameChange}
            />
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
              onChange={handleCodeChange}
            />
            <S.AutoButton onClick={() => generateCode()}>
              자동 생성
            </S.AutoButton>
          </S.InputWrapper>
        </S.ClassOption>
        <S.CompleteButton
          onClick={() => handleComplete()}
          $isDisabled={!academyName || codeValue.length !== 8}
        >
          완료
        </S.CompleteButton>
      </S.ClassWrapper>
    </S.PageWrapper>
  );
}

export default Class;
