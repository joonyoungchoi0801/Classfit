import * as S from './Header.styles';
import gray from '@/assets/header/gray.svg';
import profile from '@/assets/header/profile.svg';
import white from '@/assets/header/white.svg';

function Header() {
  return (
    <S.HeaderWrapper>
      <S.Logo>classfit</S.Logo>
      <S.ProfileWrapper>
        <S.ProfileBackground src={gray} alt='q&a' />
        <S.ProfileBackground src={white} alt='profile' />
        <S.ProfileImg src={profile} alt='profile' />
      </S.ProfileWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
