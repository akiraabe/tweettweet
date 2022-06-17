import { DataStore } from 'aws-amplify';
import { Like, Post } from '../models';

import { useEffect, useState } from 'react';
import { CommentCard } from '../ui-components';

function Top({ cognitoUser }) {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const data = await DataStore.query(Post);
    setPosts(data);
  };

  // const deleteItem = async (obj) => {
  //   const modelToDelete = await DataStore.query(Like, obj.id);
  //   DataStore.delete(modelToDelete);
  // }

  useEffect(() => {
    getPosts();
    console.log('posts');
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <CommentCard
          post={post}
          key={post.id}
          user={post.User}
          overrides={{
            Share: {
              onClick: async (e) => {
                e.preventDefault();

                // Postをid指定で取得する
                const postToChange = await DataStore.query(Post, post.id);

                // post.UserとcognitoUserが同じか判定する。
                console.log(post.User.accountName);
                console.log(cognitoUser.username);
                if (post.User.accountName === cognitoUser.username) {
                  console.log('same user');
                  return;
                } else {
                  console.log('another user');
                }

                // Likeテーブルを探す
                const likes = await DataStore.query(Like);
                console.log(likes);
                // //likes.map(obj => deleteItem(obj));
                const like = likes
                  .filter((obj) => obj.likedBy === cognitoUser.username)
                  .filter((obj) => obj.Post.id === post.id);
                console.log('like...');
                console.log(like[0]);
                const like0 = like[0];

                if (like0 && !like0.deleted) {
                  // count down
                  await DataStore.save(
                    Post.copyOf(postToChange, (updated) => {
                      updated.likes -= 1;
                    })
                  );
                  // Likeテーブル更新
                  await DataStore.save(
                    Like.copyOf(like0, (updated) => {
                      updated.deleted = true;
                    })
                  );
                } else {
                  if (like.length === 0) {
                    // Likeテーブルを作る
                    console.log('SaveLike');
                    console.log(post);
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
                      Like.copyOf(like0, (updated) => {
                        updated.deleted = false;
                      })
                    );
                  }
                  console.log('SaveLike # after');

                  // count up
                  await DataStore.save(
                    Post.copyOf(postToChange, (updated) => {
                      updated.likes += 1;
                    })
                  );
                }
                getPosts();
              },
            },
          }}
        />
      ))}
    </div>
  );
}
export default Top;
