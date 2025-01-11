import React, { useState, useEffect } from 'react';
import dropdown from '@/assets/buttonIcon/dropdown.svg';
import * as S from './Schedule.styles';
import { RegisterModal } from '@/types/schedule.type';
import { PersonalCategoryData, SharedCategoryData } from '@/types/category.type';
import { getCategories } from '@/api/categoryAPI';

interface ScheduleProps {
  formData: RegisterModal;
  setFormData: React.Dispatch<React.SetStateAction<RegisterModal>>;
  selectedDate: string;
}

const Schedule = ({ formData, setFormData, selectedDate }: ScheduleProps) => {
  const [calendarValue, setCalendarValue] = useState('');
  const [categoryName, setCategoryName] = useState<string>('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isAllDay, setIsAllDay] = useState(formData.isAllDay);;
  const [startTime, setStartTime] = useState(formData.startDate || '');
  const [endTime, setEndTime] = useState(formData.endDate || '');
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

  useEffect(() => {
    // selectedDate가 있을 경우 시작 날짜를 그 값으로 설정
    if (selectedDate) {
      setFormData((prev) => ({
        ...prev,
        startDate: selectedDate,
        endDate: selectedDate,
      }));
    }
  }, [selectedDate, setFormData]);

  const updateFormData = (key: keyof RegisterModal, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleCalendarChange = (value: string) => {
    setCalendarValue(value);
    setCategoryName(''); // 카테고리 초기화
    setIsCalendarOpen(false);
    //updateFormData('eventType', eventType); 해야 함
  };

  const handleCategoryChange = (name: string, id: number) => {
    setCategoryName(name);
    updateFormData('categoryId', id);
    setIsCategoryOpen(false);
  };

  const handleTimeChange = (value: string, isStart: boolean) => {
    const date = selectedDate || value.split('T')[0];  // selectedDate가 있으면 이를 사용, 없으면 기존 value에서 날짜 추출

    if (isAllDay) {
      // 종일 모드에서는 시간을 00:00과 23:59로 설정
      if (isStart) {
        updateFormData('startDate', `${date}T00:00`);
        setStartTime(`${date}T00:00`);
      } else {
        updateFormData('endDate', `${date}T23:59`);
        setEndTime(`${date}T23:59`);
      }
    } else {
      // 일반 모드에서는 사용자가 선택한 값 그대로 사용
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
      const fullDate = selectedDate || startTime.split('T')[0]; // selectedDate가 있으면 해당 날짜 사용, 없으면 startTime에서 날짜만 추출
      const startOfDay = `${fullDate}T00:00`;
      const endOfDay = `${fullDate}T23:59`;

      // startTime과 endTime이 기존 값과 다를 때만 갱신
      if (startTime !== startOfDay) {
        updateFormData('startDate', startOfDay); // 시작을 00:00으로 설정
        setStartTime(startOfDay);
      }
      if (endTime !== endOfDay) {
        updateFormData('endDate', endOfDay); // 종료를 23:59으로 설정
        setEndTime(endOfDay);
      }
    } else {
      // 종일 모드 해제 시, 시간 초기화
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
            <S.Select $hasValue={!!categoryName}>
              {categoryName || '카테고리 선택'}
            </S.Select>
            <S.DropdownIcon src={dropdown} alt="dropdown icon" />
            {isCategoryOpen && (
              <S.Options>
                {calendarValue === '내 캘린더' ? (
                  // 내 캘린더 선택 시 personalCategories에서 이름을 뿌림
                  personalCategories.map((category) => (
                    <S.Option
                      key={category.name}
                      onClick={() => handleCategoryChange(category.name, category.id)}
                    >
                      {category.name}
                    </S.Option>
                  ))
                ) : (
                  // 공용 캘린더 선택 시 sharedCategories의 카테고리 리스트 표시
                  sharedCategories.map((category) => (
                    <S.Option
                      key={category.name}
                      onClick={() => handleCategoryChange(category.name, category.id)}
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