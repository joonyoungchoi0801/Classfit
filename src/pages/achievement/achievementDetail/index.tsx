import * as S from './AchievementDetail.styles';
import * as PS from '@/pages/achievement/Achievement.styles';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

function AchievementDetail() {
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
            수정
          </PS.RegisterButton>
        </PS.RegisterWrapper>
        <S.TestInfo>
          <S.ClassWrapper>
            <S.Tag>월간</S.Tag>
            <S.ClassName>중3-A</S.ClassName>
          </S.ClassWrapper>

          <S.TestName>1단원 소수와 이해 단원평가</S.TestName>
          <S.Date>시험날짜 2024.11.06</S.Date>
          <S.TagWrapper>
            <S.Date>시험범위</S.Date>
            <S.TagItem>#1단원 소수의 이해</S.TagItem>
            <S.TagItem>#1단원 소수의 이해</S.TagItem>
            <S.TagItem>#1단원 소수의 이해</S.TagItem>
          </S.TagWrapper>
        </S.TestInfo>
      </S.HeaderSection>
      <S.StatisticsSection>
        <S.StatisticBox>
          <S.StatisticLabel>최고점수</S.StatisticLabel>
          <S.StatisticValue>100</S.StatisticValue>
        </S.StatisticBox>
        <S.StatisticBox>
          <S.StatisticLabel>최저점수</S.StatisticLabel>
          <S.StatisticValue>45</S.StatisticValue>
        </S.StatisticBox>
        <S.StatisticBox>
          <S.StatisticLabel>평균</S.StatisticLabel>
          <S.StatisticValue>88</S.StatisticValue>
        </S.StatisticBox>
      </S.StatisticsSection>

      <S.ScoreListSection>
        <S.ScoreListHeader>
          <S.ScoreTitle>성적</S.ScoreTitle>
          <PS.RegisterButton $color='var(--color-black)'>
            수정
          </PS.RegisterButton>
        </S.ScoreListHeader>
        <S.ScoreList>
          {data.map((item) => (
            <S.ScoreItem key={item.id}>
              <S.Name>{item.name}</S.Name>
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

export default AchievementDetail;
