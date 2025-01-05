import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: 50rem;
  padding: 2rem 2.5rem;
  background: var(--color-white);
  border-radius: 1rem;
  box-shadow: 0rem 0.4rem 1.5rem 0rem rgba(0, 0, 0, 0.15);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Divider = styled.div`
  margin: 1rem 0;
  border: none;
  border-top: 0.1rem solid #A7A7A7;
`;

export const OptionGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Button = styled.button<{ $isActive?: boolean }>`
  padding: 0.6rem 1.4rem;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  color: var(--color-white);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  background: ${({ $isActive }) => ($isActive ? 'var(--color-blue)' : '#E5E5E5')};
`;

export const Row = styled.div`
  display: flex;  
  gap: 1rem;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  flex: 1 0 0;
`;

export const Label = styled.label`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 1rem;
  margin-top: 2rem;
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

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Select = styled.div<{ $hasValue: boolean }>`
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
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
`;

export const SpanTag = styled.span`
  font-size: 1rem;
  margin-left: 0.4rem;
  margin-right: 0.4rem;
`;

export const DateInputWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-left: 0.4rem;
  margin-right:  0.4rem;
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

export const TimeSelectWrapper = styled.div`  
  display: flex;
  width: 100%;
  margin-left: 0.48rem;
`;

export const TimeSelect = styled.div<{ $hasValue: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 3.764rem;
  padding: 1rem;
  font-size: 1.2rem;
  border-radius: 1rem;
  border: 0.1rem solid #DEDEDE;
  color: ${({ $hasValue }) => ($hasValue ? '#000' : '#CACACA')};
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  cursor: pointer;
`;

export const TimeDropdownIcon = styled.img`
  position: absolute;
  top: 50%;
  right: 0.5rem;
  transform: translateY(-50%);
  width: 1.5rem;
  height: 1.5rem;
  color: var(--color-black);
`;

export const ScrollableOptions = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 15rem;
  overflow-y: auto; 
  border: 0.1rem solid #DEDEDE;
  border-radius: 1rem;
  background-color: var(--color-white);
  z-index: 1000;

  &::-webkit-scrollbar {
    width: 0.8rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 0.4rem;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  }

  &::-webkit-scrollbar-track {
    background-color: #f1f1f1;
    border-radius: 0.4rem;
  }
`;

export const TimeOption = styled.div`
  padding: 1rem 1rem;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  color: var(--color-black);
  cursor: pointer;

  &:hover {
    background-color: #DFEBFF;
  }
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
  cursor: pointer;
`;

export const SpanText = styled.span`
  font-size: 1.4rem;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 1.6rem;
  height: 1.6rem;
  margin-right: 0.4rem;
`;

export const DateSelect = styled.div`
  width: 100%;
  padding: 1rem 1rem 1rem 1rem;
  font-size: 1.4rem;
  border-radius: 1rem;
  border: 0.1rem solid #DEDEDE;
  color: var(--color-black);
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

export const CloseButton = styled.button`
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid #CACACA;
  background: var(--color-white);
  color: var(--color-black);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.344rem;
`;