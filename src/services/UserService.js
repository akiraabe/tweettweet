import { DataStore} from 'aws-amplify';
import { User } from '../models';

/**
 * @see https://docs.amplify.aws/lib/datastore/data-access/q/platform/js/#predicates
 */
export const getUser = async (cognitoUser) => {
  const user = await DataStore.query(
    User, user => user.accountName("eq", cognitoUser.username)
  );
  return user[0];
};
