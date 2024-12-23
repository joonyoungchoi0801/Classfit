import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: hidden;
`;

export const Header = styled.div`
  display: flex;
  border-bottom: 0.1rem solid #e6e6e6;
  width: 100%;
  align-items: center;
  justify-content: flex-start;
  gap: 4.3rem;
  padding: 2.45rem 5rem;
  flex-shrink: 0;
  background-color: var(--color-white);
  z-index: 1;
`;

export const TabButton = styled.button<{ isActive: boolean }>`
  border: none;
  background: none;
  font-size: 2rem;
  line-height: normal;
  color: ${({ isActive }) =>
    isActive ? 'var(--color-blue)' : 'var(--color-black)'};
  font-weight: ${({ isActive }) => (isActive ? 700 : 600)};
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

export const SearchBox = styled.div`
  display: flex;
  flex: 1;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 0 1rem 1rem 0;
  background-color: var(--color-blue);
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    background-color: #0056b3;
  }
`;

export const Input = styled.input`
  flex: 1;
  padding: 1rem;
  border: 0.1rem solid #ddd;
  border-radius: 1rem 0 0 1rem;
  outline: none;
  font-size: 1.6rem;
`;

export const Content = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 2rem 5rem;
  box-sizing: border-box;
  padding-bottom: 2rem;
`;

export const RegisterWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;

export const RegisterButton = styled.button<{ $color?: string }>`
  padding: 1rem 2rem;
  background-color: var(--color-blue);
  background-color: ${({ $color }) => $color || 'var(--color-blue)'};
  color: var(--color-white);
  justify-content: center;
  gap: 1rem;
  align-items: center;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.792rem;
  border-radius: 0.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const RowWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const IconWrapper = styled.div<{
  $alignLeft?: boolean;
}>`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.$alignLeft ? 'flex-start' : 'center')};
  margin-right: 1rem;
  cursor: pointer;
`;

export const BtnIcon = styled.img`
  width: 2.2rem;
  height: 2.2rem;
`;

export const Name = styled.div`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Text = styled.div`
  text-align: left;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const Tag = styled.div<{ $type: string }>`
  padding: 0.5rem 1.2rem;
  background-color: ${(props) => {
    if (props.$type === '월간') return '#5DD2A9';
    if (props.$type === '주간') return '#FF7173';
    if (props.$type === '데일리') return 'var(--color-blue)';
    return 'var(--color-gray)';
  }};
  color: var(--color-white);
  border-radius: 0.5rem;
  font-size: 1.4rem;
  margin-right: 1rem;
  font-weight: 600;
  line-height: normal;
`;
