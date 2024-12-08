import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  width: 100%;
  padding: 2rem 5rem;
  display: flex;
  flex-direction: column;
  border-radius: 2rem;
  border: none;
`;

export const TitleWrapper = styled.div`
  display: flex;
  padding: 1rem 0rem;
  gap: 0.4rem;
  align-items: center;
  max-width: 25rem;
`;

export const Title = styled.h2`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
`;

export const ArrowButton = styled.img`
  cursor: pointer;
  width: 2.4rem;
  height: 2.4rem;
`;

export const PaginationItem = styled.div`
  text-align: center;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
`;