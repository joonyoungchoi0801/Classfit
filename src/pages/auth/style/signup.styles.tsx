import styled from 'styled-components';
import { FieldError } from 'react-hook-form';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: var(--color-lightblue);
`;

export const Signupform = styled.form`
  display: flex;
  width: 48rem;
  padding: 3rem 3rem 4rem 3rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  flex-shrink: 0;
  border-radius: 2rem;
  background: var(--color-white);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
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
  position: relative;
  width: 100%;
`;

export const LabelWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
export const LabelImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const InputLabel = styled.label`
  color: #121212;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const InputContainer = styled.div`
  display: flex;
  position: relative;
  width: 100%;
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
  outline: none;
  font-size: 1.6rem;
  &::placeholder {
    color: #cacaca;
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const InputImg = styled.img`
  position: absolute;
  width: 2.4rem;
  height: 2.4rem;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const SubmitButton = styled.button<{
  $isDisabled?: FieldError | boolean;
}>`
  display: flex;
  width: 42rem;
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

export const Error = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;
export const ErrorImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
export const ErrorMsg = styled.span`
  color: #ff5858;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const LabelContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
`;

export const SubLabel = styled.label`
  color: #939393;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
