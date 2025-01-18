import React, { useState, useEffect } from 'react';
import dropdown from '@/assets/buttonIcon/dropdown.svg';
import * as S from './Schedule.styles';
import { EventType, RegisterModal } from '@/types/schedule.type';
import {
  PersonalCategoryData,
  SharedCategoryData,
} from '@/types/category.type';
import { getCategories } from '@/api/categoryAPI';

const RepeatOptions = ['반복 안함', '매일', '매주', '매월', '매년'];
const RepeatOptionsAPI: Record<string, string | null> = {
  '반복 안함': 'NONE',
  매일: 'DAILY',
  매주: 'WEEKLY',
  매월: 'MONTHLY',
  매년: 'YEARLY',
};

enum EventRepeatType {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}

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
  const [isAllDay, setIsAllDay] = useState(formData.isAllDay);
  const [startTime, setStartTime] = useState(formData.startDate || '');
  const [endTime, setEndTime] = useState(formData.endDate || '');
  const [personalCategories, setPersonalCategories] = useState<
    PersonalCategoryData[]
  >([]);
  const [sharedCategories, setSharedCategories] = useState<
    SharedCategoryData[]
  >([]);
  const [isRepeatOpen, setIsRepeatOpen] = useState(false);
  const [repeatValue, setRepeatValue] = useState('');
  const [repeatStopValue, setRepeatStopValue] = useState(''); // 반복 종료 (날짜 지정, 없음)
  const [repeatStopDate, setRepeatStopDate] = useState(''); //반복종료일자

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        const { data } = response.data;

        const mappedPersonalCategories = data.personalCategories.map(
          (category: PersonalCategoryData) => ({
            ...category,
          })
        );
        const mappedSharedCategories = data.sharedCategories.map(
          (category: SharedCategoryData) => ({
            ...category,
          })
        );

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
      const dateWithTime = `${selectedDate}T00:00`;
      setFormData((prev) => ({
        ...prev,
        startDate: dateWithTime,
        endDate: dateWithTime,
      }));
    }
  }, [selectedDate, setFormData]);

  const updateFormData = (key: keyof RegisterModal, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleCalendarChange = (value: string) => {
    const calendarType = value === '내 캘린더' ? 'PERSONAL' : 'SHARED';

    setCalendarValue(value);
    updateFormData('calendarType', calendarType);
    setCategoryName('');
    setIsCalendarOpen(false);
  };

  const handleCategoryChange = (name: string, id: number) => {
    setCategoryName(name);
    updateFormData('categoryId', id);
    setIsCategoryOpen(false);
  };

  const handleTimeChange = (value: string, isStart: boolean) => {
    const date = selectedDate || value.split('T')[0];

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
        setStartTime(value);
        updateFormData('startDate', value);
      } else {
        setEndTime(value);
        updateFormData('endDate', value);
      }
    }
  };

  const handleAllDayChange = (checked: boolean) => {
    setIsAllDay(checked);
    updateFormData('isAllDay', checked);

    if (checked) {
      const fullDate = selectedDate || startTime.split('T')[0];
      const startOfDay = `${fullDate}T00:00`;
      const endOfDay = `${fullDate}T23:59`;

      // startTime과 endTime이 기존 값과 다를 때만 갱신
      if (startTime !== startOfDay) {
        updateFormData('startDate', startOfDay);
        setStartTime(startOfDay);
      }
      if (endTime !== endOfDay) {
        updateFormData('endDate', endOfDay);
        setEndTime(endOfDay);
      }
    } else {
      setStartTime('');
      setEndTime('');
      updateFormData('startDate', '');
      updateFormData('endDate', '');
    }
  };

  const handleRepeatChange = (value: string) => {
    setRepeatValue(value);
    setIsRepeatOpen(false);
    updateFormData(
      'eventRepeatType',
      RepeatOptionsAPI[value] as EventRepeatType
    );
  };

  const handleRepeatStopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setRepeatStopValue(value);

    if (value === 'date') {
      // 반복 종료일자를 새로 지정하지 않은 상태에서 updateFormData가 호출되지 않도록 처리
      if (repeatStopDate) {
        updateFormData('repeatEndDate', new Date(repeatStopDate).toISOString());
      }
    } else {
      updateFormData('repeatEndDate', null);
    }
  };

  const handleRepeatStopDateChange = (value: string) => {
    setRepeatStopDate(value);

    if (repeatStopValue === 'date') {
      updateFormData('repeatEndDate', new Date(value).toISOString());
    }
  };

  return (
    <>
      <S.FormGroup>
        <S.Label>일정명</S.Label>
        <S.Input
          type='text'
          placeholder='일정명 입력'
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
            <S.DropdownIcon src={dropdown} alt='dropdown icon' />
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
            <S.DropdownIcon src={dropdown} alt='dropdown icon' />
            {isCategoryOpen && (
              <S.Options>
                {calendarValue === '내 캘린더'
                  ? personalCategories.map((category) => (
                      <S.Option
                        key={category.name}
                        onClick={() =>
                          handleCategoryChange(category.name, category.id)
                        }
                      >
                        {category.name}
                      </S.Option>
                    ))
                  : sharedCategories.map((category) => (
                      <S.Option
                        key={category.name}
                        onClick={() =>
                          handleCategoryChange(category.name, category.id)
                        }
                      >
                        {category.name}
                      </S.Option>
                    ))}
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
              type='datetime-local'
              value={startTime || `${selectedDate}T00:00`}
              onChange={(e) => handleTimeChange(e.target.value, true)}
              placeholder='시작 날짜와 시간 선택'
            />
          </S.DateInputWrapper>
          <S.SpanTag>—</S.SpanTag>
          <S.DateInputWrapper>
            <S.DateInput
              type='datetime-local'
              value={endTime}
              onChange={(e) => handleTimeChange(e.target.value, false)}
              placeholder='종료 날짜와 시간 선택'
            />
          </S.DateInputWrapper>
        </S.DateWrapper>
      </S.FormGroup>
      <S.CheckboxGroup>
        <S.Checkbox
          type='checkbox'
          checked={isAllDay}
          onChange={(e) => handleAllDayChange(e.target.checked)}
        />
        <S.SpanText>종일</S.SpanText>
      </S.CheckboxGroup>

      <S.FormGroup>
        <S.Label>반복</S.Label>
        <S.SelectWrapper>
          <S.Select
            onClick={() => setIsRepeatOpen(!isRepeatOpen)}
            $hasValue={!!repeatValue}
          >
            {repeatValue || '반복 선택'}
          </S.Select>
          <S.DropdownIcon src={dropdown} alt='dropdown icon' />
          {isRepeatOpen && (
            <S.Options>
              {RepeatOptions.map((option) => (
                <S.Option
                  key={option}
                  onClick={() => handleRepeatChange(option)}
                >
                  {option}
                </S.Option>
              ))}
            </S.Options>
          )}
        </S.SelectWrapper>
      </S.FormGroup>
      <S.FormGroup>
        <S.Label>반복 종료 일자</S.Label>
        <S.RepeatWrapper>
          <S.RadioWrapper>
            <S.RepeatLabel>
              없음&nbsp;
              <S.RepeatInput
                type='radio'
                name='repeat'
                value='none'
                checked={repeatStopValue === 'none'}
                onChange={handleRepeatStopChange}
              />
            </S.RepeatLabel>
            <S.RepeatLabel>
              날짜 지정&nbsp;
              <S.RepeatInput
                type='radio'
                name='repeat'
                value='date'
                checked={repeatStopValue === 'date'}
                onChange={handleRepeatStopChange}
              />
            </S.RepeatLabel>
          </S.RadioWrapper>
          <S.RepeatInputWrapper>
            <S.Input
              type='datetime-local'
              placeholder='날짜 선택'
              value={repeatStopDate}
              onChange={(e) => handleRepeatStopDateChange(e.target.value)}
            />
          </S.RepeatInputWrapper>
        </S.RepeatWrapper>
      </S.FormGroup>
    </>
  );
};

export default Schedule;
