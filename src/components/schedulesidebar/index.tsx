import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ScheduleSidebar.styles';
import downArrow from '@/assets/managesidebar/downarrow.svg';
import rightArrow from '@/assets/managesidebar/rightarrow.svg';
import plusbtn from '@/assets/schedulesidebar/plusbtn.svg';
import task from '@/assets/schedulesidebar/task.svg';
import kebob from '@/assets/schedulesidebar/kebob.svg';
import { getCategories } from '@/api/categoryAPI';
import { PersonalCategoryData, SharedCategoryData } from '@/types/category.type';

function ScheduleSidebar() {
  const location = useLocation();
  const url = location.pathname;
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [isMyCalendarExpanded, setIsMyCalendarExpanded] = useState(false);
  const [isSharedCalExpanded, setIsSharedCalExpanded] = useState(false);
  const [personalCategories, setPersonalCategories] = useState<PersonalCategoryData[]>([]);
  const [sharedCategories, setSharedCategories] = useState<SharedCategoryData[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        const { statusCode, data, message } = response.data;

        switch (statusCode) {
          case 200:
            setPersonalCategories(data.personalCategories);
            setSharedCategories(data.sharedCategories);
            break;
          case 404:
            console.log('ACCESS_DENIED: 접근이 거부되었습니다.');
            break;
          case 401:
            console.log('UNAUTHORIZED: 인증에 실패했습니다.');
            break;
          default:
            console.log(message || '알 수 없는 오류가 발생했습니다.');
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

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

  // const calendarItems = [
  //   { id: 1, name: '학부모 상담', color: '#FFB6C1' },
  //   { id: 2, name: '시험지 등록', color: '#FFC0CB' },
  //   { id: 3, name: '정기 회의', color: '#7FFFD4' },
  //   { id: 4, name: '직보', color: '#1E90FF' },
  //   { id: 5, name: 'Task', color: '#000000' },
  // ];

  return (
    <S.ScheduleSidebarWrapper>
      <S.ScheduleAddBtn $isClicked={isClicked} onClick={handleButtonClick}>
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
            {personalCategories.map((item) => (
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
            {sharedCategories.map((item) => (
              <S.SharedItem key={item.id}>
                <S.Shared>
                  <S.CategoryIcon color={item.color} src={task} alt="shared category icon" />
                  {item.name}
                </S.Shared>
                <S.KebobIcon src={kebob} alt="kebob icon" />
              </S.SharedItem>
            ))}
          </S.SharedList>
        )}
      </S.CalendarSection>
    </S.ScheduleSidebarWrapper>
  );
}

export default ScheduleSidebar;