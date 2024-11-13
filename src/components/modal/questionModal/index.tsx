import ReactDOM from 'react-dom';
import type { QuestionModalProps } from './QuestionModal.types';
import * as S from './QuestionModal.styles';
import * as PS from '@/components/modal/Modal.styles';
import Button from '@/components/button';

function QuestionModal({
  title,
  message,
  onConfirm,
  onCancel,
  isOpen,
}: QuestionModalProps) {
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <PS.ModalWrapper>
      <PS.ModalContainer>
        <PS.Message>{title}</PS.Message>
        <S.Message>{message}</S.Message>
        <PS.ButtonWrapper>
          <S.ButtonWrapper>
            <Button
              title='취소'
              textColor='var(--color-black)'
              backgroundColor='var(--color-white)'
              isBorder={true}
              borderColor='#D7D7D7'
              onClick={onCancel}
            />
            <Button title='확인' onClick={onConfirm} />
          </S.ButtonWrapper>
        </PS.ButtonWrapper>
      </PS.ModalContainer>
    </PS.ModalWrapper>,
    document.getElementById('modal-root') as HTMLElement
  );
}

export default QuestionModal;
