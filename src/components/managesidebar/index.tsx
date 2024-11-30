import { useLocation, useNavigate } from 'react-router-dom';

import Attendance from './Attendance';
import Info from './Info';
import * as S from './ManageSidebar.styles';

function ManageSidebar() {
  const location = useLocation();
  const url = location.pathname;
  const navigate = useNavigate();

  return (
    <S.ManageSidebarWrapper>
      <S.SidebarItem
        onClick={() => navigate('/manage/attendance')}
        $isSelected={url.startsWith('/manage/attendance')}
      >
        학생출결관리
      </S.SidebarItem>
      {url.startsWith('/manage/attendance') && <Attendance />}
      <S.SidebarItem
        onClick={() => navigate('/manage/achievement/management')}
        $isSelected={url.startsWith('/manage/achievement')}
      >
        학생성적관리
      </S.SidebarItem>
      <S.SidebarItem
        onClick={() => navigate('/manage/studentinfo/list')}
        $isSelected={url.startsWith('/manage/studentinfo')}
      >
        학생정보
      </S.SidebarItem>
      {url.startsWith('/manage/studentinfo') && <Info />}
    </S.ManageSidebarWrapper>
  );
}

export default ManageSidebar;
