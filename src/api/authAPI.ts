import instance from './instance';
import { API_AUTH, API_ACADEMY, API_EMAIL } from '@/constants/API';
import {
  LoginData,
  SignupData,
  AcademyCreateData,
  AcademyInviteData,
  EmailVerifyData,
  PasswordData,
} from '@/types/auth.type';

export const postLogin = (data: LoginData) => {
  return instance({
    url: API_AUTH.LOGIN,
    method: 'POST',
    data,
  });
};

export const postSignup = (data: SignupData) => {
  return instance({
    url: API_AUTH.SIGNUP,
    method: 'POST',
    data,
  });
};

export const postLogout = () => {
  return instance({
    url: API_AUTH.LOGOUT,
    method: 'POST',
  });
};

export const postAcademyInvite = (data: AcademyInviteData) => {
  return instance({
    url: API_ACADEMY.INVITE,
    method: 'POST',
    data,
  });
};

export const postAcademyCreate = (data: AcademyCreateData) => {
  return instance({
    url: API_ACADEMY.CREATE,
    method: 'POST',
    data,
  });
};

export const postVerifyEmail = (data: EmailVerifyData) => {
  return instance({
    url: API_EMAIL.VERIFY,
    method: 'POST',
    data,
  });
};

export const postSendEmail = (data: Omit<EmailVerifyData, 'code'>) => {
  return instance({
    url: API_EMAIL.SEND,
    method: 'POST',
    data,
  });
};
export const postChangePassword = (data: PasswordData) => {
  return instance({
    url: API_AUTH.PASSWORD,
    method: 'POST',
    data,
  });
};
