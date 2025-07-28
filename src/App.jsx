import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/organism/Navbar";
// import Signup from "./components/Signup";
// import LoginForm from "./components/LoginForm";
import Subjects from "./components/Subjects";
import Blog from "./components/Blog";
import Quizzes from "./components/Quizzes";
import LeaderboardPage from "./components/tamplate/LeaderboardPage";
import Register from "./components/tamplate/Register";
import ProtectedRoute from "./protectect/ProtectedRoute "; 
import { BeatLoader } from "react-spinners";
import Login from "./components/tamplate/Login";

const Home = lazy(() => import("./components/tamplate/Home"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="flex justify-center items-center h-screen fw-bold"><h1><BeatLoader /></h1></div>}>
        <Routes>
          {/* Open Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/register" element={<Register />} />

          {/* Protected Routes */}
          <Route path="/subjects" element={
            <ProtectedRoute>
              <Subjects />
            </ProtectedRoute>
          } />
          <Route path="/blog" element={
            <ProtectedRoute>
              <Blog />
            </ProtectedRoute>
          } />
          <Route path="/quizze" element={
            <ProtectedRoute>
              <Quizzes />
            </ProtectedRoute>
          } />
          <Route path="/leaderboard" element={
            <ProtectedRoute>
              <LeaderboardPage />
            </ProtectedRoute>
          } />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
