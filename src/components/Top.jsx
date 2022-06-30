import React from 'react';
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Like, Post } from '../models';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { AddButton, CommentCardNew } from '../ui-components';
import { Collection, useBreakpointValue } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';

function Top({ cognitoUser }) {
  // console.log(cognitoUser);
  const [posts, setPosts] = useState([]);

  const navigate = useNavigate();

  const handleClick = () => {
    // console.log('handleClick was pressed');
    navigate('/form');
  };

  const getPosts = async () => {
    const data = await DataStore.query(Post, Predicates.ALL, {
      sort: (s) => s.postedAt(SortDirection.DESCENDING),
    });
    setPosts(data);
    // console.log(data);
  };

  useEffect(() => {
    getPosts();
    // console.log('posts');
  }, []);

  // refactoringで切り出したメソッド
  const getLikes = async (post) => {
    // console.log('getLikes was called');
    const likes = await DataStore.query(Like);
    // console.log(likes);
    const like = likes
      .filter((obj) => obj.likedBy === cognitoUser.username)
      .filter((obj) => obj.Post.id === post.id);
    // console.log('like...');
    // console.log(like[0]);
    return like;
  };

  const variant = useBreakpointValue({
    small: 'small',
    medium: 'default',
  });

  // postedAtの編集メソッド
  const formatDate = (date) => {
    return moment(date).format('YYYY/MM/DD HH:mm');
  };
  return (
    // <div style={styles.container}>
    <div>
      <AddButton
        overrides={{
          AddButton: { onClick: handleClick },
        }}
      />
      <Collection
        type='list'
        isSearchable={true}
        isPaginated={true}
        searchPlaceholder='Search...'
        itemsPerPage={4}
        direction='column'
        justifyContent='stretch'
        items={posts || []}
      >
        {(post, index) => (
          <CommentCardNew
            width='100vw'
            variation={variant}
            post={post}
            key={post.id}
            user={post.User}
            overrides={{
              Timestamp: {
                children: formatDate(post.postedAt),
              },
              MyIcon: {
                onClick: async (e) => {
                  e.preventDefault();

                  // Postをid指定で取得する
                  const postToChange = await DataStore.query(Post, post.id);

                  // post.UserとcognitoUserが同じか判定する。
                  // console.log(post.User.accountName);
                  // console.log(cognitoUser.username);
                  if (post.User.accountName === cognitoUser.username) {
                    // 自分のpostにはLikeできないので、早期リターン
                    // console.log('same user');
                    return;
                  }

                  // Likeテーブルを探す
                  const like = await getLikes(post);
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
                      // console.log('SaveLike');
                      // console.log(post);
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
                    // console.log('SaveLike # after');

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
        )}
      </Collection>
    </div>
  );
}

const styles = {
  container: {
    width: 415,
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: 20,
  },
  boxContainer: {
    display: 'flex',
    justifyContent: 'right',
  },
};

export default Top;
