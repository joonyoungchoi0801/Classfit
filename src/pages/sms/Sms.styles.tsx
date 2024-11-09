import styled from 'styled-components';

export const SmsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 7rem);
  padding: 4rem;
  gap: 2.7rem;
`;

export const Title = styled.h1`
  color: #000;
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.5rem;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: #f9f9f9;
  padding: 3.5rem 3.5rem 2.2rem;
  gap: 1.5rem;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d1d1d1;
    border-radius: 0.8rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #fafafa;
  }
`;

export const ContentText = styled.p`
  color: var(--color-black);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.792rem;
`;
export const Area = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  width: 100%;
  padding: 1rem;
`;

export const Bar = styled.div`
  width: 18.6rem;
  height: 0.1rem;
  background: #d7d7d7;
`;

export const TextArea = styled.textarea`
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  background: var(--color-white);
  border: none;
  outline: none;
  resize: none;
  color: #000;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.792rem;
  padding: 3.3rem 2.6rem;
  font-family: 'Pretendard', sans-serif;
  min-height: 46.2rem;
  &::placeholder {
    color: #bbb;
    font-size: 2rem;
    font-style: normal;
    font-weight: 500;
    line-height: 1.792rem;
  }
`;

export const SendBtn = styled.button<{ $isDisabled?: boolean }>`
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  background: ${(props) => (props.$isDisabled ? '#999' : 'var(--color-blue)')};
  color: var(--color-white);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.792rem;
`;

export const CancelBtn = styled.button`
  display: flex;
  padding: 1.5rem 3rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid #d7d7d7;
  background: var(--color-white);
  color: #000;
  font-family: 'Pretendard Variable';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.792rem;
`;

export const BtnArea = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  height: 4.8rem;
`;

export const PhraseBtn = styled.button`
  display: flex;
  padding: 1rem 2rem;
  align-items: center;
  border-radius: 0.5rem;
  border: 1px solid var(--color-blue);
  background: var(--color-white);
  color: var(--color-black);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.792rem;
`;

export const RecipientArea = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
`;

export const NameBtn = styled.button`
  display: flex;
  width: 9.7rem;
  padding: 0.5rem 1rem;
  align-items: flex-start;
  border-radius: 0.5rem;
  border: 1px solid #c3c3c3;
  background: var(--Schemes-On-Error, #fff);
`;
