import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--color-white);
  border-radius: 1rem;
  width: 24.5rem;
  padding: 2rem 3rem;
  max-width: 90%;
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ModalTitle = styled.h3`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  margin: 0;
`;

export const DateText = styled.span`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  color: rgba(138, 138, 138, 0.87);
  margin-left: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid var(--color-lightgray);
`;

export const StudentList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
  min-height: 10rem;
  overflow-y: auto;
`;

export const StudentItem = styled.li`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const NoStudents = styled.div`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  color: var(--color-black);
`;

export const CloseButton = styled.button`
  background-color: var(--color-blue);
  color: var(--color-white);
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.6rem;
  margin-left: auto;

  &:hover {
    background-color: #0056b3;
  }
`;