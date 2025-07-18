import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCoins } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";



const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white relative">
      {/* Logo */}
      <div className="flex items-center gap-2">
        <span className="text-blue-600 text-2xl"><FaGraduationCap /></span>
        <h1 className="font-bold text-lg">Brain Booster</h1>
      </div>

      {/* Desktop Links */}
      <div className="hidden md:flex items-center gap-6 flex-wrap">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border-b-2" : "text-gray-700  font-semibold  hover:text-blue-600 "
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/subjects"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border-b-2" : "text-gray-700 font-semibold  hover:text-blue-600"
          }
        >
          Subjects
        </NavLink>
        <NavLink
          to="/leaderboard"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border-b-2" : "text-gray-700 font-semibold  hover:text-blue-600"
          }
        >
          Leaderboard
        </NavLink>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border-b-2" : "text-gray-700 font-semibold  hover:text-blue-600"
          }
        >
          Blog
        </NavLink>
        <NavLink
          to="/quizze"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border-b-2" : "text-gray-700 font-semibold  hover:text-blue-600"
          }
        >
          Quizzes
        </NavLink>
        <NavLink
          to="/progress"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border-b-2" : "text-gray-700 font-semibold  hover:text-blue-600"
          }
        >
          My Progress
        </NavLink>
      </div>

      <div className="md:flex gap-3 items-center font-semibold hidden ">
        <div className="flex gap-1 items-center">
          <p className="text-amber-400 pt-1"><FaCoins /></p>
          <p>100</p>
        </div>
        <div >
          <div className="flex gap-1 items-center">
            <img className="h-8 w-8 rounded-full" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" alt="" />
            <p>Ram</p>
          </div>
        </div>
       
      </div>

      {/* Desktop Auth */}
      {/* <div className="hidden md:flex items-center gap-4">
        <NavLink
          to="/login"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border-b-2" : "text-gray-700 font-semibold  hover:text-blue-600"
          }
        >
          Login
        </NavLink>
        <NavLink
          to="/signup"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Sign Up
        </NavLink>
      </div> */}

      {/* Mobile Hamburger */}
      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? "✖️" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 md:hidden">
          <NavLink
            to="/"
           className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border-b-2" : "text-gray-700 font-semibold  hover:text-blue-600"
          }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/subjects"
           className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border-b-2" : "text-gray-700 font-semibold  hover:text-blue-600"
          }
            onClick={() => setIsOpen(false)}
          >
            Subjects
          </NavLink>
          <NavLink
            to="/leaderboard"
           className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border-b-2" : "text-gray-700 font-semibold  hover:text-blue-600"
          }
            onClick={() => setIsOpen(false)}
          >
            Leaderboard
          </NavLink>
           <NavLink
          to="/quizze"
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border-b-2" : "text-gray-700 font-semibold  hover:text-blue-600"
          }
        >
          Quizzes
        </NavLink>
          <NavLink
            to="/blog"
           className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold border-b-2" : "text-gray-700 font-semibold  hover:text-blue-600"
          }
            onClick={() => setIsOpen(false)}
          >
            Blog
          </NavLink>
          <div className=" font-semibold">
        <div className="flex gap-2 items-center">
          <p className="text-amber-400 pt-1"><FaCoins /></p>
          <p>100</p>
        </div>
        <div >
          <div className="flex gap-1 items-center mt-2">
            <img className="h-9 w-9 rounded-full ps-0" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" alt="" />
            <p>Ram</p>
          </div>
        </div>
       
      </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
