import React, { useEffect, useState } from 'react';
import * as S from './ScheduleRegister.styles';
import * as PS from '@/pages/schedule/Schedule.styles';
import dropdown from '@/assets/buttonIcon/dropdown.svg';
import Button from '@/components/button';
import close from '@/assets/label/close.svg';
import { Attendee, Category, RegisterData } from './ScheduleRegister.type';
import {
  getAttendeeList,
  getCalendarCategoryList,
  postCalendarEvent,
} from '@/api/calendarAPI';
import { useNavigate, useParams } from 'react-router-dom';

const RepeatOptions = ['반복 안함', '매일', '매주', '매월', '매년'];
const RepeatOptionsAPI: Record<string, string | null> = {
  '반복 안함': 'NONE',
  매일: 'DAILY',
  매주: 'WEEKLY',
  매월: 'MONTHLY',
  매년: 'YEARLY',
}; // 추후 API전송시 맞춰서 전송
enum EventRepeatType {
  DAILY = 'DAILY',
  WEEKLY = 'WEEKLY',
  MONTHLY = 'MONTHLY',
  YEARLY = 'YEARLY',
}
enum EventType {
  TASK = 'TASK',
  SCHEDULE = 'SCHEDULE',
}

function ScheduleRegister() {
  const [calendarValue, setCalendarValue] = useState('');
  const [calendarType, setCalendarType] = useState('');
  const [categoryValue, setCategoryValue] = useState('');
  const [repeatValue, setRepeatValue] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isRepeatOpen, setIsRepeatOpen] = useState(false);
  const [isAttendeeOpen, setIsAttendeeOpen] = useState(false);
  const [isAllDay, setIsAllDay] = useState(false);
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [eventTitle, setEventTitle] = useState(''); //일정명
  const [repeatStopValue, setRepeatStopValue] = useState(''); // 반복 종료 (날짜 지정, 없음)
  const [repeatStopDate, setRepeatStopDate] = useState(''); //반복종료일자
  const [place, setPlace] = useState(''); // 장소
  const [memo, setMemo] = useState(''); // 메모
  const [personalCategory, setPersonalCategory] = useState<Category[]>(); //내 달력 카테고리
  const [sharedCategory, setSharedCategory] = useState<Category[]>(); // 공용 달력 카테고리
  const [calendarId, setCalendarId] = useState<number | null>(); // api 보낼시 calendarId
  const [attendeeList, setAttendeeList] = useState<Attendee[]>(); // 참석자 목록
  const [attendees, setAttendees] = useState<Attendee[]>([]); // 참석자 목록 (선택된)
  const { eventType } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    const getCategories = async () => {
      const res = await getCalendarCategoryList();
      setPersonalCategory(res.data.data.personalCategories);
      setSharedCategory(res.data.data.sharedCategories);
    };
    const getAttendees = async () => {
      const res = await getAttendeeList();
      setAttendeeList(res.data.data);
    };

    getCategories();
    getAttendees();
  }, []);

  const handleCalendarChange = (value: string) => {
    if (value === '내 캘린더') {
      setCalendarType('PERSONAL');
    } else if (value === '공용 캘린더') {
      setCalendarType('SHARED');
    }
    setCalendarValue(value);
    setIsCalendarOpen(false);
    setCategoryValue('');
  };

  const handleCategoryChange = (value: string, calendarId: number) => {
    setCategoryValue(value);
    setCalendarId(calendarId);
    setIsCategoryOpen(false);
  };

  const handleRepeatChange = (value: string) => {
    setRepeatValue(value);
    setIsRepeatOpen(false);
  };

  const handleRepeatStopChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRepeatStopValue(e.target.value);
  };

  // 참석자 추가
  const handleAddAttendee = (attendee: Attendee) => {
    if (attendees.includes(attendee)) {
      alert('이미 추가된 참석자입니다.');
    } else {
      setAttendees((prevAttendees) => [...prevAttendees, attendee]);
    }
    setIsAttendeeOpen(false);
  };

  // 참석자 삭제
  const handleRemoveAttendee = (attendee: Attendee) => {
    setAttendees(attendees.filter((attend) => attend !== attendee));
  };

  const handleRegisterEvent = async () => {
    try {
      if (
        !eventTitle ||
        !calendarType ||
        (eventType === 'schedule' && !calendarId) ||
        !startDate ||
        !repeatValue
      ) {
        alert('필수 입력값을 모두 입력해주세요.');
        return;
      }

      const data: RegisterData = {
        name: eventTitle,
        eventType: eventType?.toUpperCase() as EventType,
        calendarType: calendarType,
        categoryId: calendarId!,
        startDate: new Date(startDate).toISOString(),
        endDate: isAllDay
          ? new Date(startDate).toISOString()
          : new Date(endDate).toISOString(),
        isAllDay,
        eventRepeatType: RepeatOptionsAPI[repeatValue] as EventRepeatType,
        repeatEndDate:
          repeatStopValue === 'date'
            ? new Date(repeatStopDate).toISOString()
            : null,
        memberIds: attendees.map((attendee) => attendee.id),
        location: place,
        memo,
      };
      await postCalendarEvent(data);
      alert('일정이 등록되었습니다.');
      navigate('/schedule/my');
    } catch (e) {
      alert('일정 등록에 실패했습니다.');
    }
  };

  return (
    <PS.Container>
      <S.Container>
        <S.Title>일정등록</S.Title>
        <S.ButtonContainer>
          <S.Button
            $isSelected={eventType === 'schedule'}
            onClick={() => navigate('/schedule/register/schedule')}
          >
            스케줄
          </S.Button>
          <S.Button
            $isSelected={eventType === 'task'}
            onClick={() => navigate('/schedule/register/task')}
          >
            할 일
          </S.Button>
        </S.ButtonContainer>
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
            {eventType === 'schedule' && (
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
                      {(calendarValue === '내 캘린더'
                        ? personalCategory
                        : sharedCategory
                      )?.map((category) => (
                        <S.Option
                          key={category.id}
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
            )}
          </S.Row>

          <S.ColumnRow>
            <S.Label>
              일시 <S.Essential>(필수)</S.Essential>
            </S.Label>
            {eventType === 'schedule' ? (
              <S.DateWrapper>
                <S.DateInputWrapper>
                  <S.Input
                    type='datetime-local'
                    placeholder='날짜 선택'
                    value={
                      isAllDay
                        ? new Date(new Date(startDate).setHours(0, 0, 0, 0))
                            .toLocaleString('sv-SE')
                            .slice(0, 16)
                        : startDate
                    }
                    onChange={(e) => setStartDate(e.target.value)}
                  />
                </S.DateInputWrapper>
                <span>—</span>
                <S.DateInputWrapper>
                  <S.Input
                    type='datetime-local'
                    placeholder='날짜 선택'
                    value={
                      isAllDay
                        ? new Date(new Date(startDate).setHours(23, 59, 0, 0))
                            .toLocaleString('sv-SE')
                            .slice(0, 16)
                        : endDate
                    }
                    onChange={(e) => setEndDate(e.target.value)}
                  />
                </S.DateInputWrapper>
                <S.CheckboxGroup>
                  <S.Checkbox
                    type='checkbox'
                    onChange={() => {
                      if (!startDate) {
                        setStartDate(new Date().toISOString());
                      }
                      setIsAllDay(!isAllDay);
                    }}
                  />
                  <span>종일</span>
                </S.CheckboxGroup>
              </S.DateWrapper>
            ) : (
              <S.DateInputWrapper>
                <S.Input
                  type='date'
                  placeholder='날짜 선택'
                  value={startDate}
                  onChange={(e) => {
                    setStartDate(e.target.value);
                    setEndDate(e.target.value);
                  }}
                />
              </S.DateInputWrapper>
            )}
          </S.ColumnRow>

          <S.Row>
            <S.FormGroup>
              <S.Label>
                반복<S.Essential> (필수)</S.Essential>
              </S.Label>
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
                    type={eventType === 'schedule' ? 'datetime-local' : 'date'}
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
                  {attendeeList?.map((attendee) => (
                    <S.Option
                      key={attendee.id}
                      onClick={() => handleAddAttendee(attendee)}
                    >
                      {attendee.name}
                    </S.Option>
                  ))}
                </S.Options>
              )}
            </S.SelectWrapper>
          </S.ColumnRow>
          <S.AttendeeButtonContainer>
            {attendees.map((attendee) => (
              <S.AttendeeButton key={attendee.id}>
                {attendee.name}
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
              onClick={() => navigate(-1)}
            />
            <Button title='저장' onClick={() => handleRegisterEvent()} />
          </S.ButtonWrapper>
        </PS.ButtonWrapper>
      </S.Container>
    </PS.Container>
  );
}

export default ScheduleRegister;
