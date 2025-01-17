import { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import * as S from './DriveOption.styles';
import searchIcon from '@/assets/drive/search.svg';
import uploadIcon from '@/assets/drive/upload.svg';
import sortIcon from '@/assets/drive/down.svg';
import checkIcon from '@/assets/drive/checkbox.svg';
import selectIcon from '@/assets/drive/selectbox.svg';
import videoIcon from '@/assets/drive/video.png';
import imageIcon from '@/assets/drive/image.png';
import documentIcon from '@/assets/drive/document.png';
import folderIcon from '@/assets/drive/folder.png';
import audioIcon from '@/assets/drive/audio.png';
import archiveIcon from '@/assets/drive/archive.png';
import otherIcon from '@/assets/drive/other.png';
import unknownIcon from '@/assets/drive/unknown.png';
import kebabIcon from '@/assets/drive/kebab.svg';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import {
  DriveData,
  DriveDataProps,
  DriveOptionProps,
  FilePopupProps,
  PopUpProps,
} from './DriveOption.type';
import {
  deleteDriveFolder,
  deleteTrashFiles,
  getDriveFiles,
  getFileDownload,
  getSearchedDriveFiles,
  getTrashFiles,
  postDriveFiles,
  postTrashFiles,
  restoreTrashFiles,
} from '@/api/driveAPI';
import FolderModal from '@/components/modal/folderModal';
import useDriveDataStore from '@/store/driveDataStore';
import DeleteModal from '@/components/modal/deleteModal';
import UploadModal from '@/components/modal/uploadModal';

const FileType: Record<string, string> = {
  전체: '',
  폴더: 'FOLDER',
  문서: 'DOCUMENT',
  사진: 'IMAGE',
  동영상: 'VIDEO',
  음악: 'AUDIO',
  압축파일: 'ARCHIVE',
  기타: 'OTHER',
};

const fileImage: Record<string, string> = {
  FOLDER: folderIcon,
  DOCUMENT: documentIcon,
  IMAGE: imageIcon,
  VIDEO: videoIcon,
  AUDIO: audioIcon,
  ARCHIVE: archiveIcon,
  OTHER: otherIcon,
  UNKNOWN: unknownIcon,
};

const DriveButtonList = ({
  isDriveData,
  type,
  path,
  selectedData,
}: DriveOptionProps) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [isFolderModalOpen, setIsFolderModalOpen] = useState(false);
  const [searchValue, setSearchValue] = useState('');
  const [isUploading, setIsUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);
  const { setIsNewFolder } = useDriveDataStore();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      const currentPath = window.location.pathname;
      const updatedSearchParams = new URLSearchParams(searchParams);

      updatedSearchParams.set('input', searchValue.trim());
      navigate(`${currentPath}?${updatedSearchParams.toString()}`);
      setIsNewFolder(true);
    }
  };
  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files && files.length > 0) {
      try {
        const invalidFiles = Array.from(files).filter((file) =>
          /[^a-zA-Z0-9가-힣.\s:-]/.test(file.name)
        );

        if (invalidFiles.length > 0) {
          alert(
            '이름에 특수 문자가 포함되어 있는 파일은 업로드할 수 없습니다.'
          );
          return;
        }
        setIsUploading(true);
        await postDriveFiles(
          type === 'my' ? 'PERSONAL' : 'SHARED',
          Array.from(files),
          path,
          (progress) => setUploadProgress(progress)
        );
        setIsUploading(false);
        setUploadProgress(0);
        setIsNewFolder(true);
      } catch (error) {
        alert('파일 업로드에 실패했습니다.');
      }
    }
  };

  const handleDownload = async () => {
    const driveType = type === 'my' ? 'PERSONAL' : 'SHARED';

    const selectedFileName = selectedData
      ?.filter((item) => item.fileType !== 'FOLDER') //폴더는 제외
      .map((item) => item.fileName);

    const fileLength = selectedFileName?.length || 0;

    if (fileLength > 0) {
      try {
        const response = await getFileDownload(
          driveType,
          path,
          selectedFileName || []
        );
        const blob = new Blob([response.data], { type: 'application/zip' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'download.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        alert('파일 다운로드에 실패했습니다.');
      }
    } else {
      alert('다운로드는 파일만 가능합니다');
    }
  };
  const handleDelete = async () => {
    const selectedFileName = selectedData?.map((item) => item.fileName);
    // const selectedFolderName = selectedData
    //   ?.filter((item) => item.fileType === 'FOLDER')
    //   .map((item) => item.fileName);
    const driveType = type === 'my' ? 'PERSONAL' : 'SHARED';
    if (selectedFileName) {
      try {
        await postTrashFiles(driveType, '', selectedFileName);

        setIsNewFolder(true);
      } catch (error) {
        alert('파일 삭제에 실패했습니다.');
      }
    }
  };
  return (
    <>
      {isDriveData ? (
        <>
          <S.DriveOption>
            <S.UploadButton onClick={() => fileInputRef.current?.click()}>
              <S.UploadIcon src={uploadIcon} alt='upload' />
              파일올리기
            </S.UploadButton>
            <input
              ref={fileInputRef}
              type='file'
              multiple
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
            <S.DriveOptionButton
              onClick={() => setIsFolderModalOpen(!isFolderModalOpen)}
            >
              새 폴더
            </S.DriveOptionButton>
          </S.DriveOption>
          <S.InputWrapper>
            <S.Input
              type='text'
              placeholder='파일 명을 입력하세요'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <S.SearchIcon src={searchIcon} alt='search' />
          </S.InputWrapper>
        </>
      ) : (
        <>
          <S.DriveOption>
            <S.UploadButton onClick={() => fileInputRef.current?.click()}>
              <S.UploadIcon src={uploadIcon} alt='upload' />
              파일올리기
            </S.UploadButton>
            <input
              ref={fileInputRef}
              type='file'
              multiple
              style={{ display: 'none' }}
              onChange={handleFileUpload}
            />
            <S.DriveOptionButton
              onClick={() => setIsFolderModalOpen(!isFolderModalOpen)}
            >
              새 폴더
            </S.DriveOptionButton>
            <S.DriveOptionButton onClick={handleDelete}>
              삭제
            </S.DriveOptionButton>
            <S.DriveOptionButton onClick={handleDownload}>
              다운로드
            </S.DriveOptionButton>
          </S.DriveOption>
          <S.InputWrapper>
            <S.Input
              type='text'
              placeholder='파일 명을 입력하세요'
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onKeyDown={handleKeyPress}
            />
            <S.SearchIcon src={searchIcon} alt='search' />
          </S.InputWrapper>
        </>
      )}
      <FolderModal
        isOpen={isFolderModalOpen}
        onClose={() => setIsFolderModalOpen(false)}
        path={path}
        type={type || 'PERSONAL'}
      />
      <UploadModal isOpen={isUploading} />
    </>
  );
};

const TrashButtonList = ({
  type,
  selectedData,
}: Pick<DriveOptionProps, 'type' | 'selectedData'>) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const { setIsNewFolder } = useDriveDataStore();
  const selectedFileName = selectedData?.map((item) => item.fileName);
  const driveType = type === 'my' ? 'PERSONAL' : 'SHARED';
  const handleDelete = async () => {
    if (selectedFileName) {
      setIsDeleteModalOpen(true);
    }
  };
  const handleRestore = async () => {
    if (selectedFileName) {
      try {
        await restoreTrashFiles(driveType, selectedFileName);
        setIsNewFolder(true);
      } catch (error) {
        alert('파일 복구에 실패했습니다.');
      }
    }
  };
  return (
    <>
      <S.DriveOption>
        <S.DriveOptionButton onClick={() => handleDelete()}>
          비우기
        </S.DriveOptionButton>
        <S.DriveOptionButton onClick={() => handleRestore()}>
          복원
        </S.DriveOptionButton>
      </S.DriveOption>
      <DeleteModal
        selectedItems={selectedData}
        onClose={() => setIsDeleteModalOpen(false)}
        isOpen={isDeleteModalOpen}
        type={type}
      />
    </>
  );
};

