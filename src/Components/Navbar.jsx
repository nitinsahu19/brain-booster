import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { GraduationCap } from "lucide-react";

const Navbar = () => {
  return (
    <>
    {/* card */}
    <nav className="bg-white shadow-md px-6 py-3">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
      
      {/* Nav Logo */}

        <div className="flex items-center space-x-2">
          <GraduationCap className="text-blue-600 w-6 h-6" />
          <span className="text-xl font-bold text-gray-900">Brain Booster</span>
        </div>

        {/* Links */}

        <div className="hidden md:flex space-x-6">
          <NavLink
            to="home"
            className="text-gray-700 font-semibold hover:text-blue-600 active:font-semibold transition">
            Home
          </NavLink>
          <NavLink
            to="subjectt"
            className="text-gray-700 font-semibold hover:text-blue-600 active:font-semibold transition">
            Subject
          </NavLink>
          
          <NavLink
            to="/leaderboard"
            className="text-gray-700 font-semibold hover:text-blue-600 active:font-semibold transition">
            Leaderboard
          </NavLink>
          <NavLink
            to="/blog"
            className="text-gray-700 font-semibold hover:text-blue-600 active:font-semibold transition">
            Blog
          </NavLink>
        </div>

      {/* Login and singUp button */}

        <div className="flex items-center space-x-4">
          <NavLink
            to="/login"
            className="text-gray-700 font-semibold  hover:text-blue-600 transition border px-4 py-2 rounded">
            Login
          </NavLink>
          <NavLink
            to="/signup"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
            Sign Up
          </NavLink>
        </div>
      </div>
    </nav>

   <Outlet />
   </>
  );
};

export default Navbar;
