import React, { useState } from "react";
import PrimaryBtn from "../../UI/Button/PrimaryBtn";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <NavLink to='/' className="flex items-center flex-shrink-0">
                        <span className="text-2xl mr-2">🎓</span>
                        <span className="font-semibold text-lg text-gray-800">Brain Booster</span>
                    </NavLink>
                    <div className="hidden md:flex space-x-6 mx-auto">
                        {[
                            { name: "Subjects", path: "/all-subject" },
                            { name: "Quizzes", path: "/quizees" },
                            { name: "Leaderboard", path: "/leaderboard" },
                            { name: "Blog", path: "/blog" },
                            { name: 'My Progress', path: "/myprogress" }
                        ].map((item) => (
                            <NavLink
                                key={item.name}
                                to={item.path}
                                className={({ isActive }) => `text-gray-700 font-semibold cursor-pointer hover:text-blue-600 ${isActive ? "text-blue-600" : "text-gray-700"}`}>
                                {item.name}
                            </NavLink>
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <NavLink to='login' className="text-gray-700 hover:text-blue-600">Login</NavLink>
                        <NavLink to='login' >
                            <PrimaryBtn text='Sign Up' hasBg />
                        </NavLink>
                    </div>
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="text-2xl text-gray-800 focus:outline-none">
                            {isOpen ? "✖" : "☰"}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden px-4 pb-4 space-y-2">
                    {[
                        { name: "Subjects", path: "/all-subject" },
                        { name: "Quizzes", path: "/quizees" },
                        { name: "Leaderboard", path: "/leaderboard" },
                        { name: "Blog", path: "/blog" },
                        { name: 'My Progress', path: "/myprogress" }
                    ].map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => `block text-gray-700 font-semibold cursor-pointer hover:text-blue-600 ${isActive ? "text-blue-600" : "text-gray-700"}`}>
                            {item.name}
                        </NavLink>
                    ))}
                    <NavLink to='/login' className="block text-gray-700 hover:text-blue-600">Login</NavLink>
                    {/* <NavLink href="/login" className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center">Sign Up</NavLink> */}
                </div>
            )}
        </nav>
    );
};

export default Navbar;
