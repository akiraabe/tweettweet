import { DataStore } from 'aws-amplify';
import { Post, User } from '../models';
import { useEffect, useState } from 'react';
import CommentForm from '../ui-components/CommentForm';

export const Form = ({ cognitoUser }) => {
  const [user, setUser] = useState({});
  const [textFieldValue, setTextFieldValue] = useState('');

  const getUser = async () => {
    const users = await DataStore.query(User);
    const user = users.filter(
      (obj) => obj.accountName === cognitoUser.username
    )[0];
    setUser(user);
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <>
      <div>UserId: {user.id} </div>
      <CommentForm
        user={user}
        overrides={{
          TextField: {
            value: textFieldValue,
            onChange: (event) => {
              setTextFieldValue(event.target.value);
              console.log(event.target.value);
            },
          },
          Button: {
            onClick: async (e) => {
              console.log('button was clicked.');
              e.preventDefault();

              await DataStore.save(
                new Post({
                  content: textFieldValue,
                  likes: 0,
                  postUserId: user.id,
                })
              );
            },
          },
        }}
      />
    </>
  );
};

export default Form;
