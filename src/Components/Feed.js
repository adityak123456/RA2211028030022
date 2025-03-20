import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const allPosts = [
    {
    "id": "150",
    "userid": "abcd",
    "content": "post about ant",
    },
    {
        "id": "151",
        "userid": "abcgd",
        "content": "post about ant",
        },
        {
            "id": "152",
            "userid": "abcdf",
            "content": "new post",
            },
            {
                "id": "152",
                "userid": "aabcd",
                "content": "no caption needed",
                },
]

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const getPosts = async () => {
      setPosts(allPosts.reverse()); // Show newest posts first
    };

    getPosts();
  }, []);

  return (
    <div>
      <h2>Live Feed</h2>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default Feed;
