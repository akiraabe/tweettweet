import { DataStore } from 'aws-amplify';
import { User } from '../models';
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import md5 from 'js-md5';

import EditProfile from '../ui-components/EditProfile';

export const ProfileRegister = ({ cognitoUser }) => {
  const [url, setUrl] = useState('');
  const [textFieldNameValue, setTextFieldNameValue] = useState('');
  const [textFieldHandleValue, setTextFieldHandleValue] = useState('');
  const [textFieldJobPositionValue, setTextFieldJobPositionValue] =
    useState('');
  const [textFieldBioValue, setTextFieldBioValue] = useState('');

  const navigate = useNavigate();

  // e-mailアドレスからGravatarのURLを取得します
  const getGravatarUrl = (email) => {
    // md5ハッシュを生成します
    const hash = md5(email);
    return `https://www.gravatar.com/avatar/${hash}`;
  };

  useEffect(() => {
    setUrl(getGravatarUrl(cognitoUser.attributes.email));
  },[]);

  return (
    <>
      <EditProfile
        overrides={{
          Icon: {
            onClick: (e) => {
              // console.log('icon was clicked.');
              navigate('/posts/');
            }
          },
          TextFieldName: {
            value: textFieldNameValue,
            placeholder: 'input your name',
            onChange: (event) => {
              setTextFieldNameValue(event.target.value);
            },
          },
          TextFieldHandle: {
            value: textFieldHandleValue,
            placeholder: 'input your handle',
            onChange: (event) => {
              setTextFieldHandleValue(event.target.value);
            },
          },
          TextFieldJobPosition: {
            value: textFieldJobPositionValue,
            placeholder: 'input your job position',
            onChange: (event) => {
              setTextFieldJobPositionValue(event.target.value);
            },
          },
          TextFieldBio: {
            value: textFieldBioValue,
            placeholder: 'input your bio',
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
                new User({
                  profilePic: url,
                  name: textFieldNameValue,
                  handle: textFieldHandleValue,
                  jobPosition: textFieldJobPositionValue,
                  bio: textFieldBioValue,
                  accountName: cognitoUser.username,
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