const PopUp = ({ type, path, selectedFileName }: PopUpProps) => {
  const { setIsNewFolder } = useDriveDataStore();
  const handleDownload = async () => {
    const driveType = type === 'my' ? 'PERSONAL' : 'SHARED';

    if (selectedFileName) {
      try {
        const response = await getFileDownload(
          driveType,
          path,
          Array(selectedFileName)
        );
        const blob = new Blob([response.data], { type: 'application/zip' });
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'download.zip';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
      } catch (error) {
        alert('파일 다운로드에 실패했습니다.');
      }
    }
  };
  const handleDelete = async () => {
    const driveType = type === 'my' ? 'PERSONAL' : 'SHARED';
    if (selectedFileName) {
      try {
        await postTrashFiles(driveType, '', Array(selectedFileName));
        setIsNewFolder(true);
      } catch (error) {
        alert('파일 삭제에 실패했습니다.');
      }
    }
  };
  return (
    <S.PopUpWrapper>
      <S.PopUpOption onClick={handleDownload}>다운로드</S.PopUpOption>
      <S.PopUpDeleteOption onClick={handleDelete}>삭제</S.PopUpDeleteOption>
    </S.PopUpWrapper>
  );
};

const FilePopUp = ({ onClick }: FilePopupProps) => {
  return (
    <S.PopUpWrapper>
      {Object.keys(FileType).map((key) => (
        <S.PopUpOption key={key} onClick={() => onClick(key)}>
          {key}
        </S.PopUpOption>
      ))}
    </S.PopUpWrapper>
  );
};

