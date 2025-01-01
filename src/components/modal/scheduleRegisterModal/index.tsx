import React, { useState } from 'react';
import * as S from './ScheduleRegisterModal.styles';
import type { ScheduleRegisterModalProps } from './ScheduleRegisterModal.types';
import dropdown from '@/assets/buttonIcon/dropdown.svg';
import Button from '@/components/button';

const ScheduleRegisterModal: React.FC<ScheduleRegisterModalProps> = ({ isOpen, onClose }) => {
  const [calendarValue, setCalendarValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isAllDay, setIsAllDay] = useState(false);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isTimeOpen, setIsTimeOpen] = useState(false);

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
    setIsTimeOpen(false);
  };

  if (!isOpen) return null;

  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.Title>일정 등록</S.Title>
        <S.Divider />
        <S.OptionGroup>
          <S.Button>스케줄</S.Button>
          <S.Button>할일</S.Button>
        </S.OptionGroup>

        <S.FormGroup>
          <S.Label>일정명</S.Label>
          <S.Input type="text" placeholder="일정명 입력" />
        </S.FormGroup>

        <S.Row>
          <S.FormGroup>
            <S.Label>캘린더</S.Label>
            <S.SelectWrapper>
              <S.Select onClick={() => setIsCalendarOpen(!isCalendarOpen)} hasValue={Boolean(calendarValue)}>
                {calendarValue || '캘린더 선택'}
                <S.DropdownIcon src={dropdown} alt="dropdown icon" />
              </S.Select>
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
              <S.Select onClick={() => setIsCategoryOpen(!isCategoryOpen)} hasValue={Boolean(categoryValue)} >
                {categoryValue || '카테고리 선택'}
                <S.DropdownIcon src={dropdown} alt="dropdown icon" />
              </S.Select>
              {isCategoryOpen && (
                <S.Options>
                  <S.Option onClick={() => handleCategoryChange('카테고리1')}>
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

        <S.ColumnRow>
          <S.Label>일시</S.Label>
          <S.DateWrapper>
            <S.DateInputWrapper>
              <S.Input type="date" placeholder="날짜 선택" />
            </S.DateInputWrapper>
            {isAllDay && (
              <S.TimeSelectWrapper>
                <S.SelectWrapper>
                  <S.TimeSelect onClick={() => setIsTimeOpen(!isTimeOpen)} hasValue={Boolean(startTime)}>
                    {startTime || '시간 선택'}
                    <S.TimeDropdownIcon src={dropdown} alt="dropdown icon" />
                  </S.TimeSelect>
                  {isTimeOpen && (
                    <S.Options>
                      <S.Option onClick={() => handleStartTimeChange('09:00')}>
                        09:00
                      </S.Option>
                      <S.Option onClick={() => handleStartTimeChange('10:00')}>
                        10:00
                      </S.Option>
                    </S.Options>
                  )
                  }
                </S.SelectWrapper>
              </S.TimeSelectWrapper>
            )}
            <span>—</span>
            <S.DateInputWrapper>
              <S.Input type="date" placeholder="날짜 선택" />
            </S.DateInputWrapper>
            {isAllDay && (
              <S.TimeSelectWrapper>
                <S.SelectWrapper>
                  <S.TimeSelect onClick={() => setIsTimeOpen(!isTimeOpen)} hasValue={Boolean(endTime)}>
                    {endTime || '시간 선택'}
                    <S.TimeDropdownIcon src={dropdown} alt="dropdown icon" />
                  </S.TimeSelect>
                  {isTimeOpen && (
                    <S.Options>
                      <S.Option onClick={() => handleStartTimeChange('09:00')}>
                        09:00
                      </S.Option>
                      <S.Option onClick={() => handleStartTimeChange('10:00')}>
                        10:00
                      </S.Option>
                    </S.Options>
                  )
                  }
                </S.SelectWrapper>
              </S.TimeSelectWrapper>
            )}
          </S.DateWrapper>
        </S.ColumnRow>

        <S.CheckboxGroup>
          <S.Checkbox type="checkbox" checked={isAllDay} onChange={handleAllDayChange} />
          <span>종일</span>
        </S.CheckboxGroup>

        <S.ButtonWrapper>
          <Button
            title='취소'
            textColor='var(--color-black)'
            backgroundColor='var(--color-white)'
            isBorder={true}
            borderColor='#D7D7D7'
            onClick={onClose}
          />
          <Button title='저장' />
        </S.ButtonWrapper>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
};

export default ScheduleRegisterModal;