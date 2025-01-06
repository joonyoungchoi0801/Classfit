import styled from 'styled-components';

export const Container = styled.div`
  background-color: var(--color-white);
  border: 0.1rem solid var(--color-dddgray);
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

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  min-height: 38rem;
  margin-top: 3rem;
`;

export const TableHeader = styled.div`
  display: flex;
  width: 100%;
  height: 3rem;
  position: relative;
`;

export const DropdownClass = styled.div`
  display: flex;
  background: var(--color-gray);
  width: 24.5rem;
  height: 3rem;
  align-items: center;
  padding-left: 0.76rem;
  padding-right: 0.76rem;
  justify-content: space-between;
  position: relative;
  border-radius: 0.3807rem;
  cursor: pointer;
`;

export const Placeholder = styled.span`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  color: var(--color-lightgray);
`;

export const DropdownButton = styled.img`
  width: 1.5058rem;
  height: 1.5058rem;
`;

export const DropdownList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 18.5rem;
  background-color: var(--color-white);
  border: 0.1rem solid var(--color-lightgray);
  border-radius: 0rem 0rem 1rem 1rem;
  list-style: none;
  padding: 0;
  margin: 0;
  z-index: 1;
  text-align: left;
`;

export const DropdownItem = styled.li`
  display: flex;
  padding: 1rem 2rem;
  color: var(--color-black);
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;

  cursor: pointer;
  &:hover {
    background-color: var(--color-skyblue);
  }
`;

export const ColumnContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-left: 5.3rem;
`;

export const ColumnTitle = styled.div`
  font-size: 2rem;
  font-style: normal;
  font-weight: 500;
  width: 20rem;
`;

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-height: 32rem;
  overflow-y: auto;
  align-items: flex-start;
  gap: 1rem;
  margin-top: 3rem;
`;

export const Row = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.15rem solid var(--color-lightgray);
  padding-bottom: 1.4rem;
`;

export const RowTitle = styled.div`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  width: 24.5rem;
`;

export const ValueContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-left: 5.3rem;
`;

export const Value = styled.div`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 500;
  width: 20rem;
  text-align: left;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    color: var(--color-blue);
  }
`;