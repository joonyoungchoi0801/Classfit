import ManageLayout from '@/components/layout/managelayout';
import { Route, Routes, useNavigate, useParams } from 'react-router-dom';
import AchievementList from './achievementList';
import * as S from './Achievement.styles';

function Achievement() {
  const navigate = useNavigate();
  const { type } = useParams();

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
            <Route path='/' element={<AchievementList />} />
            <Route path='/management' element={<AchievementList />} />
            <Route path='management/:id' element={<AchievementList />} />
            <Route path='management/:id/edit' element={<AchievementList />} />
            <Route path='report' element={<AchievementList />} />
          </Routes>
        </S.Content>
      </S.Container>
    </ManageLayout>
  );
}

export default Achievement;
