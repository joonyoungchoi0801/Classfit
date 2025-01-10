import { useCallback, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';

import * as S from './style/signup.styles';
import passwordIcon from '@/assets/auth/signup/password.svg';
import check from '@/assets/auth/signup/check.svg';
import Error from '@/assets/auth/signup/error.svg';
import eyeon from '@/assets/auth/signup/eyeon.svg';
import eyeoff from '@/assets/auth/signup/eyeoff.svg';
import type { ErrorProps } from './type/signup.type';
import { useNavigate } from 'react-router-dom';
import { NewPasswordType } from './type/newpassword.type';
import { postChangePassword } from '@/api/authAPI';

const ErrorComponent = ({ message }: ErrorProps) => (
  <S.Error>
    <S.ErrorImg src={Error} alt='error' />
    <S.ErrorMsg> {message}</S.ErrorMsg>
  </S.Error>
);

function NewPassword() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<NewPasswordType>();
  const [isPasswordConfirm, setIsPasswordConfirm] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
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

  const passwordRegex =
    /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d!@#$%^&*(),.?":{}|<>]{8,20}$/;

  const onSubmit = async (data: NewPasswordType) => {
    try {
      const passwordData = {
        email: sessionStorage.getItem('certificateEmail') || '',
        password: data.password,
        passwordConfirm: data.passwordConfirm,
        emailToken: sessionStorage.getItem('certificateToken') || '',
      };
      await postChangePassword(passwordData);
      navigate('/signin');
    } catch (error) {
      alert('비밀번호 변경에 실패했습니다.');
    }
  };

  return (
    <S.PageWrapper>
      <S.Signupform onSubmit={handleSubmit(onSubmit)}>
        <S.LabelContainer>
          <S.Label>새로운 비밀번호를 입력해주세요.</S.Label>
          <S.SubLabel>이전과 동일한 비밀번호는 사용할 수 없어요.</S.SubLabel>
        </S.LabelContainer>

        <S.InputWrapper>
          <S.LabelWrapper>
            <S.LabelImg src={passwordIcon} alt='password' />
            <S.InputLabel>비밀번호</S.InputLabel>
          </S.LabelWrapper>
          <S.InputContainer>
            <S.Input
              type={isPasswordVisible ? 'text' : 'password'}
              placeholder='새로운 비밀번호을 입력해주세요 (8-20자)'
              {...register('password', {
                required: '비밀번호를 입력해주세요',
                pattern: {
                  value: passwordRegex,
                  message: '비밀번호를 8-20자 사이로 지정해주세요.',
                },
              })}
            />
            <S.InputImg
              src={isPasswordVisible ? eyeon : eyeoff}
              alt='eye'
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            />
          </S.InputContainer>

          {errors.password && (
            <ErrorComponent message={errors?.password.message} />
          )}
        </S.InputWrapper>
        <S.InputWrapper>
          <S.LabelWrapper>
            <S.LabelImg src={passwordIcon} alt='password' />
            <S.InputLabel>비밀번호 확인</S.InputLabel>
          </S.LabelWrapper>
          <S.InputContainer>
            <S.Input
              type='password'
              placeholder='비밀번호를 재입력해주세요'
              {...register('passwordConfirm', {
                required: '비밀번호를 재입력해주세요',
                validate: (value) =>
                  value === watch('password') ||
                  '비밀번호가 일치하지 않습니다.',
              })}
            />
            {isPasswordConfirm && password && passwordConfirm && (
              <S.InputImg src={check} alt='check' />
            )}
          </S.InputContainer>

          {errors.passwordConfirm && (
            <ErrorComponent message={errors?.passwordConfirm.message} />
          )}
        </S.InputWrapper>
        <S.SubmitButton
          $isDisabled={
            errors.password ||
            errors.passwordConfirm ||
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

export default NewPassword;
