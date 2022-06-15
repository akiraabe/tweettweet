// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Block, User, Post } = initSchema(schema);

export {
  Block,
  User,
  Post
};