import styled from 'styled-components';

export const Container = styled.div`
  padding: 2.5rem;
  background-color: var(--color-white);
  width: 100%;
  position: relative;
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
`;

export const LeftButtons = styled.div`
  display: flex;
  gap: 1.25rem;
`;

export const BlueButton = styled.div<{ disabled?: boolean }>`
  display: flex;
  width: 15rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
  border-radius: 1rem;
  border: 1px solid var(--color-blue);
  background-color: var(--color-blue);
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  color: var(--color-white);
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.792rem;
`;

export const WhiteButton = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1rem;
  padding: 1.5rem 2rem;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  border: 1px solid var(--color-blue);
  color: var(--color-blue);
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.792rem;
  cursor: pointer;
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
  font-size: 1.7rem;
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
  font-size: 1.7rem;
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
  padding: 1.5rem 2rem;
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
  width: 100%;
  background-color: var(--color-white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
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
