import * as S from './style/email.styles';
import emailIcon from '@/assets/auth/email/email.svg';
import sendemail from '@/assets/auth/email/sendemail.svg';
import checkboxIcon from '@/assets/auth/email/checkbox.svg';
import bluecheckboxIcon from '@/assets/auth/email/bluecheckbox.svg';
import errorIcon from '@/assets/auth/email/error.svg';
import type { EmailType } from './type/email.type';
import { useForm } from 'react-hook-form';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { postSendEmail, postSignup, postVerifyEmail } from '@/api/authAPI';
import axios from 'axios';

function Email() {
  const { register, handleSubmit, watch } = useForm<EmailType>();
  const [emailValue, setEmailValue] = useState<string>(
    sessionStorage.getItem('email') || ''
  );
  const [emailConfirmValue, setEmailConfirmValue] = useState<string>('');
  const [emailCodeVerify, setEmailCodeVerify] = useState<boolean | null>(null);
  const [personalInfo, setPersonalInfo] = useState<boolean>(false);
  const [serviceInfo, setServiceInfo] = useState<boolean>(false);
  const [locationInfo, setLocationInfo] = useState<boolean>(false);
  const [marketingInfo, setMarketingInfo] = useState<boolean>(false);
  const [emailToken, setEmailToken] = useState<string>('');
  const [timer, setTimer] = useState(0);
  const [isResendOccur, setIsResendOccur] = useState(false);
  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmailValue(value);
  };
  const handleEmailConfirmChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmailConfirmValue(value);
  };

  const isAllChecked =
    personalInfo && serviceInfo && locationInfo && marketingInfo;
  const isAvailable = personalInfo && serviceInfo && locationInfo;
  const emailRegex =
    /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const handleAllCheck = () => {
    if (!isAllChecked) {
      setPersonalInfo(true);
      setServiceInfo(true);
      setLocationInfo(true);
      setMarketingInfo(true);
    } else {
      setPersonalInfo(false);
      setServiceInfo(false);
      setLocationInfo(false);
      setMarketingInfo(false);
    }
  };

  const handleSendEmail = async () => {
    try {
      if (timer > 0) alert('이미 전송된 이메일이 있습니다.');
      await postSendEmail({ email: emailValue, purpose: 'SIGN_UP' });
      alert('이메일로 전송된 코드를 입력해주세요');
      setIsResendOccur(true);
      setTimer(180);
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 409) {
        alert(
          '이미 가입된 이메일 주소입니다. 다른 이메일 주소를 입력해주세요.'
        );
      } else {
        alert('이메일 전송에 실패했습니다.');
      }
    }
  };

  const handleVerifyEmail = useCallback(async () => {
    try {
      const res = await postVerifyEmail({
        email: emailValue,
        code: emailConfirmValue,
        purpose: 'SIGN_UP',
      });
      const { emailToken } = res.data.data;

      setEmailToken(emailToken);
      setEmailCodeVerify(true);
    } catch (error) {
      setEmailCodeVerify(false);
    }
  }, [emailConfirmValue, emailValue]);

  useEffect(() => {
    if (emailConfirmValue.length === 8) {
      handleVerifyEmail();
    } else {
      setEmailCodeVerify(null);
    }
  }, [emailConfirmValue, handleVerifyEmail]); // 에러 설정

  const onSubmit = async (data: EmailType) => {
    try {
      const signupDataString = sessionStorage.getItem('signupData');
      if (!signupDataString) {
        alert('회원가입 데이터가 없습니다.');
        navigate('/signup');
        return;
      }
      const { name, phonenum, email, password, passwordConfirm } =
        JSON.parse(signupDataString);
      const signupData = {
        name: name,
        phoneNumber: phonenum,
        email: email,
        password: password,
        passwordConfirm: passwordConfirm,
        emailToken: emailToken,
      };
      await postSignup(signupData);
      navigate('/account');
    } catch (error) {
      alert('회원가입에 실패했습니다.');
    }
  };
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setIsResendOccur(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(countdown);
  }, [isResendOccur]);

  const handleOpenPdf = (type: number) => {
    if (type == 1) {
      window.open('/locationInfo.pdf', '_blank');
    } else if (type == 2) {
      window.open('/serviceInfo.pdf', '_blank');
    } else if (type == 3) {
      window.open('/locationInfo.pdf', '_blank');
    } else {
      window.open('/marketingInfo.pdf', '_blank');
    }
  };

  return (
    <S.PageWrapper>
      <S.EmailForm>
        <S.Label>클래스핏 이용을 위해 인증이 필요해요.</S.Label>
        <S.InputWrapper>
          <S.LabelWrapper>
            <S.LabelImg src={emailIcon} alt='email' />
            <S.InputLabel>이메일 입력</S.InputLabel>
          </S.LabelWrapper>
          <S.EmailInputWrapper>
            <S.Input
              type='email'
              placeholder='이메일을 입력해주세요'
              value={emailValue}
              {...register('email', { required: '이메일을 입력해주세요' })}
              onChange={handleEmailChange}
            />
            <S.SendButton
              type='button'
              $disabled={!emailRegex.test(emailValue) || timer > 0}
              onClick={() => handleSendEmail()}
            >
              전송
            </S.SendButton>
          </S.EmailInputWrapper>

          {timer > 0 && (
            <S.ErrorMessage>
              인증번호를 재전송하려면 {timer}초를 기다려주세요.
            </S.ErrorMessage>
          )}
        </S.InputWrapper>

        <S.InputWrapper>
          <S.LabelWrapper>
            <S.LabelImg src={sendemail} alt='email' />
            <S.InputLabel>인증번호 입력</S.InputLabel>
          </S.LabelWrapper>
          <S.Input
            type='text'
            placeholder='이메일로 전송된 8자리 인증번호를 입력해주세요'
            {...register('emailconfirm', {
              required: '이메일로 전송된 8자리 인증번호를 입력해주세요',
            })}
            onChange={handleEmailConfirmChange}
            value={emailConfirmValue}
          />
          {emailCodeVerify === false && (
            <S.Error>
              <S.ErrorIcon src={errorIcon} alt='error' />
              <S.ErrorMessage>인증번호가 일치하지 않습니다. </S.ErrorMessage>
            </S.Error>
          )}
        </S.InputWrapper>
        <S.PersonalContainer>
          <S.PersonalWrapper>
            <S.Checkbox
              src={personalInfo ? bluecheckboxIcon : checkboxIcon}
              alt='checkbox'
              onClick={() => setPersonalInfo(!personalInfo)}
            />
            <S.PersonalInfo onClick={() => handleOpenPdf(1)}>
              개인정보 수집이용 동의하기{' '}
            </S.PersonalInfo>
            <S.PersonalLink>(필수)</S.PersonalLink>
          </S.PersonalWrapper>
          <S.PersonalWrapper>
            <S.Checkbox
              src={serviceInfo ? bluecheckboxIcon : checkboxIcon}
              alt='checkbox'
              onClick={() => setServiceInfo(!serviceInfo)}
            />
            <S.PersonalInfo onClick={() => handleOpenPdf(2)}>
              서비스 이용약관에 동의하기{' '}
            </S.PersonalInfo>
            <S.PersonalLink>(필수)</S.PersonalLink>
          </S.PersonalWrapper>
          <S.PersonalWrapper>
            <S.Checkbox
              src={locationInfo ? bluecheckboxIcon : checkboxIcon}
              alt='checkbox'
              onClick={() => setLocationInfo(!locationInfo)}
            />
            <S.PersonalInfo onClick={() => handleOpenPdf(3)}>
              위치기반 서비스 이용 약관에 동의하기{' '}
            </S.PersonalInfo>
            <S.PersonalLink>(필수)</S.PersonalLink>
          </S.PersonalWrapper>
          <S.PersonalWrapper>
            <S.Checkbox
              src={marketingInfo ? bluecheckboxIcon : checkboxIcon}
              alt='checkbox'
              onClick={() => setMarketingInfo(!marketingInfo)}
            />
            <S.PersonalInfo onClick={() => handleOpenPdf(4)}>
              마케팅 이용, 수신에 동의하기{' '}
            </S.PersonalInfo>
            <S.PersonalLink>(선택)</S.PersonalLink>
          </S.PersonalWrapper>
        </S.PersonalContainer>
        <S.PersonalWrapper>
          <S.Checkbox
            src={isAllChecked ? bluecheckboxIcon : checkboxIcon}
            alt='checkbox'
            onClick={handleAllCheck}
          />
          <S.PersonalCheck>전체동의</S.PersonalCheck>
        </S.PersonalWrapper>
        <S.SubmitButton
          type='submit'
          $isDisabled={!isAvailable || !emailCodeVerify}
          onClick={handleSubmit(onSubmit)}
        >
          다음
        </S.SubmitButton>
      </S.EmailForm>
    </S.PageWrapper>
  );
}

export default Email;
