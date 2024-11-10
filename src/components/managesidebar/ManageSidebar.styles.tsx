import styled from 'styled-components';

export const ManageSidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 24rem;
  min-width: 24rem;
  height: calc(100vh - 7rem);
  overflow-y: auto;
  background: var(--color-white);
  padding: 3.5rem 0rem;
  background: #f2f5fc;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.8rem;
    height: 0.8rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #d1d1d1;
    border-radius: 0.8rem;
  }
  &::-webkit-scrollbar-track {
    background-color: #fafafa;
  }
`;

export const SidebarItem = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  height: 5rem;
  padding: 1rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  color: ${(props) =>
    props.$isSelected ? 'var(--color-white);' : 'var(--color-black);'};
  font-size: 2.2rem;
  font-style: normal;
  font-weight: ${(props) => (props.$isSelected ? 600 : 500)};
  line-height: 1.792rem;
  background: ${(props) => (props.$isSelected ? '#0056f6' : 'inherit')};
  cursor: pointer;
  min-height: 5rem;
`;

export const AttendanceWrapper = styled.div`
  display: flex;
  padding: 1.5rem 2rem;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export const AttendanceBtn = styled.button`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  color: var(--color-black);
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.792rem;
  background: var(--color-white);
  border-radius: 1rem;
`;

export const BtnIcon = styled.img`
  width: 1.625rem;
  height: 1.625rem;
`;

export const ManageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const GradeWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 5rem;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
`;
export const Grade = styled.div`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  color: var(--color-black);
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.792rem;
`;

export const Icon = styled.img`
  width: 2.4rem;
  height: 2.4rem;
`;

export const PlusIcon = styled.img<{ $isSelected?: boolean }>`
  display: ${(props) => (props.$isSelected ? 'block' : 'none')};
  width: 2.4rem;
  height: 2.4rem;
`;

export const ClassWrapper = styled.div<{ $isSelected?: boolean }>`
  display: ${(props) => (props.$isSelected ? 'flex' : 'none')};
  width: 100%;
  height: 5rem;
  padding: 1rem 0;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  position: relative;
  overflow: visible;
`;

export const Class = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  gap: 0.3rem;
  align-items: center;
  justify-content: space-between;
  color: ${(props) =>
    props.$isSelected ? 'var(--color-blue)' : 'var(--color-black)'};
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.792rem;
  &::before {
    content: '';
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.$isSelected ? 'var(--color-blue)' : 'var(--color-black)'};
    margin-right: 0.8rem;
  }
`;

export const ClassInput = styled.input`
  border-radius: 0.5rem;
  border: 0.1rem solid #afafaf;
  background-color: inherit;
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.792rem;
  width: 100%;
`;

export const KebabIcon = styled.img<{ $isSelected?: boolean }>`
  display: ${(props) => (props.$isSelected ? 'block' : 'none')};
  width: 2.4rem;
  height: 2.4rem;
`;

export const InfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 1rem 2rem;
  cursor: pointer;
`;

export const Info = styled.div<{ $isSelected?: boolean }>`
  display: flex;
  gap: 0.3rem;
  height: 5rem;
  align-items: center;
  color: ${(props) =>
    props.$isSelected ? 'var(--color-blue)' : 'var(--color-black)'};
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.792rem;
  &::before {
    content: '';
    width: 0.7rem;
    height: 0.7rem;
    border-radius: 50%;
    background-color: ${(props) =>
      props.$isSelected ? 'var(--color-blue)' : 'var(--color-black)'};
    margin-right: 0.8rem;
  }
`;
