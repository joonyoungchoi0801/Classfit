import { BrowserRouter, Route, Routes } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';

export default function Router() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes></Routes>
    </BrowserRouter>
  );
}
