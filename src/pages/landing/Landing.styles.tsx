import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh; /* 화면 전체 높이 사용 */
  background: var(--color-white);
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eaeaea;
`;

export const StyledLogo = styled.img`
  width: 9.2rem;
  height: 3.67rem;
`;

export const Main = styled.main`
  flex: 1;
  display: flex;
  align-items: center; /* 세로 중앙 정렬 */
  justify-content: flex-start; /* 좌우 공간 분배 */
  width: 100%;
  margin: 0 auto;
  padding: 3rem 2rem;
  padding-left: 10rem;
`;

export const LeftSection = styled.div`
  flex: 1;
  padding-right: 2rem;
`;

export const RightSection = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
`;

export const Title1 = styled.h1`
  font-size: 6rem;
  margin-bottom: 1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 7.4rem;
`;

export const Desc = styled.p`
  color: #525252;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 3.6rem;
  margin-top: 2rem;
`;

export const StartButton = styled.button`
  margin-top: 4rem;
  background-color: var(--color-black);
  color: var(--color-white);
  border: none;
  border-radius: 4rem;
  cursor: pointer;
  display: inline-flex;
  padding: 1rem 3rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  text-align: center;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 4.2rem;
`;

export const GraphImage = styled.img`
  width: 100%;
  height: auto;
  width: 90rem;
`;
