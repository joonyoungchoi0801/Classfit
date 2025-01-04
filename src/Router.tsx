import { BrowserRouter, Route, Routes } from 'react-router-dom';
import StudentInfo from './pages/studentInfo';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/home';
import Sms from './pages/sms';
import Attendance from './pages/attendance';
import Achievement from './pages/achievement';
import Schedule from './pages/schedule';

import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
import Email from './pages/auth/email';
import Account from './pages/auth/account';
import Class from './pages/auth/class';
export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Attendance />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/email' element={<Email />} />
        <Route path='/class' element={<Class />} />
        <Route path='/account' element={<Account />} />
        <Route path='/manage/*' element={<Attendance />} />
        <Route path='/manage/attendance/*' element={<Attendance />} />
        <Route path='/manage/attendance/all/*' element={<Attendance />} />
        <Route path='/manage/attendance/all/sms' element={<Sms />} />
        <Route path='/manage/attendance/:grade/*' element={<Attendance />} />
        <Route
          path='/manage/attendance/:grade/:class'
          element={<Attendance />}
        />
        <Route path='/manage/attendance/:grade/:class/sms' element={<Sms />} />
        <Route path='/manage/achievement/*' element={<Achievement />} />
        <Route path='/manage/studentinfo/:type' element={<StudentInfo />} />
        <Route path='/schedule/*' element={<Schedule />} />
        <Route path='/board' element={<Home />} />
        <Route path='/drive' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
