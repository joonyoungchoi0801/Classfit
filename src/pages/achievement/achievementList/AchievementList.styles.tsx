import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const SelectBox = styled.div`
  select {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  input {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px 0 0 4px;
    outline: none;
  }
  button {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 0 4px 4px 0;
    background-color: #007bff;
    color: white;
    cursor: pointer;
  }
`;

export const RegisterButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const FilterTabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button<{ isActive: boolean }>`
  padding: 10px 20px;
  border: 1px solid ${({ isActive }) => (isActive ? '#007bff' : '#ddd')};
  background-color: ${({ isActive }) => (isActive ? '#007bff' : 'white')};
  color: ${({ isActive }) => (isActive ? 'white' : '#000')};
  border-radius: 4px;
  cursor: pointer;
`;

export const List = styled.div`
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
  &:last-child {
    border-bottom: none;
  }
`;

export const Tag = styled.div<{ isMonthly: boolean }>`
  padding: 5px 10px;
  background-color: ${({ isMonthly }) => (isMonthly ? '#28a745' : '#dc3545')};
  color: white;
  border-radius: 4px;
  font-size: 12px;
  margin-right: 10px;
`;

export const Text = styled.div`
  flex: 1;
  text-align: left;
`;
