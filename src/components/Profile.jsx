import { DataStore } from 'aws-amplify';
import { User } from '../models';
import { useParams , useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import ProfileCard from '../ui-components/ProfileCard';
import axios from 'axios';

export const Profile = () => {
  const params = useParams();
  // console.log(params);
  const id = params.userId;

  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const getUser = async () => {
    const user = await DataStore.query(User, id);
    // console.log(user);
    const instance = await axios.request({
      method: 'get',
      url: `https://s0iszi2di2.execute-api.ap-northeast-1.amazonaws.com/dev/users/${id}`,
      crossDomain: true

    });
    //const response = await instance.get();
    console.log(`https://s0iszi2di2.execute-api.ap-northeast-1.amazonaws.com/dev/users/${id}`)
    console.log('instance', instance);

    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <ProfileCard
        width='100vw'
        user={user}
        overrides={{
          Button: {
            onClick: (e) => {
              // console.log('button was clicked.');
              navigate(`/profile/${id}`);
            },
          },
        }}
      />
    </>
  );
};

export default Profile;
