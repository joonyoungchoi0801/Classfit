import * as S from './style/password.styles';
import profileIcon from '@/assets/auth/password/profile.svg';

function Password() {
  return (
    <S.PageWrapper>
      <S.PasswordWrapper>
        <S.PasswordLabel>비밀번호를 잊으셨나요?</S.PasswordLabel>
        <S.InputWrapper>
          <S.EmailLabel>
            <S.ProfileIcon src={profileIcon} />
            &nbsp; 휴대폰 번호 또는 이메일 입력
          </S.EmailLabel>
          <S.EmailInput placeholder='가입시 적었던 휴대폰 번호 또는 이메일을 입력해주세요' />
        </S.InputWrapper>
      </S.PasswordWrapper>
    </S.PageWrapper>
  ); // purpose PASSWORD_RESET
}

export default Password;
