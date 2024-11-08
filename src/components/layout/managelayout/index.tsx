import Layout from '..';
import type { ManageLayoutProps } from './ManageLayout.types';
import ManageSidebar from '@/components/managesidebar';
import * as S from './ManageLayout.styles';

function ManageLayout({ children }: ManageLayoutProps) {
  return (
    <Layout>
      <S.LayoutContainer>
        <ManageSidebar />
        {children}
      </S.LayoutContainer>
    </Layout>
  );
}

export default ManageLayout;
