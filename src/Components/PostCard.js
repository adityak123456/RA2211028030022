import React from "react";

const PostCard = ({ post }) => {
  console.log(post)
  return (
    <div className="p-4 border rounded shadow-md">
      <h3 className="font-bold">{post.content}</h3>
      <p>{post.body}</p>
      <small>Comments: {post.commentCount}</small>
    </div>
  );
};

export default PostCard;
