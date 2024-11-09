import styled from 'styled-components';

export const PathWrapper = styled.ul`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  :last-child {
    color: var(--color-black);
  }
`;

export const PathItem = styled.li`
  color: #7d7d7d;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.792rem;
  list-style: none;
  white-space: nowrap;
  height: 1.792rem;
`;
