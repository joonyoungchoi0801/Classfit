export const formatStatus = (status: string): string => {
  if (status === 'PRESENT') {
    return '출석';
  } else if (status === 'ABSENT') {
    return '결석';
  } else if (status === 'LATE') {
    return '지각';
  } else {
    return '출석';
  }
};

export const formatDate = (isoDate: string): string => {
  const date = new Date(isoDate);
  const month = date.getMonth() + 1;
  const day = date.getDate();

  return `${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`;
};
