import * as S from './DriveSidebar.styles';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

function DriveSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname;
  const { type, subtype } = useParams<{ type?: string; subtype?: string }>();
  const [isTrashExpanded, setIsTrashExpanded] = useState(false);

  const handleTrashClick = () => {
    setIsTrashExpanded((prev) => !prev);
    if (!isTrashExpanded) {
      navigate('/drive/trash/my'); // 기본적으로 개인 휴지통 열기
    }
  };

  return (
    <S.DriveSidebarWrapper>
      <S.SidebarItem
        onClick={() => navigate('/drive/my')}
        $isSelected={type === 'my'}
      >
        내 드라이브
      </S.SidebarItem>
      <S.SidebarItem
        onClick={() => navigate('/drive/shared')}
        $isSelected={type === 'shared'}
      >
        공용 드라이브
      </S.SidebarItem>
      <S.SidebarItem onClick={handleTrashClick} $isSelected={type === 'trash'}>
        휴지통
      </S.SidebarItem>

      <S.SubSidebarWrapper>
        <S.SubSidebarItem
          onClick={() => navigate('/drive/trash/my')}
          $isSelected={type === 'trash' && subtype === 'my'}
        >
          개인 휴지통
        </S.SubSidebarItem>
        <S.SubSidebarItem
          onClick={() => navigate('/drive/trash/shared')}
          $isSelected={type === 'trash' && subtype === 'shared'}
        >
          공용 휴지통
        </S.SubSidebarItem>
      </S.SubSidebarWrapper>
    </S.DriveSidebarWrapper>
  );
}

export default DriveSidebar;
