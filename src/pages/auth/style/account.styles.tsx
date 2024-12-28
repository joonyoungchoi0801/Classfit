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

export const AccountWrapper = styled.div`
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

export const Label = styled.label`
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const EmailWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 5rem;
  border: 1px solid #dedede;
  background: #fff;
`;
export const Email = styled.span`
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const EmailImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const AccountOption = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  width: 100%;
  padding: 1.5rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.8rem;
  border-radius: 1rem;
  background: ${(props) =>
    props.$isSelected ? 'var(--color-blue)' : '#e5e5e5'};
  cursor: pointer;
  position: relative;
`;

export const AccountOptionLabel = styled.span`
  color: var(--color-white);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const AccountOptionImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const NextButton = styled.button`
  display: flex;
  width: 100%;
  padding: 1.5rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  background: var(--color-blue);
  color: var(--color-white);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const AccountInput = styled.input`
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

export const ErrorIcon = styled.img`
  position: absolute;
  right: 2rem;
  top: 50%;
  transform: translateY(-50%);
  width: 2.4rem;
  height: 2.4rem;
`;

export const ErrorMessage = styled.span`
  color: #ff5858;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessageIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
