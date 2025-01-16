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

export const ModalContainer = styled.div`
  display: flex;
  width: 50rem;
  padding: 2rem 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  border-radius: 1rem;
  background: var(--color-white);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
`;

export const ModalTitle = styled.span`
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Bar = styled.div`
  width: 100%;
  height: 0.1rem;
  background: #a7a7a7;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  width: 100%;
`;

export const FolderLabel = styled.label`
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
`;

export const Input = styled.input`
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 1rem 2rem;
  border-radius: 1rem;
  border: 0.1rem solid var(--color-gray);
  background: var(--color-white);
  &::placeholder {
    color: var(--color-lightgray);
    font-family: Pretendard;
    font-size: 1.6rem;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  align-self: stretch;
`;

export const CancelButton = styled.button`
  display: inline-flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.344rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--color-gray);
  background: var(--color-white);
`;

export const SaveButton = styled.button`
  display: inline-flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  color: var(--color-white);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.344rem;
  border-radius: 0.5rem;
  background: var(--color-blue);
`;
