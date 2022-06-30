import { useBreakpointValue } from '@aws-amplify/ui-react';
import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Loading } from '../components/Loading';
import ProfileCollection from '../components/ProfileCollection';

const Top = lazy(() => import('../components/Top'));
const Form = lazy(() => import('../components/Form'));
const Profile = lazy(() => import('../components/Profile'));
const ProfileEditor = lazy(() => import('../components/ProfileEditor'));
const ProfileRegister = lazy(() => import('../components/ProfileRegister'));
const NavBar = lazy(() => import('../ui-components/NavBar'));

/**
 * responsive design
 * https://docs.amplify.aws/console/uibuilder/responsive/#2-render-component-variants-in-code-based-on-breakpoints 
 */
export const Router = ({ cognitoUser }) => {
  // console.log(cognitoUser);
  const variant = useBreakpointValue({
    small: 'small',
    medium: 'default',
  });
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading />}>
        <Routes>
          {/* <NavBar width='100vw' variation={variant}/> */}
          <Route
            path='/navbar'
            element={<NavBar width='100vw' variation={variant} />}
          />
          <Route path='' element={<Top cognitoUser={cognitoUser} />} />
          <Route path='/' element={<Top cognitoUser={cognitoUser} />} />
          <Route path='/posts' element={<Top cognitoUser={cognitoUser} />} />
          <Route
            path='/newProfile'
            element={<ProfileRegister cognitoUser={cognitoUser} />}
          />
          {/* <Route path='/newProfile' element={<FileUploader />} /> */}
          <Route path='/form' element={<Form cognitoUser={cognitoUser} />} />
          <Route path='/users' element={<ProfileCollection />} />
          <Route path='/users/:userId' element={<Profile />} />
          <Route
            path='/profile/:userId'
            element={<ProfileEditor cognitoUser={cognitoUser} />}
          />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
