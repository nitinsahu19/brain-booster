import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink } from "react-router-dom";


// 🔒 Zod Schema for validation
const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
});

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log("Login data:", data);
        alert('Login Successful')
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
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

                <div className="mb-4">
                    <label className="block text-sm text-gray-700">Email Address</label>
                    <input
                        type="email"
                        {...register("email")}
                        placeholder="Enter your email"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div className="mb-4">
                    <label className="block text-sm text-gray-700">Password</label>
                    <input
                        type="password"
                        {...register("password")}
                        placeholder="Enter your password"
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    {errors.password && (
                        <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                    )}
                </div>

                <div className="flex items-center justify-between mb-4">
                    <label className="inline-flex items-center">
                        <input type="checkbox" className="form-checkbox" />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#forgot" className="text-sm text-blue-600 hover:underline">
                        Forgot Password?
                    </a>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded-2 hover:bg-blue-700 transition "
                >
                    Login
                </button>

                {/* <div className="my-4 flex items-center justify-center">
                    <hr className="w-full border-gray-300" />
                    <span className="px-2 text-sm text-gray-500">Or continue with</span>
                    <hr className="w-full border-gray-300" />
                </div> */}

                <div className="flex justify-between space-x-3 gap-3 mt-4 ">
                    <button className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition text-center rounded-2">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5 mx-auto"
                        />
                    </button>
                    <button className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition text-center rounded-2">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s"
                            alt="Facebook"
                            className="w-5 h-5 mx-auto"
                        />
                    </button>
                    <button className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition text-center rounded-2">
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.60673.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b7eb-9734-4b51-b65d-a0383348ab1b?h=170"
                            alt="Twitter" className="w-5 h-5 mx-auto" />
                    </button>
                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                    New here?{" "}
                    <a href="/signup" className="text-blue-600 hover:underline">Create Account</a>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;