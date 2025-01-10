import { constants } from 'module';
import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  display: inline-flex;
  padding: 2rem 3rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
