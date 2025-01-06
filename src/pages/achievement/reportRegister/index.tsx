import * as S from './ReportRegister.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import Button from '@/components/button';
import Modal from '@/components/modal';
import ClassDropDown from '@/components/dropDown/classDropDown';
import CalendarIcon from '@/assets/achievement/calendar.svg';
import CalendarFilledIcon from '@/assets/achievement/calendarFilled.svg';
import { useNavigate } from 'react-router-dom';
import { useRef, useState } from 'react';
import SelectedCheckBoxIcon from '@/assets/info/selectedCheckBox.svg';
import { DateRange, RangeKeyDict } from 'react-date-range';
import { ko } from 'date-fns/locale';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import type { DateRangeProps } from './ReportRegister.types';
import useClassList from '@/hooks/useClassList';
import { Controller, useForm } from 'react-hook-form';
import {
  RegisterReportData,
  ReportExamData,
  ReportExamDataWithChecked,
  ReportStudentData,
  ReportStudentOpinionDataWithChecked,
} from '@/types/report.types';
import {
  getFindExam,
  getFindStudent,
  patchStudentOpinion,
  postReportRegister,
} from '@/api/reportAPI';
import MainClassDropDown from '@/components/dropDown/mainClassDropDown';
import Message from '@/components/message';
import { reverseExamPeriodList } from '../achievementRegister';
import CheckBoxIcon from '@/assets/info/checkBox.svg';

//평균 토글 onSubmit에 추가
//빈리스트 UI 추가

