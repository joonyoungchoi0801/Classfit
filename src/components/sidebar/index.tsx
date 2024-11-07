import * as S from './Sidebar.styles';

import manageIcon from '@/assets/sidebar/manage.svg';
import boardIcon from '@/assets/sidebar/board.svg';
import calendarIcon from '@/assets/sidebar/calendar.svg';
import driveIcon from '@/assets/sidebar/drive.svg';
import selectBoardIcon from '@/assets/sidebar/selectboard.svg';
import selectCalendarIcon from '@/assets/sidebar/selectcalendar.svg';
import selectDriveIcon from '@/assets/sidebar/selectdrive.svg';
import selectManageIcon from '@/assets/sidebar/selectmanage.svg';
import { useLocation, useNavigate } from 'react-router-dom';

function Sidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const url = location.pathname;

  const manage = url.startsWith('/manage') ? selectManageIcon : manageIcon;
  const calendar = url.startsWith('/calendar')
    ? selectCalendarIcon
    : calendarIcon;
  const board = url.startsWith('/board') ? selectBoardIcon : boardIcon;
  const drive = url.startsWith('/drive') ? selectDriveIcon : driveIcon;

  return (
    <S.SidebarWrapper>
      <S.SidebarItem onClick={() => navigate('/manage')}>
        <S.Icon src={manage} alt='manage' />
        <S.SidebarText $isSelected={url.startsWith('/manage')}>
          학생관리
        </S.SidebarText>
      </S.SidebarItem>
      <S.SidebarItem onClick={() => navigate('/calendar')}>
        <S.Icon src={calendar} alt='calendar' />
        <S.SidebarText $isSelected={url.startsWith('/calendar')}>
          일정관리
        </S.SidebarText>
      </S.SidebarItem>
      <S.SidebarItem onClick={() => navigate('/board')}>
        <S.Icon src={board} alt='board' />
        <S.SidebarText $isSelected={url.startsWith('/board')}>
          게시판
        </S.SidebarText>
      </S.SidebarItem>
      <S.SidebarItem onClick={() => navigate('/drive')}>
        <S.Icon src={drive} alt='drive' />
        <S.SidebarText $isSelected={url.startsWith('/drive')}>
          드라이브
        </S.SidebarText>
      </S.SidebarItem>
    </S.SidebarWrapper>
  );
}

export default Sidebar;
