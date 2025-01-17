export const formatDateToISO = (inputDate: string): string => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  inputDate = inputDate.replace(/[^\d\/]/g, '');

  const [month, day] = inputDate.split('/').map(Number);

  if (month < 1 || month > 12 || day < 1 || day > 31) {
    throw new Error('Invalid date format');
  }

  let finalYear = currentYear;

  if (month === 12 && currentMonth === 1) {
    finalYear -= 1;
  } else if (month === 1 && currentMonth === 12) {
    finalYear += 1;
  }

  return `${finalYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

export const formatDateToYYMMDD = (inputDate: string) => {
  const [year, month, day] = inputDate.split('-');
  return `${year.slice(2)}.${month}.${day}`;
};

export const formatDateToYYMMDD2 = (dateString: string) => {
  const date = new Date(dateString);

  // 년, 월, 일 추출
  const year = date.getFullYear().toString().slice(2); // 2025 -> 25
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0'); // 1자리일 경우 0을 추가

  // 원하는 형식으로 조합
  return `${year}.${month}.${day}`;
};

export const fomatStringToDate = (dateString: string) => {
  const date = new Date(dateString); // ISO 8601 형식이므로 Date 생성자로 변환 가능
  if (isNaN(date.getTime())) {
    return new Date(); // 날짜가 유효하지 않을 경우 현재 시간 반환
  }
  return date;
};

export const formatDateToYYYYMMDD = (date: Date) => {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    throw new Error('Invalid Date object');
  }
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0'); // 월은 0부터 시작하므로 +1
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};
