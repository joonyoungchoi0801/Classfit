import styled from "styled-components";

export const TableHeader = styled.div`
  display: flex;
  height: 3.75rem;
  padding: 0.625rem;
  align-items: center;
  gap: 1.375rem;
  background: #F9F9F9;
`;

export const SeachContainer = styled.div`
  display: flex;
  flex-direction: space-between;
  width: 10.875rem;
  height: 2.5rem;
  padding: 0.3125rem 1.25rem;
  align-items: center;
  gap: 0.625rem;
  border-radius: 0.3125rem;
  background: var(--color-gray);
`;

export const SearchIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

export const SearchInput = styled.input`
  width: 7.875rem;
  border: transparent;
  background-color: var(--color-gray);
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
  font-size: 1.25rem;
  margin: 0 2.2rem; /*임의로 간격 설정 */
`;

export const ArrowButton = styled.img`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  margin-right: 1.38rem;
  margin-left: 1.38rem;
`;