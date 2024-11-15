import instance from './instance';

import { API_EXCEL } from '@/constants/API';

export const excelDownload = (month: number, subClassId?: number) => {
  return instance({
    url: API_EXCEL.EXCEL(month, subClassId),
    method: 'GET',
    params: {
      month,
      subClassId,
    },
  });
};
