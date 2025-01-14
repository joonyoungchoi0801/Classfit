import * as S from './Popup.styles';
import type { MainPopupProps, PopupProps } from './Popup.types';

function MainPopup({ isOpen, onEdit, onDelete, onAdd }: MainPopupProps) {
  return (
    <S.MainPopupContainer>
      {isOpen && (
        <S.Menu>
          <S.MenuItem onClick={onEdit}>수정</S.MenuItem>
          <S.CorrectionItem onClick={onAdd}>추가</S.CorrectionItem>
          <S.MenuItem onClick={onDelete} $isDelete>
            삭제
          </S.MenuItem>
        </S.Menu>
      )}
    </S.MainPopupContainer>
  );
}

export default MainPopup;
