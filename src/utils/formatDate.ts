const formatDateToISO = (inputDate: string): string => {
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

export default formatDateToISO;
