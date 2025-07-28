
import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
// import Navbar from "./components/organism/Navbar";
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
import MyProgress from "./data/MyProgress";
import Layout from './component/template/Layout'
import Quizze from './component/pages/Quizze'
import DefaultPage from './component/pages/DefaultPage'

const Navbar = lazy(() => import("./Components/Navbar"));
const NotFound = lazy(() => import("./Components/NotFound"));
const Home = lazy(() => import("./components/tamplate/Home"));

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
             {/* <Route path='*' element={<DefaultPage/>}/> */}
          </Route>
          {/* Open Routes */}
          <Route path='/quizze' element={<Quizze/>}/>
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
            path="/blog"
            element={
              <ProtectedRoute>
                <Blog />
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
