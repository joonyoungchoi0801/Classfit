const formatDateToISO = (inputDate: string): string => {
  const currentYear = new Date().getFullYear();
  const [month, day] = inputDate.split('/').map(Number);
  return `${currentYear}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
};

export default formatDateToISO;
