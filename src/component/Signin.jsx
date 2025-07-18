import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaGoogle } from "react-icons/fa";

const schema = z.object({
  fullName: z.string().min(2, "Full Name correct"),
  email: z.string().min(6 ,"Invalid email address"),
  password: z.string().min(5, "Password correct"),
});

function SignUpPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset 
  } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
    alert("Account Created Successfully!");
    reset()
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Create Your Account</h2>

        <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" {...register("fullName")} placeholder="Enter your full name" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />

            {errors.fullName && (
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" {...register("email")} placeholder="Enter your email" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />

            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" {...register("password")} placeholder="Create your password" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />

            {errors.password && (
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            )}
          </div>

          <button  type="submit"  className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
          >Create Account</button>
        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-700 text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex justify-center items-center">
          <button className="w-full flex justify-center gap-2 items-center border py-2 rounded-2xl font-semibold hover:bg-gray-100 transition cursor-pointer">
            <FaGoogle /> Sign up with Google
          </button>
        </div>

        <p className="text-sm text-center mt-6"> Already have an account?{" "}
          <a href="/login" className="text-blue-600 font-semibold hover:underline">Login</a>
        </p>
      </div>
    </div>
  );
}

export default SignUpPage;
