import styled from 'styled-components';

export const ScheduleSidebarWrapper = styled.div`
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

export const ScheduleAddBtn = styled.button`
  display: flex;
  width: 20rem;
  height: 5rem;
  padding: 1rem 2rem;
  margin-left: 2.1rem;
  justify-content: center;
  align-items: center;
  color: var(--color-black);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.792rem;
  background: var(--color-white);
  border-radius: 1rem;
`;