import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  background: var(--color-white);
  padding: 2rem 2.5rem;
  border-radius: 8px;
  width: 50rem;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
`;

export const ModalTitle = styled.h2`
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Divider = styled.hr`
  margin: 2rem 0;
`;

export const CategoryLabel = styled.label`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 100%;
  gap: 1rem;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;

export const CategoryInput = styled.input`
  width: 100%;
  padding: 1rem 2rem;
  border: 1px solid var(--color-lightgray);
  border-radius: 1rem;
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
`;

export const CategoryIcon = styled.div<{ selectedColor?: string }>`
  width: 3.2rem;
  height: 3rem;
  border-radius: 2rem;
  background-color: ${({ selectedColor }) => selectedColor || '#D9D9D9'};
  cursor: pointer;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: flex-end; 
  gap: 1rem;
`;

export const CancelButton = styled.button`
  background: var(--color-white);
  padding: 1rem 2rem;
  border: 0.1rem solid var(--color-lightgray);
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
`;

export const SaveButton = styled.button`
  background: #E5E5E5;
  color: var(--color-white);
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  cursor: pointer;
  &:hover {
    background: var(--color-blue);
  }
`;

export const ColorPalette = styled.div`
  position: absolute;
  top: 4rem;
  left: 42rem;
  width: 21rem;
  background-color: var(--color-white);
  border-radius: 1rem;
  padding: 2rem;
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.15);
`;

export const ColorOption = styled.div<{ color: string }>`
  width: 3rem;
  height: 3rem;
  background-color: ${(props) => props.color};
  border-radius: 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;


