import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";



const SignInForm = () => {

    //  Email Regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Strong Password Regex (Minimum 1 uppercase, 1 lowercase, 1 digit, 1 special char, min 8 chars)
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    
const schema = z.object({
  fullName: z.string().min(3, "Full Name is required"),
  email: z.string().regex(emailRegex,"Invalid email format"),
  password: z.string().regex(passwordRegex, "Password must be at least 8 chars, include uppercase, lowercase, number, and special character"),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"],
});

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Data: ", data);
    reset();
    alert('form submited')
  };

  return (
    <div className="max-w-sm mx-auto mt-10 p-6  rounded-md shadow-2xl ">
      <h2 className="text-2xl font-bold mb-4 text-center">Create Your Account</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Enter your full name"
            {...register("fullName")}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.fullName && (
            <p className="text-red-500 text-sm">{errors.fullName.message}</p>
          )}
        </div>

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
            placeholder="Create a password"
            {...register("password")}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.password && (
            <p className="text-red-500 text-sm">{errors.password.message}</p>
          )}
        </div>

        <div>
          <input
            type="password"
            placeholder="Confirm your password"
            {...register("confirmPassword")}
            className="w-full px-4 py-2 border rounded"
          />
          {errors.confirmPassword && (
            <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded cursor-pointer"
        >
          Create Account
        </button>

        <div className="text-center my-2">Or continue with</div>

        <button
          type="button"
          className="w-full border cursor-pointer py-2 rounded flex justify-center items-center gap-4"
        >
          <img className="h-7 w-7 rounded-full" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB1oG9GOtnAuqAzA8iBgPP68Ry22JnGVEnnQ&s" alt="" />Sign up with Google
        </button>

        <p className="text-center mt-4">
          Already have an account? <a href="#" className="text-blue-600">Login</a>
        </p>
      </form>
    </div>
  );
};

export default SignInForm;
