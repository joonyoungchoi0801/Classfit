import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-white);
  width: 100%;
  position: relative;
`

export const Header = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  padding: 2rem 8rem 0rem;
  gap: 1rem;
`

export const TabButton = styled.button<{ isActive: boolean }>`
 border: none;
 background: #F6F6F6;
 padding: 1rem 2rem;
 border-radius: 1rem 1rem 0rem 0rem;
 font-size: 1.8rem;
 font-style: normal;
 font-weight: 600;
 line-height: normal;
 color: ${({ isActive }) =>
    isActive
      ? 'var(--color-blue)'
      : 'var(--color-gray)'};
  cursor: pointer;
  &:hover {
    color: var(--color-blue); 
  }
`

export const Content = styled.div`
  display: flex;
  width: 100%;
  /* max-height: 60rem; */
  padding: 0rem 5rem;
`;