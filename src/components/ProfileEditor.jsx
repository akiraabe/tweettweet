import { DataStore } from 'aws-amplify';
import { User } from '../models';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

import EditProfile from '../ui-components/EditProfile';

export const ProfileEditor = ({ cognitoUser }) => {
  const params = useParams();
  // console.log(params);
  const id = params.userId;

  const [user, setUser] = useState(null);
  const [isLoginUser, setIsLoginUser] = useState(false);
  const [textFieldNameValue, setTextFieldNameValue] = useState('');
  const [textFieldHandleValue, setTextFieldHandleValue] = useState('');
  const [textFieldJobPositionValue, setTextFieldJobPositionValue] =
    useState('');
  const [textFieldBioValue, setTextFieldBioValue] = useState('');

  const navigate = useNavigate();

  const getUser = async () => {
    const user = await DataStore.query(User, id);
    // console.log(user);
    setUser(user);
    setIsLoginUser(user.accountName === cognitoUser.username);
    // console.log('isLoginUser :' + isLoginUser);
  };

  useEffect(() => {
    getUser();
  }, []);

  if (!isLoginUser) {
    return (
      <EditProfile
        user={user}
        overrides={{
          Icon: {
            onClick: (e) => {
              // console.log('icon was clicked.');
              navigate('/posts/');
            }
          },
          TextFieldName: {
            placeholder: `${user?.name}`,
          },
          TextFieldHandle: {
            placeholder: `${user?.handle}`,
          },
          TextFieldJobPosition: {
            placeholder: `${user?.jobPosition}`,
          },
          TextFieldBio: {
            placeholder: `${user?.bio}`,
          },
        }}
      />
    );
  }
  return (
    <EditProfile
      user={user}
      overrides={{
        Icon: {
          onClick: (e) => {
            // console.log('icon was clicked.');
            navigate('/posts/');
          }
        },
        TextFieldName: {
          value: textFieldNameValue,
          placeholder: `${user?.name}`,
          onChange: (event) => {
            setTextFieldNameValue(event.target.value);
          },
        },
        TextFieldHandle: {
          value: textFieldHandleValue,
          placeholder: `${user?.handle}`,
          onChange: (event) => {
            setTextFieldHandleValue(event.target.value);
          },
        },
        TextFieldJobPosition: {
          value: textFieldJobPositionValue,
          placeholder: `${user?.jobPosition}`,
          onChange: (event) => {
            setTextFieldJobPositionValue(event.target.value);
          },
        },
        TextFieldBio: {
          value: textFieldBioValue,
          placeholder: `${user?.bio}`,
          onChange: (event) => {
            setTextFieldBioValue(event.target.value);
          },
        },
        Button: {
          onClick: async (e) => {
            // console.log('button was clicked.');
            e.preventDefault();
            // update
            await DataStore.save(
              User.copyOf(user, (updated) => {
                updated.name = textFieldNameValue || user.name;
                updated.handle = textFieldHandleValue || user.handle;
                updated.jobPosition = textFieldJobPositionValue || user.jobPosition;
                updated.bio = textFieldBioValue || user.bio;
              })
            );

            // 画面遷移
            navigate('/');
          },
        },
      }}
    />
  );
};

export default ProfileEditor;
