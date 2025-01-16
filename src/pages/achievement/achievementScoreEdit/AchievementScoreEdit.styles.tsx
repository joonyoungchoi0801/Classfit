import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 2rem;
`;

export const HeaderSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  padding-bottom: 1.5rem;
`;

export const TotalChooseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
export const ScoreListSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 3rem;
  background-color: #fafafa;
  border-radius: 2rem;
  height: 80%;
  margin-top: 1rem;
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

export const CheckboxWrapper = styled.div`
  flex: 0 0 3%;
`;

export const Name = styled.div<{
  $isChecked: boolean;
}>`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  color: ${(props) =>
    props.$isChecked ? 'var(--color-black)' : 'var(--color-lightgray)'};
`;

export const Score = styled.div`
  font-size: 1.6rem;
  text-align: right;
  font-weight: 500;
  color: var(--color-lightgray);
`;

export const ScoreInput = styled.input`
  padding: 1rem;
  border: 0.1rem solid #d5d7dd;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  width: 5rem;
  height: 2.7rem;
  align-items: center;
  background-color: var(--color-white);
  color: var(--color-blue);
  &::placeholder {
    color: #8a91a1;
    opacity: 1;
  }
  margin-right: 0.5rem;
  &:focus {
    color: var(--color-black);
  }
`;

export const TotalScore = styled.div<{
  $isChecked: boolean;
}>`
  font-size: 1.6rem;
  font-weight: 500;
  color: ${(props) =>
    props.$isChecked ? 'var(--color-black)' : 'var(--color-lightgray)'};
`;

export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 3rem;
`;

export const Label = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-bottom: 1rem;
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

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
  }
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
