import ReactDOM from 'react-dom';
import * as S from './UploadModal.styles';
import type { UploadModalProps } from './UploadModal.type';
import fileUploadIcon from '@/assets/drive/fileupload.svg';
import downloadIcon from '@/assets/drive/download.svg';

function UploadModal({ isOpen }: UploadModalProps) {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <S.ModalWrapper>
      <S.ModalContainer>
        <S.ImageWrapper>
          <S.Image src={fileUploadIcon} alt='file upload icon' />
          <S.UploadImage src={downloadIcon} alt='download upload icon' />
        </S.ImageWrapper>

        <S.UploadText>파일이 업로드 중입니다.</S.UploadText>
      </S.ModalContainer>
    </S.ModalWrapper>,
    document.getElementById('modal-root') as HTMLElement
  );
}

export default UploadModal;
