import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5rem;
  background-color: var(--color-white);
  flex-grow: 1;
  width: 100%;
`;

export const AttendanceTitle = styled.h1`
  color: var(--color-black);
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
  justify-content: space-between;
  margin-bottom: 0.94rem;
`;

export const LeftButtons = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const RightButtons = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const DownloadContainer = styled.div`
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: center;
  width: 15.4375rem;
  height: 3rem;
  border-radius: 0.625rem;
  border: 1px solid var(--color-blue);
`;


export const DropdownButton = styled.button`
  display: flex; 
  align-items: center;
  border: none; 
  color: var(--color-blue);
  background-color: transparent;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.12rem;
  gap: 0.5rem;
  cursor: pointer;

  img {
    width: 1.5rem;
    height: 1.5rem;
  }
`;

export const DropdownList = styled.ul`
  position: absolute; 
  top: 100%; 
  left: 0; 
  background-color: #fff; 
  border: 1px solid #ccc; 
  list-style: none; 
  padding: 0; 
  margin: 0; 
  z-index: 1;
`;

export const DropdownItem = styled.li` 
  padding: 10px; 
  cursor: pointer; 
  &:hover { 
    background-color: #f0f0f0; 
  } 
`;

export const FileDownloadButton = styled.button`
  border: none; 
  color: var(--color-blue);
  background-color: transparent;
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.12rem;
  margin-left: 1.25rem;
  cursor: pointer;
`