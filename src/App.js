import { DataStore } from 'aws-amplify';
import { Post } from './models';

import { useEffect, useState } from 'react';
import { CommentCard } from './ui-components';

function App() {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const data = await DataStore.query(Post);
    setPosts(data);
  };

  useEffect(() => {
    getPosts();
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
                const postToChange = await DataStore.query(Post, post.id);
                await DataStore.save(
                  Post.copyOf(postToChange, (updated) => {
                    updated.likes += 1;
                  })
                );
                getPosts();
              },
            },
          }}
        />
      ))}
    </div>
  );
}
export default App;
