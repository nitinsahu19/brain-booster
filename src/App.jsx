import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeaderboardPage from "./components/templates/LeaderboardPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/leaderboard" element={<LeaderboardPage />} />
      </Routes>
    </Router>
  );
}
