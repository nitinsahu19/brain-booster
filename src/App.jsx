import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Subjects from "./components/Subjects";
import Blog from "./components/Blog";
import Quizzes from "./components/Quizzes";
import LeaderboardPage from "./Components/templates/LeaderboardPage";
import Register from "./Components/templates/Register";
import ProtectedRoute from "./protectect/ProtectedRoute ";
import { BeatLoader } from "react-spinners";
import Login from "./Components/templates/Login";
import MyProgress from "./data/MyProgress";
import BlogSection from "./components/templates/Blog";

const Navbar = lazy(() => import("./Components/Navbar"));
const NotFound = lazy(() => import("./Components/NotFound"));
const Home = lazy(() => import("./Components/templates/Home"));

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
            <Route path="progress" element={<MyProgress />} />
            <Route path="*" element={<NotFound />} />
            <Route path="quizees" element={<Quizzes />} />
            <Route path="blog" element={<BlogSection />} />
          </Route>
          {/* Open Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Register />} />
          <Route path="/register" element={<Register />} />

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
            path="/quizze"
            element={
              <ProtectedRoute>
                <Quizzes />
              </ProtectedRoute>
            }
          />
          <Route
            path="/leaderboard"
            element={
              <ProtectedRoute>
                <LeaderboardPage />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
