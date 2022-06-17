import { DataStore } from 'aws-amplify';
import { User } from '../models';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import CommentForm from '../ui-components/CommentForm';

export const Form = ({ cognitoUser }) => {
  const [user, setUser] = useState({});

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
          Button: {
            onClick: (e) => {
              console.log('button was clicked.');
            },
          },
          TextField: {

          }
        }
      }
      />
    </>
  );
};

export default Form;
