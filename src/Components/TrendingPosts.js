import React, { useEffect, useState } from "react";
import PostCard from "./PostCard";

const TrendingPosts = () => {
  const [trendingPosts, setTrendingPosts] = useState([]);

  useEffect(() => {
    const getTrendingPosts = async () => {
    //   const posts = await fetchPosts();
    const posts = [
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
      const comments = [
        {
            "id": "09",
            "postid": "150",
            "content": "post great ant",
        },
        {
            "id": "10",
            "postid": "150",
            "content": "post",
        },
        {
            "id": "11",
            "postid": "151",
            "content": "post about ant",
        },
      ]

      const postCommentCounts = posts.map((post) => ({
        ...post,
        commentCount: comments.filter((comment) => comment.postid === post.id).length,
      }));

      setTrendingPosts(postCommentCounts.sort((a, b) => b.commentCount - a.commentCount).slice(0, 5));
    };

    getTrendingPosts();
  }, []);

  return (
    <div>
      <h2>Trending Posts</h2>
      {trendingPosts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default TrendingPosts;
