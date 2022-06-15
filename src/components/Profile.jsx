import { useParams } from 'react-router-dom';

export const Profile = () => {
  const params = useParams();
  console.log(params);
  const id = params.userId;
  return (
  <div>Profile {id} </div>
  );
};

export default Profile;