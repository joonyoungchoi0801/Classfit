import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  background: var(--color-white);
  padding: 2rem 3rem;
  border-radius: 1rem;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const ColorBox = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 0.4rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
`;

export const EditBtn = styled.img`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  cursor: pointer;
`;

export const DeleteBtn = styled.img`
  width: 2rem;
  height: 2rem;
  flex-shrink: 0;
  cursor: pointer;
  color: black;
`;

export const ModalTitle = styled.h2`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const EventDate = styled.h2`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: 150%;
`;

export const OkBtn = styled.button`
  background-color: var(--color-blue);
  color: var(--color-white); 
  border: none;
  border-radius: 0.5rem;
  padding: 1rem 2rem;
  font-size: 1.6rem;
  font-weight: 600;
  margin-top: 2rem;
  align-self: flex-end;
  cursor: pointer;
`;
