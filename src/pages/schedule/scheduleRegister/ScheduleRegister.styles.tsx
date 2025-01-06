import styled from 'styled-components';
export const Container = styled.div`
  width: 100%;
  position: relative;
  flex-grow: 1;
  padding: 3rem 5rem;
  overflow-y: auto; /* 세로 스크롤 허용 */
`;

export const Title = styled.h2`
  text-align: left;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 3rem;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: space-between;
  flex: 1 0 0;
`;

export const Label = styled.label`
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  margin-bottom: 1rem;
`;

export const Input = styled.input`
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid #dedede;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  width: 100%;

  &::placeholder {
    color: #cacaca;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.4rem;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  span {
    margin: 0 8px;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Select = styled.div<{ $hasValue: boolean }>`
  width: 100%;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  border-radius: 1rem;
  border: 1px solid #dedede;
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
`;

export const Options = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  max-height: 200px;
  overflow-y: auto;
  border: 1px solid #dedede;
  border-radius: 1rem;
  background-color: white;
  z-index: 1;
`;

export const Option = styled.div`
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  color: var(--color-black);
  cursor: pointer;

  &:hover {
    background-color: #dfebff;
  }
`;

export const ColumnRow = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;

  span {
    font-size: 2rem;
    margin: 0 1.5rem;
  }
`;

export const AttendeeButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const AttendeeButton = styled.div`
  display: inline-flex;
  align-items: center;
  width: 12.5rem;
  padding: 1rem 2rem;
  border: 1px solid var(--color-blue);
  border-radius: 5rem;
  color: var(--color-blue);
  font-size: 1.8rem;
`;

export const RemoveButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  margin-left: 1rem;
  cursor: pointer;
`;

export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
`;

export const DateInputWrapper = styled.div`
  position: relative;
  flex: 1;
  width: 100%;
`;

export const CheckboxGroup = styled.div`
  display: flex;
  align-items: center;
  margin-left: 1rem;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  width: 2rem;
  height: 2rem;
`;

export const MemoInput = styled.textarea`
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 1px solid #dedede;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  width: 100%;
  height: 10rem;
  resize: none;

  &::placeholder {
    color: #cacaca;
    font-size: 1.8rem;
    font-style: normal;
    font-weight: 600;
    line-height: 2.4rem;
    vertical-align: top;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  padding: 2rem;
  margin-bottom: 10rem;
`;
