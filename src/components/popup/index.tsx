import * as S from './Popup.styles';
import type { PopupProps } from './Popup.types';

function Popup({ isOpen, onEdit, onDelete }: PopupProps) {
  return (
    <S.PopupContainer>
      {isOpen && (
        <S.Menu>
          <S.MenuItem onClick={onEdit}>수정</S.MenuItem>
          <S.MenuItem onClick={onDelete} $isDelete>삭제</S.MenuItem>
        </S.Menu>
      )}
    </S.PopupContainer>
  );
}

export default Popup;
