import React, { useState, useEffect } from 'react';
import * as S from './Todo.styles';
import dropdown from '@/assets/buttonIcon/dropdown.svg';
import { RegisterModal } from '@/types/schedule.type';

interface TodoProps {
  formData: RegisterModal;
  setFormData: React.Dispatch<React.SetStateAction<RegisterModal>>;
  selectedDate: string;
}

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

const Todo = ({ formData, setFormData, selectedDate }: TodoProps) => {
  const [calendarValue, setCalendarValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [repeatValue, setRepeatValue] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isRepeatOpen, setIsRepeatOpen] = useState(false);
  const [repeatStopValue, setRepeatStopValue] = useState(''); // 반복 종료 (날짜 지정, 없음)
  const [repeatStopDate, setRepeatStopDate] = useState(''); //반복종료일자
  const [startTime, setStartTime] = useState(formData.startDate || '');

  useEffect(() => {
    if (selectedDate) {
      const formattedDate = `${selectedDate}T00:00`; // selectedDate와 '00:00'을 결합한 날짜 시간
      setStartTime(formattedDate);
      setFormData((prev) => ({
        ...prev,
        startDate: formattedDate, // startDate를 '00:00' 시간으로 설정
        endDate: formattedDate,   // 필요에 따라 endDate도 동일하게 설정
      }));
    }
  }, [selectedDate, setFormData]);

  const updateFormData = (key: keyof RegisterModal, value: any) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const handleCalendarChange = (value: string) => {
    setCalendarValue(value);
    setIsCalendarOpen(false);
    //updateFormData(); 
  };

  const handleRepeatChange = (value: string) => {
    setRepeatValue(value);
    setIsRepeatOpen(false);
    updateFormData('eventRepeatType', RepeatOptionsAPI[repeatValue] as EventRepeatType);
  };

  const handleRepeatStopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatStopValue(e.target.value);
    if (repeatStopValue === 'date') {
      updateFormData('repeatEndDate', new Date(repeatStopDate).toString());
    } else {
      updateFormData('repeatEndDate', null);
    }
  };

  const handleTimeChange = (value: string) => {
    const date = selectedDate || value.split('T')[0];
    const formattedTime = `${date}T00:00`;
    updateFormData('startDate', formattedTime);
    updateFormData('endDate', formattedTime);
    setStartTime(formattedTime);
  };

  return (
    <>
      <S.FormGroup>
        <S.Label>일정명</S.Label>
        <S.Input type="text" placeholder="일정명 입력" />
      </S.FormGroup>

      <S.Row>
        <S.FormGroup>
          <S.Label>캘린더</S.Label>
          <S.SelectWrapper>
            <S.Select onClick={() => setIsCalendarOpen(!isCalendarOpen)} $hasValue={!!calendarValue}>
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
          <S.SelectWrapper>
            <S.Select $hasValue={!!categoryValue}>
              {categoryValue || '-'}
            </S.Select>
          </S.SelectWrapper>
        </S.FormGroup>
      </S.Row>

      <S.Row>
        <S.FormGroup>
          <S.Label>일시</S.Label>
          <S.DateWrapper>
            <S.DateInputWrapper>
              <S.DateSelect
                type="datetime-local"
                value={startTime}
                placeholder="선택한 날짜"
                onChange={(e) => handleTimeChange(e.target.value)}
              />
            </S.DateInputWrapper>
          </S.DateWrapper>
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>반복</S.Label>
          <S.SelectWrapper>
            <S.Select
              onClick={() => setIsRepeatOpen(!isRepeatOpen)}
              $hasValue={!!repeatValue}
            >
              {repeatValue || '반복 선택'}
            </S.Select>
            <S.DropdownIcon src={dropdown} alt="dropdown icon" />
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
      </S.Row >
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
              type='date'
              placeholder='날짜 선택'
              onChange={(e) => setRepeatStopDate(e.target.value)}
            />
          </S.RepeatInputWrapper>
        </S.RepeatWrapper>
      </S.FormGroup>
    </>
  );
};

export default Todo;