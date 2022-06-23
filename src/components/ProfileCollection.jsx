import { DataStore } from 'aws-amplify';
import { User } from '../models';
import { useEffect, useState } from 'react';
import ProfileCardCollection from '../ui-components/ProfileCardCollection';

export const ProfileCollection = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const users = await DataStore.query(User);
    setUsers(users);
  };

  useEffect(() => {
    getUsers();
  }, []);

  return <ProfileCardCollection items={users} />;
};

export default ProfileCollection;
