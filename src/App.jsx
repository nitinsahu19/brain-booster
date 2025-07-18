import { Route, Routes } from "react-router-dom";
import Navbar from "./components/organism/Navbar";
import Signup from "./components/Signup";
import LoginForm from "./components/LoginForm";
import Home from "./components/tamplate/Home";
import Subjects from "./components/Subjects";
import Leaderbord from "./components/Leaderbord";
import Blog from "./components/Blog";
import Quizzes from "./components/Quizzes";

function App() {
  return (
    <>
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/" element={<Home />} />
        <Route path="/subjects" element={<Subjects />} />
        <Route path="/leaderboard" element={<Leaderbord />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/quizze" element={<Quizzes />} />
        {/* <Route path="/progress" element={<Progress />} /> */}

      </Routes>
    </>
  );
}

export default App;
