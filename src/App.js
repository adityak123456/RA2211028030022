import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/HomePage";
import TopUsersPage from "./Pages/TopUsersPage";
// import TrendingPostsPage from "./pages/TrendingPostsPage";
// import FeedPage from "./pages/FeedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/top-users" element={<TopUsersPage />} />
        {/* <Route path="/trending-posts" element={<TrendingPostsPage />} />
        <Route path="/feed" element={<FeedPage />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
