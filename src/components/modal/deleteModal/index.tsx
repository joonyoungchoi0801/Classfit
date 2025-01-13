import ReactDOM from 'react-dom';
import * as S from './DeleteModal.styles';
import { DeleteModalProps } from './DeleteModal.type';
import useDriveDataStore from '@/store/driveDataStore';
import { deleteTrashFiles } from '@/api/driveAPI';
function DeleteModal({
  selectedItems,
  onClose,
  isOpen,
  type,
}: DeleteModalProps) {
  if (!isOpen) return null;
  const { setIsNewFolder } = useDriveDataStore();
  const selectedFileName = selectedItems?.map((item) => item.fileName);
  const driveType = type === 'my' ? 'PERSONAL' : 'SHARED';
  const handleDelete = async () => {
    if (selectedFileName) {
      try {
        await deleteTrashFiles(driveType, selectedFileName);
        setIsNewFolder(true);
        onClose();
      } catch (error) {
        alert('파일 삭제에 실패했습니다.');
      }
    }
  };
  const selectedItemLength = selectedItems?.length || 1;
  return ReactDOM.createPortal(
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.ModalTitle>선택항목을 삭제하시겠습니까 ?</S.ModalTitle>
        <S.ModalDescription>
          {selectedItemLength <= 1
            ? `${selectedItems?.[0]?.originalFileName || ''} `
            : `${selectedItems?.[0]?.originalFileName || ''} 외 ${selectedItemLength - 1}개`}
          파일이 삭제될 예정입니다.
        </S.ModalDescription>
        <S.ButtonWrapper>
          <S.CancelButton onClick={onClose}>취소</S.CancelButton>
          <S.SaveButton onClick={() => handleDelete()}>확인</S.SaveButton>
        </S.ButtonWrapper>
      </S.ModalContainer>
    </S.ModalWrapper>,
    document.getElementById('modal-root') as HTMLElement
  );
}

export default DeleteModal;
