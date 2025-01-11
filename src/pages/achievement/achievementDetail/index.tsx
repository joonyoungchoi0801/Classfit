import { getExamDetail } from '@/api/examAPI';
import * as S from './AchievementDetail.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import { ExamInfoData, ExamStudentDataWithChecked } from '@/types/exam.type';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { reverseFilterData } from '../achievementList';
import SelectedToggleIcon from '@/assets/buttonIcon/toggleFilled.svg';
import ToggleIcon from '@/assets/buttonIcon/toggle.svg';
import useExamStudentStore from '@/store/examStudentStore';

function AchievementDetail() {
  const navigate = useNavigate();
  const { id } = useParams();
  const initialData = {
    examPeriod: '',
    examName: '',
    examDate: '',
    mainClassName: '',
    subClassName: '',
    lowestScore: 0,
    perfectScore: 0,
    highestScore: 0,
    average: 0,
    examRange: [],
    standard: '',
  };

  const { setExamStudentData } = useExamStudentStore();
  const [examInfoData, setExamInfoData] = useState<ExamInfoData>(initialData);
  const [studentData, setStudentData] = useState<ExamStudentDataWithChecked[]>(
    []
  );
  const [totalScore, setTotalScore] = useState<string>('');
  const [isInitialized, setIsInitialized] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      if (id) {
        const res = await getExamDetail(Number(id));
        if (res.status == 200) {
          const { examClassStudents, ...examInfo } = res.data.data;
          setExamInfoData(examInfo);
          setStudentData(examClassStudents);
          if (examInfo.standard === 'SCORE') {
            setTotalScore('/' + examInfo.highestScore + ' 점');
          } else if (examInfo.standard === 'QUESTION') {
            setTotalScore('/' + examInfo.highestScore + ' 개');
          }
        } else {
          alert('시험 정보를 불러오는데 실패했습니다.');
        }
      }
      setIsInitialized(true);
    };
    fetchData();
  }, []);

  const handleOnClickStudentScore = () => {
    setExamStudentData(studentData);
    navigate(`/manage/achievement/management/detail/${id}/editscore`, {
      state: {
        standard: examInfoData.standard,
        highestScore: examInfoData.highestScore,
      },
    });
  };

  return (
    <S.Container>
      {isInitialized && (
        <>
          <S.HeaderSection>
            <PS.RegisterWrapper>
              <PS.RegisterButton
                onClick={() =>
                  navigate(`/manage/achievement/management/detail/${id}/edit`, {
                    state: {
                      ...examInfoData,
                      examRange: JSON.stringify(examInfoData.examRange),
                    },
                  })
                }
              >
                수정
              </PS.RegisterButton>
            </PS.RegisterWrapper>

            <S.TestInfo>
              <S.ClassWrapper>
                <S.Tag>{reverseFilterData[examInfoData.examPeriod]}</S.Tag>
                <S.ClassName>
                  {examInfoData.mainClassName}-{examInfoData.subClassName}
                </S.ClassName>
              </S.ClassWrapper>

              <S.TestName>{examInfoData.examName}</S.TestName>
              <S.Date>시험날짜 {examInfoData.examDate}</S.Date>
              <S.TagWrapper>
                <S.Date>시험범위</S.Date>
                {examInfoData.examRange.map((range) => (
                  <S.TagItem key={range}>{range}</S.TagItem>
                ))}
              </S.TagWrapper>
            </S.TestInfo>
          </S.HeaderSection>
          {examInfoData.standard !== 'PF' &&
            examInfoData.standard !== 'EVALUATION' && (
              <S.StatisticsSection>
                <S.StatisticBox>
                  <S.StatisticLabel>최고점수</S.StatisticLabel>
                  <S.StatisticValue>
                    {examInfoData.perfectScore}
                  </S.StatisticValue>
                </S.StatisticBox>
                <S.StatisticBox>
                  <S.StatisticLabel>최저점수</S.StatisticLabel>
                  <S.StatisticValue>
                    {examInfoData.lowestScore}
                  </S.StatisticValue>
                </S.StatisticBox>
                <S.StatisticBox>
                  <S.StatisticLabel>평균</S.StatisticLabel>
                  <S.StatisticValue>{examInfoData.average}</S.StatisticValue>
                </S.StatisticBox>
              </S.StatisticsSection>
            )}

          <S.ScoreListSection>
            <S.ScoreListHeader>
              <S.ScoreTitle>성적</S.ScoreTitle>
              <PS.RegisterButton
                $color='var(--color-black)'
                onClick={handleOnClickStudentScore}
              >
                수정
              </PS.RegisterButton>
            </S.ScoreListHeader>
            <S.ScoreList>
              {studentData.map((item) => (
                <S.ScoreItem
                  key={item.studentId}
                  $isEvaluated={examInfoData.standard === 'EVALUATION'}
                >
                  <S.Name $isChecked={item.checkedStudent}>{item.name}</S.Name>
                  {examInfoData.standard == 'PF' ? (
                    <S.ToggleWrapper>
                      <S.Toggle>
                        <S.IconWrapper $alignLeft={true} onClick={() => {}}>
                          {item.evaluationDetail === 'P' ? (
                            <S.BtnIcon src={SelectedToggleIcon} $size='2rem' />
                          ) : (
                            <S.BtnIcon src={ToggleIcon} $size='2rem' />
                          )}
                        </S.IconWrapper>
                        <S.Label>P</S.Label>
                      </S.Toggle>
                      <S.Toggle>
                        <S.IconWrapper $alignLeft={true} onClick={() => {}}>
                          {item.evaluationDetail === 'F' ? (
                            <S.BtnIcon src={SelectedToggleIcon} $size='2rem' />
                          ) : (
                            <S.BtnIcon src={ToggleIcon} $size='2rem' />
                          )}
                        </S.IconWrapper>
                        <S.Label>F</S.Label>
                      </S.Toggle>
                    </S.ToggleWrapper>
                  ) : examInfoData.standard == 'EVALUATION' ? (
                    <S.EvaluateWrapper>
                      <S.EvaluationInput
                        placeholder='내용을 입력해주세요'
                        value={item.evaluationDetail}
                        disabled={true}
                      />
                    </S.EvaluateWrapper>
                  ) : (
                    <S.ScoreWrapper>
                      {item.checkedStudent && <S.Score>{item.score}</S.Score>}

                      <S.TotalScore $isChecked={item.checkedStudent}>
                        {totalScore}
                      </S.TotalScore>
                    </S.ScoreWrapper>
                  )}
                </S.ScoreItem>
              ))}
            </S.ScoreList>
          </S.ScoreListSection>
        </>
      )}
    </S.Container>
  );
}

export default AchievementDetail;
