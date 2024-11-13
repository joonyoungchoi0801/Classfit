import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import StudentInfo from './pages/studentInfo';
import Home from './pages/home';
import Sms from './pages/sms';
import Attendance from './pages/attendance';

export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manage' element={<Home />} />
        <Route path='/manage/attendance/:grade/:class' element={<Attendance />} />
        <Route path='/manage/attendance/:grade/:class/sms' element={<Sms />} />
        <Route path='/manage/attendance/:grade' element={<Attendance />} />
        <Route path='/manage/attendance' element={<Attendance />} />
        <Route path='/manage/achievement' element={<Home />} />
        <Route path='/manage/studentinfo/:type' element={<StudentInfo />} />
        <Route path='/calendar' element={<Home />} />
        <Route path='/board' element={<Home />} />
        <Route path='/drive' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
