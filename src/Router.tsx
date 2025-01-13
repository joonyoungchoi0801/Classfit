import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import StudentInfo from './pages/studentInfo';
import GlobalStyles from './styles/GlobalStyles';
import Home from './pages/home';
import Sms from './pages/sms';
import Attendance from './pages/attendance';
import Achievement from './pages/achievement';
import Schedule from './pages/schedule';
import Drive from './pages/drive';
import Signin from './pages/auth/signin';
import Signup from './pages/auth/signup';
import Email from './pages/auth/email';
import Account from './pages/auth/account';
import Class from './pages/auth/class';
import Password from './pages/auth/password';
import NewPassword from './pages/auth/newpassword';
import Certification from './pages/auth/certification';
import Profile from './pages/profile';
import Landing from './pages/landing';
export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Attendance />} />
        <Route path='/signin' element={<Signin />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/email' element={<Email />} />
        <Route path='/class' element={<Class />} />
        <Route path='/account' element={<Account />} />
        <Route path='/password' element={<Password />} />
        <Route path='/certificate' element={<Certification />} />
        <Route path='/new-password' element={<NewPassword />} />
        <Route path='/manage/*' element={<Attendance />} />
        <Route path='/manage/attendance/*' element={<Attendance />} />
        <Route path='/manage/attendance/all/*' element={<Attendance />} />
        <Route path='/manage/attendance/all/sms' element={<Sms />} />
        <Route path='/manage/attendance/:grade/*' element={<Attendance />} />
        <Route
          path='/manage/attendance/:grade/:class/*'
          element={<Attendance />}
        />
        <Route path='/manage/attendance/:grade/:class/sms' element={<Sms />} />
        <Route path='/manage/achievement/*' element={<Achievement />} />
        <Route path='/manage/studentinfo/:type' element={<StudentInfo />} />
        <Route path='/schedule/*' element={<Schedule />} />
        <Route path='/board' element={<Home />} />
        <Route path='/drive' element={<Navigate to='/drive/my' />} />
        <Route path='/drive/:type' element={<Drive />} />
        <Route path='/drive/:type/:subtype?' element={<Drive />} />
        <Route path='/profile' element={<Navigate to='/profile/my' />} />
        <Route path='/profile/:type' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}
