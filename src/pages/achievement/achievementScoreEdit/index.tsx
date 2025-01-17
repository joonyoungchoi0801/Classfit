import * as S from './AchievementScoreEdit.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import { useEffect, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import SelectedCheckBoxIcon from '@/assets/info/selectedCheckBox.svg';
import CheckBoxIcon from '@/assets/info/checkBox.svg';
import SelectedToggleIcon from '@/assets/buttonIcon/toggleFilled.svg';
import ToggleIcon from '@/assets/buttonIcon/toggle.svg';
import Button from '@/components/button';
import { scoreRegisterExam } from '@/api/examAPI';
import Modal from '@/components/modal';
import useExamStudentStore from '@/store/examStudentStore';
import { ExamStudentDataWithEdited } from '@/types/exam.type';
import Message from '@/components/message';

function AchievementScoreEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { standard, highestScore } = location.state || {};

  const [data, setData] = useState<ExamStudentDataWithEdited[]>([]);
  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');

  const [totalScore, setTotalScore] = useState<string>('');

  const { examStudentData } = useExamStudentStore();
  const [error, setError] = useState<Record<number, boolean>>({});
  const hasError = Object.values(error).some((value) => value === true);

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
              isEdited: true,
              score: item.checkedStudent ? '0' : item.score,
            }
          : item
      )
    );
  };

  const toggleCheckedAll = () => {
    if (isCheckedAll) {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          checkedStudent: false,
          isEdited: true,
          score: '0',
        }))
      );
    } else {
      setData((prevData) =>
        prevData.map((item) => ({
          ...item,
          checkedStudent: true,
          isEdited: true,
        }))
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
    const scoreData = data
      .filter((item) => item.isEdited)
      .map((item) => ({
        studentId: item.studentId,
        score: Number(item.score),
        checkedStudent: item.checkedStudent,
        evaluationDetail: item.evaluationDetail,
      }));

    if (id) {
      const data = await scoreRegisterExam(Number(id), scoreData);
      if (data.status === 200) {
        setModalMessage('점수 등록이 완료되었습니다.');
        setIsModalVisible(true);
      } else {
        setModalMessage('점수 등록에 실패했습니다. 다시 시도해주세요');
        setIsModalVisible(true);
      }
    } else {
      setModalMessage('점수 등록에 실패했습니다. 다시 시도해주세요');
      setIsModalVisible(true);
    }
  };

  const handleOnModalClose = () => {
    setIsModalVisible(false);
    navigate(-1);
  };

  const handlePF = (id: number, value: string) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.studentId === id
          ? {
              ...item,
              // evaluationDetail: value,
              score: value === 'P' ? '-3' : '-4',
              isEdited: true,
            }
          : item
      )
    );
  };

  useEffect(() => {
    if (examStudentData) {
      const updatedData = examStudentData.map((item) => ({
        ...item,
        isEdited: false,
      }));

      setData(updatedData);
    }
  }, [examStudentData]);

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
            <S.ScoreItem
              key={item.studentId}
              $isEvaluated={standard === 'EVALUATION'}
            >
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
                          ? {
                              ...prevItem,
                              evaluationDetail: e.target.value,
                              isEdited: true,
                            }
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
        message={modalMessage}
        onClose={handleOnModalClose}
        isOpen={isModalVisible}
      />
    </S.Container>
  );
}

export default AchievementScoreEdit;
