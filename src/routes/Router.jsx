import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loading } from '../components/Loading';

const Top = lazy(() => import('../components/Top'));
const Profiles = lazy(() => import('../components/Profiles'));
const Profile = lazy(() => import('../components/Profile'));
// import Top from '../components/Top';
// import Profiles from '../components/Profiles';
// import Profile from '../components/Profile';

export const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          <Route path='' element={<Top />} />
          <Route path='/' element={<Top />} />
          <Route path='/users' element={<Profiles />}>
            <Route path=':userId' element={<Profile />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
