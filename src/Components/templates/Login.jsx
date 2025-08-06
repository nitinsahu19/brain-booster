import React from "react";
import { useForm } from "react-hook-form";
import { email, z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { NavLink,Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { signup } from "../../redux/reducers/userSlice";
import { useDispatch } from "react-redux";
import { loginUser } from "../../redux/reducers/userSlice";
import { da } from "zod/v4/locales";



const  LoginForm = ()=>{
    
    const navigate = useNavigate();
    const dispatch = useDispatch()


// 🔒 Zod Schema for validation
    const loginSchema = z.object({
    email: z
    .string()
    .min(1, "Email is required")
    .email("Invalid email format")
    .regex(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, "Invalid email address"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .regex(
      /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).*$/,
      "Password must contain uppercase, lowercase and a number"
    ),
});
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm({
        resolver: zodResolver(loginSchema),
    });

    const onSubmit = (data) => {
        console.log("Login data:", data);
        dispatch(loginUser(data)).unwrap()
    .then((res) => {
      console.log("Login success:", res);
      alert("Login successful!");
      navigate("/");
        reset()
    })
    .catch((err) => {
      console.error("Login error:", err.message);
      alert("Invalid email or password");
        reset();
    });
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 ">

            <form
                onSubmit={handleSubmit(onSubmit)}
                className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md"
            >
                <h2 className="text-2xl font-bold text-center mb-6">Welcome Back</h2>
                <div className="hidden md:flex items-center  justify-between  mb-4">
                    <NavLink to="/login" className={({ isActive }) =>isActive
                                ? "bg-gray-50 cursor-pointer  border-b-2 border-blue-600 rounded p-2"
                                : "bg-gray-50 cursor-pointer  rounded p-2"
                        
                        }>
                        <button>
                            Login
                        </button>
                    </NavLink>
                    <NavLink to="/register" className={({ isActive }) =>isActive
                                ? "bg-gray-50 cursor-pointer  border-b-2 border-blue-600 rounded p-2"
                                : "bg-gray-50 cursor-pointer  rounded p-2"
                        
                        }>
                        <button >
                            Register
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
                        <input type="checkbox" className="form-checkbox" required />
                        <span className="ml-2 text-sm text-gray-600">Remember me</span>
                    </label>
                    <a href="#" className="text-sm text-blue-600 hover:underline">
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
                    <div className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition text-center rounded-2">
                        <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg"
                            alt="Google"
                            className="w-5 h-5 mx-auto"
                        />
                    </div>
                    <div className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition text-center rounded-2">
                        <img
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXN9xSEe8unzPBEQOeAKXd9Q55efGHGB9BA&s"
                            alt="Facebook"
                            className="w-5 h-5 mx-auto"
                        />
                    </div>
                    <div className="flex-1 border border-gray-300 py-2 rounded-md hover:bg-gray-100 transition text-center rounded-2">
                        <img
                            src="https://store-images.s-microsoft.com/image/apps.60673.9007199266244427.4d45042b-d7a5-4a83-be66-97779553b24d.5d82b7eb-9734-4b51-b65d-a0383348ab1b?h=170"
                            alt="Twitter" className="w-5 h-5 mx-auto" />
                    </div>
                </div>

                <p className="text-center text-sm text-gray-600 mt-4">
                    New here?{" "}
                    <Link to="/register" className="text-blue-600 hover:underline">Create Account</Link>
                </p>
            </form>
        </div>
    );
}

export default LoginForm;