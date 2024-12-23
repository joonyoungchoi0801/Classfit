import Path from '@/components/path';
import * as S from './ReportRegister.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import DropDown from '@/components/dropDown';
import Button from '@/components/button';
import useStudentRegister from '@/hooks/student/useStudentRegister';
import { STUDENT_FIELD } from '@/constants/STUDENT';
import Modal from '@/components/modal';
import ClassDropDown from '@/components/dropDown/classDropDown';
import CloseIcon from '@/assets/label/close.svg';
import CalendarIcon from '@/assets/achievement/calendar.svg';
import CalendarFilledIcon from '@/assets/achievement/calendarFilled.svg';
import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import SelectedCheckBoxIcon from '@/assets/info/selectedCheckBox.svg';
import { DateRange, RangeKeyDict } from 'react-date-range';
import { ko } from 'date-fns/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import type { DateRangeProps } from './ReportRegister.types';

function ReportRegister() {
  const studentRegisterHandler = useStudentRegister();
  const navigate = useNavigate();
  const [state, setState] = useState<DateRangeProps[]>([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: 'selection',
    },
  ]);
  const [isCalendarInitialized, setIsCalendarInitialized] =
    useState<boolean>(false);
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const calendarRef = useRef<HTMLDivElement>(null);

  const [items, setItems] = useState([
    {
      id: 1,
      type: '월간',
      group: '중3-A',
      test: '월말테스트',
      date: '24.11.15',
      checked: true,
    },
    {
      id: 2,
      type: '주간',
      group: '중3-A',
      test: '영어퀴즈테스트',
      date: '24.11.15',
      checked: true,
    },
    {
      id: 3,
      type: '데일리',
      group: '중3-A',
      test: '영단어테스트',
      date: '24.11.15',
      checked: true,
    },
    {
      id: 4,
      type: '월간',
      group: '중3-A',
      test: '월말테스트',
      date: '24.11.15',
      checked: true,
    },
    {
      id: 5,
      type: '월간',
      group: '중3-A',
      test: '월말테스트',
      date: '24.11.15',
      checked: true,
    },
  ]);

  const handleChange = (ranges: RangeKeyDict) => {
    const selectionRange = ranges.selection;
    const safeSelection = {
      startDate: selectionRange.startDate || new Date(),
      endDate: selectionRange.endDate || new Date(),
      key: selectionRange.key,
    };

    setState([safeSelection]);
  };

  const toggleCalendar = () => {
    setIsCalendarInitialized(true);
    setShowCalendar((prev) => !prev); // 캘린더 토글
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        calendarRef.current &&
        !calendarRef.current.contains(event.target as Node)
      ) {
        setShowCalendar(false); // 캘린더 닫기
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <S.Container>
      <PS.ButtonWrapper>
        <S.ButtonWrapper>
          <Button
            title='저장'
            onClick={() => {
              navigate('/manage/achievement/management/register/student');
            }}
          />
        </S.ButtonWrapper>
      </PS.ButtonWrapper>
      <S.FormWrapper>
        <S.LabelWrapper>
          <S.Label>클래스 선택</S.Label>
          <S.Label $color='var(--color-blue)'>(필수)</S.Label>
        </S.LabelWrapper>

        <S.Row>
          <S.FormGroup>
            <DropDown
              options={Object.keys(studentRegisterHandler.classInfo)}
              value={studentRegisterHandler.studentData.grade}
              placeholder='학년 선택'
              onChange={(value) =>
                studentRegisterHandler.handleOnChangeValue(
                  STUDENT_FIELD.GRADE,
                  value
                )
              }
            />
          </S.FormGroup>
          <S.FormGroup>
            <ClassDropDown
              options={
                studentRegisterHandler.classInfo[
                  studentRegisterHandler.studentData.grade
                ]
              }
              placeholder='클래스 선택'
              onChange={(value) =>
                studentRegisterHandler.handleOnChangeSubClassValue(
                  STUDENT_FIELD.SUB_CLASS_LIST,
                  value
                )
              }
            />
          </S.FormGroup>
        </S.Row>
        <S.FormGroup>
          <S.LabelWrapper>
            <S.Label>리포트명</S.Label>
            <S.Label $color='var(--color-blue)'>(필수)</S.Label>
          </S.LabelWrapper>
          <S.Row>
            <S.FormGroup style={{ flex: 2 }}>
              <S.Input
                placeholder='리포트명 입력'
                value={studentRegisterHandler.studentData.name}
                onChange={(e) =>
                  studentRegisterHandler.handleOnChangeValue(
                    STUDENT_FIELD.NAME,
                    e.target.value
                  )
                }
              />
            </S.FormGroup>
          </S.Row>
        </S.FormGroup>
        <S.Row>
          <S.FormGroup style={{ position: 'relative' }}>
            <S.LabelWrapper>
              <S.Label>기간</S.Label>
              <S.Label $color='var(--color-blue)'>(필수)</S.Label>
            </S.LabelWrapper>
            <S.InputWrapper onClick={toggleCalendar}>
              <S.TextWithIcon $isSelected={isCalendarInitialized}>
                {isCalendarInitialized
                  ? `${state[0].startDate.toLocaleDateString()} ~ ${state[0].endDate.toLocaleDateString()}`
                  : '연도-월-일 ~ 연도-월-일'}
              </S.TextWithIcon>
              <S.IconWrapper>
                {showCalendar ? (
                  <>
                    <PS.BtnIcon src={CalendarFilledIcon} />
                  </>
                ) : (
                  <>
                    <PS.BtnIcon src={CalendarIcon} />
                  </>
                )}
              </S.IconWrapper>
            </S.InputWrapper>
            {showCalendar && (
              <S.CalendarWrapper ref={calendarRef}>
                <DateRange
                  editableDateInputs={true}
                  onChange={handleChange}
                  moveRangeOnFirstSelection={false}
                  ranges={state}
                  locale={ko} // 한글 적용
                />
                <S.CalendarInfoWrapper>
                  <S.Label $color='#7D7D7D' $size='1.5129rem'>
                    선택됨
                  </S.Label>{' '}
                  <br></br>
                  {state[0].startDate.toLocaleDateString()} ~{' '}
                  {state[0].endDate.toLocaleDateString()}
                </S.CalendarInfoWrapper>
                <S.CalendarButtonWrapper>
                  <Button title='확인' onClick={toggleCalendar} />
                </S.CalendarButtonWrapper>
              </S.CalendarWrapper>
            )}
          </S.FormGroup>
        </S.Row>
        <S.LabelWrapper>
          <S.Label>리포트 구성</S.Label>
          <S.Label $color='var(--color-blue)'>(필수)</S.Label>
        </S.LabelWrapper>

        <S._Container>
          <S.Header>
            <PS.RowWrapper>
              <PS.IconWrapper $alignLeft={true} onClick={() => {}}>
                <PS.BtnIcon src={SelectedCheckBoxIcon} />
              </PS.IconWrapper>
              <S.ListText $padding='0'>
                {/* <input
                type='checkbox'
                checked={items.every((item) => item.checked)}
                onChange={(e) =>
                  setItems(
                    items.map((item) => ({
                      ...item,
                      checked: e.target.checked,
                    }))
                  )
                }
              /> */}
                전체선택
              </S.ListText>
            </PS.RowWrapper>
            <S.ListText $padding='0'>
              평균 포함
              {/* <input type='checkbox' /> */}
            </S.ListText>
          </S.Header>
          <S.List>
            {items.map((item) => (
              <S.ListItem key={item.id}>
                <PS.RowWrapper>
                  <PS.IconWrapper $alignLeft={true} onClick={() => {}}>
                    <PS.BtnIcon src={SelectedCheckBoxIcon} />
                  </PS.IconWrapper>
                  <PS.Tag $type={item.type}>{item.type}</PS.Tag>
                  <S.ListText>{item.group}</S.ListText>
                  <S.ListText>{item.test}</S.ListText>
                </PS.RowWrapper>

                <S.ListText>{item.date}</S.ListText>
              </S.ListItem>
            ))}
          </S.List>
        </S._Container>
        <S.LabelWrapper>
          <S.Label>종합의견</S.Label>
        </S.LabelWrapper>
        <S.Sublabel>
          종합의견은 선택자 대상자 전체에게 동일하게 보여집니다.
        </S.Sublabel>
        <S.TextArea
          $height='20rem'
          id='textarea'
          // value={text}
          // onChange={handleChange}
          rows={5}
          placeholder='내용을 입력해주세요'
        />
        <S.LabelWrapper>
          <S.Label>개별의견</S.Label>
        </S.LabelWrapper>
        <S.Sublabel>선택한 대상자에게만 보여집니다.</S.Sublabel>
        <S._Container>
          <S.Header>
            <PS.RowWrapper>
              <PS.IconWrapper $alignLeft={true} onClick={() => {}}>
                <PS.BtnIcon src={SelectedCheckBoxIcon} />
              </PS.IconWrapper>
              <S.ListText $padding='0'>전체선택</S.ListText>
            </PS.RowWrapper>
          </S.Header>
          <S.List>
            {items.map((item) => (
              <S.OpItem key={item.id}>
                <PS.RowWrapper>
                  <PS.IconWrapper $alignLeft={true} onClick={() => {}}>
                    <PS.BtnIcon src={SelectedCheckBoxIcon} />
                  </PS.IconWrapper>
                  <S.ListText>손화영</S.ListText>
                </PS.RowWrapper>
                <S.TextArea
                  $height='8rem'
                  $marginTop='1rem'
                  id='textarea'
                  // value={text}
                  // onChange={handleChange}
                  rows={5}
                  placeholder='내용을 입력해주세요'
                />
              </S.OpItem>
            ))}
          </S.List>
        </S._Container>
      </S.FormWrapper>
      <Modal
        message={studentRegisterHandler.modalMessage}
        onClose={studentRegisterHandler.handleOnModalClose}
        isOpen={studentRegisterHandler.isModalVisible}
      />
    </S.Container>
  );
}

export default ReportRegister;
