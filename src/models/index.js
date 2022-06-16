// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Like, Post, User, Block } = initSchema(schema);

export {
  Like,
  Post,
  User,
  Block
};