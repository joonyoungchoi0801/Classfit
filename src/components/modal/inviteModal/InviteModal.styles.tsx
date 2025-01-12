import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Code = styled.div`
  justify-content: flex-start;
  align-items: center;
  color: var(--color-black);
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-bottom: 2rem;
`;
export const ModalContainer = styled.div`
  width: 79rem;
  height: 39rem;
  background: var(--color-white);
  border-radius: 0.6964rem;
  box-shadow: 0px 0.4rem 1.6rem rgba(0, 0, 0, 0.2);
  padding: 2.5rem;
`;

export const Header = styled.div`
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  padding: 2rem 1rem;
  border-top: 1px solid #e0e0e0;
  margin: 2rem 0;
  border-bottom: 0.1rem solid #e0e0e0;
`;

export const FieldLabel = styled.div`
  width: 100%;
  color: var(--color-black);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  justify-content: flex-start;
  padding-bottom: 1rem;

  .required {
    color: var(--color-blue);
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-items: center;
`;

export const MoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0.7rem 0;
`;

export const Input = styled.input`
  display: flex;
  padding: 1rem 2rem;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-radius: 1rem;
  border: 0.1rem solid #dedede;
  background: var(--color-white);
`;
