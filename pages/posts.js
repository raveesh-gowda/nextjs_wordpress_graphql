import { useState, useEffect } from 'react';
import { getPosts } from '../lib/utils';

export default function Posts() {
  const [posts, setPosts] = useState({});

  useEffect(async () => {
    const postsFromServer = await getPosts();
    setPosts(postsFromServer);
  }, []);

  return (
    <div>
      {posts.posts &&
        posts.posts.nodes &&
        posts.posts.nodes.map((ele) => {
          return (
            <div key={ele.postId}>
              {ele.title}
              <div dangerouslySetInnerHTML={{ __html: ele.excerpt }}></div>
              <hr />
            </div>
          );
        })}
    </div>
  );
}
