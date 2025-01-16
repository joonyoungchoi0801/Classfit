import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  position: fixed;
  width: 50rem;
  padding: 2rem 2.5rem;
  background: var(--color-white);
  border-radius: 1rem;
  box-shadow: 0rem 0.4rem 1.5rem 0rem rgba(0, 0, 0, 0.15);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Title = styled.h2`
  margin-bottom: 2rem;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Divider = styled.div`
  margin: 1rem 0;
  border: none;
  border-top: 0.1rem solid #A7A7A7;
`;

export const OptionGroup = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 2rem;
`;

export const Button = styled.button<{ $isActive?: boolean }>`
  padding: 0.6rem 1.4rem;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  color: var(--color-white);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  background: ${({ $isActive }) => ($isActive ? 'var(--color-blue)' : '#E5E5E5')};
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1rem;
`;

export const TextLink = styled.span`
  margin-left: auto; 
  margin-top: 1rem;
  color: var(--color-blue);
  font-size: 1.2rem;
  cursor: pointer;
`;

export const CloseButton = styled.button`
  display: flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  border: 0.1rem solid #CACACA;
  background: var(--color-white);
  color: var(--color-black);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.344rem;
`;