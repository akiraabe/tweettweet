import { Amplify } from 'aws-amplify';

import { withAuthenticator , useBreakpointValue} from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

import { Router } from './routes/Router';
import NavBar from './ui-components/NavBar';
Amplify.configure(awsExports);

const App = ({ signOut, user }) => {

const variant = useBreakpointValue({
  small: 'small',
  medium: 'default',
})
  return (
    <>
      <NavBar width='100vw' variation={variant}/>
      <Router cognitoUser={user} />
    </>
  );
};

export default withAuthenticator(App);
