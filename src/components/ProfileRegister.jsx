import { DataStore } from 'aws-amplify';
import { User } from '../models';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import EditProfile from '../ui-components/EditProfile';

export const ProfileRegister = () => {
  // const [user, setUser] = useState(null);
  const [textFieldNameValue, setTextFieldNameValue] = useState('');
  const [textFieldHandleValue, setTextFieldHandleValue] = useState('');
  const [textFieldJobPositionValue, setTextFieldJobPositionValue] =
    useState('');
  const [textFieldBioValue, setTextFieldBioValue] = useState('');

  const navigate = useNavigate();

  // const getUser = async () => {
  //   const user = await DataStore.query(User, id);
  //   console.log(user);
  //   setUser(user);
  // };

  // useEffect(() => {
  //   getUser();
  // }, []);
  return (
    <>
      <EditProfile
        overrides={{
          TextFieldName: {
            value: textFieldNameValue,
            placeHolder: 'input your name',
            onChange: (event) => {
              setTextFieldNameValue(event.target.value);
            },
          },
          TextFieldHandle: {
            value: textFieldHandleValue,
            placeHolder: 'input your handle',
            onChange: (event) => {
              setTextFieldHandleValue(event.target.value);
            },
          },
          TextFieldJobPosition: {
            value: textFieldJobPositionValue,
            placeHolder: 'input your job position',
            onChange: (event) => {
              setTextFieldJobPositionValue(event.target.value);
            },
          },
          TextFieldBio: {
            value: textFieldBioValue,
            placeHolder: 'input your bio',
            onChange: (event) => {
              setTextFieldBioValue(event.target.value);
            },
          },
          Button: {
            onClick: async (e) => {
              console.log('button was clicked.');
              e.preventDefault();
              // update
              await DataStore.save(
                new User({
                  name: textFieldNameValue,
                  handle: textFieldHandleValue,
                  jobPosition: textFieldJobPositionValue,
                  bio: textFieldBioValue,
                  accountName: 'xxxx',
                })
              );

              // 画面遷移
              navigate('/');
            },
          },
        }}
      />
    </>
  );
};

export default ProfileRegister;
