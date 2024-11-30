import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  border-bottom: 0.1rem solid #e6e6e6;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 4.3rem;
  padding: 2.45rem 5rem;
  flex-shrink: 0;
  background-color: var(--color-white);
  z-index: 1;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  border: none;
  background: none;
  font-size: 2rem;
  line-height: normal;
  color: ${({ isActive }) =>
    isActive ? 'var(--color-blue)' : 'var(--color-black)'};
  font-weight: ${({ isActive }) => (isActive ? 700 : 600)};
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem 5rem;
  box-sizing: border-box;
  padding-bottom: 14rem;
`;
