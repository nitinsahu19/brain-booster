
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";

import Subjects from "./components/templates/Subjects";
import Blog from "./components/templates/Blog"
import ProtectedRoute from "./protectect/ProtectedRoute ";
import { BeatLoader } from "react-spinners";
import Login from "./components/templates/Login"
import MyProgress from "./data/MyProgress";
import Register from "./components/templates/Register";
import Quizzes from "./components/templates/Quizzes";
import LeaderBoardPage from "./components/templates/LeaderBoardPage";

const Navbar = lazy(() => import("./components/organisms/Navbar"));
const NotFound = lazy(() => import("./components/templates/NotFound"));
const Home = lazy(() => import("./components/templates/Home"));

function App() {
  return (
    <>
      <Suspense
        fallback={
          <div className="flex justify-center items-center h-screen fw-bold">
            <h1>
              <BeatLoader />
            </h1>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route path="/progress" element={<MyProgress />} />
            <Route path='/quizze' element={<Quizzes />} />
            <Route path="/" element={<Home />} />
            {/* Protected Routes */}
            <Route
              path="/subjects"
              element={
                <ProtectedRoute>
                  <Subjects />
                </ProtectedRoute>
              }
            />
            <Route
              path="/blog"
              element={
                <ProtectedRoute>
                  <Blog />
                </ProtectedRoute>
              }
            />

            <Route
              path="/leaderboard"
              element={
                <ProtectedRoute>
                  <LeaderBoardPage />
                </ProtectedRoute>
              }
            />
          </Route>

          {/* Open Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
