import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LeaderboardPage from "./pages/LeaderboardPage";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeaderboardPage />} />
      </Routes>
    </Router>
  );
}