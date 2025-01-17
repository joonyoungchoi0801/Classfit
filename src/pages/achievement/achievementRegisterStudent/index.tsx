import * as S from './AchievementRegisterStudent.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SelectedCheckBoxIcon from '@/assets/info/selectedCheckBox.svg';
import CheckBoxIcon from '@/assets/info/checkBox.svg';
import SelectedToggleIcon from '@/assets/buttonIcon/toggleFilled.svg';
import ToggleIcon from '@/assets/buttonIcon/toggle.svg';
import Button from '@/components/button';
import { getExamStudent, scoreRegisterExam } from '@/api/examAPI';
import { ExamStudentData, ExamStudentDataWithChecked } from '@/types/exam.type';
import Modal from '@/components/modal';
import Message from '@/components/message';

function AchievementRegisterStudent() {
  const navigate = useNavigate();
  const { examId } = useParams();
  const location = useLocation();
  const { standard, highestScore } = location.state || {}; // state에서 데이터 추출
  const [data, setData] = useState<ExamStudentDataWithChecked[]>([]);
  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [totalScore, setTotalScore] = useState<string>('');
  const [error, setError] = useState<Record<number, boolean>>({});
  const hasError = Object.values(error).some((value) => value === true);
  const isEvaluated = standard === 'EVALUATION';

  useEffect(() => {
    if (standard === 'SCORE') {
      setTotalScore('/' + highestScore + ' 점');
    } else if (standard === 'QUESTION') {
      setTotalScore('/' + highestScore + ' 개');
    }
  }, [standard, highestScore]);

  const toggleChecked = (id: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.studentId === id
          ? {
              ...item,
              checkedStudent: !item.checkedStudent,
              score: item.checkedStudent ? '0' : item.score,
              evaluationDetail: '',
            }
          : item
      )
    );
  };

  const handlePF = (id: number, value: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.studentId === id
          ? {
              ...item,
              // evaluationDetail: value,
              score: value === 'P' ? '-3' : '-4',
            }
          : item
      )
    );
  };

  const toggleCheckedAll = () => {
    if (isCheckedAll) {
      setData((prevData) =>
        prevData.map((item) => ({ ...item, checkedStudent: false, score: '0' }))
      );
    } else {
      setData((prevData) =>
        prevData.map((item) => ({ ...item, checkedStudent: true }))
      );
    }
    setIsCheckedAll(!isCheckedAll);
  };

  const handleOnChangeScoreValue = (id: number, value: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.studentId === id ? { ...item, score: value } : item
      )
    );
    setError((prevError) => ({
      ...prevError,
      [id]: Number(value) > highestScore ? true : false,
    }));
  };

  const handleOnSubmit = async () => {
    if (hasError) {
      return;
    }
    const scoreData = data.map((item) => ({
      studentId: item.studentId,
      score: Number(item.score),
      checkedStudent: item.checkedStudent,
      evaluationDetail: item.evaluationDetail,
    }));
    if (examId) {
      const data = await scoreRegisterExam(Number(examId), scoreData);
      if (data.status === 200) {
        setIsModalVisible(true);
      } else {
        alert('점수 등록에 실패했습니다. 다시 시도해주세요');
      }
    } else {
      alert('점수 등록에 실패했습니다. 다시 시도해주세요');
      navigate('/manage/achievement/management/register');
    }
  };

  const handleOnModalClose = () => {
    setIsModalVisible(false);
    navigate('/manage/achievement/management');
  };

  useEffect(() => {
    const fetchData = async () => {
      if (examId) {
        const res = await getExamStudent(Number(examId));
        if (res.status === 200) {
          if (standard === 'PF') {
            const transformedData = res.data.data.map(
              (item: ExamStudentData) => ({
                studentId: item.studentId,
                name: item.name,
                score: '-4',
                checkedStudent: false,
              })
            );
            setData(transformedData);
            return;
          } else if (standard === 'EVALUATION') {
            const transformedData = res.data.data.map(
              (item: ExamStudentData) => ({
                studentId: item.studentId,
                name: item.name,
                score: '-2',
                evaluationDetail: '',
                checkedStudent: false,
              })
            );
            setData(transformedData);
            return;
          } else {
            const transformedData = res.data.data.map(
              (item: ExamStudentData) => ({
                studentId: item.studentId,
                name: item.name,
                score: '0',
                evaluationDetail: '',
                checkedStudent: false,
              })
            );
            setData(transformedData);
            return;
          }
        } else {
          alert('학생 데이터를 불러오는데 실패했습니다.');
        }
      }
    };
    fetchData();
  }, [examId]);

  return (
    <S.Container>
      <PS.ButtonWrapper>
        <S.ButtonWrapper>
          <Button
            title='저장'
            onClick={handleOnSubmit}
            backgroundColor={
              hasError ? 'var(--color-lightgray)' : 'var(--color-blue)'
            }
          />
        </S.ButtonWrapper>
      </PS.ButtonWrapper>

      <S.ScoreListSection>
        <S.TotalChooseWrapper>
          <S.RowWrapper>
            <S.IconWrapper $alignLeft={true} onClick={toggleCheckedAll}>
              {isCheckedAll ? (
                <S.BtnIcon src={SelectedCheckBoxIcon} />
              ) : (
                <S.BtnIcon src={CheckBoxIcon} />
              )}
            </S.IconWrapper>
            <S.Label>전체선택</S.Label>
          </S.RowWrapper>
        </S.TotalChooseWrapper>
        <S.ScoreList>
          {data.map((item) => (
            <S.ScoreItem key={item.studentId} $isEvaluated={isEvaluated}>
              {isEvaluated ? (
                <S.EvaluateWrapper>
                  <S.IconWrapper
                    $alignLeft={true}
                    onClick={() => {
                      toggleChecked(item.studentId);
                    }}
                  >
                    {item.checkedStudent ? (
                      <S.BtnIcon src={SelectedCheckBoxIcon} />
                    ) : (
                      <S.BtnIcon src={CheckBoxIcon} />
                    )}
                  </S.IconWrapper>
                  <S.Name $isChecked={item.checkedStudent}>{item.name}</S.Name>
                </S.EvaluateWrapper>
              ) : (
                <S.RowWrapper>
                  <S.IconWrapper
                    $alignLeft={true}
                    onClick={() => {
                      toggleChecked(item.studentId);
                    }}
                  >
                    {item.checkedStudent ? (
                      <S.BtnIcon src={SelectedCheckBoxIcon} />
                    ) : (
                      <S.BtnIcon src={CheckBoxIcon} />
                    )}
                  </S.IconWrapper>
                  <S.Name $isChecked={item.checkedStudent}>{item.name}</S.Name>
                </S.RowWrapper>
              )}
              {standard == 'PF' ? (
                <S.ToggleWrapper>
                  <S.Toggle>
                    <S.IconWrapper
                      $alignLeft={true}
                      onClick={() => {
                        handlePF(item.studentId, 'P');
                      }}
                    >
                      {item.score === '-3' ? (
                        <S.BtnIcon src={SelectedToggleIcon} $size='2rem' />
                      ) : (
                        <S.BtnIcon src={ToggleIcon} $size='2rem' />
                      )}

                      {/* <S.BtnIcon src={SelectedToggleIcon} $size='2rem' /> */}
                    </S.IconWrapper>
                    <S.Label>P</S.Label>
                  </S.Toggle>
                  <S.Toggle>
                    <S.IconWrapper
                      $alignLeft={true}
                      onClick={() => {
                        handlePF(item.studentId, 'F');
                      }}
                    >
                      {/* <S.BtnIcon src={ToggleIcon} $size='2rem' /> */}
                      {item.score === '-4' ? (
                        <S.BtnIcon src={SelectedToggleIcon} $size='2rem' />
                      ) : (
                        <S.BtnIcon src={ToggleIcon} $size='2rem' />
                      )}
                    </S.IconWrapper>
                    <S.Label>F</S.Label>
                  </S.Toggle>
                </S.ToggleWrapper>
              ) : standard == 'EVALUATION' ? (
                <S.EvaluationInput
                  placeholder='내용을 입력해주세요'
                  value={item.evaluationDetail}
                  onChange={(e) =>
                    setData((prevData) =>
                      prevData.map((prevItem) =>
                        prevItem.studentId === item.studentId
                          ? { ...prevItem, evaluationDetail: e.target.value }
                          : prevItem
                      )
                    )
                  }
                  disabled={!item.checkedStudent}
                />
              ) : (
                <S.ErrorWrapper>
                  <S.ScoreWrapper>
                    {item.checkedStudent && (
                      <S.ScoreInput
                        placeholder=''
                        value={item.score}
                        $isError={error[item.studentId]}
                        onChange={(e) =>
                          handleOnChangeScoreValue(
                            item.studentId,
                            e.target.value
                          )
                        }
                      />
                    )}

                    <S.TotalScore $isChecked={item.checkedStudent}>
                      {totalScore}
                    </S.TotalScore>
                  </S.ScoreWrapper>

                  {error[item.studentId] && (
                    <Message content='최고 점수를 초과한 점수는 입력할 수 없습니다.' />
                  )}
                </S.ErrorWrapper>
              )}
            </S.ScoreItem>
          ))}
        </S.ScoreList>
      </S.ScoreListSection>
      <Modal
        message='시험 등록이 완료되었습니다.'
        onClose={handleOnModalClose}
        isOpen={isModalVisible}
      />
    </S.Container>
  );
}

export default AchievementRegisterStudent;
