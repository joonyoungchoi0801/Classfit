import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentInfo from './pages/studentInfo';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/home';
import Sms from './pages/sms';
import Attendance from './pages/attendance';

export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Attendance />} />
        <Route path='/manage' element={<Attendance />} />
        <Route path='/manage/attendance' element={<Attendance />} />
        <Route path='/manage/attendance/all' element={<Attendance />} />
        <Route path='/manage/attendance/all/sms' element={<Sms />} />
        <Route path='/manage/attendance/:grade' element={<Attendance />} />
        <Route
          path='/manage/attendance/:grade/:class'
          element={<Attendance />}
        />
        <Route path='/manage/attendance/:grade/:class/sms' element={<Sms />} />
        <Route path='/manage/achievement' element={<Home />} />
        <Route path='/manage/studentinfo/:type' element={<StudentInfo />} />
        <Route path='/calendar' element={<Home />} />
        <Route path='/board' element={<Home />} />
        <Route path='/drive' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
