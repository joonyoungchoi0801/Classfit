import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5rem;
  background-color: #ffffff;
`;

export const AttendanceTitle = styled.h1`
  color: #121212;
  font-family: "Pretendard Variable";
  font-size: 1.875rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1.69rem;
  margin-bottom: 1.81rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  margin-bottom: 0.94rem;
  
  button:first-child {
    display: flex;
    width: 10rem;
    justify-content: center;
    align-items: center;
    margin-right: 31.19rem; 
    flex-shrink: 0;
  }

  button:nth-child(2) {
    display: flex;
    width: 15.4375rem;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
  }

  button:nth-child(3) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

