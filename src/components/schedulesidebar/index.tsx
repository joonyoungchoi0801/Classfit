import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ScheduleSidebar.styles';
import downArrow from '@/assets/managesidebar/downarrow.svg';
import rightArrow from '@/assets/managesidebar/rightarrow.svg';
import plusbtn from '@/assets/schedulesidebar/plusbtn.svg';
import task from '@/assets/schedulesidebar/task.svg';
import kebob from '@/assets/schedulesidebar/kebob.svg';

function ScheduleSidebar() {
  const location = useLocation();
  const url = location.pathname;
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [isMyCalendarExpanded, setIsMyCalendarExpanded] = useState(false);
  const [isSharedCalExpanded, setIsSharedCalExpanded] = useState(false);

  const handleButtonClick = () => {
    setIsClicked(!isClicked);
    navigate('/schedule/register');
  };

  const toggleMyCalendar = () => {
    setIsMyCalendarExpanded(!isMyCalendarExpanded);
  };

  const toggleSharedCal = () => {
    setIsSharedCalExpanded(!isSharedCalExpanded);
  };

  const calendarItems = [
    { id: 1, name: '학부모 상담', color: '#FFB6C1' },
    { id: 2, name: '시험지 등록', color: '#FFC0CB' },
    { id: 3, name: '정기 회의', color: '#7FFFD4' },
    { id: 4, name: '직보', color: '#1E90FF' },
    { id: 5, name: 'Task', color: '#000000' },
  ];

  return (
    <S.ScheduleSidebarWrapper>
      <S.ScheduleAddBtn isClicked={isClicked} onClick={handleButtonClick}>
        일정등록
      </S.ScheduleAddBtn>

      <S.CalendarSection>
        <S.CalendarItem onClick={toggleMyCalendar}>
          <S.MyCalendar>
            <S.Icon src={isMyCalendarExpanded ? downArrow : rightArrow} alt="arrow" />
            <S.CalendarItemText>내 캘린더</S.CalendarItemText>
          </S.MyCalendar>
          <S.CalendarAddIcon src={plusbtn} alt="plus" />
        </S.CalendarItem>
        {isMyCalendarExpanded && (
          <S.CategoryList>
            {calendarItems.map((item) => (
              <S.CategoryItem key={item.id} color={item.color}>
                <S.Category>
                  <S.CategoryIcon color={item.color} src={task} alt="category icon" />
                  {item.name}
                </S.Category>
                <S.KebobIcon src={kebob} alt="kebob icon" />
              </S.CategoryItem>
            ))}
          </S.CategoryList>
        )}


        <S.CalendarItem onClick={toggleSharedCal}>
          <S.SharedCalendar>
            <S.Icon src={isSharedCalExpanded ? downArrow : rightArrow} alt="arrow" />
            <S.CalendarItemText>공용 캘린더</S.CalendarItemText>
          </S.SharedCalendar>
          <S.CalendarAddIcon src={plusbtn} alt="plus" />
        </S.CalendarItem>
        {isSharedCalExpanded && (
          <S.SharedList>
            <S.SharedItem>
              <S.Shared>

              </S.Shared>
            </S.SharedItem>
          </S.SharedList>
        )}
      </S.CalendarSection>
    </S.ScheduleSidebarWrapper>
  );
}

export default ScheduleSidebar;