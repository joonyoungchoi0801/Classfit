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
export const ScheduleAddBtn = styled.button<{ $isClicked: boolean }>`
  display: flex;
  width: 20rem;
  height: 5rem;
  padding: 1.5rem 2rem;
  margin-left: 2.1rem;
  justify-content: center;
  align-items: center;
  color: ${({ $isClicked }) =>
    $isClicked ? 'var(--color-white)' : 'var(--color-black)'};
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.792rem;
  background: ${({ $isClicked }) =>
    $isClicked ? 'var(--color-blue)' : 'var(--color-white)'};
  border-radius: 1rem;
  cursor: pointer;
`;

export const CalendarSection = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.8rem;
`;

export const CalendarItem = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 1.8rem;
  &:not(:last-child) {
    border-bottom: 0.1rem solid #dedede;
  }
  height: 5rem;
`;

export const CalendarItemIcon = styled.img`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;

export const CalendarItemText = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CalendarAddBtn = styled.button`
  background-color: transparent;
  border: none;
  font-size: 18px;
  color: #5f6368;
  cursor: pointer;
  padding: 0;
  margin-left: auto;
`;

export const CalendarAddIcon = styled.img`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;
