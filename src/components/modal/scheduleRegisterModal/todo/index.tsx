import React, { useState } from 'react';
import * as S from './Todo.styles';
import dropdown from '@/assets/buttonIcon/dropdown.svg';


const Todo = () => {
  const [calendarValue, setCalendarValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [repeatValue, setRepeatValue] = useState('');
  const [todoValue, setTodoValue] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isRepeatOpen, setIsRepeatOpen] = useState(false);
  const [repeatStopValue, setRepeatStopValue] = useState(''); // 반복 종료 (날짜 지정, 없음)
  const [repeatStopDate, setRepeatStopDate] = useState(''); //반복종료일자

  const handleCalendarChange = (value: string) => {
    setCalendarValue(value);
    setIsCalendarOpen(false);
  };

  const handleRepeatChange = (value: string) => {
    setRepeatValue(value);
    setIsRepeatOpen(false);
  };

  const handleRepeatStopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatStopValue(e.target.value);
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
              <S.DateSelect>
                선택한 날짜
              </S.DateSelect>
            </S.DateInputWrapper>
          </S.DateWrapper>
        </S.FormGroup>

        <S.FormGroup>
          <S.Label>반복</S.Label>
          <S.SelectWrapper>
            <S.Select onClick={() => setIsRepeatOpen(!isRepeatOpen)} $hasValue={!!repeatValue}>
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