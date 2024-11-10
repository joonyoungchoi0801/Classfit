import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: 4rem;
  overflow: hidden;
  overflow-y: auto;
`;

export const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 0;
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: 600;
  line-height: normal;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;
