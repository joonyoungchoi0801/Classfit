import styled from 'styled-components';

export const ButtonWrapper = styled.button<{
  $textColor: string;
  $backgroundColor: string;
  $isBorder: boolean;
}>`
  display: inline-flex;
  padding: 1.5rem 3rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$textColor};
  border: ${(props) =>
    props.$isBorder
      ? `0.15rem solid ${props.$textColor}`
      : `0.15rem solid ${props.$backgroundColor}`};
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.7rem; /* 89.6% */
`;
