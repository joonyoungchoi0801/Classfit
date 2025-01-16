import * as S from './ProfileSidebar.styles';
import { useNavigate, useParams } from 'react-router-dom';

function ProfileSidebar() {
  const navigate = useNavigate();
  const { type } = useParams<{ type?: string }>();

  return (
    <S.ProfileSidebarWrapper>
      <S.SidebarItem
        onClick={() => navigate('/profile/my')}
        $isSelected={type === 'my'}
      >
        프로필
      </S.SidebarItem>
      <S.SidebarItem
        onClick={() => navigate('/profile/other')}
        $isSelected={type === 'other'}
      >
        멤버 초대하기
      </S.SidebarItem>
    </S.ProfileSidebarWrapper>
  );
}

export default ProfileSidebar;
