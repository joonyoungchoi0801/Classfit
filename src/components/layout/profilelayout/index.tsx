import ProfileSidebar from '@/components/profilesidebar';
import Layout from '..';
import type { ProfileLayoutProps } from './ProfileLayout.types';
import * as S from './ProfileLayout.styles';

function ProfileLayout({ children }: ProfileLayoutProps) {
  return (
    <Layout>
      <S.LayoutContainer>
        <ProfileSidebar />
        {children}
      </S.LayoutContainer>
    </Layout>
  );
}

export default ProfileLayout;
