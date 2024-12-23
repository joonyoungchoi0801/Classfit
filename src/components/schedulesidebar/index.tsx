import { useLocation, useNavigate } from 'react-router-dom';
import * as S from './ScheduleSidebar.styles';

function ScheduleSidebar() {
  const location = useLocation();
  const url = location.pathname;
  const navigate = useNavigate();

  return (
    <S.ScheduleSidebarWrapper>
      <S.ScheduleAddBtn>
        일정등록
      </S.ScheduleAddBtn>
    </S.ScheduleSidebarWrapper>
  );
}

export default ScheduleSidebar;