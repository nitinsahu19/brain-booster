import React, { useState } from "react";
import PrimaryBtn from "../../UI/Button/PrimaryBtn";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <div className="flex items-center flex-shrink-0">
                        <span className="text-2xl mr-2">🎓</span>
                        <span className="font-semibold text-lg text-gray-800">Brain Booster</span>
                    </div>
                    <div className="hidden md:flex space-x-6 mx-auto">
                        {["Home", "Subjects", "Leaderboard", "Blog"].map((item) => (
                            <p key={item} className="text-gray-700 hover:text-blue-600 font-semibold cursor-pointer">
                                {item}
                            </p>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href="#" className="text-gray-700 hover:text-blue-600">Login</a>
                        <PrimaryBtn text='Sign Up' hasBg/>
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
                    {["Home", "Subjects", "Leaderboard", "Blog"].map((item) => (
                        <p key={item} className="block text-gray-700 hover:text-blue-600 font-semibold cursor-pointer">
                            {item}
                        </p>
                    ))}
                    <a href="#" className="block text-gray-700 hover:text-blue-600">Login</a>
                    <a href="#" className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center">Sign Up</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
