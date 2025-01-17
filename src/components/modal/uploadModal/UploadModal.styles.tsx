import styled from 'styled-components';

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5); /* 반투명 배경 */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContainer = styled.div`
  display: inline-flex;
  padding: 14.49rem 12.1rem 16.4rem 12.1rem;
  flex-direction: column;
  align-items: center;
  gap: 5.11rem;
  border-radius: 1rem;
  background: var(--color-white);
  box-shadow: 0 0.4rem 0.15rem 0 rgba(0, 0, 0, 0.15);
  width: 43rem;
  height: 48rem;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  position: relative;
`;

export const Image = styled.img`
  width: 10.7rem;
  height: 9.5rem;
`;

export const UploadImage = styled.img`
  position: absolute;
  width: 4.4rem;
  height: 4.4rem;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -40%);
`;

export const UploadText = styled.span`
  color: var(--color-black);
  text-align: center;
  font-family: Pretendard;
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 2.5rem;
`;
