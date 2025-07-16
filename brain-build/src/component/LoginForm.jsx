import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

//  Email & Password Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

//  Zod Schema
const loginSchema = z.object({
  email: z.string().regex(emailRegex, "Invalid email address"),
  password: z.string().regex(
    passwordRegex,
    "Password must be at least 8 chars, include uppercase, lowercase, number, and special character"
  ),
  rememberMe: z.boolean().optional(),
});

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data) => {
    console.log("Login Data: ", data);
    // API call here
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6  rounded-md shadow-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Welcome Back</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="email"
            placeholder="Enter your email"
            {...register("email")}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Enter your password"
            {...register("password")}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" {...register("rememberMe")} />
            Remember me
          </label>
          <a href="#" className="text-blue-600">Forgot Password?</a>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded"
        >
          Login
        </button>

        <div className="text-center my-2">Or continue with</div>

        <div className="flex justify-between gap-2">
          <button className="flex-1 border py-2 rounded flex justify-center items-center"> <img className="h-7 w-7 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB1oG9GOtnAuqAzA8iBgPP68Ry22JnGVEnnQ&s" alt="" /></button>
          <button className="flex-1 border py-2 rounded flex justify-center items-center"> <img className="h-7 w-7 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s" alt="" /></button>
          <button className="flex-1 border py-2 rounded flex justify-center items-center"> <img className="h-9 w-9 rounded-full" src="https://upload.wikimedia.org/wikipedia/commons/7/71/Twitter_Logo_Blue_%282%29.png" alt="" /></button>
        </div>

        <p className="text-center mt-4">
          New here? <a href="#" className="text-blue-600">Create Account</a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
