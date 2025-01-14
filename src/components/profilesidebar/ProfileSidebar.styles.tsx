import styled from 'styled-components';

export const ProfileSidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
  min-width: 24rem;
  height: calc(100vh - 7rem);
  overflow-y: auto;
  background: var(--color-white);
  padding: 3.5rem 0rem;
  background: #f2f5fc;
  overflow: visible;
  &::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d1d1d1;
    border-radius: 0.8rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #fafafa;
  }
`;

export const SidebarItem = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  height: 5rem;
  padding: 1rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${(props) =>
    props.$isSelected ? 'var(--color-white);' : 'var(--color-black);'};
  font-size: 2.2rem;
  font-style: normal;
  font-weight: ${(props) => (props.$isSelected ? 600 : 500)};
  line-height: 1.792rem;
  background: ${(props) => (props.$isSelected ? '#0056f6' : 'inherit')};
  cursor: pointer;
  min-height: 5rem;
`;
