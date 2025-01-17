import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ScheduleSidebar.styles';
import downArrow from '@/assets/managesidebar/downarrow.svg';
import rightArrow from '@/assets/managesidebar/rightarrow.svg';
import plusbtn from '@/assets/schedulesidebar/plusbtn.svg';
import task from '@/assets/schedulesidebar/task.svg';
import kebob from '@/assets/schedulesidebar/kebob.svg';
import {
  getCategories,
  createCategory,
  editCategory,
  deleteCategory,
} from '@/api/categoryAPI';
import {
  PersonalCategoryData,
  SharedCategoryData,
} from '@/types/category.type';
import CategoryModal from '@/components/modal/categoryModal';
import Popup from '@/components/popup';
import CategoryEditModal from '@/components/modal/categoryModal/categoryEditModal';
import CategoryDeleteModal from '@/components/modal/categoryModal/categoryDeleteModal';
import { colorMapping } from '@/utils/colorMapping';

function ScheduleSidebar() {
  const location = useLocation();
  const url = location.pathname;
  const navigate = useNavigate();
  const isMyCalendarExpanded = url.startsWith('/schedule/my');
  const isSharedCalExpanded = url.startsWith('/schedule/shared');
  const [personalCategories, setPersonalCategories] = useState<
    PersonalCategoryData[]
  >([]);
  const [sharedCategories, setSharedCategories] = useState<
    SharedCategoryData[]
  >([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentType, setCurrentType] = useState<'PERSONAL' | 'SHARED'>(
    'PERSONAL'
  );
  const [popupState, setPopupState] = useState<{ [key: number]: boolean }>({});
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentCategoryData, setCurrentCategoryData] = useState<{
    id: number;
    name: string;
    color: string;
  } | null>(null);
  const [deleteCategoryData, setDeleteCategoryData] = useState<{
    id: number;
    name: string;
  } | null>(null);
  const [categoriesUpdated, setCategoriesUpdated] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        const { statusCode, data } = response.data;

        switch (statusCode) {
          case 200:
            setPersonalCategories(data.personalCategories);
            setSharedCategories(data.sharedCategories);
            break;
        }
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, [isModalOpen, categoriesUpdated]);

  const handleButtonClick = () => {
    navigate('/schedule/register/schedule');
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
        setCategoriesUpdated((prev) => !prev);
        handleCloseModal();
      }
    } catch (error) {
      console.error('Error saving category:', error);
    }
  };

  // 케밥 버튼
  const togglePopup = (categoryId: number) => {
    setPopupState((prev) => {
      const isCurrentlyOpen = prev[categoryId] || false;

      const updatedState: Record<number, boolean> = {};
      Object.keys(prev).forEach((key) => {
        updatedState[Number(key)] = false;
      });
      updatedState[categoryId] = !isCurrentlyOpen;

      return updatedState;
    });
  };

  const handleEdit = (categoryId: number) => {
    const category = [...personalCategories, ...sharedCategories].find(
      (cat) => cat.id === categoryId
    );
    if (category) {
      setCurrentCategoryData(category);
      setIsEditModalOpen(true);
    }
    setPopupState((prev) => ({
      ...prev,
      [categoryId]: false,
    }));
  };

  const handleCloseEditModal = () => {
    setIsEditModalOpen(false);
    setCurrentCategoryData(null);
  };

  // HEX에서 CODE 값을 찾는 함수
  const getColorCodeFromHex = (hex: string): string | undefined => {
    return Object.keys(colorMapping).find((key) => colorMapping[key] === hex);
  };

  const handleSaveEditedCategory = async (
    id: number,
    categoryName: string,
    color: string
  ) => {
    const mappedColor = getColorCodeFromHex(color) || color;
    try {
      const response = await editCategory(id, categoryName, mappedColor);
      if (response.status === 200) {
        const updatedCategory = response.data.data;

        setPersonalCategories((prev) =>
          prev.map((cat) =>
            cat.id === id
              ? {
                ...cat,
                name: updatedCategory.name,
                color:
                  colorMapping[updatedCategory.color] ||
                  updatedCategory.color,
              }
              : cat
          )
        );
        setSharedCategories((prev) =>
          prev.map((cat) =>
            cat.id === id
              ? {
                ...cat,
                name: updatedCategory.name,
                color:
                  colorMapping[updatedCategory.color] ||
                  updatedCategory.color,
              }
              : cat
          )
        );
      }
    } catch (error) {
      console.error('Error updating category:', error);
    }
  };

  const handleDelete = (categoryId: number, categoryName: string) => {
    setDeleteCategoryData({ id: categoryId, name: categoryName });
    setIsDeleteModalOpen(true);
    setPopupState((prev) => ({
      ...prev,
      [categoryId]: false,
    }));
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeleteCategoryData(null);
  };

  const handleDeleteCategory = async () => {
    try {
      if (deleteCategoryData?.id !== undefined) {
        const response = await deleteCategory(deleteCategoryData.id);
        if (response.status === 200) {
          setPersonalCategories((prev) =>
            prev.filter((cat) => cat.id !== deleteCategoryData.id)
          );
          setSharedCategories((prev) =>
            prev.filter((cat) => cat.id !== deleteCategoryData.id)
          );
          setIsDeleteModalOpen(false);
        }
      }
    } catch (error) {
      console.error('Error deleting category:', error);
    }
  };

  return (
    <S.ScheduleSidebarWrapper>
      <S.ScheduleAddBtn
        $isClicked={url.startsWith('/schedule/register')}
        onClick={handleButtonClick}
      >
        일정등록
      </S.ScheduleAddBtn>

      <S.CalendarSection>
        <S.CalendarItem>
          <S.MyCalendar>
            <S.Icon
              src={isMyCalendarExpanded ? downArrow : rightArrow}
              alt='arrow'
            />
            <S.CalendarItemText
              onClick={() => navigate('/schedule/my')}
              $isActive={url === '/schedule/my'}
            >
              내 캘린더
            </S.CalendarItemText>
          </S.MyCalendar>
          <S.CalendarAddIcon
            src={plusbtn}
            alt='plus'
            onClick={() => handleOpenModal('PERSONAL')}
          />
        </S.CalendarItem>
        {isMyCalendarExpanded && (
          <S.CategoryList>
            {personalCategories.map((item) => (
              <S.CategoryItem key={item.id}>
                <S.Category>
                  <S.CategoryIcon
                    color={item.color}
                    src={task}
                    alt='category icon'
                  />
                  {item.name}
                </S.Category>
                <S.KebobIcon
                  src={kebob}
                  alt='kebob icon'
                  onClick={() => togglePopup(item.id)}
                />
                {popupState[item.id] && (
                  <Popup
                    isOpen={popupState[item.id]}
                    onEdit={() => handleEdit(item.id)}
                    onDelete={() => handleDelete(item.id, item.name)}
                  />
                )}
              </S.CategoryItem>
            ))}
            <S.TaskItem>
              <S.Category>
                <S.TaskIcon src={task} alt='category icon' />
                Task
              </S.Category>
            </S.TaskItem>
          </S.CategoryList>
        )}

        <S.CalendarItem>
          <S.SharedCalendar>
            <S.Icon
              src={isSharedCalExpanded ? downArrow : rightArrow}
              alt='arrow'
            />
            <S.CalendarItemText
              onClick={() => navigate('/schedule/shared')}
              $isActive={url === '/schedule/shared'}
            >
              공용 캘린더
            </S.CalendarItemText>
          </S.SharedCalendar>
          <S.CalendarAddIcon
            src={plusbtn}
            alt='plus'
            onClick={() => handleOpenModal('SHARED')}
          />
        </S.CalendarItem>
        {isSharedCalExpanded && (
          <S.SharedList>
            {sharedCategories.map((item) => (
              <S.SharedItem key={item.id}>
                <S.Shared>
                  <S.CategoryIcon
                    color={item.color}
                    src={task}
                    alt='shared category icon'
                  />
                  {item.name}
                </S.Shared>
                <S.KebobIcon
                  src={kebob}
                  alt='kebob icon'
                  onClick={() => togglePopup(item.id)}
                />
                {popupState[item.id] && (
                  <Popup
                    isOpen={popupState[item.id]}
                    onEdit={() => handleEdit(item.id)}
                    onDelete={() => handleDelete(item.id, item.name)}
                  />
                )}
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
      <CategoryEditModal
        isOpen={isEditModalOpen}
        categoryData={currentCategoryData}
        onClose={handleCloseEditModal}
        onSave={handleSaveEditedCategory}
      />
      <CategoryDeleteModal
        isOpen={isDeleteModalOpen}
        categoryName={deleteCategoryData?.name || ''}
        onClose={handleCloseDeleteModal}
        onConfirm={handleDeleteCategory}
      />
    </S.ScheduleSidebarWrapper>
  );
}

export default ScheduleSidebar;
