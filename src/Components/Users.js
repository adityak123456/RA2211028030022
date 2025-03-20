import React from "react";

const usersWithPosts = {
  "1": { name: "John Doe", posts: 12 },
  "2": { name: "Jane Doe", posts: 25 },
  "3": { name: "Alice Smith", posts: 30 },
  "4": { name: "Bob Johnson", posts: 8 },
  "5": { name: "Charlie Brown", posts: 15 },
  "6": { name: "Diana White", posts: 22 },
  "7": { name: "Edward Davis", posts: 18 },
  "8": { name: "Fiona Miller", posts: 5 },
  "9": { name: "George Wilson", posts: 14 },
  "10": { name: "Helen Moore", posts: 28 }
};

const TopUsers = () => {
  // Convert object to array and sort by number of posts (descending)
  const topUsers = Object.entries(usersWithPosts)
    .sort((a, b) => b[1].posts - a[1].posts) // Sort by posts
    .slice(0, 5); // Get top 5 users

  return (
    <div>
      <h2>Top 5 Users with Most Posts</h2>
      <ul>
        {topUsers.map(([id, user]) => (
          <li key={id}>
            {user.name} - {user.posts} posts
          </li>
        ))}
      </ul>
    </div>
  );
}; 

export default TopUsers;
