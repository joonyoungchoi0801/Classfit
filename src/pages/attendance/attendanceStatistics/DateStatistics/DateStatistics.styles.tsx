import styled from 'styled-components';

export const Container = styled.div`
  background-color: #fafafa;
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
  width: 20.1rem;
  background-color: var( --color-white);
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

export const SubClass = styled.span`
  margin-left: 1rem;
`;

export const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin-left: 2rem;
`;

export const DatePaginationItem = styled.div`
  text-align: center;
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
`;

export const StatisticsContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  height: 8rem;
  border-bottom: 0.15rem solid var(--color-lightgray);
  align-items: center ;
  justify-content: space-between;
  gap: 5rem;
`;

export const RowTitle = styled.div`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  width: 22rem;
`;

export const ValueContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-left: 2.4rem;
  margin-right: 2.4rem;
`;

export const Blank = styled.div`
  width: 0.5rem;  
`;

export const Value = styled.div`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  width: 5.3rem;
  text-align: center;
  cursor: pointer;

  &:hover {
    color: var(--color-blue);
  }
`;

// 출결 통계 날짜별 상세 모달
export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: var(--color-white);
  border-radius: 1rem;
  width: 24.5rem;
  padding: 2rem 3rem;
  max-width: 90%;
  box-shadow: 0 0.4rem 0.6rem rgba(0, 0, 0, 0.2);
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

export const ModalTitle = styled.h3`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  margin: 0;
`;

export const DateText = styled.span`
  font-size: 1.4rem;
  font-style: normal;
  font-weight: 600;
  color: rgba(138, 138, 138, 0.87);
  margin-left: 1rem;
`;

export const Divider = styled.div`
  width: 100%;
  border-bottom: 0.1rem solid var(--color-lightgray);
`;

export const StudentList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 1rem;
  min-height: 10rem;
  overflow-y: auto;
`;

export const StudentItem = styled.li`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  margin-bottom: 1rem;
`;

export const NoStudents = styled.div`
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 600;
  color: var(--color-black);
`;

export const CloseButton = styled.button`
  background-color: var(--color-blue);
  color: var(--color-white);
  border: none;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 1.6rem;
  margin-left: auto;

  &:hover {
    background-color: #0056b3;
  }
`;