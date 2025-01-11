import * as S from './DriveOption.styles';
import searchIcon from '@/assets/drive/search.svg';
import uploadIcon from '@/assets/drive/upload.svg';

function DriveOption() {
  return (
    <S.DriveOptionWrapper>
      <S.DriveOption>
        <S.UploadButton>
          <S.UploadIcon src={uploadIcon} alt='upload' />
          파일올리기
        </S.UploadButton>
        <S.DriveOptionButton>새 폴더</S.DriveOptionButton>
      </S.DriveOption>
      <S.InputWrapper>
        <S.Input type='text' placeholder='파일 명을 입력하세요' />
        <S.SearchIcon src={searchIcon} alt='search' />
      </S.InputWrapper>
    </S.DriveOptionWrapper>
  );
}

export default DriveOption;
