import * as S from './AchievementRegister.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import DropDown from '@/components/dropDown';
import Button from '@/components/button';
import useStudentRegister from '@/hooks/student/useStudentRegister';
import { STUDENT_FIELD } from '@/constants/STUDENT';
import Modal from '@/components/modal';
import ClassDropDown from '@/components/dropDown/classDropDown';
import CloseIcon from '@/assets/label/close.svg';
import { useNavigate } from 'react-router-dom';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import CalendarIcon from '@/assets/achievement/calendar.svg';
import CalendarFilledIcon from '@/assets/achievement/calendarFilled.svg';
import { useState } from 'react';
import { format } from 'date-fns';

function AchievementRegister() {
  const genderLst = ['점수', '개수', 'P/F', '정성평가'];
  const examLst = ['주간', '월간', '데일리', '기타'];
  const studentRegisterHandler = useStudentRegister();
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  const handleSelectDate = (date: Date) => {
    setDate(date);
  };

  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [isCalendarInitialized, setIsCalendarInitialized] =
    useState<boolean>(false);

  const toggleCalendar = () => {
    setIsCalendarInitialized(true);
    setShowCalendar((prev) => !prev);
    console.log(showCalendar);
  };

  return (
    <PS.Container>
      <PS.ButtonWrapper>
        <S.ButtonWrapper>
          <Button
            title='다음'
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
              placeholder='메인 클래스 선택'
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
              placeholder='서브 클래스 선택'
              onChange={(value) =>
                studentRegisterHandler.handleOnChangeSubClassValue(
                  STUDENT_FIELD.SUB_CLASS_LIST,
                  value
                )
              }
            />
          </S.FormGroup>
        </S.Row>
        <S.Row>
          <S.FormGroup style={{ flex: 1, position: 'relative' }}>
            <S.LabelWrapper>
              <S.Label>시험 날짜</S.Label>
              <S.Label $color='var(--color-blue)'>(필수)</S.Label>
            </S.LabelWrapper>
            <S.InputWrapper onClick={toggleCalendar}>
              <S.TextWithIcon $isSelected={isCalendarInitialized}>
                {isCalendarInitialized
                  ? `${format(date, 'yy-MM-dd')}`
                  : '연도-월-일'}
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
              <S.CalendarWrapper>
                <Calendar date={date} onChange={handleSelectDate} />
                <S.CalendarButtonWrapper>
                  <Button title='확인' onClick={toggleCalendar} />
                </S.CalendarButtonWrapper>
              </S.CalendarWrapper>
            )}
            {/* <S.Input
              placeholder='YYYY-MM-DD'
              value={studentRegisterHandler.studentData.birth}
              onChange={(e) =>
                studentRegisterHandler.handleOnChangeValue(
                  STUDENT_FIELD.BIRTH,
                  e.target.value
                )
              }
              type='date'
            /> */}
          </S.FormGroup>
          <S.FormGroup style={{ flex: 2 }}>
            <S.LabelWrapper>
              <S.Label>채점 기준</S.Label>
              <S.Label $color='var(--color-blue)'>(필수)</S.Label>
            </S.LabelWrapper>
            <S.Row>
              <DropDown
                style={{ flex: 1 }}
                options={genderLst}
                value={studentRegisterHandler.studentData.gender}
                placeholder='기준 선택'
                onChange={(value) =>
                  studentRegisterHandler.handleOnChangeGenderValue(
                    STUDENT_FIELD.GENDER,
                    value
                  )
                }
              />
              <S.Input
                style={{ flex: 1 }}
                placeholder='점수'
                value={studentRegisterHandler.studentData.name}
                onChange={(e) =>
                  studentRegisterHandler.handleOnChangeValue(
                    STUDENT_FIELD.NAME,
                    e.target.value
                  )
                }
              />
            </S.Row>
          </S.FormGroup>
        </S.Row>
        <S.FormGroup>
          <S.LabelWrapper>
            <S.Label>시험 정보</S.Label>
            <S.Label $color='var(--color-blue)'>(필수)</S.Label>
          </S.LabelWrapper>
          <S.Row>
            <S.FormGroup style={{ flex: 1 }}>
              <DropDown
                options={examLst}
                value={studentRegisterHandler.studentData.gender}
                placeholder='분류 선택'
                onChange={(value) =>
                  studentRegisterHandler.handleOnChangeGenderValue(
                    STUDENT_FIELD.GENDER,
                    value
                  )
                }
              />
            </S.FormGroup>

            <S.FormGroup style={{ flex: 2 }}>
              <S.Input
                placeholder='시험명 입력'
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
          <S.FormGroup style={{ flex: 1 }}>
            <S.Label>시험 범위</S.Label>

            <PS.SearchBox>
              <PS.Input
                type='text'
                placeholder='단원명 혹은 과목 목차를 입력해주세요'
                value={studentRegisterHandler.studentData.address}
                onChange={(e) =>
                  studentRegisterHandler.handleOnChangeValue(
                    STUDENT_FIELD.ADDRESS,
                    e.target.value
                  )
                }
              />
              <PS.Button>입력</PS.Button>
            </PS.SearchBox>
            <S.TagRangeWrapper>
              <S.TagItem>
                1단원 소수의 이해
                <S.LabelCloseBtn onClick={() => {}}>
                  <img src={CloseIcon} alt='close' />
                </S.LabelCloseBtn>
              </S.TagItem>
              <S.TagItem>
                1단원 소수의 이해
                <S.LabelCloseBtn onClick={() => {}}>
                  <img src={CloseIcon} alt='close' />
                </S.LabelCloseBtn>
              </S.TagItem>
            </S.TagRangeWrapper>
          </S.FormGroup>
        </S.Row>
      </S.FormWrapper>
      <Modal
        message={studentRegisterHandler.modalMessage}
        onClose={studentRegisterHandler.handleOnModalClose}
        isOpen={studentRegisterHandler.isModalVisible}
      />
    </PS.Container>
  );
}

export default AchievementRegister;
