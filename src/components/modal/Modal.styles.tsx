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
  background: #fff;
  border-radius: 1rem;
  box-shadow: 0rem 0.4rem 1.6rem rgba(0, 0, 0, 0.2);
  padding: 3rem;
  width: 43.5rem;
  min-height: 15.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Message = styled.p`
  font-size: 2rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 1.5rem;
  align-items: start;
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  margin-top: 2rem;
`;
