import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loading } from '../components/Loading';

const Top = lazy(() => import('../components/Top'));
const Profile = lazy(() => import('../components/Profile'));

export const Router = ({ cognitoUser }) => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='' element={<Top cognitoUser={cognitoUser} />} />
          <Route path='/' element={<Top cognitoUser={cognitoUser} />} />
          <Route path='/users/:userId' element={<Profile />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
