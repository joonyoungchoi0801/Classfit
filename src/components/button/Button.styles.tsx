import styled from 'styled-components';

export const ButtonWrapper = styled.button<{
  $textColor: string;
  $backgroundColor: string;
  $borderColor: string;
  $isBorder: boolean;
}>`
  display: inline-flex;
  padding: 1rem 2rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  border-radius: 0.5rem;
  background: ${(props) => props.$backgroundColor};
  color: ${(props) => props.$textColor};
  border: ${(props) =>
    props.$isBorder
      ? `0.1rem solid ${props.$borderColor}`
      : `0.1rem solid ${props.$backgroundColor}`};
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.344rem;
`;
