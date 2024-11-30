import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: var(--color-lightblue);
`;

export const SignupWrapper = styled.div`
  display: flex;
  width: 48rem;
  padding: 3rem 3rem 4rem 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  flex-shrink: 0;
`;

export const Label = styled.label`
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const InputLabel = styled.label`
  color: #121212;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 4.4rem;
  padding: 1rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-radius: 1rem;
  border: 1px solid #dedede;
  background: var(--color-white);
  &::placeholder {
    color: #cacaca;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;
