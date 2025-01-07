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
export const ScheduleAddBtn = styled.button<{ isClicked: boolean }>`
  display: flex;
  width: 20rem;
  height: 5rem;
  padding: 1.5rem 2rem;
  margin-left: 2.1rem;
  justify-content: center;
  align-items: center;
  color: ${({ isClicked }) => (isClicked ? 'var(--color-white)' : 'var(--color-black)')};
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.792rem;
  background: ${({ isClicked }) => (isClicked ? 'var(--color-blue)' : 'var(--color-white)')};
  border-radius: 1rem;
  cursor: pointer;
`;

export const CalendarSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 1.8rem;
`;

export const CalendarItem = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 1rem 1.7rem;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;

  &:not(:last-child) {
    border-bottom: 0.1rem solid #DEDEDE;
  }
`;

export const MyCalendar = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  color: var(--color-black);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`

export const Icon = styled.img`
  width: 2rem;
  height: 2rem;
`;

export const CalendarItemText = styled.span`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const CalendarAddIcon = styled.img`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;

export const CategoryList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

export const Category = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const CategoryItem = styled.div`
  color: var(--color-black);
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`;

export const CategoryIcon = styled.img<{ color: string }>`
  width: 1.6rem;
  height: 1.6rem;
  flex-shrink: 0;
  background-color: ${({ color }) => color};
`;

export const KebobIcon = styled.img`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
`;

export const SharedCalendar = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  color: var(--color-black);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const SharedList = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
`;

export const SharedItem = styled.div`
  color: var(--color-black);
  display: flex;
  position: relative;
  width: 100%;
  justify-content: space-between;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
`;

export const Shared = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;