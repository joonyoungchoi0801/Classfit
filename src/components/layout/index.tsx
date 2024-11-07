import type { LayoutProps } from './Layout.types';
import * as S from './Layout.styles';
import Header from '@/components/header';
import Sidebar from '../sidebar';

function Layout({ children }: LayoutProps) {
  return (
    <S.Layout>
      <Header />
      <Sidebar />
      {children}
    </S.Layout>
  );
}

export default Layout;
