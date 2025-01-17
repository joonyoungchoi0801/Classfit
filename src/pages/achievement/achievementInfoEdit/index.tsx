import * as S from './AchievementInfoEdit.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import DropDown from '@/components/dropDown';
import Button from '@/components/button';
import CloseIcon from '@/assets/label/close.svg';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { Calendar } from 'react-date-range';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import CalendarIcon from '@/assets/achievement/calendar.svg';
import CalendarFilledIcon from '@/assets/achievement/calendarFilled.svg';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import { useForm, Controller } from 'react-hook-form';
import Message from '@/components/message';
import type { ModifyExamData } from '@/types/exam.type';
import { deleteExam, putExam } from '@/api/examAPI';
import {
  examLst,
  examPeriodList,
  genderLst,
  reverseExamPeriodList,
  reverseStandardList,
  scoreStandard,
  standardList,
} from '../achievementRegister';
import InActiveDropDown from '@/components/dropDown/inactiveDropDown';
import Modal from '@/components/modal';
import QuestionModal from '@/components/modal/questionModal';

function AchievementInfoEdit() {
  const location = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const examInfoData = location.state;
  const transformExamRange = JSON.parse(examInfoData.examRange);

  const [date, setDate] = useState(() => {
    return examInfoData.examDate
      ? new Date(`${examInfoData.examDate}T00:00:00`)
      : new Date();
  });
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState('');
  const [standardValue, setStandardValue] = useState(
    reverseStandardList[examInfoData.standard]
  );
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [isQuestionModalVisible, setIsQuestionModalVisible] =
    useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');

  const handleSelectDate = (date: Date) => {
    setDate(date);
  };

  const [isCalendarInitialized, setIsCalendarInitialized] =
    useState<boolean>(true);
  const [isHighestScoreEdited, setIsHighestScoreEdited] =
    useState<boolean>(false);
  const [isRequested, setIsRequested] = useState<boolean>(true);

  const toggleCalendar = () => {
    setIsCalendarInitialized(true);
    setShowCalendar((prev) => !prev);
  };

  const initHighestScore = () => {
    if (standardValue === 'QUESTION' || standardValue === '개수') {
      return Number(examInfoData.highestScore);
    } else {
      return 0;
    }
  };

  const { control, handleSubmit, getValues, setValue } =
    useForm<ModifyExamData>({
      defaultValues: {
        examDate: examInfoData.examDate,
        standard: reverseStandardList[examInfoData.standard],
        highestScore: initHighestScore(),
        examPeriod: reverseExamPeriodList[examInfoData.examPeriod],
        examName: examInfoData.examName,
        examRange: transformExamRange,
      },
    });

  const handleOnModalClose = () => {
    setIsModalVisible(false);
    navigate(-2);
  };

  const onSubmit = async (data: ModifyExamData) => {
    const tempHighestScore = getValues('highestScore');
    if (standardValue === '점수') {
      data.highestScore = 100;
    } else if (standardValue === '개수') {
      if (
        isHighestScoreEdited &&
        tempHighestScore < examInfoData.highestScore
      ) {
        setIsQuestionModalVisible(true);
        return;
      }

      data.highestScore = tempHighestScore;
    } else if (standardValue === '정성평가') {
      data.highestScore = -2;
    } else {
      data.highestScore = -1;
    }

    const selectedExamPeriod = getValues('examPeriod');

    data.examPeriod = examPeriodList[selectedExamPeriod] || 'SCORE';
    data.standard = standardList[data.standard] || 'SCORE';

    const res = await putExam(Number(id), data);
    if (res.status === 200) {
      setModalMessage('시험 정보가 수정되었습니다.');
      setIsModalVisible(true);
    } else {
      setModalMessage('시험 정보 수정에 실패했습니다.');
    }
  };

  const onSubmit2 = async (data: ModifyExamData) => {
    const tempHighestScore = getValues('highestScore');
    if (standardValue === '점수') {
      data.highestScore = 100;
    } else if (standardValue === '개수') {
      setIsQuestionModalVisible(true);
      data.highestScore = tempHighestScore;
    } else if (standardValue === '정성평가') {
      data.highestScore = -2;
    } else {
      data.highestScore = -1;
    }

    const selectedExamPeriod = getValues('examPeriod');

    data.examPeriod = examPeriodList[selectedExamPeriod] || 'SCORE';
    data.standard = standardList[data.standard] || 'SCORE';

    const res = await putExam(Number(id), data);
    if (res.status === 200) {
      setModalMessage('시험 정보가 수정되었습니다.');
      setIsModalVisible(true);
    } else {
      setModalMessage('시험 정보 수정에 실패했습니다.');
    }
  };

  const handleAddExamRange = () => {
    const currentRanges = getValues('examRange');
    if (inputValue.trim() !== '') {
      setValue('examRange', [...currentRanges, inputValue]);
      setInputValue('');
    }
  };

  const examRanges = getValues('examRange') || [];

  const handleOnDelete = async () => {
    const res = await deleteExam(Number(id));
    if (res.status === 200) {
      setModalMessage('시험 정보가 삭제되었습니다.');
      setIsModalVisible(true);
    } else {
      setModalMessage('시험 정보 삭제에 실패했습니다.');
      setIsModalVisible(true);
    }
  };

  const handleOnEdit = () => {
    setIsQuestionModalVisible(false);
    onSubmit2(getValues());
  };

  return (
    <form>
      <S.Container>
        <PS.ButtonWrapper>
          <S.ButtonWrapper>
            <Button
              type='button'
              title='삭제'
              onClick={handleOnDelete}
              textColor='var(--color-blue)'
              backgroundColor='var(--color-white)'
              borderColor='var(--color-blue)'
              isBorder={true}
            />
            <Button
              type='button'
              title='저장'
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
              <InActiveDropDown
                value={examInfoData.mainClassName}
                inActive={true}
              />
            </S.FormGroup>
            <S.FormGroup>
              <InActiveDropDown
                value={examInfoData.subClassName}
                inActive={true}
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
                            field.onChange(format(date, 'yyyy-MM-dd'));
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
                    name='highestScore'
                    control={control}
                    // rules={{
                    //   required: '점수를 입력해주세요.',
                    // }}
                    render={({ field, fieldState }) => (
                      <>
                        <S.Input
                          style={{ width: '100%' }}
                          placeholder={
                            scoreStandard[standardValue]?.placeholder
                          }
                          value={standardValue == '개수' ? field.value : ''}
                          onChange={(value) => {
                            field.onChange(value);
                            setIsHighestScoreEdited(true);
                          }}
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
                  name='examPeriod'
                  control={control}
                  // defaultValue=''
                  rules={{ required: '카테고리를 선택해주세요.' }}
                  render={({ field, fieldState }) => (
                    <>
                      <DropDown
                        options={examLst}
                        value={field.value}
                        onChange={(value) => {
                          field.onChange(value);
                        }}
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
                  // defaultValue={[]}
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
          message={modalMessage}
          onClose={handleOnModalClose}
          isOpen={isModalVisible}
        />
        <QuestionModal
          title='수정 확인'
          message='최고점수가 감소될 경우, 최고 점수를 초과하는 학생들의 점수가 초기화됩니다. 수정하시겠습니까?'
          onConfirm={handleOnEdit}
          onCancel={() => {
            setIsQuestionModalVisible(false);
          }}
          isOpen={isQuestionModalVisible}
        />
      </S.Container>
    </form>
  );
}

export default AchievementInfoEdit;
