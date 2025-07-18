import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF, FaGithub } from "react-icons/fa";


const loginSchema = z.object({
  email: z.string().email("Enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

const registerSchema = z
  .object({
    name: z.string().min(2, "Name is too short"),
    email: z.string().email("Enter a valid email"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    confirmPassword: z.string(),
  })

  

export default function AuthForm() {
  const [activeTab, setActiveTab] = useState("login");

  const loginForm = useForm({
    resolver: zodResolver(loginSchema),
  
  });

  const registerForm = useForm({
    resolver: zodResolver(registerSchema),
  });

  const {
    register: loginRegister,
    handleSubmit: handleLoginSubmit,
    formState: { errors: loginErrors },
  } = loginForm;

  const {
    register: registerRegister,
    handleSubmit: handleRegisterSubmit,
    formState: { errors: registerErrors },
  } = registerForm;

  const onLoginSubmit = (data) => {
    console.log("Login Data:", data);
  };

  const onRegisterSubmit = (data) => {
    console.log("Register Data:", data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <div className="flex justify-between mb-6 border-b border-gray-200">
          <button className={`pb-2 px-4 text-lg font-medium ${activeTab === "login"? "text-blue-600 border-b-2 border-blue-600": "text-gray-500"}`} onClick={() => setActiveTab("login")}>Login </button>
          <button className={`pb-2 px-4 text-lg font-medium ${activeTab === "register" ? "text-blue-600 border-b-2 border-blue-600": "text-gray-500"}`}onClick={() => setActiveTab("register")}>Register</button>
        </div>

        {activeTab === "login" ? (
          <>
          <form onSubmit={handleLoginSubmit(onLoginSubmit)} className="space-y-4">
            <div>
              <label className="text-sm font-medium">Email Address</label>
              <input type="email" placeholder="Enter your email" {...loginRegister("email")} className="w-full mt-1 px-4 py-2 border rounded-md outline-none"/>
              {loginErrors.email && (<p className="text-red-500 text-sm mt-1">{loginErrors.email.message}</p>)}
            </div>
            <div>
              <label className="text-sm font-medium">Password</label>
              <input type="password" placeholder="Enter your password" {...loginRegister("password")}className="w-full mt-1 px-4 py-2 border rounded-md outline-none"/>
              {loginErrors.password && (<p className="text-red-500 text-sm mt-1">{loginErrors.password.message}</p>)}
            </div>
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2"> <input type="checkbox" className="accent-blue-500" />Remember me</label>
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md">Login</button>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-2 text-sm text-gray-400">Or continue with</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <div className="flex justify-center gap-4">
              <button className="p-2 border rounded-md"><FcGoogle size={20} /></button>
              <button className="p-2 border rounded-md text-blue-600"><FaFacebookF size={20} /></button>
              <button className="p-2 border rounded-md text-gray-800"><FaGithub size={20} /></button>
            </div>
          </form>
          </>
        ) : (
          <form onSubmit={handleRegisterSubmit(onRegisterSubmit)} className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-blue-700">Create Your Account</h2>
            <input type="text" placeholder="Enter your full name"{...registerRegister("name")}className="w-full px-4 py-2 border rounded-md outline-none"/>
            {registerErrors.name && (<p className="text-red-500 text-sm">{registerErrors.name.message}</p>)}
            <input type="email" placeholder="Enter your email" {...registerRegister("email")}className="w-full px-4 py-2 border rounded-md outline-none"/>
            {registerErrors.email && (<p className="text-red-500 text-sm">{registerErrors.email.message}</p>)}
            <input type="password" placeholder="Create a password"{...registerRegister("password")} className="w-full px-4 py-2 border rounded-md outline-none"/>
            {registerErrors.password && (<p className="text-red-500 text-sm">{registerErrors.password.message}</p>)}
            <input type="password" placeholder="Confirm your password" {...registerRegister("confirmPassword")} className="w-full px-4 py-2 border rounded-md outline-none"/>
            {registerErrors.confirmPassword && (<p className="text-red-500 text-sm">{registerErrors.confirmPassword.message}</p>)}
            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition">Create Account</button>

            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-2 text-sm text-gray-400">or continue with</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>

            <button className="w-full flex justify-center items-center gap-2 border rounded-md py-2"><FcGoogle size={22} />Sign up with Google</button>
            <p className="text-sm text-center text-gray-600 mt-2">Already have an account?{" "}<span onClick={() => setActiveTab("login")} className="text-blue-600 cursor-pointer hover:underline">Login</span></p>
          </form>
        )}
      </div>
    </div>
  );
}