const DriveList = ({ data, onClickData, onClickFolder }: DriveDataProps) => {
  const [clickedFile, setClickedFile] = useState<string | null>(null);
  const [searchParams] = useSearchParams();
  const path = searchParams.get('path') || '';
  const { type } = useParams();

  const handleClickedKebab = (fileName: string) => {
    if (clickedFile === fileName) {
      setClickedFile(null);
    } else {
      setClickedFile(fileName);
    }
  };

  return (
    <S.DriveListWrapper>
      {data?.map((item, index) => (
        <S.DriveList key={index}>
          <S.DriveListFront>
            <S.CheckBox
              src={item.isChecked ? selectIcon : checkIcon}
              onClick={() => onClickData(item.fileName)}
            />
            <S.FileFormatWrapper>
              <S.FileFormatIcon src={fileImage[item.fileType]} />
            </S.FileFormatWrapper>
            <S.FileName
              $isFolder={type !== 'trash'}
              onClick={() =>
                onClickFolder(
                  item.fileType,
                  item.originalFileName,
                  item.fileUrl
                )
              }
            >
              {item.originalFileName}
            </S.FileName>
          </S.DriveListFront>
          <S.DriveListBack>
            {type !== 'trash' && (
              <S.ListText style={{ marginRight: `-0.8rem` }}>
                {item.fileSize}
              </S.ListText>
            )}

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
                $isFolder={item.fileType === 'FOLDER' || type === 'trash'}
                onClick={() => handleClickedKebab(item.fileName)}
              />
              {clickedFile === item.fileName && (
                <PopUp type={type} path={path} selectedFileName={clickedFile} />
              )}
            </S.KebabIconWrapper>
          </S.DriveListBack>
        </S.DriveList>
      ))}
    </S.DriveListWrapper>
  );
};

