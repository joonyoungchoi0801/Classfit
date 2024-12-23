import ScheduleLayout from "@/components/layout/schedulelayout";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import * as S from './Schedule.styles';

function Schedule() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ScheduleLayout>
      <S.Container>

      </S.Container>
    </ScheduleLayout>
  );
}

export default Schedule;