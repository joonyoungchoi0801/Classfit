import styled from 'styled-components';

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10rem;
  height: calc(100vh - 7rem);
  background: var(--color-white);
  padding: 3rem 2rem;
  gap: 2rem;
`;

export const SidebarItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 6rem;
  width: 100%;
  gap: 0.8rem;
  cursor: pointer;
`;

export const Icon = styled.img`
  width: 2.6rem;
`;

export const SidebarText = styled.p<{ $isSelected?: boolean }>`
  color: ${(props) =>
    props.$isSelected ? 'var(--color-blue)' : 'var(--color-black)'};
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.792rem;
`;
