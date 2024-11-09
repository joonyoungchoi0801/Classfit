import * as S from './AttendanceTable.styles';
import search from '@/assets/search.svg';

function AttendanceTable() {
  return (
    <S.TableHeader>
      <S.SeachContainer>
        <S.SearchIcon src={search} alt='search icon' />
        <S.SearchInput placeholder='이름검색' />
      </S.SeachContainer>
    </S.TableHeader>
  );
}

export default AttendanceTable;