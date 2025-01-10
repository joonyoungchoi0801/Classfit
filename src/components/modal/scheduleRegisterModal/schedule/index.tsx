import React, { useState } from 'react';
import dropdown from '@/assets/buttonIcon/dropdown.svg';
import * as S from './Schedule.styles';

const Schedule = () => {
  const [calendarValue, setCalendarValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isAllDay, setIsAllDay] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');

  const handleCalendarChange = (value: string) => {
    setCalendarValue(value);
    setIsCalendarOpen(false);
  };

  const handleCategoryChange = (value: string) => {
    setCategoryValue(value);
    setIsCategoryOpen(false);
  };

  const handleTimeChange = (value: string, isStart: boolean) => {
    if (isAllDay) {
      // 종일일 경우, 날짜만 사용하고 시간을 고정 설정
      const datePart = value.split('T')[0];
      if (isStart) {
        setStartTime(`${datePart}T00:00`);
        setEndTime(`${datePart}T23:59`);
      }
    } else {
      // 일반 모드에서는 사용자가 선택한 값을 그대로 사용
      if (isStart) {
        setStartTime(value);
      } else {
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
        setStartTime(`${startDate}T00:00`);
        setEndTime(`${startDate}T23:59`); // 종료 날짜를 시작 날짜로 맞춤
      }
    } else {
      // 종일 모드 해제: 선택된 날짜 초기화
      setStartTime('');
      setEndTime('');
    }
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
                <S.Option onClick={() => handleCategoryChange('카테고리 1')}>
                  카테고리 1
                </S.Option>
                <S.Option onClick={() => handleCategoryChange('카테고리 2')}>
                  카테고리 2
                </S.Option>
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