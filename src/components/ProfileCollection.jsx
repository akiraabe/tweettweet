import { DataStore } from 'aws-amplify';
import { User } from '../models';
import { useEffect, useState } from 'react';
import ProfileCardCollection from '../ui-components/ProfileCardCollection';
import MediaQuery from 'react-responsive';

export const ProfileCollection = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const users = await DataStore.query(User);
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <MediaQuery query='(max-width: 390px)'>
        <ProfileCardCollection items={users} type='list' />
      </MediaQuery>
      <MediaQuery query='(min-width: 391px)'>
        <ProfileCardCollection items={users} />
      </MediaQuery>
    </>
  );
};

export default ProfileCollection;
