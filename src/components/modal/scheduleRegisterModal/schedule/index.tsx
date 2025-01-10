import React, { useState, useEffect } from 'react';
import dropdown from '@/assets/buttonIcon/dropdown.svg';
import * as S from './Schedule.styles';
import { RegisterModal } from '@/types/schedule.type';
import { PersonalCategoryData, SharedCategoryData } from '@/types/category.type';
import { getCategories } from '@/api/categoryAPI';

interface ScheduleProps {
  formData: RegisterModal;
  setFormData: React.Dispatch<React.SetStateAction<RegisterModal>>;
}

const Schedule = ({ formData, setFormData }: ScheduleProps) => {
  const [calendarValue, setCalendarValue] = useState('');
  const [categoryValue, setCategoryValue] = useState<number>(0);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isAllDay, setIsAllDay] = useState(formData.isAllDay);;
  const [startTime, setStartTime] = useState(formData.startDate);
  const [endTime, setEndTime] = useState(formData.endDate)
  const [personalCategories, setPersonalCategories] = useState<PersonalCategoryData[]>([]);
  const [sharedCategories, setSharedCategories] = useState<SharedCategoryData[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        const { data } = response.data;

        const mappedPersonalCategories = data.personalCategories.map((category: PersonalCategoryData) => ({
          ...category,
        }));
        const mappedSharedCategories = data.sharedCategories.map((category: SharedCategoryData) => ({
          ...category,
        }));

        setPersonalCategories(mappedPersonalCategories);
        setSharedCategories(mappedSharedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const updateFormData = (key: keyof RegisterModal, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleCalendarChange = (value: string) => {
    setCalendarValue(value);
    setCategoryValue(0); // 카테고리 초기화
    if (value === '내 캘린더') {
      updateFormData('startDate', '');
    }
    setIsCalendarOpen(false);
  };

  const handleCategoryChange = (value: number) => {
    setCategoryValue(value);
    updateFormData('categoryId', value);
    setIsCategoryOpen(false);
  };

  const handleTimeChange = (value: string, isStart: boolean) => {
    if (isAllDay) {
      // 종일일 경우, 날짜만 사용하고 시간을 고정 설정
      const datePart = value.split('T')[0];
      if (isStart) {
        updateFormData('startDate', `${datePart}T00:00`);
        setStartTime(`${datePart}T00:00`);
        updateFormData('endDate', `${datePart}T23:59`);
        setEndTime(`${datePart}T23:59`);
      }
    } else {
      // 일반 모드에서는 사용자가 선택한 값을 그대로 사용
      if (isStart) {
        updateFormData('startDate', value);
        setStartTime(value);
      } else {
        updateFormData('endDate', value);
        setEndTime(value);
      }
    }
  };

  const handleAllDayChange = (checked: boolean) => {
    setIsAllDay(checked);
    if (checked) {
      // 종일 모드로 전환: 시간을 고정하지만, 날짜는 유지
      if (startTime) {
        const startDate = startTime.split('T')[0];
        updateFormData('startDate', `${startDate}T00:00`);
        updateFormData('endDate', `${startDate}T23:59`); // 종료 날짜를 시작 날짜로 맞춤
      }
    } else {
      // 종일 모드 해제: 선택된 날짜 초기화
      setStartTime('');
      setEndTime('');
      updateFormData('startDate', '');
      updateFormData('endDate', '');
    }
  };

  return (
    <>
      <S.FormGroup>
        <S.Label>일정명</S.Label>
        <S.Input
          type="text"
          placeholder="일정명 입력"
          value={formData.name}
          onChange={(e) => updateFormData('name', e.target.value)}
        />
      </S.FormGroup>

      <S.Row>
        <S.FormGroup>
          <S.Label>캘린더</S.Label>
          <S.SelectWrapper onClick={() => setIsCalendarOpen(!isCalendarOpen)}>
            <S.Select $hasValue={!!calendarValue}>
              {calendarValue || '캘린더 선택'}
            </S.Select>
            <S.DropdownIcon src={dropdown} alt="dropdown icon" />
            {isCalendarOpen && (
              <S.Options>
                <S.Option onClick={() => handleCalendarChange('내 캘린더')}>
                  내 캘린더
                </S.Option>
                <S.Option onClick={() => handleCalendarChange('공용 캘린더')}>
                  공용 캘린더
                </S.Option>
              </S.Options>
            )}
          </S.SelectWrapper>
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>카테고리</S.Label>
          <S.SelectWrapper onClick={() => setIsCategoryOpen(!isCategoryOpen)}>
            <S.Select $hasValue={!!categoryValue}>
              {categoryValue || '카테고리 선택'}
            </S.Select>
            <S.DropdownIcon src={dropdown} alt="dropdown icon" />
            {isCategoryOpen && (
              <S.Options>
                {calendarValue === '내 캘린더' ? (
                  // 내 캘린더 선택 시 personalCategories에서 이름을 뿌림
                  personalCategories.map((category) => (
                    <S.Option
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.name}
                    </S.Option>
                  ))
                ) : (
                  // 공용 캘린더 선택 시 sharedCategories의 카테고리 리스트 표시
                  sharedCategories.map((category) => (
                    <S.Option
                      key={category.id}
                      onClick={() => handleCategoryChange(category.id)}
                    >
                      {category.name}
                    </S.Option>
                  ))
                )}
              </S.Options>
            )}
          </S.SelectWrapper>
        </S.FormGroup>
      </S.Row>

      <S.FormGroup>
        <S.Label>일시</S.Label>
        <S.DateWrapper>
          <S.DateInputWrapper>
            <S.DateInput
              type="datetime-local"
              value={startTime}
              onChange={(e) => handleTimeChange(e.target.value, true)}
              placeholder="시작 날짜와 시간 선택"
            />
          </S.DateInputWrapper>
          <S.SpanTag>—</S.SpanTag>
          <S.DateInputWrapper>
            <S.DateInput
              type="datetime-local"
              value={endTime}
              onChange={(e) => handleTimeChange(e.target.value, false)}
              placeholder="종료 날짜와 시간 선택"
            />
          </S.DateInputWrapper>
        </S.DateWrapper>
      </S.FormGroup>
      <S.CheckboxGroup>
        <S.Checkbox
          type="checkbox"
          checked={isAllDay}
          onChange={(e) => handleAllDayChange(e.target.checked)}
        />
        <S.SpanText>종일</S.SpanText>
      </S.CheckboxGroup>

    </>
  );
};

export default Schedule;