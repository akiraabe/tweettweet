import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loading } from '../components/Loading';
import ProfileCollection from '../components/ProfileCollection';

const Top = lazy(() => import('../components/Top'));
const Form = lazy(() => import('../components/Form'));
const Profile = lazy(() => import('../components/Profile'));
const ProfileEditor = lazy(()=> import('../components/ProfileEditor'));
const ProfileRegister = lazy(()=> import('../components/ProfileRegister'));

export const Router = ({ cognitoUser }) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='' element={<Top cognitoUser={cognitoUser} />} />
          <Route path='/' element={<Top cognitoUser={cognitoUser} />} />
          <Route path='/newProfile' element={<ProfileRegister cognitoUser={cognitoUser} />} />
          {/* <Route path='/newProfile' element={<FileUploader />} /> */}
          <Route path='/posts' element={<Top cognitoUser={cognitoUser} />} />
          <Route path='/form' element={<Form cognitoUser={cognitoUser} />} />
          <Route path='/users' element={<ProfileCollection />} />
          <Route path='/users/:userId' element={<Profile />} />
          <Route path='/profile/:userId' element={<ProfileEditor />} /> 
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
