import ReactDOM from 'react-dom';
import * as S from './FolderModal.styles';
import { FolderModalProps } from './FolderModal.type';
import { useState } from 'react';
import { postDriveFolder } from '@/api/driveAPI';
import useDriveDataStore from '@/store/driveDataStore';

function FolderModal({ path, type, onClose, isOpen }: FolderModalProps) {
  const [folderName, setFolderName] = useState('');
  const { setIsNewFolder } = useDriveDataStore();
  const postFolder = async () => {
    try {
      await postDriveFolder(
        type === 'my' ? 'PERSONAL' : 'SHARED',
        folderName,
        path
      );
      setIsNewFolder(true);
      onClose();
    } catch (error) {
      alert('폴더 생성에 실패했습니다.');
    }
  };
  if (!isOpen) return null;
  return ReactDOM.createPortal(
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.ModalTitle>새 폴더</S.ModalTitle>
        <S.Bar />
        <S.InputWrapper>
          <S.FolderLabel>폴더명</S.FolderLabel>
          <S.Input
            placeholder='폴더명을 입력'
            onChange={(e) => setFolderName(e.target.value)}
          />
        </S.InputWrapper>
        <S.ButtonWrapper>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.SaveButton onClick={postFolder}>저장</S.SaveButton>
        </S.ButtonWrapper>
      </S.ModalContainer>
    </S.ModalWrapper>,
    document.getElementById('modal-root') as HTMLElement
  );
}

export default FolderModal;
