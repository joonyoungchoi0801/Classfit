import styled from "styled-components";

export const TableHeader = styled.div`
  display: flex;
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
  background: #EDEDED;
`;

export const SearchIcon = styled.img`
  width: 1.125rem;
  height: 1.125rem;
`;

export const SearchInput = styled.input`
  width: 7.875rem;
  border: transparent;
  background-color: #EDEDED;
`;