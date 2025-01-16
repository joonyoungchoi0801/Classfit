import ScheduleLayout from '@/components/layout/schedulelayout';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import * as S from './Schedule.styles';
import ScheduleRegister from './scheduleRegister';
import CalendarComponent from '@/components/calendar/fullcalendar';

function Schedule() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <ScheduleLayout>
      <Routes>
        <Route path='/register/:eventType' element={<ScheduleRegister />} />
        <Route path='/:calendarType' element={<CalendarComponent />} />
      </Routes>
    </ScheduleLayout>
  );
}

export default Schedule;
