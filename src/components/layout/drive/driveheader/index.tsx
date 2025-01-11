import { useLocation, useParams } from 'react-router-dom';
import * as S from './DriveHeader.styles';

function DriveHeader() {
  const { type, subtype } = useParams();

  const title = () => {
    if (type === 'my') {
      return '내 드라이브';
    } else if (type === 'shared') {
      return '공용 드라이브';
    } else if (type === 'trash') {
      if (subtype === 'my') {
        return '내 휴지통';
      } else if (subtype === 'shared') {
        return '공용 휴지통';
      }
    }
  };
  return (
    <S.DriveHeaderWrapper>
      <S.DriveHeaderTitle>{title()}</S.DriveHeaderTitle>
    </S.DriveHeaderWrapper>
  );
}

export default DriveHeader;
