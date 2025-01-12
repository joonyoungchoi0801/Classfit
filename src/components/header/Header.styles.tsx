import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 7rem;
  z-index: 1000;
  background: #0056f6;
  padding: 1.8rem 2.9rem;
`;

export const Logo = styled.h1`
  color: var(--color-white);
  font-family: 'PyeongChangPeace-Bold';
  font-size: 2.6rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

export const ProfileWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  align-items: center;
  position: relative;
`;

export const ProfileBackground = styled.img`
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
`;

export const ProfileImg = styled.img`
  position: absolute;
  width: 3.52rem;
  height: 3.52rem;
  top: 50%;
  left: 50%;
  transform: translate(18%, -50%);
`;

export const Button = styled.div`
  cursor: pointer;
`;
