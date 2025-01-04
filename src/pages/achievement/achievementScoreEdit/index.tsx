import * as S from './AchievementScoreEdit.styles';
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
import useExamStudentStore from '@/store/examStudentStore';

function AchievementScoreEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  const { standard, highestScore } = location.state || {};

  const [data, setData] = useState<ExamStudentDataWithChecked[]>([]);
  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>('');

  const [totalScore, setTotalScore] = useState<string>('');

  const { examStudentData } = useExamStudentStore();

  useEffect(() => {
    if (standard === 'SCORE') {
      setTotalScore('/' + highestScore + ' 점');
    } else if (standard === 'QEUSTION') {
      setTotalScore('/' + highestScore + ' 개');
    }
  }, [standard, highestScore]);

  const toggleChecked = (id: number) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.studentId === id ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const toggleCheckedAll = () => {
    if (isCheckedAll) {
      setData((prevData) =>
        prevData.map((item) => ({ ...item, checked: false }))
      );
    } else {
      setData((prevData) =>
        prevData.map((item) => ({ ...item, checked: true }))
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
  };

  const handleOnSubmit = async () => {
    const scoreData = data
      .filter((item) => item.checked)
      .map((item) => ({
        studentId: item.studentId,
        score: Number(item.score),
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
    navigate(`/manage/achievement/management/detail/${id}`);
  };

  useEffect(() => {
    if (examStudentData) {
      const updatedData = examStudentData.map((item) => ({
        ...item,
        checked: false,
      }));

      setData(updatedData);
    }
  }, [examStudentData]);
  return (
    <S.Container>
      <PS.ButtonWrapper>
        <S.ButtonWrapper>
          <Button title='저장' onClick={handleOnSubmit} />
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
            <S.ScoreItem key={item.studentId}>
              <S.RowWrapper>
                <S.IconWrapper
                  $alignLeft={true}
                  onClick={() => {
                    toggleChecked(item.studentId);
                  }}
                >
                  {item.checked ? (
                    <S.BtnIcon src={SelectedCheckBoxIcon} />
                  ) : (
                    <S.BtnIcon src={CheckBoxIcon} />
                  )}
                </S.IconWrapper>
                <S.Name $isChecked={item.checked}>{item.name}</S.Name>
              </S.RowWrapper>
              {standard == 'PF' ? (
                <S.ToggleWrapper>
                  <S.Toggle>
                    <S.IconWrapper $alignLeft={true} onClick={() => {}}>
                      <S.BtnIcon src={SelectedToggleIcon} $size='2rem' />
                    </S.IconWrapper>
                    <S.Label>T</S.Label>
                  </S.Toggle>
                  <S.Toggle>
                    <S.IconWrapper $alignLeft={true} onClick={() => {}}>
                      <S.BtnIcon src={ToggleIcon} $size='2rem' />
                    </S.IconWrapper>
                    <S.Label>F</S.Label>
                  </S.Toggle>
                </S.ToggleWrapper>
              ) : (
                <S.ScoreWrapper>
                  {item.checked ? (
                    <S.ScoreInput
                      placeholder=''
                      value={item.score}
                      onChange={(e) =>
                        handleOnChangeScoreValue(item.studentId, e.target.value)
                      }
                    />
                  ) : (
                    <S.Score>{item.score}</S.Score>
                  )}

                  <S.TotalScore $isChecked={item.checked}>
                    {totalScore}
                  </S.TotalScore>
                </S.ScoreWrapper>
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
