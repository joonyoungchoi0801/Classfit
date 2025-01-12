import type { ImageIconProps } from './ImageIcon.types';
import * as S from './ImageIcon.styles';
import * as Icons from './icons';

function ImageIcon({ name, size = '2.2rem', width, height }: ImageIconProps) {
  const Comp = Icons[name];
  let iWidth;
  let iHeight;

  if (width && height) {
    iWidth = width;
    iHeight = height;
  } else {
    iWidth = size;
    iHeight = size;
  }

  return (
    <S.IconWrapper>
      <S.BtnIcon src={Comp} $width={iWidth} $height={iHeight} />
    </S.IconWrapper>
  );
}

export default ImageIcon;
