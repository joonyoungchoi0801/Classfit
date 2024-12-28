import * as S from './AchievementRegisterStudent.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import SelectedCheckBoxIcon from '@/assets/info/selectedCheckBox.svg';
import CheckBoxIcon from '@/assets/info/checkBox.svg';
import SelectedToggleIcon from '@/assets/buttonIcon/toggleFilled.svg';
import ToggleIcon from '@/assets/buttonIcon/toggle.svg';
import Button from '@/components/button';

function AchievementRegisterStudent() {
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
      <PS.ButtonWrapper>
        <S.ButtonWrapper>
          <Button
            title='저장'
            onClick={() => {
              navigate('/manage/achievement/management/register/student');
            }}
          />
        </S.ButtonWrapper>
      </PS.ButtonWrapper>

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
              {/* <S.ToggleWrapper>
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
              </S.ToggleWrapper> */}
            </S.ScoreItem>
          ))}
        </S.ScoreList>
      </S.ScoreListSection>
    </S.Container>
  );
}

export default AchievementRegisterStudent;
