import ManageLayout from '@/components/layout/managelayout';
import Path from '@/components/path';
import Calendar from '@/components/calendar';
import CalendarComponent from '@/components/calendar/fullcalendar';
function Home() {
  return (
    <ManageLayout>
      <CalendarComponent />
    </ManageLayout>
  );
}

export default Home;
