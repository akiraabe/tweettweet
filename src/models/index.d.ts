import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type LikeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type PostMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type UserMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type BlockMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Like {
  readonly id: string;
  readonly Post?: Post | null;
  readonly deleted?: boolean | null;
  readonly likedBy?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  readonly likePostId?: string | null;
  constructor(init: ModelInit<Like, LikeMetaData>);
  static copyOf(source: Like, mutator: (draft: MutableModel<Like, LikeMetaData>) => MutableModel<Like, LikeMetaData> | void): Like;
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

export declare class User {
  readonly id: string;
  readonly profilePic?: string | null;
  readonly name?: string | null;
  readonly handle?: string | null;
  readonly jobPosition?: string | null;
  readonly follower?: number | null;
  readonly accountName?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<User, UserMetaData>);
  static copyOf(source: User, mutator: (draft: MutableModel<User, UserMetaData>) => MutableModel<User, UserMetaData> | void): User;
}

export declare class Block {
  readonly id: string;
  readonly block_id?: string | null;
  readonly remark?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Block, BlockMetaData>);
  static copyOf(source: Block, mutator: (draft: MutableModel<Block, BlockMetaData>) => MutableModel<Block, BlockMetaData> | void): Block;
}