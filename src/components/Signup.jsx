import React from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mt-5">
                <h2 className="text-2xl font-bold text-center mb-6">Create Your Account</h2>
                <div className="hidden md:flex items-center space-x-4 justify-content-between mb-4">
                    <NavLink to="/login" className="text-decoration-none text-black opacity-50">
                        Login
                    </NavLink>
                    <NavLink to="/signup" className="">
                        <button className="text-black opacity-50 ">
                            Sign Up
                        </button>
                    </NavLink>
                </div>

                <form className="space-y-4">
                    <div>
                        <label className="block text-sm text-gray-700">Full Name</label>
                        <input
                            type="text"
                            placeholder="Enter your full name"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700">Email Address</label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Create a password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <div>
                        <label className="block text-sm text-gray-700">Confirm Password</label>
                        <input
                            type="password"
                            placeholder="Confirm your password"
                            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">
                        Create Account
                    </button>
                </form>

                <div className="my-4 flex items-center justify-center gap-3">
                    <hr className="w-full border-gray-300" />
                    <span className=" text-gray-500 flex"> continue</span>
                    <hr className="w-full border-gray-300" />
                    <span className=" text-gray-500 flex"> with</span>
                    <hr className="w-full border-gray-300" />
                    <span className=" text-gray-500 flex"> Google</span>
                    <hr className="w-full border-gray-300" />

                </div>

                <button className="w-full border border-gray-300 py-2 rounded-md flex justify-center items-center gap-2 hover:bg-gray-100 transition">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google"
                        className="w-5 h-5"
                    />
                    <span>Sign up with Google</span>
                </button>

                <p className="text-center text-sm text-gray-600 mt-4">
                    Already have an account?{" "}
                    <NavLink to="/login" className="text-blue-600 hover:underline">
                        Login
                    </NavLink>
                </p>
            </div>
        </div>
    );
};

export default Signup;