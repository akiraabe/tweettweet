import { DataStore } from 'aws-amplify';
import { Post, User } from '../models';
import { useEffect, useState } from 'react';
import moment from 'moment';
import { useNavigate } from 'react-router-dom';
import CommentForm from '../ui-components/CommentForm';

export const Form = ({ cognitoUser }) => {
  const [user, setUser] = useState({});
  const [textFieldValue, setTextFieldValue] = useState('');

  const navigate = useNavigate();
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
                  postedAt: moment().toISOString()
                })
              );
              // Top画面へ遷移する
              navigate('/');
            },
          },
        }}
      />
    </>
  );
};

export default Form;
