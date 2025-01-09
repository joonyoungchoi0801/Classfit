import React, { useState } from 'react';
import * as S from './ScheduleRegister.styles';
import * as PS from '@/pages/schedule/Schedule.styles';
import dropdown from '@/assets/buttonIcon/dropdown.svg';
import Button from '@/components/button';
import close from '@/assets/label/close.svg';
import ScheduleRegisterModal from '@/components/modal/scheduleRegisterModal'; // test

const RepeatOptions = ['반복 안함', '매일', '매주', '매월', '매년'];
const RepeatOptionsAPI: Record<string, string | null> = {
  '반복 안함': null,
  매일: 'DAILY',
  매주: 'WEEKLY',
  매월: 'MONTHLY',
  매년: 'YEARLY',
}; // 추후 API전송시 맞춰서 전송

function ScheduleRegister() {
  const [calendarValue, setCalendarValue] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [repeatValue, setRepeatValue] = useState('');
  const [alertValue, setAlertValue] = useState('');
  const [attendees, setAttendees] = useState<string[]>([]);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isRepeatOpen, setIsRepeatOpen] = useState(false);
  const [isAlertOpen, setIsAlertOpen] = useState(false);
  const [isAttendeeOpen, setIsAttendeeOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); //test
  const [isAllDay, setIsAllDay] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [eventTitle, setEventTitle] = useState('');
  const [repeatStopValue, setRepeatStopValue] = useState('');
  const [repeatStopDate, setRepeatStopDate] = useState('');
  const [place, setPlace] = useState('');
  const [memo, setMemo] = useState('');

  const today = new Date().toISOString().split('T')[0];
  const handleCalendarChange = (value: string) => {
    setCalendarValue(value);
    setIsCalendarOpen(false);
  };

  const handleCategoryChange = (value: string) => {
    setCategoryValue(value);
    setIsCategoryOpen(false);
  };

  const handleRepeatChange = (value: string) => {
    setRepeatValue(value);
    console.log(RepeatOptionsAPI[value]); // 추후 api 전송 시 삭제
    setIsRepeatOpen(false);
  };

  const handleAlertChange = (value: string) => {
    setAlertValue(value);
    setIsAlertOpen(false);
  };

  const handleAttendeeChange = (value: string[]) => {
    setAttendees(value);
    setIsAttendeeOpen(false);
  };

  const handleRepeatStopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatStopValue(e.target.value);
  };

  // 참석자 추가
  const handleAddAttendee = (name: string) => {
    if (!attendees.includes(name)) {
      setAttendees([...attendees, name]);
    }
    setIsAttendeeOpen(false);
  };

  // 참석자 삭제
  const handleRemoveAttendee = (name: string) => {
    setAttendees(attendees.filter((attendee) => attendee !== name));
  };

  const openModal = () => setIsModalOpen(true); //test
  const closeModal = () => setIsModalOpen(false); //test

  return (
    <PS.Container>
      <S.Container>
        <S.Title>일정등록</S.Title>
        <S.Form>
          <S.FormGroup>
            <S.Label>
              일정명 <S.Essential>(필수)</S.Essential>
            </S.Label>
            <S.Input
              type='text'
              placeholder='일정명 입력'
              onChange={(e) => setEventTitle(e.target.value)}
            />
          </S.FormGroup>

          <S.Row>
            <S.FormGroup>
              <S.Label>
                캘린더 <S.Essential>(필수)</S.Essential>
              </S.Label>
              <S.SelectWrapper>
                <S.Select
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  $hasValue={Boolean(calendarValue)}
                >
                  {calendarValue || '캘린더 선택'}
                  <S.DropdownIcon src={dropdown} alt='dropdown icon' />
                </S.Select>
                {isCalendarOpen && (
                  <S.Options>
                    <S.Option onClick={() => handleCalendarChange('내 캘린더')}>
                      내 캘린더
                    </S.Option>
                    <S.Option
                      onClick={() => handleCalendarChange('공용 캘린더')}
                    >
                      공용 캘린더
                    </S.Option>
                  </S.Options>
                )}
              </S.SelectWrapper>
            </S.FormGroup>
            <S.FormGroup>
              <S.Label>
                카테고리 <S.Essential>(필수)</S.Essential>
              </S.Label>
              <S.SelectWrapper>
                <S.Select
                  onClick={() => setIsCategoryOpen(!isCategoryOpen)}
                  $hasValue={Boolean(categoryValue)}
                >
                  {categoryValue || '카테고리 선택'}
                  <S.DropdownIcon src={dropdown} alt='dropdown icon' />
                </S.Select>
                {isCategoryOpen && (
                  <S.Options>
                    <S.Option onClick={() => handleCategoryChange('카테고리1')}>
                      카테고리 1
                    </S.Option>
                    <S.Option
                      onClick={() => handleCategoryChange('카테고리 2')}
                    >
                      카테고리 2
                    </S.Option>
                  </S.Options>
                )}
              </S.SelectWrapper>
            </S.FormGroup>
          </S.Row>

          <S.ColumnRow>
            <S.Label>
              일시 <S.Essential>(필수)</S.Essential>
            </S.Label>
            <S.DateWrapper>
              <S.DateInputWrapper>
                <S.Input
                  type='date'
                  placeholder='날짜 선택'
                  value={isAllDay ? today : startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </S.DateInputWrapper>
              <span>—</span>
              <S.DateInputWrapper>
                <S.Input
                  type='date'
                  placeholder='날짜 선택'
                  value={isAllDay ? today : endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </S.DateInputWrapper>
              <S.CheckboxGroup>
                <S.Checkbox
                  type='checkbox'
                  onChange={() => setIsAllDay(!isAllDay)}
                />
                <span>종일</span>
              </S.CheckboxGroup>
            </S.DateWrapper>
          </S.ColumnRow>

          <S.Row>
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
                    type='date'
                    placeholder='날짜 선택'
                    onChange={(e) => setRepeatStopDate(e.target.value)}
                  />
                </S.RepeatInputWrapper>
              </S.RepeatWrapper>
            </S.FormGroup>
          </S.Row>

          <S.ColumnRow>
            <S.Label>참석자</S.Label>
            <S.SelectWrapper>
              <S.Select
                onClick={() => setIsAttendeeOpen(!isAttendeeOpen)}
                $hasValue={attendees.length > 0}
              >
                {attendees.length === 0 ? '참석자 선택' : '참석자 추가'}
              </S.Select>
              <S.DropdownIcon src={dropdown} alt='dropdown icon' />
              {isAttendeeOpen && (
                <S.Options>
                  <S.Option onClick={() => handleAddAttendee('김예은')}>
                    김예은
                  </S.Option>
                  <S.Option onClick={() => handleAddAttendee('방예원')}>
                    방예원
                  </S.Option>
                  <S.Option onClick={() => handleAddAttendee('백재혁')}>
                    백재혁
                  </S.Option>
                  <S.Option onClick={() => handleAddAttendee('심유정')}>
                    심유정
                  </S.Option>
                  <S.Option onClick={() => handleAddAttendee('손화영')}>
                    손화영
                  </S.Option>
                  <S.Option onClick={() => handleAddAttendee('임소현')}>
                    임소현
                  </S.Option>
                  <S.Option onClick={() => handleAddAttendee('최준영')}>
                    최준영
                  </S.Option>
                </S.Options>
              )}
            </S.SelectWrapper>
          </S.ColumnRow>
          <S.AttendeeButtonContainer>
            {attendees.map((attendee, index) => (
              <S.AttendeeButton key={index}>
                {attendee}
                <S.RemoveButton
                  src={close}
                  alt='close btn'
                  onClick={() => handleRemoveAttendee(attendee)}
                />
              </S.AttendeeButton>
            ))}
          </S.AttendeeButtonContainer>

          <S.FormGroup>
            <S.Label>장소</S.Label>
            <S.Input
              type='text'
              placeholder='장소를 입력해주세요.'
              onChange={(e) => setPlace(e.target.value)}
            />
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>메모</S.Label>
            <S.MemoInput
              placeholder='필요한 메모를 남겨주세요.'
              onChange={(e) => setMemo(e.target.value)}
            />
          </S.FormGroup>
        </S.Form>

        <PS.ButtonWrapper>
          <S.ButtonWrapper>
            <Button
              title='취소'
              textColor='var(--color-black)'
              backgroundColor='var(--color-white)'
              isBorder={true}
              borderColor='#D7D7D7'
            />
            <Button title='저장' onClick={openModal} />
          </S.ButtonWrapper>
        </PS.ButtonWrapper>

        <ScheduleRegisterModal isOpen={isModalOpen} onClose={closeModal} />
      </S.Container>
    </PS.Container>
  );
}

export default ScheduleRegister;
