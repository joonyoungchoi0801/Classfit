import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ScheduleSidebar.styles';
import downArrow from '@/assets/managesidebar/downarrow.svg';
import rightArrow from '@/assets/managesidebar/rightarrow.svg';
import plusbtn from '@/assets/schedulesidebar/plusbtn.svg';
import task from '@/assets/schedulesidebar/task.svg';
import kebob from '@/assets/schedulesidebar/kebob.svg';
import { getCategories, createCategory } from '@/api/categoryAPI';
import { PersonalCategoryData, SharedCategoryData } from '@/types/category.type';
import { colorMapping } from '@/utils/colorMapping';
import CategoryModal from '@/components/modal/categoryModal';

function ScheduleSidebar() {
  const location = useLocation();
  const url = location.pathname;
  const navigate = useNavigate();
  const [isClicked, setIsClicked] = useState(false);
  const [isMyCalendarExpanded, setIsMyCalendarExpanded] = useState(false);
  const [isSharedCalExpanded, setIsSharedCalExpanded] = useState(false);
  const [personalCategories, setPersonalCategories] = useState<PersonalCategoryData[]>([]);
  const [sharedCategories, setSharedCategories] = useState<SharedCategoryData[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentType, setCurrentType] = useState<'PERSONAL' | 'SHARED'>('PERSONAL');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        const { statusCode, data, message } = response.data;

        switch (statusCode) {
          case 200:
            // personalCategories에 색상 매핑
            const mappedPersonalCategories = data.personalCategories.map((category: PersonalCategoryData) => ({
              ...category,
              color: colorMapping[category.color] || category.color,
            }));

            setPersonalCategories(mappedPersonalCategories);
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

  const handleOpenModal = (type: 'PERSONAL' | 'SHARED') => {
    setCurrentType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSaveCategory = async (categoryName: string, color: string) => {
    try {
      const response = await createCategory(categoryName, color, currentType);
      if (response.status === 200) {
        const newCategory = response.data.data;
        if (currentType === 'PERSONAL') {
          setPersonalCategories((prev) => [...prev, { ...newCategory, color: colorMapping[newCategory.color] || newCategory.color }]);
        } else if (currentType === 'SHARED') {
          setSharedCategories((prev) => [...prev, newCategory]);
        }
        handleCloseModal();
      }
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  return (
    <S.ScheduleSidebarWrapper>
      <S.ScheduleAddBtn $isClicked={isClicked} onClick={handleButtonClick}>
        일정등록
      </S.ScheduleAddBtn>

      <S.CalendarSection>
        <S.CalendarItem>
          <S.MyCalendar onClick={toggleMyCalendar}>
            <S.Icon src={isMyCalendarExpanded ? downArrow : rightArrow} alt="arrow" />
            <S.CalendarItemText>내 캘린더</S.CalendarItemText>
          </S.MyCalendar>
          <S.CalendarAddIcon src={plusbtn} alt="plus" onClick={() => handleOpenModal('PERSONAL')} />
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
            <S.TaskItem>
              <S.Category>
                <S.TaskIcon src={task} alt="category icon" />
                Task
              </S.Category>
            </S.TaskItem>
          </S.CategoryList>
        )}


        <S.CalendarItem >
          <S.SharedCalendar onClick={toggleSharedCal}>
            <S.Icon src={isSharedCalExpanded ? downArrow : rightArrow} alt="arrow" />
            <S.CalendarItemText>공용 캘린더</S.CalendarItemText>
          </S.SharedCalendar>
          <S.CalendarAddIcon src={plusbtn} alt="plus" onClick={() => handleOpenModal('SHARED')} />
        </S.CalendarItem>
        {isSharedCalExpanded && (
          <S.SharedList>
            {sharedCategories.map((item) => (
              <S.SharedItem key={item.id}>
                <S.Shared>
                  {/* <S.CategoryIcon color={item.color} src={task} alt="shared category icon" /> */}
                  {item.name}
                </S.Shared>
                <S.KebobIcon src={kebob} alt="kebob icon" />
              </S.SharedItem>
            ))}
          </S.SharedList>
        )}
      </S.CalendarSection>

      <CategoryModal
        isOpen={isModalOpen}
        type={currentType}
        onClose={handleCloseModal}
        onSave={handleSaveCategory}
      />
    </S.ScheduleSidebarWrapper>
  );
}

export default ScheduleSidebar;