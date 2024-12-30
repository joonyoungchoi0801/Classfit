import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './style/account.styles';
import profileIcon from '@/assets/auth/account/profile.svg';
import checkBoxIcon from '@/assets/auth/account/checkbox.svg';
import error from '@/assets/auth/account/error.svg';
import { postAcademyInvite } from '@/api/authAPI';

function Account() {
  const [selectedOption, setSelectedOption] = useState<'create' | 'join'>(
    'create'
  );
  const [codeError, setCodeError] = useState<boolean>(false);
  const [inviteCode, setInviteCode] = useState<string>('');
  const navigate = useNavigate();

  const handleClickButton = async () => {
    if (selectedOption === 'create') {
      navigate('/class');
    } else {
      try {
        const inviteData = {
          email: sessionStorage.getItem('email') || '',
          code: inviteCode,
        };
        await postAcademyInvite(inviteData);
        navigate('/');
      } catch (error) {
        setCodeError(true);
      }
    }
  };

  const handleInviteCode = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInviteCode(value);
  };

  return (
    <S.PageWrapper>
      <S.AccountWrapper>
        <S.Label>학원 계정을 생성해주세요.</S.Label>
        <S.EmailWrapper>
          <S.EmailImg src={profileIcon} alt='profile' />
          <S.Email>{sessionStorage.getItem('email') || ''}</S.Email>
        </S.EmailWrapper>
        <S.AccountOption
          $isSelected={selectedOption === 'create'}
          onClick={() => setSelectedOption('create')}
        >
          <S.AccountOptionLabel>
            <S.AccountOptionImg src={checkBoxIcon} alt='checkbox' />
            &nbsp;학원 만들기
          </S.AccountOptionLabel>
          <S.AccountOptionLabel>
            클래스핏을 처음 사용하는 경우 학원 만들기를 선택해주세요.
          </S.AccountOptionLabel>
        </S.AccountOption>
        <S.AccountOption
          $isSelected={selectedOption === 'join'}
          onClick={() => setSelectedOption('join')}
        >
          <S.AccountOptionLabel>
            <S.AccountOptionImg src={checkBoxIcon} alt='checkbox' />
            &nbsp;기존학원 합류하기
          </S.AccountOptionLabel>
          <S.AccountOptionLabel>
            초대를 받은 경우 기존학원합류하기를 선택해주세요.
          </S.AccountOptionLabel>
          {selectedOption === 'join' && (
            <S.InputWrapper>
              <S.AccountInput
                placeholder='초대 코드를 입력해주세요'
                onChange={handleInviteCode}
              />
              {codeError && <S.ErrorIcon src={error} alt='error' />}
            </S.InputWrapper>
          )}
          {codeError && (
            <S.ErrorMessage>
              <S.ErrorMessageIcon src={error} alt='error' />
              &nbsp;존재하지 않는 코드입니다.
            </S.ErrorMessage>
          )}
        </S.AccountOption>
        <S.NextButton onClick={() => handleClickButton()}>다음</S.NextButton>
      </S.AccountWrapper>
    </S.PageWrapper>
  );
}

export default Account;
