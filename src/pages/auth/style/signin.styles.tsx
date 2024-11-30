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

export const SigninWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
  width: 48rem;
  border-radius: 2rem;
  background: var(--color-white);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const Logo = styled.img`
  width: 16rem;
  height: 3.67rem;
`;

export const SigninForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  width: 100%;
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

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  width: 100%;
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
`;
export const Input = styled.input`
  width: 100%;
  padding: 1.2rem 1.2rem;
  border-radius: 1rem;
  border: 1px solid #dedede;
  background: var(--color-white);
  font-size: 1.6rem;
  &::placeholder {
    color: #cacaca;
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    text-indent: 1.6rem;
  }
`;
export const InputImg = styled.img`
  position: absolute;
  width: 2rem;
  height: 2rem;
  left: 0.8rem;
  top: 50%;
  transform: translateY(-50%);
`;

export const Memory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.3rem;
  cursor: pointer;
`;

export const MemorySpan = styled.span`
  color: var(--color-black);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const IdCheckbox = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const LoginButtton = styled.button`
  display: flex;
  width: 100%;
  padding: 1.5rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 5rem;
  border: 0.1rem solid #dedede;
  background: var(--color-blue);
  color: var(--color-white);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  font-family: Pretendard;
`;

export const AdditionWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const Bar = styled.div`
  width: 0.1rem;
  height: 1.4rem;
  background-color: #9e9e9e;
`;
export const AdditionLabel = styled.span`
  color: #9e9e9e;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
`;
