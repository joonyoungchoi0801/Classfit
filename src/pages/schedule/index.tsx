import ScheduleLayout from "@/components/layout/schedulelayout";
import {
  Route,
  Routes,
  useLocation,
  useNavigate,
  useParams,
} from 'react-router-dom';
import * as S from './Schedule.styles';
import ScheduleRegister from './scheduleRegister';

function Schedule() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ScheduleLayout>
      <Routes>
        <Route path='/register' element={<ScheduleRegister />} />
      </Routes>
    </ScheduleLayout>
  );
}

export default Schedule;