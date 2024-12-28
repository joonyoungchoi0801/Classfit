import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
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

export const ScoreItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 0;
  border-bottom: 0.1rem solid var(--color-gray);
  &:last-child {
    border-bottom: none;
  }
`;

export const CheckboxWrapper = styled.div`
  flex: 0 0 3%;
`;

export const Score = styled.div`
  font-size: 1.6rem;
  text-align: right;
  font-weight: 500;
  color: var(--color-blue);
`;

export const TotalScore = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
  color: var(--color-black);
`;

export const ScoreWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.div`
  font-size: 1.6rem;
  font-weight: 500;
`;
