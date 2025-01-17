import { useState } from 'react';
import * as S from './style/signin.styles';
import { useForm } from 'react-hook-form';
import Logo from '@/assets/auth/signin/logo.svg';
import Checkbox from '@/assets/auth/signin/checkbox.svg';
import BlueCheckBox from '@/assets/auth/signin/bluecheckbox.svg';
import Id from '@/assets/auth/signin/id.svg';
import Password from '@/assets/auth/signin/password.svg';
import axios, { AxiosError } from 'axios';
import type { SigninType } from './type/signin.type';
import { Link, useNavigate } from 'react-router-dom';
import { postLogin } from '@/api/authAPI';

function Signin() {
  const [emailValue, setEmailValue] = useState<string>(
    localStorage.getItem('savedEmail') || ''
  );
  const [isMemoryChecked, setIsMemoryChecked] = useState(
    localStorage.getItem('savedEmail') ? true : false
  );
  const { register, handleSubmit, watch } = useForm<SigninType>();

  const navigate = useNavigate();

  const onSubmit = async (data: SigninType) => {
    if (isMemoryChecked) {
      localStorage.setItem('savedEmail', data.email);
    } else {
      localStorage.removeItem('savedEmail');
    }
    try {
      const response = await postLogin(data);
      const authHeader = response.headers['authorization'];
      const accessToken = authHeader.split(' ')[1];
      localStorage.setItem('accessToken', accessToken);
      navigate('/manage/attendance');
    } catch (error) {
      if (axios.isAxiosError(error) && error.response?.status === 422) {
        sessionStorage.setItem('email', data.email);
        navigate('/account');
      } else {
        alert('아이디 또는 비밀번호가 일치하지 않습니다');
      }
    }
  };
  return (
    <S.PageWrapper>
      <S.Logo src={Logo} alt='classfit' />
      <S.SigninWrapper>
        <S.SigninForm>
          <S.Label htmlFor='text'>로그인</S.Label>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <S.InputWrapper>
              <S.Input
                {...register('email')}
                type='email'
                id='email'
                value={emailValue}
                placeholder='이메일을 입력해주세요'
                onChange={(e) => setEmailValue(e.target.value)}
                autoComplete='off'
              />
              <S.InputImg
                src={Id}
                alt='id'
                style={{
                  display: watch('email') || emailValue ? 'none' : 'block',
                }}
              />
            </S.InputWrapper>
            <S.InputWrapper>
              <S.Input
                {...register('password')}
                type='password'
                id='password'
                placeholder='비밀번호를 입력해주세요'
              />
              <S.InputImg
                src={Password}
                alt='password'
                style={{ display: watch('password') ? 'none' : 'block' }}
              />
            </S.InputWrapper>
            <S.Memory onClick={() => setIsMemoryChecked(!isMemoryChecked)}>
              <S.IdCheckbox
                src={isMemoryChecked ? BlueCheckBox : Checkbox}
                alt='checkbox'
              />
              <S.MemorySpan>아이디 기억하기</S.MemorySpan>
            </S.Memory>
            <S.LoginButtton onClick={handleSubmit(onSubmit)} type='submit'>
              로그인
            </S.LoginButtton>
          </S.Form>

          <S.AdditionWrapper>
            <S.AdditionLabel onClick={() => navigate('/signup')}>
              회원가입
            </S.AdditionLabel>
            <S.Bar />
            <S.AdditionLabel onClick={() => navigate('/password')}>
              비밀번호 찾기
            </S.AdditionLabel>
          </S.AdditionWrapper>
        </S.SigninForm>
      </S.SigninWrapper>
    </S.PageWrapper>
  );
}

export default Signin;
