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

function AchievementRegisterStudent() {
  const navigate = useNavigate();
  const { examId } = useParams();
  const location = useLocation();
  const { standard, highestScore } = location.state || {}; // state에서 데이터 추출
  const [data, setData] = useState<ExamStudentDataWithChecked[]>([]);
  const [isCheckedAll, setIsCheckedAll] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  const [totalScore, setTotalScore] = useState<string>('');

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
    console.log('value', value);
    setData((prevData) =>
      prevData.map((item) =>
        item.studentId === id ? { ...item, score: value } : item
      )
    );
  };

  const handleOnSubmit = async () => {
    const scoreData = data.map((item) => ({
      studentId: item.studentId,
      score: Number(item.score),
      checkedStudent: item.checkedStudent,
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
          const transformedData = res.data.data.map(
            (item: ExamStudentData) => ({
              studentId: item.studentId,
              name: item.name,
              score: item.score,
              checkedStudent: false,
            })
          );
          setData(transformedData);
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
                  {item.checkedStudent && (
                    <S.ScoreInput
                      placeholder=''
                      value={item.score}
                      onChange={(e) =>
                        handleOnChangeScoreValue(item.studentId, e.target.value)
                      }
                    />
                  )}

                  <S.TotalScore $isChecked={item.checkedStudent}>
                    {totalScore}
                  </S.TotalScore>
                </S.ScoreWrapper>
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
