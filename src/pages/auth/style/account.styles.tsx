import styled from 'styled-components';

export const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  gap: 3.6rem;
  background: var(--color-lightblue);
`;

export const AccountWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.6rem;
  width: 48rem;
  border-radius: 2rem;
  background: var(--color-white);
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const Label = styled.label`
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const EmailWrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;
export const Email = styled.span`
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;
export const EmailImg = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;
