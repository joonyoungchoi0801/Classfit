import styled from 'styled-components';

export const Table = styled.div`
  display: table;
  width: 100%;
  border-collapse: collapse;
  margin-top: 1rem;
  margin-bottom: 14rem;
  background-color: white;
  box-shadow: 0 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  border-radius: 0.4rem;
  height: calc(100vh - 20rem);
  overflow-y: auto;
`;

export const TableRow = styled.div<{
  $isSelected: boolean;
}>`
  display: table-row;
  background-color: ${(props) => (props.$isSelected ? '#e3f2fd' : 'white')};
  &:hover {
    background-color: #f5f5f5;
  }
`;

export const IconWrapper = styled.div<{
  $alignLeft?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$alignLeft ? 'flex-start' : 'center')};
  margin-right: 1rem;
  cursor: pointer;
`;

export const nameWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: flex-start;
`;

export const TableHeader = styled.div`
  display: table-row;
  font-weight: 500;
  background-color: #f9f9f9;
  color: #999999;
  font-size: 1.8rem;
`;

export const TableCell = styled.div<{
  $alignLeft?: boolean;
  $isHeader?: boolean;
}>`
  display: table-cell;
  padding: ${(props) => (props.$isHeader ? '1rem 1rem' : '2rem 1rem')};
  border-bottom: 0.1rem solid #e7e7e7;
  text-align: ${(props) => (props.$alignLeft ? 'left' : 'center')};
  vertical-align: middle;
  font-size: 2rem;
`;

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  margin-right: 1rem;
`;

export const EditWrapper = styled.div`
  display: flex;
  height: 2.7819rem;
  padding: 0.3rem 0.5rem;
  align-items: center;
  gap: 1rem;
  text-align: center;
  justify-content: center;
`;

export const EditButton = styled.div<{
  $color: string;
}>`
  color: ${(props) => props.$color};
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  &:hover {
    color: var(--color-blue);
    border-bottom: 0.1rem solid var(--color-blue);
  }
`;

export const EditDivider = styled.div`
  color: #7d7d7d;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const BtnIcon = styled.img`
  width: 2.2rem;
  height: 2.2rem;
`;

export const InputContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: #ededed;
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  width: 100%;
  gap: 1rem;
`;

export const Icon = styled.span`
  font-size: 1.8rem;
  color: #7d7d7d;
  margin-right: 1rem;
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 1.6rem;
  color: #7d7d7d;

  &:focus {
    outline: none;
  }
`;
