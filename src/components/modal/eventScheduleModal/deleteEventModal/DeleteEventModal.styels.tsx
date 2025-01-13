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
  background: var(--color-white);
  padding: 3rem;
  border-radius: 0.8rem;
  width: 50rem;
  box-shadow: 0rem 0.4rem 1.5rem 0rem rgba(0, 0, 0, 0.15);
`;

export const Title = styled.h2`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 1.5rem;
`;

export const Message = styled.label`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  line-height: 2.4rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: flex-end; 
  gap: 1rem;
  margin-top: 3.5rem;
`;

export const CancelButton = styled.button`
  background: var(--color-white);
  padding: 1rem 2rem;
  border: 0.1rem solid var(--color-lightgray);
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
`;

export const ConfirmButton = styled.button`
  background: var(--color-blue);
  color: var(--color-white);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
`;