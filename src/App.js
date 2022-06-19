import { Amplify } from 'aws-amplify';

import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import awsExports from './aws-exports';

import { Router } from './routes/Router';
Amplify.configure(awsExports);

const App = ({ signOut, user }) => {
  return (
    <>
      <Router cognitoUser={user}/>
      <div>{user.username}</div>
      {console.log(user)}
      <button onClick={signOut}> Sign out</button>
    </>
  );
};

export default withAuthenticator(App);
