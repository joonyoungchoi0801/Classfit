import styled from 'styled-components';

export const BtnIcon = styled.img<{ $width: string; $height: string }>`
  width: ${({ $width }) => $width || '2.2rem'};
  height: ${({ $height }) => $height || '2.2rem'};
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
