import styled from 'styled-components';

export const CalendarContainer = styled.div`
  display: inline-flex;
  width: 100%;
  padding: 3rem 5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
`;

export const CalendarHeader = styled.div`
  display: flex;
  width: 100%;
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
