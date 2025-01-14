import ProfileLayout from '@/components/layout/profilelayout';
import { useParams } from 'react-router-dom';
import MyProfile from './myprofile';
import OtherProfile from './otherprofile';

function Profile() {
  const { type } = useParams<{ type: string }>();

  return (
    <ProfileLayout>
      {type === 'my' && <MyProfile />}
      {type === 'other' && <OtherProfile />}
    </ProfileLayout>
  );
}

export default Profile;
