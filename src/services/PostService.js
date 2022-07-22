import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Post, Like } from '../models';

/**
 * Postsとそれに紐づいて自分がLikeをしたかどうかの状態を返します。
 */
export const getPostsWithLiked = async (cognitoUser) => {
  // debug
  // console.log('PostService#getPostsWithLiked was called');
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

export const getLikes = async (post, cognitoUser) => {
  // console.log('getLikes was called');
  const likes = await DataStore.query(Like);
  const likesFilteredByUsername = likes.filter(
    (obj) => obj.likedBy === cognitoUser.username
  );
  if (!likesFilteredByUsername) {
    return null;
  }
  const like = likesFilteredByUsername.filter((obj) => obj.Post.id === post.id);
  return like;
};

export const updateLikes = async (post, cognitoUser) => {
  // console.log('### updateLikes was called');

  // Likeテーブルを探す
  const likes = await getLikes(post, cognitoUser);
  const like = likes[0];

  // Postをid指定で取得する
  const postToChange = await DataStore.query(Post, post.id);

  if (like && !like.deleted) {
    // count down
    await DataStore.save(
      Post.copyOf(postToChange, (updated) => {
        updated.likes -= 1;
      })
    );
    // Likeテーブル更新
    await DataStore.save(
      Like.copyOf(like, (updated) => {
        updated.deleted = true;
      })
    );
  } else {
    if (likes.length === 0) {
      // Likeテーブルを作る
      await DataStore.save(
        new Like({
          Post: post,
          deleted: false,
          likedBy: cognitoUser.username,
        })
      );
    } else {
      // Likeテーブル更新
      await DataStore.save(
        Like.copyOf(like, (updated) => {
          updated.deleted = false;
        })
      );
    }

    // count up
    await DataStore.save(
      Post.copyOf(postToChange, (updated) => {
        updated.likes += 1;
      })
    );
  }
};
