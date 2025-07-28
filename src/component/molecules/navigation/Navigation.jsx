import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaCoins } from "react-icons/fa6";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* desktop link */}

     <div className="flex  justify-between media-query">
       <div className="hidden md:flex items-center  md:gap-6 flex-wrap gaping">
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

      <div className="md:flex gap-2 items-center font-semibold hidden ">
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
     </div>

      <div>
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
            <div className=" font-semibold flex gap-3 items-center">
              <div className="flex gap-2 items-center pt-2">
                <p className="text-amber-400 pt-1  text-lg"><FaCoins /></p>
                <p>100</p>
              </div>
              <div >
                <div className="flex gap-1 items-center mt-2 ps-0">
                  <img className="h-9 w-9 rounded-full cursor-pointer" src="https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg?semt=ais_hybrid&w=740" alt="" />
                  <p>Ram</p>
                </div>
              </div>

            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navigation
