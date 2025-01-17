import styled from 'styled-components';

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-width: 102rem;
  border: 0.1rem solid #e7e7e7;
  background: var(--color-white);
  padding: 2.2rem;
`;

export const TableHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 1.375rem;
  background: #f9f9f9;
  padding: 1rem;
  width: 100%;
  position: relative;
`;

export const FilterButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  flex-shrink: 0;
  cursor: pointer;
`;

export const DropdownContainer = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 10.1rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0rem 0rem 1rem 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1;
  text-align: left;
`;

export const DropdownItem = styled.div`
  display: flex; 
  align-items: center;
  padding: 1rem 2rem;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
  img { 
    margin-right: 0.5rem;
  }
`;

export const DropdownText = styled.span`
  line-height: 1.5rem;
`;

export const SearchContainer = styled.div`
  display: flex;
  width: 24rem;
  height: 4rem;
  padding: 1rem 1rem;
  align-items: center;
  border-radius: 0.5rem;
  background: var(--color-gray);
  position: relative;
  gap: 1rem;
`;

export const SearchInput = styled.input`
  width: 100%;
  height: 100%;
  border: transparent;
  background-color: var(--color-gray);
  outline: none;
  font-size: 2rem;
  &::placeholder {
    color: #999;
    font-size: 1.7rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

export const Pagination = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

export const PaginationItem = styled.div`
  flex-grow: 1;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  margin: 0 2.2rem; /*임의로 간격 설정 */
  width: 9rem;
`;

export const ArrowButton = styled.img<{ disabled?: boolean }>`
cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  /* cursor: pointer; */
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.38rem;
  margin-left: 1.38rem;
`;

export const TableBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  height: calc(100vh - 34.3rem);
  &::-webkit-scrollbar {
    width: 0.2rem;
    height: 0.2rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d1d1d1;
    border-radius: 0.8rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #fafafa;
  }
`;

export const TableRow = styled.div<{
  $isSelected: boolean;
}>`
  display: flex;
  width: 100%;
  border-bottom: 0.1rem solid #e7e7e7;
  gap: 1.375rem;
  padding: 2rem;
  background-color: ${(props) => (props.$isSelected ? '#e3f2fd' : 'white')};
  &:hover {
    background-color: #f5f5f5;
  }
  &:last-child {
    border-bottom: none;
  }
`;

export const StudentName = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 26.7rem;
  color: var(--color-black);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const CheckBox = styled.input`
  width: 2.2rem;
  height: 2.2rem;
  flex-shrink: 0;
`;

export const StudentNameText = styled.span`
  cursor: pointer;

  &:hover {
    color: var(--color-blue);
    text-decoration: underline; 
  }
`;

export const StatusIcon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const Blank = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.38rem;
  margin-left: 1.38rem;
`;
