import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GraduationCap } from "lucide-react";
import { IoBookOutline } from "react-icons/io5";
import { PiGraduationCap } from "react-icons/pi";
import { FaTrophy } from "react-icons/fa";
import { FaBlog } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCoins } from "react-icons/fa6";
import User from "../asserts/favIcon.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* card */}
      <nav className="bg-white shadow-md px-6 py-3">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Nav Logo */}
          <div className="flex items-center space-x-2">
            <GraduationCap className="text-blue-600 w-6 h-6" />
            <span className="text-xl font-bold text-gray-900">
              Brain Booster
            </span>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? (
                <FiX className="w-6 h-6" />
              ) : (
                <FiMenu className="w-6 h-6" />
              )}
            </button>
          </div>

          {/* Links for Desktop */}
          <div className="hidden md:flex space-x-6">
            <NavLink
              to="home"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <IoBookOutline /> Home
            </NavLink>

            <NavLink
              to="quizees"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <IoBookOutline /> Quizzes
            </NavLink>

            <NavLink
              to="subjectt"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <PiGraduationCap /> Subject
            </NavLink>

            <NavLink
              to="/leaderboard"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <FaTrophy /> Leaderboard
            </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <FaBlog /> Blog
            </NavLink>

            <NavLink
              to="/progress"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <VscGraph /> MyProgress
            </NavLink>
          </div>

          {/* Login and Signup button */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex item-center gap-4">
              <div className="flex item-center gap-1">
                <FaCoins className="text-yellow-400 text-xl" />
                <p>2,500</p>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src={User}
                  alt="userIcon"
                  className="w-7 h-7 rounded-full "
                />
                <p>User</p>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile view */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-4">
            <NavLink
              to="home"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <IoBookOutline /> Home
            </NavLink>
            <NavLink
              to="quizz"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <IoBookOutline /> Quizzes
            </NavLink>
            <NavLink
              to="subjectt"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <PiGraduationCap /> Subject
            </NavLink>
            <NavLink
              to="/leaderboard"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <FaTrophy /> Leaderboard
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <FaBlog /> Blog
            </NavLink>
            <NavLink
              to="/progress"
              className={({ isActive }) =>
                `flex items-center gap-1 transition ${
                  isActive
                    ? "text-blue-600 font-semibold"
                    : "text-gray-700 hover:text-blue-600"
                }`
              }
            >
              <VscGraph /> MyProgress
            </NavLink>
            <div className="flex flex-col space-y-2 mt-2">
              <div className="flex item-center gap-1 py-1">
                <FaCoins className="text-yellow-400 text-xl" />
                <p>2,500</p>
              </div>
              <div className="flex items-center gap-1 ">
                <img
                  src={User}
                  alt="userIcon"
                  className="w-7 h-7 rounded-full "
                />
                <p>User</p>
              </div>
            </div>
          </div>
        )}
      </nav>

      <Outlet />
    </>
  );
};

export default Navbar;
