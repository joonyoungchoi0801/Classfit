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

export const PasswordWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
  width: 48rem;
  border-radius: 2rem;
  background: var(--color-white);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
  padding: 3rem 3rem 4rem 3rem;
`;

export const PasswordLabel = styled.label`
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
  align-items: flex-start;
  gap: 0.8rem;
  width: 100%;
`;

export const ProfileIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
export const EmailLabel = styled.span`
  color: #121212;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const EmailInput = styled.input`
  display: flex;
  width: 100%;
  height: 4.4rem;
  padding: 1rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  &::placeholder {
    color: #cacaca;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const NextButton = styled.button<{
  $isDisabled?: boolean | null;
}>`
  display: flex;
  width: 100%;
  padding: 1.5rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5rem;
  color: var(--color-white);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  background: ${(props) =>
    props.$isDisabled ? '#dedede' : 'var(--color-blue)'};
`;
