import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 3.6rem;
  background: var(--color-lightblue);
`;

export const ClassWrapper = styled.div`
  display: flex;
  width: 48rem;
  padding: 3rem 3rem 4rem 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  border-radius: 2rem;
  background: var(--color-white);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const ClassLabel = styled.label`
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const ClassOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.8rem;
  width: 100%;
`;

export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const OptionTitle = styled.span`
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const OptionInput = styled.input`
  display: flex;
  width: 100%;
  height: 4.4rem;
  padding: 1rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
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

export const InputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const AutoButton = styled.button`
  display: flex;
  padding: 0.4rem 1rem;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 0.5rem;
  background: var(--color-blue);
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  color: var(--color-white);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CompleteButton = styled.button`
  display: flex;
  width: 100%;
  padding: 1.5rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5rem;
  background: var(--color-blue);
  color: var(--color-white);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
