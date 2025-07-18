import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import FormField from "./molecules/FormField";
import Button from "./atoms/Button";
import Checkbox from "./atoms/Checkbox";
import SocialLoginButtons from "./molecules/SocialLoginButtons";
import ErrorMessage from "./atoms/ErrorMessage";
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



const AuthForm = () => {
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
          <form onSubmit={handleLoginSubmit(onLoginSubmit)} className="space-y-4">
            <FormField
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              register={loginRegister("email")}
              error={loginErrors.email?.message}
            />
            <FormField
              label="Password"
              type="password"
              placeholder="Enter your password"
              register={loginRegister("password")}
              error={loginErrors.password?.message}
            />
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center gap-2">
                <Checkbox />Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">Forgot password?</a>
            </div>
            <Button type="submit">Login</Button>
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-2 text-sm text-gray-400">Or continue with</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <SocialLoginButtons />
          </form>
        ) : (
          <form onSubmit={handleRegisterSubmit(onRegisterSubmit)} className="space-y-4">
            <h2 className="text-2xl font-bold text-center text-blue-700">Create Your Account</h2>
            <FormField
              placeholder="Enter your full name"
              register={registerRegister("name")}
              error={registerErrors.name?.message}
            />
            <FormField
              type="email"
              placeholder="Enter your email"
              register={registerRegister("email")}
              error={registerErrors.email?.message}
            />
            <FormField
              type="password"
              placeholder="Create a password"
              register={registerRegister("password")}
              error={registerErrors.password?.message}
            />
            <FormField
              type="password"
              placeholder="Confirm your password"
              register={registerRegister("confirmPassword")}
              error={registerErrors.confirmPassword?.message}
            />
            <Button type="submit">Create Account</Button>
            <div className="flex items-center my-4">
              <div className="flex-grow h-px bg-gray-300"></div>
              <span className="px-2 text-sm text-gray-400">or continue with</span>
              <div className="flex-grow h-px bg-gray-300"></div>
            </div>
            <Button type="button" className="w-full flex justify-center items-center gap-2 border rounded-md py-2 bg-white text-gray-700">
              Sign up with Google
            </Button>
            <p className="text-sm text-center text-gray-600 mt-2">Already have an account?{" "}<span onClick={() => setActiveTab("login")} className="text-blue-600 cursor-pointer hover:underline">Login</span></p>
          </form>
        )}
      </div>
    </div>
  );
};

export default AuthForm;
