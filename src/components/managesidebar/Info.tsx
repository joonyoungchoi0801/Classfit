import { useNavigate, useParams } from 'react-router-dom';
import * as S from './ManageSidebar.styles';

function Info() {
  const navigate = useNavigate();
  const { type } = useParams<{ type?: string }>();
  return (
    <S.InfoWrapper>
      <S.Info
        onClick={() => navigate('/manage/studentinfo/list')}
        $isSelected={type === 'list' || type === 'edit'}
      >
        학생목록
      </S.Info>
      <S.Info
        onClick={() => navigate('/manage/studentinfo/register')}
        $isSelected={type === 'register'}
      >
        학생등록
      </S.Info>
    </S.InfoWrapper>
  );
}

export default Info;
