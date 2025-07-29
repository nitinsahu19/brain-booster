import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/organism/Navbar";

import LeaderboardPage from "./components/template/LeaderboardPage";
import Register from "./components/template/Register";
import { BeatLoader } from "react-spinners";
import Login from "./components/template/Login";
import NotFound from "./components/template/NotFound";
import Quizzes from "./components/template/Page";
import MyProgress from "./data/MyProgress.jsx";
import ProtectedRoute from "./protected/ProtectedRoute .jsx";
const Home = lazy(() => import("./components/template/Home"));

function App() {
  return (
    <>
      <Navbar />
      <Suspense fallback={<div className="flex justify-center items-center h-screen fw-bold"><h1><BeatLoader /></h1></div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />


          <Route path="quizze" element={
            <ProtectedRoute>
              <Quizzes />
            </ProtectedRoute>
          } />
          <Route path="/leaderboard" element={
            <ProtectedRoute>
              <LeaderboardPage />
            </ProtectedRoute>
          } />
          <Route path="/Progress" element={
            <ProtectedRoute>
              <MyProgress />
            </ProtectedRoute>
          } />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