function ReportRegister() {
  const { classList, mainClassList } = useClassList();
  const navigate = useNavigate();
  const { control, handleSubmit, getValues, setValue } =
    useForm<RegisterReportData>();

  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');
  const [mainClass, setMainClass] = useState('');
  const [reportStudentOpinion, setReportStudentOpinion] = useState<
    ReportStudentOpinionDataWithChecked[]
  >([]);

  const [prevState, setPrevState] = useState<Record<string, Date>>({
    startDate: new Date(),
    endDate: new Date(),
  });

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

  const [reportExam, setReportExam] = useState<ReportExamDataWithChecked[]>([]);

  const [isOn, setisOn] = useState<boolean>(false);
  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false);
  const [isOpinionCheckedAll, setIsOpinionCheckedAll] =
    useState<boolean>(false);

  const toggleCheckedAll = () => {
    if (isCheckedAll) {
      setReportExam((prevData) =>
        prevData.map((item) => ({ ...item, checked: false }))
      );
    } else {
      setReportExam((prevData) =>
        prevData.map((item) => ({ ...item, checked: true }))
      );
    }
    setIsCheckedAll(!isCheckedAll);
  };

  const toggleOpnionCheckedAll = () => {
    if (isOpinionCheckedAll) {
      setReportStudentOpinion((prevData) =>
        prevData.map((item) => ({ ...item, checked: false }))
      );
    } else {
      setReportStudentOpinion((prevData) =>
        prevData.map((item) => ({ ...item, checked: true }))
      );
    }
    setIsOpinionCheckedAll(!isOpinionCheckedAll);
  };

  const toggleExamChecked = (id: number) => {
    setReportExam((prevData) =>
      prevData.map((item) =>
        item.examId === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const toggleStudentOpinionChecked = (id: number) => {
    setReportStudentOpinion((prevData) =>
      prevData.map((item) =>
        item.studentId === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleStudentOpinionChange = (studentId: number, value: string) => {
    setReportStudentOpinion((prevData) =>
      prevData.map((item) =>
        item.studentId === studentId ? { ...item, studentOpinion: value } : item
      )
    );
  };

  const handleOnChangeClass = async () => {
    const mainClassId = getValues('mainClassId');
    const subClassId = getValues('subClassId');

    if (mainClassId === undefined && subClassId === undefined) {
      return;
    }

    const res = await getFindStudent(mainClassId, subClassId);
    if (res.status === 200) {
      const transformedData = res.data.data.map((item: ReportStudentData) => ({
        reportId: 0,
        studentId: item.studentId,
        studentName: item.studentName,
        studentOpinion: '',
        checked: false,
      }));
      setReportStudentOpinion(transformedData);
    } else {
      alert('학생 조회에 실패했습니다.');
    }
  };

  const onSubmit = async (data: RegisterReportData) => {
    const examIdList = reportExam
      .filter((item) => item.checked)
      .map((item) => item.examId);
    setValue('examIdList', examIdList);
    if (examIdList.length === 0) {
      setModalMessage('리포트 구성을 선택해주세요.');
      setIsModalVisible(true);
      return;
    }
    setValue('examIdList', examIdList);
    const updatedData = getValues();

    try {
      const res = await postReportRegister(updatedData);
      if (res.status === 200) {
        const filteredStudentOpinion = reportStudentOpinion
          .filter((item) => item.checked)
          .map(({ checked, studentName, ...rest }) => ({
            ...rest,
            reportId: res.data.data.reportId,
          }));

        if (filteredStudentOpinion.length > 0) {
          try {
            const res = await patchStudentOpinion(filteredStudentOpinion);
            if (res.status === 200) {
              setModalMessage('리포트가 등록되었습니다.');
              setIsModalVisible(true);
            } else {
              setModalMessage('리포트 등록에 실패했습니다.');
              setIsModalVisible(true);
            }
          } catch (error) {
            setModalMessage('리포트 등록에 실패했습니다.');
            setIsModalVisible(true);
          }
        } else {
          setModalMessage('리포트가 등록되었습니다.');
          setIsModalVisible(true);
        }
      } else {
        setModalMessage('리포트 등록에 실패했습니다.');
        setIsModalVisible(true);
      }
    } catch (error) {
      setModalMessage('리포트 등록에 실패했습니다.');
      setIsModalVisible(true);
    }
  };

  const handleOnCancel = () => {
    setState([
      {
        startDate: prevState.startDate,
        endDate: prevState.endDate,
        key: 'selection',
      },
    ]);
    setShowCalendar(false);
  };

  const fetchExamData = async () => {
    const { startDate, endDate } = state[0];

    const newStartDate = startDate.toISOString().split('T')[0];
    const newEndDate = endDate.toISOString().split('T')[0];

    const res = await getFindExam(
      newStartDate,
      newEndDate,
      getValues('mainClassId'),
      getValues('subClassId')
    );
    if (res.status === 200) {
      const transformedData = res.data.data.map((item: ReportExamData) => ({
        examId: item.examId,
        examPeriod: item.examPeriod,
        examName: item.examName,
        mainClassName: item.mainClassName,
        subClassName: item.subClassName,
        checked: false,
      }));
      setReportExam(transformedData);
    } else {
      alert('시험 조회에 실패했습니다.');
    }
  };

  const handleOnConfirm = () => {
    setPrevState({ startDate: state[0].startDate, endDate: state[0].endDate });
    setValue('startDate', state[0].startDate.toISOString().split('T')[0]);
    setValue('endDate', state[0].endDate.toISOString().split('T')[0]);

    fetchExamData();
    setShowCalendar(false);
  };

  const handleOnModalClose = () => {
    setIsModalVisible(false);
    navigate('/manage/achievement/report');
  };

  const toggleHandler = () => {
    setisOn((prev) => !prev);
  };

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
    setShowCalendar(true);
  };

  // useEffect(() => {
  //   const handleClickOutside = (event: MouseEvent) => {
  //     if (
  //       calendarRef.current &&
  //       !calendarRef.current.contains(event.target as Node)
  //     ) {
  //       setShowCalendar(false);
  //     }
  //   };

  //   document.addEventListener('mousedown', handleClickOutside);
  //   return () => {
  //     document.removeEventListener('mousedown', handleClickOutside);
  //   };
  // }, []);

  return (
    <form>
      <S.Container>
        <PS.ButtonWrapper>
          <S.ButtonWrapper>
            <Button title='저장' onClick={handleSubmit(onSubmit)} />
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
                name='mainClassId'
                control={control}
                defaultValue={0}
                rules={{ required: '메인클래스를 선택해주세요.' }}
                render={({ field, fieldState }) => (
                  <>
                    <MainClassDropDown
                      options={mainClassList}
                      value={mainClass}
                      onChange2={(value1, value2) => {
                        field.onChange(value1); // mainClassId
                        setMainClass(value2); // mainClassName
                      }}
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
                name='subClassId'
                control={control}
                defaultValue={0}
                rules={{ required: '서브클래스를 선택해주세요.' }}
                render={({ field, fieldState }) => (
                  <>
                    <ClassDropDown
                      options={classList[mainClass]}
                      onChange2={(value1, value2) => {
                        field.onChange(value1); //subClassId
                        handleOnChangeClass();
                      }}
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
          <S.FormGroup>
            <S.LabelWrapper>
              <S.Label>리포트명</S.Label>
              <S.Label $color='var(--color-blue)'>(필수)</S.Label>
            </S.LabelWrapper>
            <S.Row>
              <S.FormGroup style={{ flex: 2 }}>
                <Controller
                  name='reportName'
                  control={control}
                  rules={{
                    required: '리포트명을 입력해주세요.',
                  }}
                  render={({ field, fieldState }) => (
                    <>
                      <S.Input
                        style={{ flex: 1 }}
                        placeholder='리포트명 입력'
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
            <S.FormGroup style={{ position: 'relative' }}>
              <S.LabelWrapper>
                <S.Label>기간</S.Label>
                <S.Label $color='var(--color-blue)'>(필수)</S.Label>
              </S.LabelWrapper>
              <Controller
                name='endDate'
                control={control}
                defaultValue=''
                rules={{
                  required: '기간을 선택해주세요.',
                }}
                render={({ field, fieldState }) => (
                  <>
                    <S.InputWrapper onClick={toggleCalendar}>
                      <S.TextWithIcon $isSelected={isCalendarInitialized}>
                        {isCalendarInitialized
                          ? `${prevState.startDate.toLocaleDateString()} ~ ${prevState.endDate.toLocaleDateString()}`
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
                    {fieldState.error && (
                      <Message content={fieldState.error.message || ''} />
                    )}
                    {showCalendar && (
                      <S.CalendarWrapper ref={calendarRef}>
                        <DateRange
                          editableDateInputs={true}
                          onChange={handleChange}
                          moveRangeOnFirstSelection={false}
                          ranges={state}
                          locale={ko}
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
                          <Button
                            title='취소'
                            textColor='var(--color-blue)'
                            backgroundColor='var(--color-white)'
                            isBorder={true}
                            borderColor='var(--color-blue)'
                            onClick={handleOnCancel}
                          />
                          <Button title='확인' onClick={handleOnConfirm} />
                        </S.CalendarButtonWrapper>
                      </S.CalendarWrapper>
                    )}
                  </>
                )}
              />
            </S.FormGroup>
          </S.Row>
          <S.LabelWrapper>
            <S.Label>리포트 구성</S.Label>
            <S.Label $color='var(--color-blue)'>(필수)</S.Label>
          </S.LabelWrapper>
          <S.Sublabel>기간 내 생성된 성적이 제공됩니다.</S.Sublabel>

          <S._Container>
            <S.Header>
              <PS.RowWrapper>
                <PS.IconWrapper $alignLeft={true} onClick={toggleCheckedAll}>
                  {isCheckedAll ? (
                    <PS.BtnIcon src={SelectedCheckBoxIcon} />
                  ) : (
                    <PS.BtnIcon src={CheckBoxIcon} />
                  )}
                </PS.IconWrapper>
                <S.ListText $padding='0'>전체선택</S.ListText>
              </PS.RowWrapper>

              <PS.RowWrapper>
                <S.ListText $padding='0'>평균 포함</S.ListText>
                <S.ToggleWrapper>
                  <S.ToggleContainer onClick={toggleHandler}>
                    <div
                      className={`toggle-container ${isOn ? 'toggle--checked' : null}`}
                    />
                    <div
                      className={`toggle-circle ${isOn ? 'toggle--checked' : null}`}
                    />
                  </S.ToggleContainer>
                </S.ToggleWrapper>
              </PS.RowWrapper>
            </S.Header>
            <S.List>
              {reportExam.map((item) => (
                <S.ListItem key={item.examId}>
                  <PS.RowWrapper>
                    <PS.IconWrapper
                      $alignLeft={true}
                      onClick={() => toggleExamChecked(item.examId)}
                    >
                      {item.checked ? (
                        <PS.BtnIcon src={SelectedCheckBoxIcon} />
                      ) : (
                        <PS.BtnIcon src={CheckBoxIcon} />
                      )}
                    </PS.IconWrapper>
                    <PS.Tag $type={reverseExamPeriodList[item.examPeriod]}>
                      {reverseExamPeriodList[item.examPeriod]}
                    </PS.Tag>
                    <S.ListText>
                      {item.mainClassName}-{item.subClassName}
                    </S.ListText>
                    <S.ListText>{item.examName}</S.ListText>
                  </PS.RowWrapper>

                  <S.ListText>24.11.15</S.ListText>
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
          <Controller
            name='overallOpinion'
            control={control}
            render={({ field, fieldState }) => (
              <>
                <S.TextArea
                  $height='20rem'
                  id='textarea'
                  value={field.value}
                  onChange={field.onChange}
                  rows={5}
                  placeholder='내용을 입력해주세요'
                />
              </>
            )}
          />
          <S.LabelWrapper>
            <S.Label>개별의견</S.Label>
          </S.LabelWrapper>
          <S.Sublabel>선택한 대상자에게만 보여집니다.</S.Sublabel>
          <S._Container>
            <S.Header>
              <PS.RowWrapper>
                <PS.IconWrapper
                  $alignLeft={true}
                  onClick={toggleOpnionCheckedAll}
                >
                  {isOpinionCheckedAll ? (
                    <PS.BtnIcon src={SelectedCheckBoxIcon} />
                  ) : (
                    <PS.BtnIcon src={CheckBoxIcon} />
                  )}
                </PS.IconWrapper>
                <S.ListText $padding='0'>전체선택</S.ListText>
              </PS.RowWrapper>
            </S.Header>
            <S.List>
              {reportStudentOpinion.map((item) => (
                <S.OpItem key={item.studentId}>
                  <PS.RowWrapper>
                    <PS.IconWrapper
                      $alignLeft={true}
                      onClick={() => {
                        toggleStudentOpinionChecked(item.studentId);
                      }}
                    >
                      {item.checked ? (
                        <PS.BtnIcon src={SelectedCheckBoxIcon} />
                      ) : (
                        <PS.BtnIcon src={CheckBoxIcon} />
                      )}
                    </PS.IconWrapper>
                    <S.ListText>{item.studentName}</S.ListText>
                  </PS.RowWrapper>
                  <S.TextArea
                    $height='8rem'
                    $marginTop='1rem'
                    id='textarea'
                    value={item.studentOpinion}
                    onChange={(e) =>
                      handleStudentOpinionChange(item.studentId, e.target.value)
                    }
                    rows={5}
                    placeholder={item.checked ? '내용을 입력해주세요' : ''}
                    readOnly={!item.checked}
                  />
                </S.OpItem>
              ))}
            </S.List>
          </S._Container>
        </S.FormWrapper>
        <Modal
          message={modalMessage}
          onClose={handleOnModalClose}
          isOpen={isModalVisible}
        />
      </S.Container>
    </form>
  );
}

export default ReportRegister;
