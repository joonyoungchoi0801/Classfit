import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-white);
  width: 100%;
  position: relative;
`;

export const Header = styled.div`
  display: flex;
  border-bottom: 0.1rem solid #e6e6e6;
  width: 100%;
  align-items: center;
  justify-content: flex-start; /* 왼쪽 정렬 */
  gap: 4.3rem; /* 버튼 간 간격 */
  padding: 2.45rem 5rem;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  border: none;
  background: none;
  font-size: 2rem;
  font-style: normal;
  line-height: normal;
  color: ${({ isActive }) =>
    isActive
      ? 'var(--color-blue)'
      : 'var(--color-black)'}; /* 활성화된 탭 색상 */
  font-weight: ${({ isActive }) =>
    isActive ? 700 : 600}; /* 활성화된 탭 굵기 */
  cursor: pointer;
  &:hover {
    color: #007bff; /* 호버 시 색상 변경 */
  }
`;

export const AttendanceTitle = styled.h1`
  color: var(--color-black);
  font-size: 3rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 1.69rem;
  margin-bottom: 1.81rem;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.94rem;
  z-index: 20;
  padding: 2rem 2.5rem;
`;

export const LeftButtons = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const BlueButton = styled.div<{ disabled?: boolean }>`
  display: flex;
  width: 13rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid var(--color-blue);
  background-color: var(--color-blue);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: var(--color-white);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.792rem;
`;

export const RightButtons = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const DownloadContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 23rem;
  height: 4.8rem;
  border-radius: 1rem;
  border: 1px solid var(--color-blue);
`;

export const DropdownButton = styled.button`
  display: flex;
  align-items: center;
  border: none;
  color: var(--color-blue);
  background-color: transparent;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.792rem;
  gap: 0.5rem;
  cursor: pointer;

  img {
    width: 2.4rem;
    height: 2.4rem;
  }
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 7.2rem;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 0rem 0rem 1rem 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1;
  text-align: center;
`;

export const DropdownItem = styled.li`
  padding: 10px;
  color: var(--color-blue);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;

  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

export const FileDownloadButton = styled.button`
  border: none;
  color: var(--color-blue);
  background-color: transparent;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.12rem;
  margin-left: 1rem;
  cursor: pointer;
`;

export const EditButton = styled.div<{ $isEditMode: boolean }>`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid var(--color-blue);
  color: ${(props) =>
    props.$isEditMode ? 'var(--color-white)' : 'var(--color-blue)'};
  background-color: ${(props) =>
    props.$isEditMode ? 'var(--color-blue)' : 'var(--color-white)'};
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.792rem;
  cursor: pointer;
`;

export const DefaultImageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vh;
  background-color: var(--color-white);
  position: fixed;
  top: 40%;
  left: 40%;
`;

export const DefaultImage = styled.img`
  width: 19.25rem;
  height: 22.6551rem;
`;

export const DefaultText = styled.p`
  color: #414141;
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

