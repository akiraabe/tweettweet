import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Post, Like } from '../models';

/**
 * Postsとそれに紐づいて自分がLikeをしたかどうかの状態を返します。
 */
export const getPostsWithLiked = async (cognitoUser) => {
  // debug
  console.log('PostService#getPostsWithLiked was called');

  // debug 
  const posts = await DataStore.query(Post, Predicates.ALL, {
    sort: (s) => s.postedAt(SortDirection.DESCENDING),
  });
  const newPosts = [];

  const likesAll = await DataStore.query(Like, Predicates.ALL);

  // TODO: 本来はletは使いたくなかったがやむなく。。。
  let newPost = {};
  posts.forEach((post) => {
    newPost = Post.copyOf(post, (updated) => {
      // likesを取得する
      const likesFilteredByUsername = likesAll.filter(
        (obj) => obj.likedBy === cognitoUser.username
      );
      if (!likesFilteredByUsername) {
        return null;
      }
      const likes = likesFilteredByUsername.filter(
        (obj) => obj.Post.id === post.id
      );
      const nonDeleteLikes = likes.filter((like) => !like.deleted);
      updated.liked = nonDeleteLikes.length > 0 ? true : false;
      if (newPost.id) {
        newPosts.push(newPost);
      }
    });
  });
  return newPosts;
};
