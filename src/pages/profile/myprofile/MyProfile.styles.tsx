import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 3rem 5rem;
  padding-bottom: 10rem;
`;

export const Title = styled.h2`
  text-align: left;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 3rem;
`;

export const ProfileHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  gap: 1rem;
`;

export const Name = styled.div`
  color: #000;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.4rem;
  margin-top: 1rem;
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 3rem;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
`;

export const _ContentWrapper = styled.div`
  display: flex;
  width: 80%;
  flex-direction: row;
  align-items: center;
  position: relative;
`;

export const Label = styled.div`
  display: flex;
  flex: 3;
  justify-content: flex-start;
  align-items: center;

  color: var(--color-black);
  font-size: 1.8rem;
  font-weight: 600;
  line-height: 2.4rem;
`;

export const ContentInput = styled.input`
  display: flex;
  flex: 7;
  align-items: center;
  border: 0.1rem solid var(--color-gray);
  border-radius: 1rem;
  outline: none;
  font-size: 1.6rem;
  padding: 1rem 2rem;
  &::placeholder {
    color: var(--color-lightgray);
  }
`;

export const IconWrapper = styled.div`
  position: absolute;
  right: 1rem; /* Input 오른쪽 끝에서 간격 */
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none; /* 클릭 방지 */
  color: var(--color-blue); /* 아이콘 색상 */
  cursor: pointer;
`;

export const CalendarWrapper = styled.div`
  position: absolute;
  bottom: 100%;
  right: 0;
  z-index: 100;
  background-color: var(--color-white);
  border: 0.1rem solid var(--color-gray);
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.1);
  border-radius: 0.8rem;
`;

export const CalendarInput = styled.div`
  position: relative;
  display: flex;
  flex: 7;
  align-items: center;
  border: 0.1rem solid var(--color-gray);
  border-radius: 1rem;
  outline: none;
  font-size: 1.6rem;
  padding: 1rem 2rem;
`;

export const Wrapper = styled.div`
  position: relative; /* 자식 요소의 기준점 */
  display: inline-block; /* 크기 맞추기 */
`;

export const ImageIconWrapper = styled.div`
  position: absolute;
  width: 6.4rem;
  height: 6.8rem;
  top: 50%; /* 부모 요소의 세로 중앙 */
  left: 50%; /* 부모 요소의 가로 중앙 */
  transform: translate(-50%, -50%); /* 중앙 정렬 */
`;

export const BackgroundCircle = styled.div`
  width: 13rem; /* 원의 너비 */
  height: 13rem; /* 원의 높이 */
  background: var(--color-lightblue); /* 배경색 */
  border-radius: 50%; /* 원형 모양 */
`;

export const TextWithIcon = styled.div`
  width: 100%;
  font-size: 1.6rem;
  /* color: {({}) => (isSelected ? 'var(--color-black)' : '#8a91a1')}; */
  color: var(--color-black);
`;

export const CalendarButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 1rem;
  padding: 2rem 3rem;
`;

export const BottomWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin: 4rem 0;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1rem;
`;
