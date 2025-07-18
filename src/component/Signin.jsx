import React from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FaGoogle } from "react-icons/fa";

const schema = z.object({
  fullName: z.string().min(2, "Correct Full Name"),
  email: z.string().min(6, "Invalid email address"),
  password: z.string().min(5, "Password Invalid"),
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

        <div className="flex gap-6 justify-center items-center text-center py-4">
          <a href="/"><button className="px-6 py-2 text-xl font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition duration-200">Register</button>
          </a>

          <a href="/login"><button className="px-6 py-2 text-xl font-semibold text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition duration-200">Login</button>
          </a>
        </div>



        <form className="space-y-4 mt-10" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
            <input type="text" {...register("fullName")} placeholder="Enter your full name" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />

            {errors.fullName &&
              <p className="text-red-500 text-sm mt-1">{errors.fullName.message}</p>
            }
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input type="email" {...register("email")} placeholder="Enter your email" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />

            {errors.email &&
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            }
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input type="password" {...register("password")} placeholder="Create your password" className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500" />

            {errors.password &&
              <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
            }
          </div>

          <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-xl font-semibold hover:bg-blue-700 transition"
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



// src/
//  ┣ components/
//  ┃ ┣ Navbar.jsx
//  ┃ ┣ Footer.jsx
//  ┃ ┣ StatsCard.jsx
//  ┃ ┣ TopSubjects.jsx
//  ┃ ┣ TopPerformers.jsx
//  ┃ ┣ BlogPosts.jsx
//  ┃ ┗ PopularSubjects.jsx
//  ┣ pages/
//  ┃ ┗ Dashboard.jsx
//  ┣ App.jsx
//  ┗ index.css

// git add .
// git commit -m "update message"
// git push
