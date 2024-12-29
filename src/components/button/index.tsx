import * as S from './Button.styles';
import type { ButtonProps } from './Button.types';

function Button({
  title = '버튼',
  textColor = 'var(--color-white)',
  backgroundColor = 'var(--color-blue)',
  borderColor = 'var(--color-black)',
  isBorder = false,
  onClick = () => {},
  type = 'button',
}: ButtonProps) {
  console.log(type);
  return (
    <S.ButtonWrapper
      type={type}
      onClick={onClick}
      $textColor={textColor}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      $isBorder={isBorder}
    >
      {title}
    </S.ButtonWrapper>
  );
}

export default Button;
