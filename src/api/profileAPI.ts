import { API_PROFILE } from '@/constants/API';
import instance from './instance';

export const getProfile = () => {
  return instance({
    url: API_PROFILE.PROFILE,
    method: 'GET',
  });
};

export const postProfile = (birth: string, subject: string) => {
  return instance({
    url: API_PROFILE.PROFILE,
    method: 'POST',
    data: {
      birth,
      subject,
    },
  });
};

export const getInvitationCode = () => {
  return instance({
    url: API_PROFILE.INVITE,
    method: 'GET',
  });
};

export const getInvitationList = () => {
  return instance({
    url: API_PROFILE.INVITE_LIST,
    method: 'GET',
  });
};

export const postInvitation = (name: string, email: string) => {
  return instance({
    url: API_PROFILE.INVITE,
    method: 'POST',
    data: {
      name,
      email,
    },
  });
};
