import ManageLayout from '@/components/layout/managelayout';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import * as S from './Attendance.styles';
import AttendanceDashboard from './attendanceDashboard';
import AttendanceStatistics from './attendanceStatistics';
import AttendanceMessage from './attendanceMessage';

function Attendance() {
  const navigate = useNavigate();
  const location = useLocation();

  const type = location.pathname.includes('/statistics')
    ? 'statistics'
    : location.pathname.includes('/message')
      ? 'message'
      : 'attendance';

  return (
    <ManageLayout>
      <S.Container>
        <S.Header>
          <S.TabButton
            onClick={() => navigate('/manage/attendance/all')}
            isActive={type === 'attendance'}
          >
            출결
          </S.TabButton>
          <S.TabButton
            onClick={() => navigate('/manage/attendance/statistics')}
            isActive={type === 'statistics'}
          >
            통계
          </S.TabButton>
          <S.TabButton
            onClick={() => navigate('/manage/attendance/message')}
            isActive={type === 'message'}
          >
            메세지함
          </S.TabButton>
        </S.Header>
        <S.Content>
          <Routes>
            <Route path='/' element={<AttendanceDashboard />} />
            <Route path='statistics' element={<AttendanceStatistics />} />
            {/* <Route path='message' element={<AttendanceMessage />} /> */}
          </Routes>
        </S.Content>
      </S.Container>
    </ManageLayout>
  );
}

export default Attendance;
