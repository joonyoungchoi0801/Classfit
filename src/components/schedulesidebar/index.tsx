import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ScheduleSidebar.styles';
import arrow from '@/assets/schedulesidebar/arrow.svg';
import plusbtn from '@/assets/schedulesidebar/plusbtn.svg';

function ScheduleSidebar() {
  const location = useLocation();
  const url = location.pathname;
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    navigate('/schedule/register');
  };

  return (
    <S.ScheduleSidebarWrapper>
      <S.ScheduleAddBtn isClicked={isClicked} onClick={handleButtonClick}>
        일정등록
      </S.ScheduleAddBtn>

      <S.CalendarSection>
        <S.CalendarItem>
          <S.CalendarItemIcon src={arrow} alt="arrow" />
          <S.CalendarItemText>
            내 캘린더
          </S.CalendarItemText>
          <S.CalendarAddBtn>
            <S.CalendarAddIcon src={plusbtn} alt="plus" />
          </S.CalendarAddBtn>
        </S.CalendarItem>

        <S.CalendarItem>
          <S.CalendarItemIcon src={arrow} alt="arrow" />
          <S.CalendarItemText>
            공용 캘린더
          </S.CalendarItemText>
          <S.CalendarAddBtn>
            <S.CalendarAddIcon src={plusbtn} alt="plus" />
          </S.CalendarAddBtn>
        </S.CalendarItem>
      </S.CalendarSection>
    </S.ScheduleSidebarWrapper>
  );
}

export default ScheduleSidebar;