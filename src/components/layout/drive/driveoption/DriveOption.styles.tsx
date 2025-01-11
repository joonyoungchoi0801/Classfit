import styled from 'styled-components';

export const DriveOptionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 7rem;
  padding: 0rem 2.5rem;
  justify-content: space-between;
  align-items: center;
  flex-shrink: 0;
`;

export const DriveOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;

export const DriveOptionButton = styled.button`
  display: flex;
  padding: 0.6rem 1.4rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.792rem;
  border-radius: 0.5rem;
  border: 0.1rem solid var(--color-lightgray);
  background: var(--color-white);
`;

export const UploadButton = styled.button`
  display: inline-flex;
  padding: 0.6rem 1.4rem;
  justify-content: center;
  align-items: center;
  gap: 0.6rem;
  border-radius: 0.5rem;
  background: var(--color-blue);
  color: var(--color-white);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.792rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 20rem;
  height: 3rem;
  align-items: center;
  flex-shrink: 0;
  position: relative;
`;

export const Input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0rem 1.2rem;

  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.792rem;
  color: var(--color-black);
  border-radius: 0.4rem;
  background: var(--color-gray);
  border: none;
  &::placeholder {
    color: var(--color-lightgray);
    font-family: Pretendard;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.792rem;
  }
`;
export const UploadIcon = styled.img`
  width: 1.6rem;
  height: 1.6rem;
`;

export const SearchIcon = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  position: absolute;
  right: 1.2rem;
  top: 50%;
  transform: translateY(-50%);
`;
