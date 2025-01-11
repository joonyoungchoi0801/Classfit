import Layout from '..';
import type { DriveLayoutProps } from './DriveLayout.types';
import * as S from './DriveLayout.styles';
import DriveSidebar from '@/components/drivesidebar';

function DriveLayout({ children }: DriveLayoutProps) {
  return (
    <Layout>
      <S.LayoutContainer>
        <DriveSidebar />
        <S.DriveWrapper>{children}</S.DriveWrapper>
      </S.LayoutContainer>
    </Layout>
  );
}

export default DriveLayout;
