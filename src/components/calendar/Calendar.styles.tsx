import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 3rem 5rem 9rem 5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
`;

export const CalendarHeader = styled.div`
  display: flex;
  width: 100%;
  height: 3.5rem;
  align-items: center;
  justify-content: flex-start;
  gap: 1rem;
`;

export const CalendarLabel = styled.span`
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.344rem;
`;

export const CalendarButton = styled.button`
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid #5f6368;
  background: var(--color-white);
  color: #5f6368;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.344rem;
`;

export const MonthButton = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const CalendarGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  border-radius: 2rem;
  width: 100%;
  height: 100%;
  background: #fafafa;
  position: relative;
`;

export const CalendarDay = styled.div`
  display: flex;
  padding: 1rem 0 0 0;
  flex-direction: column;
  gap: 0.3rem;
  align-items: center;
  /* border: 0.1rem solid #cacaca; */
  &:nth-child(1) {
    border-top-left-radius: 2rem;
    border-left: 0.1rem solid #cacaca;
  }
  &:nth-child(-n + 7) {
    border-top: 0.1rem solid #cacaca;
    border-bottom: 0.1rem solid #cacaca;
    border-right: 0.1rem solid #cacaca;
  }
  &:nth-child(7) {
    border-top-right-radius: 2rem;
  }
  &:nth-child(7n + 1) {
    border-left: 0.1rem solid #cacaca;
  }
  &:nth-child(n + 8):nth-child(-n + 35) {
    border-bottom: 0.1rem solid #cacaca;
    border-right: 0.1rem solid #cacaca;
  }

  &:nth-last-child(7) {
    border-bottom-left-radius: 2rem;
  }
  &:nth-last-child(1) {
    border-bottom-right-radius: 2rem;
  }
`;

export const CalendarDate = styled.span`
  color: var(--color-black);
  text-align: center;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 80%;
`;

export const ScheduleBar = styled.div`
  display: flex;
  padding: 0.6rem 1rem;
  align-items: center;
  gap: 1rem;
  border-radius: 0.4rem;
  background: var(--color-blue);
  color: var(--color-white);
  height: 2.4rem;
  position: absolute;
  z-index: 1;
  text-align: center;
  font-family: Pretendard;
  font-size: 1.2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
`;
