import * as S from './Header.styles';
import ImageIcon from '../imageIcon';

function Header() {
  const handleQuestion = () => {
    console.log('Question');
  };

  const handleProfile = () => {
    console.log('Profile');
  };

  return (
    <S.HeaderWrapper>
      <ImageIcon name='Logo' width='10.8rem' height='3.5rem' />
      <S.ProfileWrapper>
        <S.Button onClick={handleQuestion}>
          <ImageIcon name='Question' size='3.8rem' />
        </S.Button>
        <S.Button onClick={handleProfile}>
          <ImageIcon name='Profile' size='3.8rem' />
        </S.Button>
      </S.ProfileWrapper>
    </S.HeaderWrapper>
  );
}

export default Header;
