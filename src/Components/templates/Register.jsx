import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import { signup } from "../../redux/reducers/userSlice";
import { NavLink } from "react-router";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import  {signupUser}  from "../../redux/reducers/userSlice"



const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch()

    const registerScema = z.object({
        name: z.string().min(1, "name is required"),
        email: z.string().email("invalid email format").regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            "Email must be valid"),
        password: z.string().min(6, 'Password must be at least 6 characters').regex(
            /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{6,}$/,
            "Password must contain at least one uppercase letter and one number"
        ),
        conformPassword: z.string().min(1, "Confirm your password"),

    }).refine((data) => data.password === data.conformPassword, {
        path: ["conformPassword"],
        message: "Passwords do not match",
    });

    const { register, handleSubmit, formState: { errors }, } = useForm({ resolver: zodResolver(registerScema), })

    const onSubmit = (data) => {
        console.log("from submited", data);
        alert("congrass you are logined")
                navigate("/"); 
                dispatch(signupUser(data))

    }

    //    const signupHandler = async (e) => {
    //   e.preventDefault();

    //   const name = e.target.name.value;
    //   const email = e.target.email.value;
    //   const password1 = e.target.password1.value;
    //   const password2 = e.target.password2.value;

    //   if (password1 !== password2) {
    //     alert("Passwords do not match");
    //     return;
    //   }

    //   const newUser = {
    //     email,
    //     name,
    //     password: password1
    //   };

    //   try {
    //     await addDoc(collection(db, "users"), newUser);
    //     alert("User registered successfully!");
    //     // navigate("/login"); // or wherever you want
    //   } catch (error) {
    //     console.error("Error adding user:", error);
    //     alert("Registration failed.");
    //   }
    // };





    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>
                <div className="hidden md:flex items-center  justify-between  mb-4">
                    <NavLink to="/login" className={({ isActive }) => isActive
                        ? "bg-gray-50 cursor-pointer  border-b-2 border-blue-600 rounded p-2"
                        : "bg-gray-50 cursor-pointer  rounded p-2"

                    }>
                        <button>
                            Login
                        </button>
                    </NavLink>
                    <NavLink to="/register" className={({ isActive }) => isActive
                        ? "bg-gray-50 cursor-pointer  border-b-2 border-blue-600 rounded p-2"
                        : "bg-gray-50 cursor-pointer  rounded p-2"

                    }>
                        <button >
                            Register
                        </button>
                    </NavLink>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm">Full Name</label>
                        <input
                            name="name"
                            {...register("name")}
                            type="text"
                            className="w-full border px-3 py-2 rounded"
                            placeholder="Enter your name"
                        />
                        {errors.name && <p className="text-red-500">{errors.name.message}</p>}

                    </div>
                    <div>
                        <label className="block mb-1 text-sm">Email</label>
                        <input
                            name="email"
                            type="email"
                            {...register("email")}
                            className="w-full border px-3 py-2 rounded"
                            placeholder="Enter your email"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

                    </div>
                    <div>
                        <label className="block mb-1 text-sm">Password</label>
                        <input
                            name="password"
                            type="password"
                            {...register("password")}
                            className="w-full border px-3 py-2 rounded"
                            placeholder="Create a password"
                        />
                        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

                    </div>
                    <div>
                        <label className="block mb-1 text-sm">Confirm Password</label>
                        <input
                            name="conformPassword"
                            type="password"
                            {...register("conformPassword")}
                            className="w-full border px-3 py-2 rounded"
                            placeholder="Confirm your password"
                        />
                        {errors.conformPassword && (
                            <p className="text-red-500">{errors.conformPassword.message}</p>
                        )}
                    </div>
                    <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Create Account</button>
                </form>

                <p className="text-center text-sm mt-4">
                    Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;