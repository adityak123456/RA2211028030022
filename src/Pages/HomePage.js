import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Social Media Analytics</h1>
      <nav>
        <Link to="/top-users">Top Users</Link> | 
        <Link to="/trending-posts">Trending Posts</Link> | 
        <Link to="/feed">Live Feed</Link>
      </nav>
    </div>
  );
};

export default Home;
