import * as S from './EditEventModal.styles';
import React, { useState, useEffect } from 'react';
import Button from '@/components/button';
import dropdown from '@/assets/buttonIcon/dropdown.svg';
import { getCategories } from '@/api/categoryAPI';
import { getCalendarEventDetail } from '@/api/calendarAPI';
import { PersonalCategoryData, SharedCategoryData } from '@/types/category.type';

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

interface EditEventModalProps {
  isOpen: boolean;
  onClose: () => void;
  eventId: number;
}

const EditEventModal = ({ isOpen, onClose, eventId }: EditEventModalProps) => {
  const [calendarValue, setCalendarValue] = useState('');
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [categoryName, setCategoryName] = useState<string>('');
  const [personalCategories, setPersonalCategories] = useState<PersonalCategoryData[]>([]);
  const [sharedCategories, setSharedCategories] = useState<SharedCategoryData[]>([]);
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [isAllDay, setIsAllDay] = useState(false);;
  const [isRepeatOpen, setIsRepeatOpen] = useState(false);
  const [repeatValue, setRepeatValue] = useState('');
  const [repeatStopValue, setRepeatStopValue] = useState(''); // 반복 종료 (날짜 지정, 없음)
  const [repeatStopDate, setRepeatStopDate] = useState(''); //반복종료일자
  const [eventData, setEventData] = useState({
    id: 0,
    name: '',
    eventType: '',
    calendarType: '',
    startDate: '',
    endDate: '',
    categoryId: null,
    eventRepeatType: '',
    repeatEndDate: null,
    isAllDay: false,
  });

  useEffect(() => {
    if (isOpen && eventId) {
      const fetchEventDetails = async () => {
        try {
          const response = await getCalendarEventDetail(eventId);
          if (response.data) {
            const data = response.data.data;
            setEventData(data);

            setCalendarValue(data.calendarType === 'PERSONAL' ? '내 캘린더' : '공용 캘린더');
            setCategoryName(
              [...personalCategories, ...sharedCategories].find((cat) => cat.id === data.categoryId)?.name || ''
            );
            setStartTime(data.startDate);
            setEndTime(data.endDate);
            setRepeatValue(
              Object.keys(RepeatOptionsAPI).find((key) => RepeatOptionsAPI[key] === data.eventRepeatType) || ''
            );
            setRepeatStopValue(data.repeatEndDate ? 'date' : 'none');
            setRepeatStopDate(data.repeatEndDate || '');
            setIsAllDay(data.isAllDay);
          }
        } catch (error) {
          console.error('Error fetching event details:', error);
        }
      };

      fetchEventDetails();
    }
  }, [isOpen, eventId]);

  const handleCalendarChange = (value: string) => {
    const calendarType = value === '내 캘린더' ? 'PERSONAL' : 'SHARED';

    setCalendarValue(value);
    setIsCalendarOpen(false);
  };

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await getCategories();
        const { data } = response.data;

        setPersonalCategories(data.personalCategories);
        setSharedCategories(data.sharedCategories);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    fetchCategories();
  }, []);

  const handleCategoryChange = (name: string, id: number) => {
    setCategoryName(name);
    // updateFormData('categoryId', id);
    setIsCategoryOpen(false);
  };

  const handleRepeatChange = (value: string) => {
    setRepeatValue(value);
    setIsRepeatOpen(false);
    // updateFormData('eventRepeatType', RepeatOptionsAPI[value] as EventRepeatType);
  };

  return (
    <>
      {isOpen && (
        <S.ModalOverlay>
          <S.ModalContent>
            <S.Title>일정 상세보기</S.Title>
            <S.Divider />
            <S.FormGroup>
              <S.Label>일정명</S.Label>
              <S.Input
                type="text"
                placeholder="일정명 입력"
                value={eventData.name}
              // onChange={(e) => updateFormData('name', e.target.value)}
              />
            </S.FormGroup>

            <S.Row>
              <S.FormGroup>
                <S.Label>캘린더</S.Label>
                <S.SelectWrapper
                // onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                >
                  <S.Select
                    $hasValue={!!calendarValue}
                  >
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
                        personalCategories.map((category) => (
                          <S.Option
                            key={category.name}
                            onClick={() => handleCategoryChange(category.name, category.id)}
                          >
                            {category.name}
                          </S.Option>
                        ))
                      ) : (
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
                    // onChange={(e) => handleTimeChange(e.target.value, true)}
                    placeholder="시작 날짜와 시간 선택"
                  />
                </S.DateInputWrapper>
                <S.SpanTag>—</S.SpanTag>
                <S.DateInputWrapper>
                  <S.DateInput
                    type="datetime-local"
                    value={endTime}
                    // onChange={(e) => handleTimeChange(e.target.value, false)}
                    placeholder="종료 날짜와 시간 선택"
                  />
                </S.DateInputWrapper>
              </S.DateWrapper>
            </S.FormGroup>
            <S.CheckboxGroup>
              <S.Checkbox
                type="checkbox"
                checked={isAllDay}
              // onChange={(e) => handleAllDayChange(e.target.checked)}
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
                    // onChange={handleRepeatStopChange}
                    />
                  </S.RepeatLabel>
                  <S.RepeatLabel>
                    날짜 지정&nbsp;
                    <S.RepeatInput
                      type='radio'
                      name='repeat'
                      value='date'
                      checked={repeatStopValue === 'date'}
                    // onChange={handleRepeatStopChange}
                    />
                  </S.RepeatLabel>
                </S.RadioWrapper>
                <S.RepeatInputWrapper>
                  <S.Input
                    type='datetime-local'
                    placeholder='날짜 선택'
                    value={repeatStopDate}
                  // onChange={(e) => handleRepeatStopDateChange(e.target.value)}
                  />
                </S.RepeatInputWrapper>
              </S.RepeatWrapper>
            </S.FormGroup>

            <S.ButtonGroup>
              <S.CloseButton title="취소" onClick={onClose}>취소</S.CloseButton>
              <Button title="저장" />
            </S.ButtonGroup>
          </S.ModalContent>
        </S.ModalOverlay>
      )}
    </>
  )
};

export default EditEventModal;