import styled from 'styled-components';

export const PopupContainer = styled.div`
  position: absolute;
  top: 3rem;
  right: 3rem;
  z-index: 1000;
  overflow: visible;
`;
export const Menu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  margin-top: 0.5rem;
  width: 16rem;
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0px 0.4rem 0.8rem rgba(0, 0, 0, 0.1);
  overflow: hidden;
  align-items: flex-start;
  flex-direction: column;
`;

export const MenuItem = styled.button<{ $isDelete?: boolean }>`
  padding: 1.5rem 2rem;
  background-color: var(--color-white);
  color: ${(props) => (props.$isDelete ? 'var(--color-red)' : 'var(--color-black)')};
  border: none;
  cursor: pointer;
  text-align: left;
  justify-content: center;
  align-items: flex-start;
  align-self: stretch;
  gap: 1rem;
  width: 100%;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;

  &:hover {
    background-color: #f2f5fc;
  }
`;
