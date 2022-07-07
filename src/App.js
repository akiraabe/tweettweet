import { Amplify } from 'aws-amplify';

import { withAuthenticator} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

import { Router } from './routes/Router';
import NavBar from './ui-components/NavBar';
import NavBarMobile from './ui-components/NavBarMobile';
import MediaQuery from 'react-responsive';

Amplify.configure(awsExports);

const App = ({ signOut, user }) => {
  return (
    <>
      <MediaQuery query='(max-width: 390px)'>
        <NavBarMobile width='100vw' />
      </MediaQuery>
      <MediaQuery query='(min-width: 391px)'>
        <NavBar width='100vw' />
      </MediaQuery>
      <Router cognitoUser={user} />
    </>
  );
};

export default withAuthenticator(App);
