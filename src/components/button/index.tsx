import * as S from './Button.styles';
import type { ButtonProps } from './Button.types';

function Button({
  title,
  textColor,
  backgroundColor,
  isBorder,
  onClick,
}: ButtonProps) {
  return (
    <S.ButtonWrapper
      onClick={onClick}
      $textColor={textColor}
      $backgroundColor={backgroundColor}
      $isBorder={isBorder}
    >
      {title}
    </S.ButtonWrapper>
  );
}

export default Button;
