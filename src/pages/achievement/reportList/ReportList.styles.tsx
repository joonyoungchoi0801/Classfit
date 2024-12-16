import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding-bottom: 10rem;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 2rem;
  gap: 1rem;
`;

export const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  gap: 1rem;
`;

export const SearchBox = styled.div`
  display: flex;
  flex: 1;
`;

export const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 1rem 0 0 1rem;
  outline: none;
  font-size: 1.6rem;
`;

export const Button = styled.button`
  padding: 1rem 2rem;
  border-radius: 0 1rem 1rem 0;
  background-color: var(--color-blue);
  color: white;
  cursor: pointer;
  font-size: 1.6rem;
  &:hover {
    background-color: #0056b3;
  }
`;

export const ReportListSection = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem 0rem;
  background-color: #fafafa;
  border-radius: 2rem;
`;

export const ReportListHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-right: 3rem;
`;

export const ReportList = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
`;

export const ReportItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem 3rem;
  border-bottom: 0.1rem solid var(--color-gray);
  &:last-child {
    border-bottom: none;
  }
  &:hover {
    background-color: #dfebff;
  }
  cursor: pointer;
`;

export const MoreInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.5rem;
`;

export const ReportName = styled.div`
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  padding: 0 5rem;
`;

export const ReportIcon = styled.img`
  width: 15rem;
  height: 13.7864rem;
`;

export const EmptyListSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ReportInfoText = styled.div`
  font-size: 2rem;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  padding-top: 5.314rem;
`;
