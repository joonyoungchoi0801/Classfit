import * as S from './AchievementRegister.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import DropDown from '@/components/dropDown';
import Button from '@/components/button';
import useStudentRegister from '@/hooks/student/useStudentRegister';
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
import { useForm, Controller } from 'react-hook-form';
import Message from '@/components/message';
import useClassList from '@/hooks/useClassList';

type FormData = {
  mainClass: string;
  subClass: string;
  category: string;
  examDate: string;
  standard: string;
  examScore: number;
  examName: string;
  examRange: string[];
};

type ScoreStandardProps = {
  [key: string]: {
    placeholder: string;
    isBlocked: boolean;
  };
};

const scoreStandard: ScoreStandardProps = {
  점수: {
    placeholder: '100 (최고점수는 100으로 고정됩니다)',
    isBlocked: true,
  },
  개수: {
    placeholder: '최대 개수 입력',
    isBlocked: false,
  },
  'P/F': {
    placeholder: '',
    isBlocked: true,
  },
  정성평가: {
    placeholder: '',
    isBlocked: true,
  },
};
function AchievementRegister() {
  const { classList } = useClassList();
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
  };

  const { control, handleSubmit, getValues, setValue } = useForm<FormData>();
  const [inputValue, setInputValue] = useState('');
  const [standardValue, setStandardValue] = useState('점수');

  const onSubmit = (data: FormData) => {
    navigate('/manage/achievement/management/register/student');
  };

  const handleAddExamRange = () => {
    const currentRanges = getValues('examRange');
    if (inputValue.trim() !== '') {
      setValue('examRange', [...currentRanges, inputValue]);
      setInputValue('');
    }
  };
  const mainClass = getValues('mainClass') || '';
  const examRanges = getValues('examRange') || [];

  return (
    <form>
      <S.Container>
        <PS.ButtonWrapper>
          <S.ButtonWrapper>
            <Button
              type='button'
              title='다음'
              onClick={handleSubmit(onSubmit)}
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
              <Controller
                name='mainClass'
                control={control}
                defaultValue=''
                rules={{ required: '메인클래스를 선택해주세요.' }}
                render={({ field, fieldState }) => (
                  <>
                    <DropDown
                      options={Object.keys(classList) || []}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder='메인클래스 선택'
                    />
                    {fieldState.error && (
                      <Message content={fieldState.error.message || ''} />
                    )}
                  </>
                )}
              />
            </S.FormGroup>
            <S.FormGroup>
              <Controller
                name='subClass'
                control={control}
                defaultValue=''
                rules={{ required: '서브클래스를 선택해주세요.' }}
                render={({ field, fieldState }) => (
                  <>
                    <ClassDropDown
                      options={classList[mainClass]}
                      value={field.value}
                      onChange={field.onChange}
                      placeholder='서브클래스 선택'
                    />
                    {fieldState.error && (
                      <Message content={fieldState.error.message || ''} />
                    )}
                  </>
                )}
              />
            </S.FormGroup>
          </S.Row>
          <S.Row>
            <S.FormGroup style={{ flex: 1, position: 'relative' }}>
              <S.LabelWrapper>
                <S.Label>시험 날짜</S.Label>
                <S.Label $color='var(--color-blue)'>(필수)</S.Label>
              </S.LabelWrapper>
              <Controller
                name='examDate'
                control={control}
                defaultValue=''
                rules={{
                  required: '시험 날짜를 선택해주세요.',
                }}
                render={({ field, fieldState }) => (
                  <>
                    <S.InputWrapper onClick={toggleCalendar}>
                      <S.TextWithIcon $isSelected={isCalendarInitialized}>
                        {isCalendarInitialized
                          ? `${format(date, 'yy-MM-dd')}`
                          : '연도-월-일'}
                      </S.TextWithIcon>
                      <S.IconWrapper>
                        {showCalendar ? (
                          <PS.BtnIcon src={CalendarFilledIcon} />
                        ) : (
                          <PS.BtnIcon src={CalendarIcon} />
                        )}
                      </S.IconWrapper>
                    </S.InputWrapper>
                    {fieldState.error && (
                      <Message content={fieldState.error.message || ''} />
                    )}
                    {showCalendar && (
                      <S.CalendarWrapper>
                        <Calendar
                          date={date}
                          onChange={(selectedDate) => {
                            field.onChange(selectedDate);
                            handleSelectDate(selectedDate);
                            toggleCalendar();
                          }}
                        />
                        <S.CalendarButtonWrapper>
                          <Button title='확인' onClick={toggleCalendar} />
                        </S.CalendarButtonWrapper>
                      </S.CalendarWrapper>
                    )}
                  </>
                )}
              />
            </S.FormGroup>
            <S.FormGroup style={{ flex: 1 }}>
              <S.LabelWrapper>
                <S.Label>채점 기준</S.Label>
                <S.Label $color='var(--color-blue)'>(필수)</S.Label>
              </S.LabelWrapper>
              <S.Row style={{ display: 'flex', width: '100%' }}>
                <div style={{ flex: 1 }}>
                  <Controller
                    name='standard'
                    control={control}
                    defaultValue='점수'
                    rules={{ required: '기준을 선택해주세요' }}
                    render={({ field, fieldState }) => (
                      <PS.Column>
                        <DropDown
                          options={genderLst}
                          value={field.value}
                          onChange={(value: string) => {
                            field.onChange(value);
                            setStandardValue(value);
                          }}
                          placeholder='분류 선택'
                        />
                        {fieldState.error && (
                          <Message content={fieldState.error.message || ''} />
                        )}
                      </PS.Column>
                    )}
                  />
                </div>
                <div style={{ flex: 2 }}>
                  <Controller
                    name='examScore'
                    control={control}
                    rules={{
                      required: '점수를 입력해주세요.',
                    }}
                    render={({ field, fieldState }) => (
                      <>
                        <S.Input
                          style={{ width: '100%' }}
                          placeholder={
                            scoreStandard[standardValue]?.placeholder
                          }
                          value={field.value}
                          onChange={field.onChange}
                          disabled={scoreStandard[standardValue]?.isBlocked}
                        />
                        {fieldState.error && (
                          <Message content={fieldState.error.message || ''} />
                        )}
                      </>
                    )}
                  />
                </div>
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
                <Controller
                  name='category'
                  control={control}
                  defaultValue=''
                  rules={{ required: '카테고리를 선택해주세요.' }}
                  render={({ field, fieldState }) => (
                    <>
                      <DropDown
                        options={examLst}
                        value={field.value}
                        onChange={field.onChange}
                        placeholder='분류 선택'
                      />
                      {fieldState.error && (
                        <Message content={fieldState.error.message || ''} />
                      )}
                    </>
                  )}
                />
              </S.FormGroup>
              <S.FormGroup style={{ flex: 2 }}>
                <Controller
                  name='examName'
                  control={control}
                  rules={{
                    required: '시험명을 입력해주세요.',
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <S.Input
                        style={{ flex: 1 }}
                        placeholder='시험명 입력'
                        value={field.value}
                        onChange={field.onChange}
                      />
                      {fieldState.error && (
                        <Message content={fieldState.error.message || ''} />
                      )}
                    </>
                  )}
                />
              </S.FormGroup>
            </S.Row>
          </S.FormGroup>
          <S.Row>
            <S.FormGroup style={{ flex: 1 }}>
              <S.Label>시험 범위</S.Label>
              <PS.SearchBox>
                <Controller
                  name='examRange'
                  control={control}
                  defaultValue={[]}
                  render={({ field }) => (
                    <>
                      <PS.Input
                        type='text'
                        placeholder='단원명 혹은 과목 목차를 입력해주세요'
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                      />
                      <PS.Button type='button' onClick={handleAddExamRange}>
                        입력
                      </PS.Button>
                    </>
                  )}
                />
              </PS.SearchBox>
              <S.TagRangeWrapper>
                {examRanges.map((range, index) => (
                  <S.TagItem key={index}>
                    {range}
                    <S.LabelCloseBtn onClick={() => {}}>
                      <img src={CloseIcon} alt='close' />
                    </S.LabelCloseBtn>
                  </S.TagItem>
                ))}
              </S.TagRangeWrapper>
            </S.FormGroup>
          </S.Row>
        </S.FormWrapper>
        <Modal
          message={studentRegisterHandler.modalMessage}
          onClose={studentRegisterHandler.handleOnModalClose}
          isOpen={studentRegisterHandler.isModalVisible}
        />
      </S.Container>
    </form>
  );
}

export default AchievementRegister;
