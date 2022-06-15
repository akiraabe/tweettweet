import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type BlockMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Block {
  readonly id: string;
  readonly block_id?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Block, BlockMetaData>);
  static copyOf(source: Block, mutator: (draft: MutableModel<Block, BlockMetaData>) => MutableModel<Block, BlockMetaData> | void): Block;
}

export declare class User {
  readonly id: string;
  readonly profilePic?: string | null;
  readonly name?: string | null;
  readonly handle?: string | null;
  readonly jobPosition?: string | null;
  readonly follower?: number | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Post {
  readonly id: string;
  readonly content?: string | null;
  readonly postedAt?: string | null;
  readonly likes?: number | null;
  readonly User?: User | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly postUserId?: string | null;
  constructor(init: ModelInit<Post, PostMetaData>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post, PostMetaData>) => MutableModel<Post, PostMetaData> | void): Post;
}