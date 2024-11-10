import type { LabelProps } from './Label.types';
import * as S from './Label.styles';
import CloseIcon from '@/assets/label/close.svg';

function Label({ title, onClose }: LabelProps) {
  return (
    <S.LabelWrapper>
      <S.LabelMessage>{title}</S.LabelMessage>
      <S.LabelCloseBtn onClick={onClose}>
        <img src={CloseIcon} alt='close' />
      </S.LabelCloseBtn>
    </S.LabelWrapper>
  );
}

export default Label;
