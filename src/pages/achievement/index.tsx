import ManageLayout from '@/components/layout/managelayout';
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import AchievementList from './achievementList';
import * as S from './Achievement.styles';
import AchievementDetail from './achievementDetail';
import AchievementInfoEdit from './achievementInfoEdit';
import AchievementScoreEdit from './achievementScoreEdit';
import AchievementRegister from './achievementRegister';
import AchievementRegisterStudent from './achievementRegisterStudent';
import ReportList from './reportList';
import ReportRegister from './reportRegister';
import ReportDetail from './reportDetail';

function Achievement() {
  const navigate = useNavigate();
  const location = useLocation(); // 현재 URL 경로 가져오기

  // URL 경로에 따라 type 동적으로 설정
  const type = location.pathname.includes('/management')
    ? 'management'
    : 'report';

  return (
    <ManageLayout>
      <S.Container>
        <S.Header>
          <S.TabButton
            onClick={() => navigate('/manage/achievement/management')}
            isActive={type === 'management'}
          >
            성적관리
          </S.TabButton>
          <S.TabButton
            onClick={() => navigate('/manage/achievement/report')}
            isActive={type === 'report'}
          >
            학습리포트
          </S.TabButton>
        </S.Header>
        <S.Content>
          <Routes>
            <Route path='management' element={<AchievementList />} />
            <Route
              path='management/detail/:id'
              element={<AchievementDetail />}
            />
            <Route
              path='management/detail/:id/edit'
              element={<AchievementInfoEdit />}
            />
            <Route
              path='management/detail/:id/editscore'
              element={<AchievementScoreEdit />}
            />
            <Route
              path='management/register'
              element={<AchievementRegister />}
            />
            <Route
              path='management/register/student'
              element={<AchievementRegisterStudent />}
            />
            <Route path='report' element={<ReportList />} />
            <Route path='report/register' element={<ReportRegister />} />
            <Route path='report/detail/:id' element={<ReportDetail />} />

            <Route index element={<AchievementList />} />
          </Routes>
        </S.Content>
      </S.Container>
    </ManageLayout>
  );
}

export default Achievement;
