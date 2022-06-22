import { DataStore } from 'aws-amplify';
import { User } from '../models';
import { useParams , useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProfileCard from '../ui-components/ProfileCard';

export const Profile = () => {
  const params = useParams();
  console.log(params);
  const id = params.userId;

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const getUser = async () => {
    const user = await DataStore.query(User, id);
    console.log(user);
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div>UserId: {id} </div>
      <ProfileCard
        user={user}
        overrides={{
          Button: {
            onClick: (e) => {
              console.log('button was clicked.');
              navigate(`/profile/${id}`);
            },
          },
        }}
      />
    </>
  );
};

export default Profile;
