import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-bottom: 10rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 20px;
  gap: 1rem;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

export const SelectBox = styled.div`
  flex: 1;
  width: 100%;
  select {
    width: 100%;
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    font-size: 1.6rem;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  flex: 1;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid var(--color-gray);
  border-radius: 1rem 0 0 1rem;
  outline: none;
  font-size: 1.6rem;
  &::placeholder {
    color: var(--color-lightgray);
  }
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 0 1rem 1rem 0;
  background-color: var(--color-blue);
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    background-color: #0056b3;
  }
`;

export const FilterTabs = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const FilterButton = styled.button<{ isActive: boolean }>`
  display: flex;
  padding: 1rem 2rem;
  gap: 0.5rem;
  border: 1px solid
    ${({ isActive }) => (isActive ? 'var(--color-blue)' : '#ddd')};
  background-color: ${({ isActive }) =>
    isActive ? 'var(--color-blue)' : 'white'};
  color: ${({ isActive }) => (isActive ? 'white' : '#000')};
  border-radius: 5rem;
  cursor: pointer;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  align-items: center;
  justify-content: center;
`;

export const List = styled.div`
  flex: 1;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

export const ListItem = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem 3rem;
  border-bottom: 0.1rem solid #ededed;
  justify-content: space-between;
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #f5f5f5;
  }
  cursor: pointer;
`;

export const TeacherWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8rem;
  justify-content: center;
  align-items: center;
`;

export const EmptyListSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding-top: 5rem;
`;

export const AchievementInfoText = styled.div`
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 5.314rem;
`;
