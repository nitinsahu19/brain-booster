import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { useForm } from "react-hook-form";
import z, { string } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
// import res

function LoginPage() {

  const schema = z.object({
    email: z.string().min(4, 'Please Enter Your Full Name!'),
    password: string().min(5, 'Check password and try again')
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm({
    resolver: zodResolver(schema)
  })

  const onSubmit = (data) => {
    console.log('data resolved', data)
    alert("Data is Alredy Sumbit Cheak the data !")
    reset()
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Welcome Back</h2>

        <div className="flex gap-6 justify-center items-center text-center py-4">
          <a href="/"><button className="px-6 py-2 text-xl font-semibold text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition duration-200">Register</button>
          </a>

          <a href="/login"><button className="px-6 py-2 text-xl font-semibold text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition duration-200">Login</button>
          </a>
        </div>

        


        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 mt-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input {...register('email')} placeholder="Enter your email" className="w-full px-4 py-2 border rounded-xl" />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input {...register('password')} placeholder="Enter your password" className="w-full px-4 py-2 border rounded-xl" />
            {errors.password && 
            <p className="text-red-400">{errors.password.message}</p>}
          </div>

          <div className="flex items-center justify-between text-sm">
            <div>
              <input type="checkbox" className="mr-2" />Remember me</div>
            <button type="button" className="text-blue-600 hover:underline cursor-pointer"> Forgot Password?</button>
          </div>

          <button type="submit" className="w-full bg-blue-600 hover:bg-green-600 cursor-pointer text-white h-10 rounded-xl" >Login</button>


        </form>

        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="mx-2 text-gray-700 text-sm">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        <div className="flex justify-center space-x-4">
          <button className="border p-3 rounded-xl hover:bg-gray-100 transition">
            <a className="h-5 w-15 flex justify-center items-center" href="https://www.google.com/"><FaGoogle /></a>
          </button>
          <button className="border p-3 rounded-xl hover:bg-gray-100 transition">
            <a className="h-5 w-15 flex justify-center items-center" href="https://www.facebook.com/"><FaFacebook /></a>
          </button>
          <button className="border p-3 rounded-xl hover:bg-gray-100 transition">
            <a className="h-5 w-15 flex justify-center items-center" href="https://www.linkedin.com/company/twitter"><FaTwitter /></a>
          </button>
        </div>

        <p className="text-sm text-center mt-6">
          New here? <a href="/" className="text-blue-600 font-semibold hover:underline">Create Account</a>
        </p>
      </div>
    </div>
  );
}

export default LoginPage