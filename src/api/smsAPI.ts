import { API_SMS } from '@/constants/API';

import instance from './instance';
import { SmsData } from '@/types/sms.type';

export const postSms = (data: SmsData[], memberNo: number) => {
  return instance({
    url: API_SMS.SMS,
    method: 'POST',
    data,
    headers: {
      'member-no': memberNo,
    },
  });
};
