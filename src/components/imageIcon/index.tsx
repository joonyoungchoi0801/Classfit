import type { ImageIconProps } from './ImageIcon.types';
import * as S from './ImageIcon.styles';
import * as Icons from './icons';

function ImageIcon({ name, size = '2.2rem' }: ImageIconProps) {
  const Comp = Icons[name];

  return (
    <S.IconWrapper>
      <S.BtnIcon src={Comp} $size={size} />
    </S.IconWrapper>
  );
}

export default ImageIcon;
