import styled from 'styled-components';

export const BtnIcon = styled.img<{ $size?: string }>`
  width: ${({ $size }) => $size || '2.2rem'};
  height: ${({ $size }) => $size || '2.2rem'};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
