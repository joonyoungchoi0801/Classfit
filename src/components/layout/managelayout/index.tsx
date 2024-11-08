import Layout from '..';
import type { ManageLayoutProps } from './ManageLayout.types';
import ManageSidebar from '@/components/managesidebar';

function ManageLayout({ children }: ManageLayoutProps) {
  return (
    <Layout>
      <ManageSidebar />
      {children}
    </Layout>
  );
}

export default ManageLayout;
