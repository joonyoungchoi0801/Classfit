import { useState } from 'react';
import * as S from './style/password.styles';
import profileIcon from '@/assets/auth/password/profile.svg';
import errorIcon from '@/assets/auth/password/error.svg';
import { useNavigate } from 'react-router-dom';

function Password() {
  const [emailError, setEmailError] = useState(true);
  const [emailValue, setEmailValue] = useState('');

  const navigate = useNavigate();
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  return (
    <S.PageWrapper>
      <S.PasswordWrapper>
        <S.PasswordLabel>비밀번호를 잊으셨나요?</S.PasswordLabel>
        <S.InputWrapper>
          <S.EmailLabel>
            <S.Icon src={profileIcon} alt='profile' />
            &nbsp; 이메일 입력
          </S.EmailLabel>
          <S.EmailInput
            placeholder='가입시 적었던 이메일을 입력해주세요'
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmailValue(e.target.value)
            }
          />
          {emailError && (
            <S.ErrorMessage>
              <S.Icon src={errorIcon} alt='error' />
              &nbsp; 존재하지 않은 계정입니다.
            </S.ErrorMessage>
          )}
        </S.InputWrapper>
        <S.NextButton $isDisabled={!emailRegex.test(emailValue)}>
          다음
        </S.NextButton>
      </S.PasswordWrapper>
    </S.PageWrapper>
  ); // purpose PASSWORD_RESET
}

export default Password;
