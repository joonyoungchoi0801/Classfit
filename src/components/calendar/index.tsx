import { useState } from 'react';
import * as S from './Calendar.styles';

function Calendar() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const day = currentDate.getDate();
  const firstDayOfMonth = new Date(year, month, 1); //달력시작 날짜 일요일로 설정
  const startDay = new Date(firstDayOfMonth).getDay();
  //   return (

  //   );
}

export default Calendar;
