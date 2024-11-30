import * as S from './AchievementScoreEdit.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SelectedCheckBoxIcon from '@/assets/info/selectedCheckBox.svg';
import CheckBoxIcon from '@/assets/info/checkBox.svg';

function AchievementScoreEdit() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data] = useState([
    { id: 1, name: '손화영', score: '86', checked: true },
    { id: 2, name: '김나나', score: '86', checked: false },
    { id: 3, name: '박선호', score: '86', checked: false },
  ]);
  const totalScore = '/100점';

  return (
    <S.Container>
      <S.HeaderSection>
        <PS.RegisterWrapper>
          <PS.RegisterButton
            onClick={() =>
              navigate(`/manage/achievement/management/detail/${id}/edit`)
            }
          >
            저장
          </PS.RegisterButton>
        </PS.RegisterWrapper>
      </S.HeaderSection>

      <S.ScoreListSection>
        <S.TotalChooseWrapper>
          <S.RowWrapper>
            <S.IconWrapper $alignLeft={true} onClick={() => {}}>
              <S.BtnIcon src={SelectedCheckBoxIcon} />
              {/* {studentListHandler.studentIds.includes(
                      student.studentId
                    ) ? (
                      <S.BtnIcon src={SelectedCheckBoxIcon} />
                    ) : (
                      <S.BtnIcon src={CheckBoxIcon} />
                    )} */}
            </S.IconWrapper>
            <S.Label>전체선택</S.Label>
          </S.RowWrapper>
        </S.TotalChooseWrapper>
        <S.ScoreList>
          {data.map((item) => (
            <S.ScoreItem key={item.id}>
              <S.RowWrapper>
                <S.IconWrapper $alignLeft={true} onClick={() => {}}>
                  <S.BtnIcon src={SelectedCheckBoxIcon} />
                  {/* {studentListHandler.studentIds.includes(
                      student.studentId
                    ) ? (
                      <S.BtnIcon src={SelectedCheckBoxIcon} />
                    ) : (
                      <S.BtnIcon src={CheckBoxIcon} />
                    )} */}
                </S.IconWrapper>
                <S.Name>{item.name}</S.Name>
              </S.RowWrapper>

              <S.ScoreWrapper>
                <S.Score>{item.score}</S.Score>
                <S.TotalScore>{totalScore}</S.TotalScore>
              </S.ScoreWrapper>
            </S.ScoreItem>
          ))}
        </S.ScoreList>
      </S.ScoreListSection>
    </S.Container>
  );
}

export default AchievementScoreEdit;
