import { AxiosResponse } from 'axios';
import instance from './instance';
import { API_MODAL } from '@/constants/API';
import type {
  RegisterModalResponse,
  RegisterModal,
} from '@/types/schedule.type';

export const postRegisterModal = (
  data: RegisterModal
): Promise<AxiosResponse<RegisterModalResponse>> => {
  return instance({
    url: API_MODAL.REGISTER,
    method: 'POST',
    data,
  });
};
