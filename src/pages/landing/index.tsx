import * as S from './Landing.styles';
import Logo from '@/assets/auth/signin/logo.svg';
import Graph from '@/assets/landing/graph.svg';
import { useNavigate } from 'react-router-dom';

function Landing() {
  const navigate = useNavigate();
  const handleClick = () => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      navigate('/home');
    } else {
      navigate('/signin');
    }
  };
  return (
    <S.Container>
      <S.Header>
        <S.StyledLogo src={Logo} alt='classfit' />
      </S.Header>

      <S.Main>
        <S.LeftSection>
          <S.Title1>선생님은 수업만 하세요!</S.Title1>
          <S.Title1>운영은 클래스핏이 할게요</S.Title1>
          <S.Desc>
            클래스핏은 학원에 딱맞는 솔루션을 제공합니다.
            <br />
            스마트한 올인원 업무툴로 효율적인 교육환경을 만들어보세요.
          </S.Desc>
          <S.StartButton onClick={handleClick}>클래스핏 시작하기</S.StartButton>
        </S.LeftSection>
      </S.Main>
      <S.RightSection>
        <S.GraphImage src={Graph} alt='우측 그래프 예시' />
      </S.RightSection>
    </S.Container>
  );
}

export default Landing;