function DriveOption() {
  const navigate = useNavigate();
  const location = useLocation();
  const { type, subtype } = useParams();
  const [searchParams] = useSearchParams();
  const path = searchParams.get('path') || '';
  const input = searchParams.get('input') || '';

  const [driveData, setDriveData] = useState<DriveData[]>();
  const [isFilePopUpOpen, setIsFilePopUpOpen] = useState(false);
  const [fileType, setFileType] = useState<string | null>(null);
  const { isNewFolder, setIsNewFolder, setPath } = useDriveDataStore();

  const isListAllChecked = driveData?.every((item) => item.isChecked);
  const handleClickFolder = (
    fileType: string,
    fileName: string,
    fileUrl: string
  ) => {
    if (fileType === 'FOLDER' && type !== 'trash') {
      const newPath = path ? `${path}/${fileName}` : `${fileName}`;
      const updatedSearchParams = new URLSearchParams(searchParams.toString());
      updatedSearchParams.set('path', newPath);
      navigate(`${location.pathname}?${updatedSearchParams.toString()}`);
    } else if (fileType !== 'FOLDER' && type !== 'trash') {
      window.open(fileUrl, '_blank');
    }
  };
  const handleCheckAll = () => {
    if (isListAllChecked) {
      const updatedData = driveData?.map((item) => ({
        ...item,
        isChecked: false,
      }));
      setDriveData(updatedData);
    } else {
      const updatedData = driveData?.map((item) => ({
        ...item,
        isChecked: true,
      }));
      setDriveData(updatedData);
    }
  };

  const handleCheckList = (fileName: string) => {
    const updatedData = driveData?.map((item) => {
      if (item.fileName === fileName) {
        return {
          ...item,
          isChecked: !item.isChecked,
        };
      }
      return item;
    });
    setDriveData(updatedData);
  };

  const handleFileType = (fileType: string) => {
    setFileType(fileType);
    setIsNewFolder(true);
    setIsFilePopUpOpen(false);
  };
  const fetchDriveData = useCallback(async () => {
    try {
      const driveType = type === 'my' ? 'PERSONAL' : 'SHARED';
      const response = await getDriveFiles(driveType, path);
      const updatedData: DriveData[] = response.data.data.map((item: any) => ({
        ...item,
        isChecked: false,
      }));
      if (fileType !== '전체' && fileType) {
        const filteredData = updatedData?.filter(
          (item) => item.fileType === FileType[fileType]
        );
        setDriveData(filteredData);
      } else {
        setDriveData(updatedData);
      }
      setIsNewFolder(false);
    } catch (error) {
      alert('파일을 불러오는데 실패했습니다.');
    }
  }, [type, path, fileType, setDriveData, setIsNewFolder]);

  const fetchSearchData = useCallback(async () => {
    try {
      const driveType = type === 'my' ? 'PERSONAL' : 'SHARED';
      const response = await getSearchedDriveFiles(driveType, input, path);
      const updatedData: DriveData[] = response.data.data.map((item: any) => ({
        ...item,
        isChecked: false,
      }));
      if (fileType !== '전체' && fileType) {
        const filteredData = updatedData?.filter(
          (item) => item.fileType === FileType[fileType]
        );
        setDriveData(filteredData);
      } else {
        setDriveData(updatedData);
      }
    } catch (error) {
      alert('파일을 불러오는데 실패했습니다.');
    }
  }, [type, input, path, fileType, setDriveData]);

  const fetchTrashData = useCallback(async () => {
    try {
      const driveType = subtype === 'my' ? 'PERSONAL' : 'SHARED';
      const response = await getTrashFiles(driveType);
      const updatedData = response.data.data.map((item: any) => ({
        ...item,
        isChecked: false,
      }));
      setDriveData(updatedData);
      setIsNewFolder(false);
    } catch (error) {
      alert('삭제된 파일을 불러오는데 실패했습니다.');
    }
  }, [subtype, setDriveData, setIsNewFolder]);
  useEffect(() => {
    if (isNewFolder) {
      if (type === 'trash') {
        fetchTrashData();
      } else if (input) {
        fetchSearchData();
      } else {
        fetchDriveData();
      }
    }
  }, [
    type,
    subtype,
    isNewFolder,
    input,
    fileType,
    path,
    fetchDriveData,
    fetchSearchData,
    fetchTrashData,
  ]);

  useEffect(() => {
    setFileType(null);
    setIsFilePopUpOpen(false);
    setIsNewFolder(true);
    setPath(path);
  }, [location.pathname, path]);

  const selectedData = useMemo(() => {
    return driveData?.filter((item) => item.isChecked);
  }, [driveData]);

  return (
    <>
      <S.DriveOptionWrapper>
        {type === 'trash' ? (
          <TrashButtonList type={subtype} selectedData={selectedData} />
        ) : (
          <DriveButtonList
            isDriveData={false}
            type={type}
            path={path}
            selectedData={selectedData}
          />
        )}
      </S.DriveOptionWrapper>
      <S.DriveWrapper>
        <S.DriveHeader>
          <S.DriveHeaderFront>
            <S.CheckBox
              src={
                isListAllChecked && driveData?.length !== 0
                  ? selectIcon
                  : checkIcon
              }
              onClick={() => handleCheckAll()}
            />
            <S.HeaderText
              style={{ width: `8.4rem` }}
              onClick={() => setIsFilePopUpOpen(!isFilePopUpOpen)}
            >
              {fileType || '파일 유형'}
              <S.SortIcon src={sortIcon} alt='sort' />
              {isFilePopUpOpen && <FilePopUp onClick={handleFileType} />}
            </S.HeaderText>
            <S.HeaderText style={{ width: `2.8rem` }}>이름</S.HeaderText>
          </S.DriveHeaderFront>
          <S.DriveHeaderBack>
            {type !== 'trash' && (
              <S.HeaderText style={{ width: `2.8rem` }}>크기</S.HeaderText>
            )}

            <S.HeaderText style={{ width: `7.3rem` }}>업로드 날짜</S.HeaderText>
            <S.HeaderText style={{ width: `11.1rem` }}>
              업로드한 사람
            </S.HeaderText>
          </S.DriveHeaderBack>
        </S.DriveHeader>
        <DriveList
          data={driveData}
          onClickData={handleCheckList}
          onClickFolder={handleClickFolder}
        />
      </S.DriveWrapper>
    </>
  );
}

export default DriveOption;
