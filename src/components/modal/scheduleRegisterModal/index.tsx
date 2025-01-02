import React, { useState } from 'react';
import * as S from './ScheduleRegisterModal.styles';
import type { ScheduleRegisterModalProps } from './ScheduleRegisterModal.types';
import dropdown from '@/assets/buttonIcon/dropdown.svg';
import Button from '@/components/button';

const generateTimeOptions = () => {
  const times: string[] = [];
  for (let hour = 0; hour < 24; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
      times.push(formattedTime);
    }
  }
  times.push('24:00');
  return times;
};

const timeOptions = generateTimeOptions();

const Schedule: React.FC = () => {
  const [calendarValue, setCalendarValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isAllDay, setIsAllDay] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isStartTimeOpen, setIsStartTimeOpen] = useState(false);
  const [isEndTimeOpen, setIsEndTimeOpen] = useState(false);

  const handleCalendarChange = (value: string) => {
    setCalendarValue(value);
    setIsCalendarOpen(false);
  };

  const handleCategoryChange = (value: string) => {
    setCategoryValue(value);
    setIsCategoryOpen(false);
  };

  const handleAllDayChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsAllDay(e.target.checked);
  };

  const handleStartTimeChange = (value: string) => {
    setStartTime(value);
    setIsStartTimeOpen(false);
  };

  const handleEndTimeChange = (value: string) => {
    setEndTime(value);
    setIsEndTimeOpen(false);
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
            <S.Select onClick={() => setIsCalendarOpen(!isCalendarOpen)} hasValue={!!calendarValue}>
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
            <S.Select onClick={() => setIsCategoryOpen(!isCategoryOpen)} hasValue={!!categoryValue}>
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
            <S.DateInput type="date" placeholder="날짜 선택" />
          </S.DateInputWrapper>
          {isAllDay && (
            <>
              <S.TimeSelectWrapper>
                <S.SelectWrapper>
                  <S.TimeSelect hasValue={!!startTime} onClick={() => setIsStartTimeOpen(!isStartTimeOpen)}>
                    {startTime || '시간 선택'}
                    <S.TimeDropdownIcon src={dropdown} alt="dropdown icon" />
                  </S.TimeSelect>
                  {isStartTimeOpen && (
                    <S.ScrollableOptions>
                      {timeOptions.map((time) => (
                        <S.TimeOption key={time} onClick={() => handleStartTimeChange(time)}>
                          {time}
                        </S.TimeOption>
                      ))}
                    </S.ScrollableOptions>
                  )}
                </S.SelectWrapper>
              </S.TimeSelectWrapper>
            </>
          )}
          <span>—</span>
          <S.DateInputWrapper>
            <S.DateInput type="date" placeholder="날짜 선택" />
          </S.DateInputWrapper>
          {isAllDay && (
            <>
              <S.TimeSelectWrapper>
                <S.SelectWrapper>
                  <S.TimeSelect hasValue={!!endTime} onClick={() => setIsEndTimeOpen(!isEndTimeOpen)}>
                    {endTime || '시간 선택'}
                    <S.TimeDropdownIcon src={dropdown} alt="dropdown icon" />
                  </S.TimeSelect>
                  {isEndTimeOpen && (
                    <S.ScrollableOptions>
                      {timeOptions.map((time) => (
                        <S.TimeOption key={time} onClick={() => handleEndTimeChange(time)}>
                          {time}
                        </S.TimeOption>
                      ))}
                    </S.ScrollableOptions>
                  )}
                </S.SelectWrapper>
              </S.TimeSelectWrapper>
            </>
          )}
        </S.DateWrapper>
      </S.FormGroup>

      <S.CheckboxGroup>
        <S.Checkbox type="checkbox" checked={isAllDay} onChange={handleAllDayChange} />
        <span>종일</span>
      </S.CheckboxGroup>
    </>
  );
};

const Todo: React.FC = () => {
  const [calendarValue, setCalendarValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [repeatValue, setRepeatValue] = useState('');
  const [todoValue, setTodoValue] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isRepeatOpen, setIsRepeatOpen] = useState(false);


  const handleCalendarChange = (value: string) => {
    setCalendarValue(value);
    setIsCalendarOpen(false);
  };

  const handleRepeatChange = (value: string) => {
    setRepeatValue(value);
    setIsRepeatOpen(false);
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
            <S.Select onClick={() => setIsCalendarOpen(!isCalendarOpen)} hasValue={!!calendarValue}>
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
            <S.Select hasValue={!!categoryValue}>
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
              <S.DateSelect>
                선택한 날짜
              </S.DateSelect>
            </S.DateInputWrapper>
          </S.DateWrapper>
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>반복</S.Label>
          <S.SelectWrapper>
            <S.Select onClick={() => setIsRepeatOpen(!isRepeatOpen)} hasValue={!!repeatValue}>
              {repeatValue || '반복 선택'}
            </S.Select>
            <S.DropdownIcon src={dropdown} alt="dropdown icon" />
            {isRepeatOpen && (
              <S.Options>
                <S.Option onClick={() => handleRepeatChange('반복 안함')}>
                  반복 안함
                </S.Option>
                <S.Option onClick={() => handleRepeatChange('매일')}>
                  매일
                </S.Option>
              </S.Options>
            )}
          </S.SelectWrapper>
        </S.FormGroup>
      </S.Row >
    </>
  );
};

const ScheduleRegisterModal: React.FC<ScheduleRegisterModalProps> = ({ isOpen, onClose }) => {
  const [isSchedule, setIsSchedule] = useState(true);

  if (!isOpen) return null;

  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.Title>{isSchedule ? '일정 등록' : '할일 등록'}</S.Title>
        <S.Divider />
        <S.OptionGroup>
          <S.Button $isActive={isSchedule} onClick={() => setIsSchedule(true)}>
            스케줄
          </S.Button>
          <S.Button $isActive={!isSchedule} onClick={() => setIsSchedule(false)}>
            할일
          </S.Button>
        </S.OptionGroup>
        {isSchedule ? <Schedule /> : <Todo />}
        <S.ButtonGroup>
          <S.CloseButton title="취소" onClick={onClose}>취소</S.CloseButton>
          <Button title="저장" onClick={onClose} />
        </S.ButtonGroup>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default ScheduleRegisterModal;