import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-white);
  width: 100%;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  border-bottom: 0.1rem solid #e6e6e6;
  width: 100%;
  align-items: center;
  justify-content: flex-start; /* 왼쪽 정렬 */
  gap: 4.3rem; /* 버튼 간 간격 */
  padding: 2.45rem 5rem;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  border: none;
  background: none;
  font-size: 2rem;
  font-style: normal;
  line-height: normal;
  color: ${({ isActive }) =>
    isActive
      ? 'var(--color-blue)'
      : 'var(--color-black)'}; /* 활성화된 탭 색상 */
  font-weight: ${({ isActive }) =>
    isActive ? 700 : 600}; /* 활성화된 탭 굵기 */
  cursor: pointer;
  &:hover {
    color: var(--color-blue); /* 호버 시 색상 변경 */
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  box-sizing: border-box;
  padding-bottom: 2rem;
`;