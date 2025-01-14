import styled from 'styled-components';

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  /* gap: 1rem; */
  justify-content: space-between;
  flex: 1 0 0;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

export const Input = styled.input`
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 0.1rem solid #DEDEDE;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  width: 100%;

  ::placeholder {
    color: #CACACA;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.4rem;
  }
`;

export const Row = styled.div`
  display: flex;  
  gap: 1rem;
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Select = styled.div<{ $hasValue: boolean }>`
  width: 100%;
  padding: 1rem;
  padding-left: 2rem;
  font-size: 1.4rem;
  border-radius: 1rem;
  border: 0.1rem solid #DEDEDE;
  color: ${({ $hasValue }) => ($hasValue ? '#000' : '#CACACA')};
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  cursor: pointer;
`;

export const DropdownIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  width: 2.4rem;
  height: 2.4rem;
  color: var(--color-black);
  cursor: pointer;
`;

export const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 20rem;
  overflow-y: auto;
  border: 0.1rem solid #DEDEDE;
  border-radius: 1rem;
  background-color: var(--color-white);
  z-index: 1;
`;

export const Option = styled.div`
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  color: var(--color-black);
  cursor: pointer;

  &:hover {
    background-color: #DFEBFF;
  }
`;

export const DateWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 0rem;
`;

export const DateInputWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const DateInput = styled.input`
  padding: 1rem 1rem;
  border-radius: 1rem;
  border: 0.1rem solid #DEDEDE;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  width: 100%;

  ::placeholder {
    color: #CACACA;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.4rem;
  }
`;

export const SpanTag = styled.span`
  font-size: 1rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  cursor: pointer;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.4rem;
`;

export const SpanText = styled.span`
  font-size: 1.4rem;
`;

export const RepeatWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 1.4rem;
`;

export const RadioWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-grow: 1;
`;
export const RepeatLabel = styled.label`
  display: flex;
  align-items: center;
  color: #000;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const RepeatInput = styled.input`
  width: 2rem;
  height: 2rem;
`;

export const RepeatInputWrapper = styled.div`
  position: relative;
  flex-grow: 13;
`;