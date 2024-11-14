import styled from 'styled-components';
import ArrowBottomIcon from '@/assets/info/arrowBottom.svg';

export const SelectWrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const SelectButton = styled.button<{ $selectedOption?: string }>`
  width: 100%;
  padding: 1rem;
  background-color: var(--color-white);
  border: 0.1rem solid #d5d7dd;
  border-radius: 0.4rem;
  font-size: 1.6rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) =>
    props.$selectedOption && props.$selectedOption.length > 0
      ? 'var(--color-black)'
      : '#8a91a1'};

  &:after {
    content: url(${ArrowBottomIcon});
    font-size: 1rem;
    color: #666;
    margin-left: 0.5rem;
  }
`;

export const OptionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: var(--color-white);
  border: 0.1rem solid #d5d7dd;
  border-radius: 0.4rem;
  margin-top: 0.5rem;
  box-shadow: 0 4px 0.8rem rgba(0, 0, 0, 0.1);
  max-height: 15rem;
  overflow-y: auto;
  z-index: 1000;
`;

export const OptionItem = styled.li`
  padding: 0.8rem;
  cursor: pointer;
  font-size: 1.6rem;
  color: #333;

  &:hover {
    background-color: #f0f0f0;
  }
`;
