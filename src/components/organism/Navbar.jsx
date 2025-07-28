import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaCoins } from "react-icons/fa6";
import { FaGraduationCap } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("currentUser"));

  const handleLogout = () => {
    localStorage.removeItem("currentUser");
    navigate("/login");
  };

  return (
    <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white relative">
      <div className="flex items-center gap-2">
        <span className="text-blue-600 text-2xl"><FaGraduationCap /></span>
        <h1 className="font-bold text-lg">Brain Booster</h1>
      </div>

      <div className="hidden md:flex items-center gap-6 flex-wrap">
        {["/", "/subjects", "/leaderboard", "/blog", "/quizze", "/progress"].map((path, index) => (
          <NavLink
            key={index}
            to={path}
            className={({ isActive }) =>
              isActive ? "text-blue-500 font-bold border-b-2  hover1 " : "text-gray-700 font-semibold hover"
            }
          >
            {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
          </NavLink>
        ))}
      </div>

      <div className="hidden md:flex gap-4 items-center font-semibold">
        {user ? (
          <>
            <div className="flex items-center gap-2">
              <p className="text-amber-400 pt-1"><FaCoins /></p>
              <p>{user.coins || 100}</p>
            </div>
            <div className="flex items-center gap-2">
              <img className="h-8 w-8 rounded-full" src={user.image || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"} alt="user" />
              <p>{user.name || "User"}</p>
            </div>
            <button onClick={handleLogout} className="text-white bg-blue-500 p-1 rounded-2 font-semibold hover:text-red-600">Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className="text-gray-700 font-semibold hover:text-blue-600">Login</NavLink>
            {/* <NavLink to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Register</NavLink> */}
          </>
        )}
      </div>

      <div className="md:hidden flex items-center">
        <button onClick={() => setIsOpen(!isOpen)} className="text-2xl">
          {isOpen ? "X" : "☰"}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col gap-4 p-4 md:hidden z-50">
          {["/", "/subjects", "/leaderboard", "/quizze", "/blog", "/progress"].map((path, index) => (
            <NavLink
              key={index}
              to={path}
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold border-b-2" : "text-gray-700 font-semibold hover:text-blue-600"
              }
              onClick={() => setIsOpen(false)}
            >
              {path === "/" ? "Home" : path.slice(1).charAt(0).toUpperCase() + path.slice(2)}
            </NavLink>
          ))}

          {user ? (
            <>
              <div className="flex items-center gap-2 mt-2">
                <p className="text-amber-400 pt-1"><FaCoins /></p>
                <p>{user.coins || 100}</p>
              </div>
              <div className="flex items-center gap-2 mt-2">
                <img className="h-9 w-9 rounded-full" src={user.image || "https://img.freepik.com/free-vector/blue-circle-with-white-user_78370-4707.jpg"} alt="user" />
                <p >{user.name || "User"}</p>
              </div>
              <button onClick={() => {setIsOpen(false); handleLogout();}} className="text-red-500 mt-2 font-semibold text-left"> Logout </button>
            </>
          ) : (
            <>
              <NavLink to="/login" onClick={() => setIsOpen(false)} className="text-gray-700 font-semibold hover:text-blue-600">Login</NavLink>
              {/* <NavLink to="/signup" onClick={() => setIsOpen(false)} className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 w-fit">Register</NavLink> */}
            </>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
