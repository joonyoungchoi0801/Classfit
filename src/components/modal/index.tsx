import type { ModalProps } from './Modal.types';
import * as S from './Modal.styles';
import Button from '../button';

function Modal({ message, onClose }: ModalProps) {
  return (
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.Message>{message}</S.Message>
        <S.ButtonWrapper>
          <Button title='확인' onClick={onClose} />
        </S.ButtonWrapper>
      </S.ModalContainer>
    </S.ModalWrapper>
  );
}

export default Modal;
