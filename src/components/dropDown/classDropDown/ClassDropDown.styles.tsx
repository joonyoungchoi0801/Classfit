import styled from 'styled-components';
import ArrowBottomIcon from '@/assets/info/arrowBottom.svg';

export const SelectButton = styled.button<{ $isPlaceholder: boolean }>`
  width: 100%;
  padding: 1rem 2rem;
  background-color: var(--color-white);
  border: 0.1rem solid #d5d7dd;
  border-radius: 1rem;
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) =>
    props.$isPlaceholder ? '#8a91a1' : 'var(--color-black)'};

  &:after {
    content: url(${ArrowBottomIcon});
    font-size: 1rem;
    color: #666;
    margin-left: 0.5rem;
  }
`;
