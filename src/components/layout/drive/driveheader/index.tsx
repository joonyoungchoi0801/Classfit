import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as S from './DriveHeader.styles';
import useDriveDataStore from '@/store/driveDataStore';

function DriveHeader() {
  const navigate = useNavigate();
  const { type, subtype } = useParams();
  const { path } = useDriveDataStore();
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

  const pathArray = path ? path.split('/') : [];
  const finalArray: string[] = ['classfit'].concat(pathArray);

  const resultArray = finalArray.reduce<string[]>((acc, cur, index) => {
    if (index > 0) acc.push('>');
    acc.push(cur);
    return acc;
  }, []);

  const handleClickPathItem = (index: number) => {
    const filteredArray = resultArray.filter((item) => item !== '>');
    const targetPath = filteredArray.slice(1, index / 2 + 1).join('/');
    navigate(`/drive/${type}/?path=${targetPath}`);
  };

  return (
    <S.DriveHeaderWrapper>
      <S.DriveHeaderTitle>{title()}</S.DriveHeaderTitle>
      {type !== 'trash' && (
        <S.PathList>
          {resultArray.map((item, index) => (
            <S.PathItem key={index} onClick={() => handleClickPathItem(index)}>
              {item}
            </S.PathItem>
          ))}
        </S.PathList>
      )}
    </S.DriveHeaderWrapper>
  );
}

export default DriveHeader;
