import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
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
  /* padding: 10px 20px; */
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
    color: #007bff; /* 호버 시 색상 변경 */
  }
`;

export const Content = styled.div`
  flex: 1; /* 남는 공간을 두 차지 */
  width: 100%;
  /* background-color: #f9f9f9; */
  padding: 2rem 5rem;
  box-sizing: border-box;
`;
