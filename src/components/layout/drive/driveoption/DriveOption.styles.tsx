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
  outline: none;
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

export const DriveWrapper = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh- 21rem);
  padding: 2rem 2.5rem;
  flex-direction: column;
  align-items: flex-start;
`;

export const DriveHeader = styled.div`
  display: flex;
  width: 100%;
  padding: 0.7613rem 1rem;
  justify-content: space-between;
  align-items: center;
  border-top: 0.08rem solid #e7e7e7;
  border-bottom: 0.08rem solid #e7e7e7;
`;

export const DriveHeaderFront = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`;

export const CheckBox = styled.img`
  width: 2.4rem;
  height: 2.4rem;
  cursor: pointer;
`;

export const HeaderText = styled.span`
  display: flex;
  align-items: center;
  color: #999;
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
`;

export const SortIcon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const DriveHeaderBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5rem;
  margin-right: 5rem;
`;

export const DriveList = styled.div`
  display: flex;
  width: 100%;
  padding: 1.5226rem 1rem;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.08rem solid #e7e7e7;
`;

export const DriveListFront = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
`;

export const FileFormatWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8rem;
`;

export const FileFormatIcon = styled.img`
  width: 2rem;
  height: 2rem;
  margin-right: 2rem;
`;

export const FileName = styled.span`
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const DriveListBack = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4.3rem;
`;

export const ListText = styled.span`
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const KebabIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
  height: 2rem;
  position: relative;
`;
export const KebabIcon = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const PopUpWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 10.67rem;
  position: absolute;
  top: 3rem;
  right: 0rem;
  justify-content: center;
  align-items: flex-start;
  background-color: var(--color-white);
  border-radius: 0.67rem;
  box-shadow: 0 4px 0.8rem rgba(0, 0, 0, 0.1);
  z-index: 1000;
`;
export const PopUpOption = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 1.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  border-bottom: 0.05rem solid #dedede;
  color: var(--color-black);
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  z-index: 1000;
  overflow: visible;
  cursor: pointer;
  &:hover {
    background-color: #f2f5fc;
  }
`;
export const PopUpDeleteOption = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem 1.3rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: #ff2600;
  font-family: Pretendard;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  cursor: pointer;
  &:hover {
    background-color: #f2f5fc;
  }
`;
