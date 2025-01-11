import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const ClassWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-bottom: 1.5rem;
`;

export const TestInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.6rem;
`;

export const Tag = styled.span`
  background-color: #5dd2a9;
  color: var(--color-white);
  padding: 0.512rem 1.536rem;
  border-radius: 0.64rem;
  font-size: 1.792rem;
  font-weight: 600;
`;

export const ClassName = styled.h2`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0 1rem;
`;

export const TestName = styled.h3`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const Date = styled.p`
  font-size: 1.6rem;
  color: var(--color-black);
  font-weight: 500;
  line-height: normal;
`;

export const TagWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`;
export const Tags = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const TagItem = styled.span`
  background-color: var(--color-white);
  color: #666;
  padding: 1rem 2rem;
  border-radius: 5rem;
  border: 0.1rem solid var(--color-blue);
  font-size: 1.6rem;
  color: var(--color-blue);
  font-weight: 500;
  line-height: normal;
`;

export const EditButton = styled.button`
  background-color: black;
  color: white;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 5px;
  font-size: 1.4rem;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

export const StatisticsSection = styled.div`
  display: flex;
  gap: 2rem;
  padding: 1.6rem 0;
`;

export const StatisticBox = styled.div`
  flex: 1;
  background-color: var(--color-blue);
  color: var(--color-white);
  padding: 2rem 1.6rem;
  text-align: center;
  border-radius: 1rem;
`;

export const StatisticLabel = styled.p`
  font-size: 2rem;
  font-weight: 700;
  font-style: normal;
  line-height: normal;
  margin-bottom: 1.4rem;
`;

export const StatisticValue = styled.h2`
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 0;
`;

export const ScoreListSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 3rem;
  background-color: #fafafa;
  border-radius: 2rem;
`;

export const ScoreListHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ScoreTitle = styled.h3`
  font-size: 1.8rem;
`;

export const ScoreList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const ScoreItem = styled.div<{ $isEvaluated: boolean }>`
  display: flex;
  align-items: ${({ $isEvaluated }) =>
    $isEvaluated ? 'flex-start' : 'center'}; /* 교차축: 위쪽 또는 중앙 정렬 */
  flex-direction: ${({ $isEvaluated }) =>
    $isEvaluated ? 'column' : 'row'}; /* 세로 또는 가로 방향 */
  justify-content: ${({ $isEvaluated }) =>
    $isEvaluated ? 'flex-start' : 'space-between'}; /* 주축: 왼쪽 정렬 */
  padding: 1.5rem 0;
  border-bottom: 0.1rem solid var(--color-gray);
  &:last-child {
    border-bottom: none;
  }
`;

export const CheckboxWrapper = styled.div`
  flex: 0 0 3%;
`;

export const Name = styled.div<{ $isChecked: boolean; $isEvaluated?: boolean }>`
  color: ${({ $isChecked }) =>
    $isChecked ? 'var(--color-black)' : 'var(--color-lightgray)'};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  width: 6rem;
  align-items: center;
  justify-content: ${({ $isEvaluated }) =>
    $isEvaluated ? 'flex-start' : 'center'};
`;

export const Score = styled.div`
  font-size: 1.6rem;
  text-align: right;
  font-weight: 500;
  color: var(--color-blue);
`;

export const TotalScore = styled.div<{
  $isChecked: boolean;
}>`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${({ $isChecked }) =>
    $isChecked ? 'var(--color-black)' : 'var(--color-lightgray)'};
`;

export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ToggleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;

export const Toggle = styled.div`
  display: flex;
  flex-direction: row;
  /* gap: 0.5rem; */
  align-items: center;
`;

export const IconWrapper = styled.div<{
  $alignLeft?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$alignLeft ? 'flex-start' : 'center')};
  margin-right: 1rem;
  cursor: pointer;
`;

export const BtnIcon = styled.img<{ $size?: string }>`
  width: ${({ $size }) => $size || '2.2rem'};
  height: ${({ $size }) => $size || '2.2rem'};
`;

export const Label = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const EvaluateWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 1rem 0;
`;

export const EvaluationInput = styled.textarea<{
  $height?: string;
  $marginTop?: string;
}>`
  width: 100%;
  height: ${({ $height }) => $height || '8rem'};
  margin-top: ${({ $marginTop }) => $marginTop || '0'};
  padding: 2rem;
  border: 0.1rem solid var(--color-gray);
  border-radius: 1rem;
  font-size: 1.6rem;
  resize: vertical;
  outline: none;
  box-shadow: none;
`;
