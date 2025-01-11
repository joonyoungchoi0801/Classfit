import { useState } from 'react';

import * as S from './DriveOption.styles';
import searchIcon from '@/assets/drive/search.svg';
import uploadIcon from '@/assets/drive/upload.svg';
import sortIcon from '@/assets/drive/down.svg';
import checkIcon from '@/assets/drive/checkbox.svg';
import selectIcon from '@/assets/drive/selectbox.svg';
import pptIcon from '@/assets/drive/ppt.png';
import kebabIcon from '@/assets/drive/kebab.svg';
import { useParams } from 'react-router-dom';
import { DriveDataProps, DriveOptionProps } from './DriveOption.type';

const mockData = [
  {
    fileName: '잇타 클래스핏.pdf',
    fileUrl:
      'https://aws-classfit-bucket.s3.ap-northeast-2.amazonaws.com/shared/1/e80c8db5-525a-4389-985d-5430ae7bd5f8_%E1%84%8B%E1%85%B5%E1%86%BA%E1%84%90%E1%85%A1%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%84%89%E1%85%B3%E1%84%91%E1%85%B5%E1%86%BA.pdf',
    folderPath: '',
    uploadedBy: '이예린',
    uploadedAt: '2025-01-08T22:14:20.328722',
    isChecked: false,
  },
  {
    fileName: '잇타 클래스핏(1).pdf',
    fileUrl:
      'https://aws-classfit-bucket.s3.ap-northeast-2.amazonaws.com/shared/1/test/dcbd85cb-c83b-4eed-bb6c-c836d1a555ac_%E1%84%8B%E1%85%B5%E1%86%BA%E1%84%90%E1%85%A1%20%E1%84%8F%E1%85%B3%E1%86%AF%E1%84%85%E1%85%A2%E1%84%89%E1%85%B3%E1%84%91%E1%85%B5%E1%86%BA.pdf',
    folderPath: 'test/',
    uploadedBy: '이예린',
    uploadedAt: '2025-01-08T22:13:51.567537',
    isChecked: true,
  },
];

const DriveButtonList = ({ isDriveData }: DriveOptionProps) => {
  return (
    <>
      {isDriveData ? (
        <>
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
        </>
      ) : (
        <>
          <S.DriveOption>
            <S.UploadButton>
              <S.UploadIcon src={uploadIcon} alt='upload' />
              파일올리기
            </S.UploadButton>
            <S.DriveOptionButton>새 폴더</S.DriveOptionButton>
            <S.DriveOptionButton>삭제</S.DriveOptionButton>
            <S.DriveOptionButton>다운로드</S.DriveOptionButton>
          </S.DriveOption>
          <S.InputWrapper>
            <S.Input type='text' placeholder='파일 명을 입력하세요' />
            <S.SearchIcon src={searchIcon} alt='search' />
          </S.InputWrapper>
        </>
      )}
    </>
  );
};

const TrashButtonList = () => {
  return (
    <>
      <S.DriveOption>
        <S.DriveOptionButton>비우기</S.DriveOptionButton>
        <S.DriveOptionButton>복원</S.DriveOptionButton>
      </S.DriveOption>
    </>
  );
};

const PopUp = () => {
  return (
    <S.PopUpWrapper>
      <S.PopUpOption>이름 바꾸기</S.PopUpOption>
      <S.PopUpOption>다운로드</S.PopUpOption>
      <S.PopUpDeleteOption>삭제</S.PopUpDeleteOption>
    </S.PopUpWrapper>
  );
};

const DriveList = ({ data }: DriveDataProps) => {
  const [clickedFile, setClickedFile] = useState('');
  const handleClickedKebab = (fileName: string) => {
    if (clickedFile === fileName) {
      setClickedFile('');
    } else {
      setClickedFile(fileName);
    }
  };
  return (
    <>
      {data?.map((item, index) => (
        <S.DriveList key={index}>
          <S.DriveListFront>
            <S.CheckBox src={item.isChecked ? selectIcon : checkIcon} />
            <S.FileFormatWrapper>
              <S.FileFormatIcon src={pptIcon} />
            </S.FileFormatWrapper>
            <S.FileName>{item.fileName}</S.FileName>
          </S.DriveListFront>
          <S.DriveListBack>
            <S.ListText style={{ marginRight: `-0.8rem` }}>32.2MB</S.ListText>
            <S.ListText style={{ width: `8.8rem` }}>
              {item.uploadedAt.split('T')[0].replace(/-/g, '.')}
            </S.ListText>
            <S.ListText style={{ width: `9rem` }}>
              &nbsp;&nbsp;{item.uploadedBy}
            </S.ListText>
            <S.KebabIconWrapper>
              <S.KebabIcon
                src={kebabIcon}
                alt='kebab'
                onClick={() => handleClickedKebab(item.fileName)}
              />
              {clickedFile === item.fileName && <PopUp />}
            </S.KebabIconWrapper>
          </S.DriveListBack>
        </S.DriveList>
      ))}
    </>
  );
};

function DriveOption() {
  const [isSelectAll, setIsSelectAll] = useState(false);
  const { type } = useParams();

  return (
    <>
      <S.DriveOptionWrapper>
        {type === 'trash' ? (
          <TrashButtonList />
        ) : (
          <DriveButtonList isDriveData={false} />
        )}
      </S.DriveOptionWrapper>
      <S.DriveWrapper>
        <S.DriveHeader>
          <S.DriveHeaderFront>
            <S.CheckBox
              src={isSelectAll ? selectIcon : checkIcon}
              onClick={() => setIsSelectAll(!isSelectAll)}
            />
            <S.HeaderText style={{ width: `8rem` }}>
              파일유형
              <S.SortIcon src={sortIcon} alt='sort' />
            </S.HeaderText>
            <S.HeaderText style={{ width: `2.8rem` }}>이름</S.HeaderText>
          </S.DriveHeaderFront>
          <S.DriveHeaderBack>
            <S.HeaderText style={{ width: `2.8rem` }}>크기</S.HeaderText>
            <S.HeaderText style={{ width: `7.3rem` }}>업로드 날짜</S.HeaderText>
            <S.HeaderText style={{ width: `11.1rem` }}>
              업로드한 사람
              <S.SortIcon src={sortIcon} alt='sort' />
            </S.HeaderText>
          </S.DriveHeaderBack>
        </S.DriveHeader>
        <DriveList data={mockData} />
      </S.DriveWrapper>
    </>
  );
}

export default DriveOption;
