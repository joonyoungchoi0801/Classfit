import { useForm } from 'react-hook-form';

import * as S from './style/signup.styles';
import name from '@/assets/auth/signup/name.svg';
import phone from '@/assets/auth/signup/phone.svg';
import email from '@/assets/auth/signup/email.svg';
import passwordIcon from '@/assets/auth/signup/password.svg';
import check from '@/assets/auth/signup/check.svg';
import Error from '@/assets/auth/signup/error.svg';
import type { SignupType, ErrorProps } from './type/signup.type';
import { useCallback, useEffect, useState } from 'react';

const ErrorComponent = ({ message }: ErrorProps) => (
  <S.Error>
    <S.ErrorImg src={Error} alt='error' />
    <S.ErrorMsg> {message}</S.ErrorMsg>
  </S.Error>
);

function Signup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<SignupType>();
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const password = watch('password');
  const passwordConfirm = watch('passwordConfirm');

  const passwordCheck = useCallback(() => {
    if (password === passwordConfirm) {
      setIsPasswordConfirm(true);
    } else {
      setIsPasswordConfirm(false);
    }
  }, [password, passwordConfirm]);

  useEffect(() => {
    passwordCheck();
  }, [passwordCheck]);

  const emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const phoneRegex = /^\d{2,3}\d{3,4}\d{4}$/;
  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,20}$/;

  const onSubmit = (data: SignupType) => {
    console.log(errors);
    console.log(data);
  };

  return (
    <S.PageWrapper>
      <S.Signupform onSubmit={handleSubmit(onSubmit)}>
        <S.Label>클래스핏에 등록할 계정을 생성해주세요</S.Label>
        <S.InputWrapper>
          <S.LabelWrapper>
            <S.LabelImg src={name} alt='name' />
            <S.InputLabel>이름</S.InputLabel>
          </S.LabelWrapper>
          <S.Input
            type='text'
            placeholder='이름을 입력해주세요'
            {...register('name', { required: '이름을 입력해주세요' })}
          />
          {errors.name && <ErrorComponent message={errors?.name.message} />}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.LabelWrapper>
            <S.LabelImg src={phone} alt='phone' />
            <S.InputLabel>휴대폰 번호 입력</S.InputLabel>
          </S.LabelWrapper>
          <S.Input
            type='tel'
            placeholder='-없이 숫자만 입력해주세요 '
            {...register('phonenum', {
              required: '전화번호를 입력해주세요',
              pattern: {
                value: phoneRegex,
                message: '적합하지 않은 번호 형식입니다.',
              },
            })}
          />
          {errors.phonenum && (
            <ErrorComponent message={errors?.phonenum.message} />
          )}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.LabelWrapper>
            <S.LabelImg src={email} alt='email' />
            <S.InputLabel>아이디 (이메일)</S.InputLabel>
          </S.LabelWrapper>
          <S.Input
            type='email'
            placeholder='이메일 양식으로 입력해주세요'
            {...register('email', {
              required: '이메일을 입력해주세요',
              pattern: {
                value: emailRegex,
                message: '적합하지 않은 이메일 형식입니다.',
              },
            })}
          />
          {errors.email && <ErrorComponent message={errors?.email.message} />}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.LabelWrapper>
            <S.LabelImg src={passwordIcon} alt='password' />
            <S.InputLabel>비밀번호</S.InputLabel>
          </S.LabelWrapper>
          <S.Input
            type='password'
            placeholder='비밀번호를 입력해주세요 (8-20자, 영문 숫자 혼합)'
            {...register('password', {
              required: '비밀번호를 입력해주세요',
              pattern: {
                value: passwordRegex,
                message:
                  '비밀번호를 8-20자 사이로 지정해주세요.(영문 숫자 혼합)',
              },
            })}
          />
          {errors.password && (
            <ErrorComponent message={errors?.password.message} />
          )}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.LabelWrapper>
            <S.LabelImg src={passwordIcon} alt='password' />
            <S.InputLabel>비밀번호 확인</S.InputLabel>
          </S.LabelWrapper>
          <S.Input
            type='password'
            placeholder='비밀번호를 재입력해주세요'
            {...register('passwordConfirm', {
              required: '비밀번호를 재입력해주세요',
              validate: (value) =>
                value === watch('password') || '비밀번호가 일치하지 않습니다.',
            })}
          />
          {isPasswordConfirm && password && passwordConfirm && (
            <S.InputImg src={check} alt='check' />
          )}
          {errors.passwordConfirm && (
            <ErrorComponent message={errors?.passwordConfirm.message} />
          )}
        </S.InputWrapper>
        <S.SubmitButton
          $isDisabled={
            errors.name ||
            errors.phonenum ||
            errors.email ||
            errors.password ||
            errors.passwordConfirm ||
            !watch('name') ||
            !watch('phonenum') ||
            !watch('email') ||
            !watch('password') ||
            !watch('passwordConfirm')
          }
          type='submit'
          onClick={handleSubmit(onSubmit)}
        >
          다음
        </S.SubmitButton>
      </S.Signupform>
    </S.PageWrapper>
  );
}

export default Signup;
