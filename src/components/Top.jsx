import React from 'react';
import { DataStore, Predicates, SortDirection } from 'aws-amplify';
import { Like, Post } from '../models';
import moment from 'moment';
import { useEffect, useState } from 'react';
import { CommentCard } from '../ui-components';
import { Collection, Flex } from '@aws-amplify/ui-react';
import { useNavigate } from 'react-router-dom';
import AddButtonArea from './AddButtonArea';

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
    console.log('likes: ', likes);
    console.log('post.id: ', post.id);
    console.log('cognitoUser.username: ', cognitoUser.username);
    const likesFilteredByUsername = likes.filter(
      (obj) => obj.likedBy === cognitoUser.username
    );
    console.log(
      'likesFilteredByUseranme',
      likesFilteredByUsername.map((obj) => obj.Post.id)
    );
    if (!likesFilteredByUsername) {
      return null;
    }
    const like = likesFilteredByUsername.filter(
      (obj) => obj.Post.id === post.id
    );
    return like;
  };

  // postedAtの編集メソッド
  const formatDate = (date) => {
    return moment(date).format('YYYY/MM/DD HH:mm');
  };
  return (
    <Flex direction='row'>
      
      <div>
        <AddButtonArea onClick={handleClick} />
        {/* <AddButton
          overrides={{
            AddButton: { onClick: handleClick },
          }}
        /> */}
        <Collection
          type='list'
          isSearchable={true}
          isPaginated={true}
          searchPlaceholder='Search...'
          itemsPerPage={3}
          direction='column'
          justifyContent='stretch'
          padding='0px'
          items={posts || []}
        >
          {(post, index) => (
            <CommentCard
              width='100vw'
              //variation={variant}
              post={post}
              key={post.id}
              user={post.User}
              overrides={{
                Timestamp: {
                  children: formatDate(post.postedAt),
                },
                Vector: {
                  onClick: async (e) => {
                    e.preventDefault();
                    console.log('onClick was called');

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
    </Flex>
  );
}

// const styles = {
//   container: {
//     width: 415,
//     margin: '0 auto',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     padding: 20,
//   },
//   boxContainer: {
//     display: 'flex',
//     justifyContent: 'right',
//   },
// };

export default Top;
