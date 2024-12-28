import * as S from './style/email.styles';
import emailIcon from '@/assets/auth/email/email.svg';
import sendemail from '@/assets/auth/email/sendemail.svg';
import checkboxIcon from '@/assets/auth/email/checkbox.svg';
import bluecheckboxIcon from '@/assets/auth/email/bluecheckbox.svg';
import type { EmailType } from './type/email.type';
import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Email() {
  const { register, handleSubmit, watch } = useForm<EmailType>();
  const [emailValue, setEmailValue] = useState<string>(
    sessionStorage.getItem('email') || ''
  );
  const [personalInfo, setPersonalInfo] = useState<boolean>(false);
  const [serviceInfo, setServiceInfo] = useState<boolean>(false);
  const [locationInfo, setLocationInfo] = useState<boolean>(false);
  const [marketingInfo, setMarketingInfo] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setEmailValue(value);
  };
  const isAllChecked =
    personalInfo && serviceInfo && locationInfo && marketingInfo;
  const isAvailable = personalInfo && serviceInfo && locationInfo;
  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
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
  const onSubmit = (data: EmailType) => {
    console.log(data);
    navigate('/account');
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
          <S.Input
            type='email'
            placeholder='이메일을 입력해주세요'
            value={emailValue}
            {...register('email', { required: '이메일을 입력해주세요' })}
            onChange={handleEmailChange}
          />
          <S.SendButton type='button' $disabled={!emailRegex.test(emailValue)}>
            전송
          </S.SendButton>
        </S.InputWrapper>
        <S.InputWrapper>
          <S.LabelWrapper>
            <S.LabelImg src={sendemail} alt='email' />
            <S.InputLabel>인증번호 입력</S.InputLabel>
          </S.LabelWrapper>
          <S.Input
            type='text'
            placeholder='이메일로 전송된 인증번호를 입력해주세요'
            {...register('emailconfirm', {
              required: '이메일로 전송된 인증번호를 입력해주세요',
            })}
          />
        </S.InputWrapper>
        <S.PersonalContainer>
          <S.PersonalWrapper>
            <S.Checkbox
              src={personalInfo ? bluecheckboxIcon : checkboxIcon}
              alt='checkbox'
              onClick={() => setPersonalInfo(!personalInfo)}
            />
            <S.PersonalInfo href='/'>
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
            <S.PersonalInfo href='/'>
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
            <S.PersonalInfo href='/'>
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
            <S.PersonalInfo href='/'>
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
          $isDisabled={!isAvailable}
          onClick={handleSubmit(onSubmit)}
        >
          다음
        </S.SubmitButton>
      </S.EmailForm>
    </S.PageWrapper>
  );
}

export default Email;
