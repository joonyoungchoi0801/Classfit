import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  position: relative;
  flex-grow: 1;
  padding: 3rem 5rem;
  overflow-y: auto;
`;

export const Title = styled.h2`
  text-align: left;
  font-size: 2.2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 3rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
`;

export const TableHead = styled.thead`
  border-bottom: 2px solid #e0e0e0;
`;

export const TableBody = styled.tbody`
  tr:last-child td {
    border-bottom: none;
  }
`;

export const Row = styled.tr`
  &:nth-child(even) {
    background-color: #f9f9f9;
  }
`;

export const HeaderCell = styled.th`
  padding: 12px 16px;
  text-align: left;
  font-weight: bold;
  color: var(--color-black);
  border-bottom: 0.1rem solid var(--color-gray);
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

export const Cell = styled.td`
  padding: 1.5rem 1rem;
  font-size: 1.4rem;
  color: var(--color-black);
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const StatusLink = styled.a`
  color: #007bff;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
`;
export const StatusTitle = styled.div`
  justify-content: flex-start;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  color: var(--color-blue);
`;
