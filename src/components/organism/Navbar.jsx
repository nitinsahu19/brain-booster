// import React, { useState, useEffect } from "react";
// import { NavLink, Outlet, useNavigate } from "react-router-dom";
// import { GraduationCap } from "lucide-react";
// import { IoBookOutline } from "react-icons/io5";
// import { PiGraduationCap } from "react-icons/pi";
// import { FaTrophy } from "react-icons/fa";
// import { FaBlog } from "react-icons/fa";
// import { VscGraph } from "react-icons/vsc";
// import { FiMenu, FiX } from "react-icons/fi";
// import { useDispatch, useSelector } from "react-redux";


// const Navbar = () => {
//   const dispatch= useDispatch();
//   const [isOpen, setIsOpen] = useState(false);
//   const navigate = useNavigate();

//     const user = useSelector((state) => state.user);

//   const handleLogout = () => {
//     // localStorage.removeItem("user");
//     dispatch(logout());
//     // setIsAuthenticated(false);
//     navigate("/");
//   };

//   return (
//     <>
//       <nav className="bg-white shadow-md px-6 py-3">
//         <div className="max-w-7xl mx-auto flex justify-between items-center">
//           <div className="flex items-center space-x-2">
//             <GraduationCap className="text-blue-600 w-6 h-6" />
//             <span className="text-xl font-bold text-gray-900">Brain Booster</span>
//           </div>

//           <div className="md:hidden">
//             <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle Menu">
//               {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
//             </button>
//           </div>

//           <div className="hidden md:flex space-x-6">
//             <NavLink
//               to="/"
//               className={({ isActive }) =>
//                 `flex items-center gap-1 transition ${isActive ? "text-blue-600 font-semibold" : "hover"}`
//               }
//             >
//               <IoBookOutline /> Home
//             </NavLink>

//             <NavLink
//               to="/quizze"
//               className={({ isActive }) =>
//                 `flex items-center gap-1 transition ${isActive ? "text-blue-600 font-semibold" : "hover"}`
//               }
//             >
//               <IoBookOutline /> Quizzes
//             </NavLink>

//             <NavLink
//               to="/subjects"
//               className={({ isActive }) =>
//                 `flex items-center gap-1 transition ${isActive ? "text-blue-600 font-semibold" : "hover"}`
//               }
//             >
//               <PiGraduationCap /> Subject
//             </NavLink>

//             <NavLink
//               to="/leaderboard"
//               className={({ isActive }) =>
//                 `flex items-center gap-1 transition ${isActive ? "text-blue-600 font-semibold" : "hover"}`
//               }
//             >
//               <FaTrophy /> Leaderboard
//             </NavLink>

//             <NavLink
//               to="/blog"
//               className={({ isActive }) =>
//                 `flex items-center gap-1 transition ${isActive ? "text-blue-600 font-semibold" : "hover"}`
//               }
//             >
//               <FaBlog /> Blog
//             </NavLink>

//             <NavLink
//               to="/progress"
//               className={({ isActive }) =>
//                 `flex items-center gap-1 transition ${isActive ? "text-blue-600 font-semibold" : "hover"}`
//               }
//             >
//               <VscGraph /> MyProgress
//             </NavLink>
//           </div>

//           <div className="hidden md:flex items-center space-x-4">
//             {!user.currentUser ? (
//               <NavLink
//                 to="/login"
//                 className="text-gray-700 font-semibold hover:text-blue-600 transition border px-4 py-2 rounded"
//               >
//                 Login
//               </NavLink>
//             ) : (
//               <button
//                 onClick={handleLogout}
//                 className="text-gray-700 font-semibold hover:text-blue-600 transition border px-4 py-2 rounded"
//               >
//                 Logout
//               </button>
//             )}
//           </div>
//         </div>

//         {isOpen && (
//           <div className="md:hidden flex flex-col space-y-2 mt-4">
//             <NavLink to="/" className="flex items-center gap-2 px-4 py-2 hover">
//               <IoBookOutline /> Home
//             </NavLink>
//             <NavLink to="/quizze" className="flex items-center gap-2 px-4 py-2 hover">
//               <IoBookOutline /> Quizzes
//             </NavLink>
//             <NavLink to="/subjects" className="flex items-center gap-2 px-4 py-2 hover">
//               <PiGraduationCap /> Subject
//             </NavLink>
//             <NavLink to="/leaderboard" className="flex items-center gap-2 px-4 py-2 hover">
//               <FaTrophy /> Leaderboard
//             </NavLink>
//             <NavLink to="/blog" className="flex items-center gap-2 px-4 py-2 hover">
//               <FaBlog /> Blog
//             </NavLink>
//             <NavLink to="/progress" className="flex items-center gap-2 px-4 py-2 hover">
//               <VscGraph /> MyProgress
//             </NavLink>

//             <div className="flex flex-col space-y-2 mt-2 px-4">
//               {!user.currentUser ? (
//                 <NavLink
//                   to="/login"
//                   className="text-gray-700 font-semibold hover:text-blue-600 border px-4 py-2 rounded transition"
//                 >
//                   Login
//                 </NavLink>
//               ) : (
//                 <button
//                   onClick={handleLogout}
//                   className="text-gray-700 font-semibold hover:text-blue-600 border px-4 py-2 rounded transition"
//                 >
//                   Logout
//                 </button>
//               )}
//             </div>
//           </div>
//         )}
//       </nav>

//       <Outlet />
//     </>
//   );
// };

// export default Navbar;
