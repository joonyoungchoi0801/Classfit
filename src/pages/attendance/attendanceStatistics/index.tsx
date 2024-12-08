import {
  Route,
  Routes,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import * as S from './AttendanceStatistics.styles';
import DateStatistics from './DateStatistics';

function AttendanceStatistics() {
  const navigate = useNavigate();
  const location = useLocation();

  const type = location.pathname.includes('/statistics/date') ? 'date' : 'member';

  const handleTabClick = (tab: 'date' | 'member') => {
    if (tab === 'date') {
      navigate('/manage/attendance/statistics/date');
    } else {
      navigate('/manage/attendance/statistics/member');
    }
  };

  return (
    <S.Container>
      <S.Header>
        <S.TabButton
          isActive={type === 'date'}
          onClick={() => handleTabClick('date')}
        >날짜별</S.TabButton>
        <S.TabButton
          isActive={type === 'member'}
          onClick={() => handleTabClick('member')}
        >구성원별</S.TabButton>
      </S.Header>

      <S.Content>
        <DateStatistics />
      </S.Content>
    </S.Container>
  );
}

export default AttendanceStatistics;
