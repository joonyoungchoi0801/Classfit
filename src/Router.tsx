import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

import Home from './pages/home';

export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/manage' element={<Home />} />
        <Route path='/manage/attendance/:grade/:class' element={<Home />} />
        <Route path='/manage/attendance/:grade' element={<Home />} />
        <Route path='/manage/attendance' element={<Home />} />
        <Route path='/manage/achievement' element={<Home />} />
        <Route path='/manage/studentinfo/:type' element={<Home />} />
        <Route path='/calendar' element={<Home />} />
        <Route path='/board' element={<Home />} />
        <Route path='/drive' element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
