import styled from 'styled-components';

export const DriveHeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 7rem;
  padding: 0rem 5rem;
  justify-content: space-between;
  align-items: center;
`;

export const DriveHeaderTitle = styled.span`
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const PathList = styled.ul`
  display: flex;
  gap: 1rem;
`;
export const PathItem = styled.li`
  cursor: pointer;
  color: #999;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  list-style: none;
  &:hover {
    text-decoration: underline;
  }
  &:last-child {
    font-weight: 700;
  }
`;
