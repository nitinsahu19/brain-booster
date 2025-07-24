import React, { useState } from "react";
import { email, z } from "zod";
import PrimaryBtn from "../Components/atoms/Button/PrimaryBtn";
import Input from "../Components/atoms/InputField/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from '@hookform/resolvers/zod';
import { data, NavLink } from "react-router-dom";

export default function SignUpLogin() {


    const schema = z.object({
        name: z.string().min(2, "Enter your name"),
        email: z.string().min(2, "Enter your valid email"),
        password: z.string().min(6, 'Password must be at least 6 characters'),
        confirmPassword: z.string().min(6, 'please Enter Your confirm password')
    }).refine((data) => data.password === data.confirmPassword, {
        message: 'Passwords do not match.',
        path: ["confirmPassword"]
    })

    const { register, reset, handleSubmit, formState: { errors }, trigger } = useForm({ resolver: zodResolver(schema) })

    const submit = (data) => {
        console.log(data);
        reset()

    }



    return (
        <>

            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
                    <h2 className="text-2xl font-semibold text-center mb-6">Create Your Account</h2>

                    <form onSubmit={handleSubmit(submit)} className="space-y-4">
                        <div>
                            <Input {...register('name')} type='text' name='name' placeholder='Enter Your Full Name' />
                            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
                        </div>

                        <div>
                            <Input  {...register('email')} type='email' name='email' placeholder='Enter Your Valid Email' />
                            {!errors.name && errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                        </div>

                        <div>
                            <Input {...register('password')} type='password' name='password' placeholder='Create a password' />
                            {!errors.email && errors.password && <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>}
                        </div>

                        <div>
                            <Input {...register('confirmPassword')} type='password' name='confirmPassword' placeholder='Confirm your password' />
                            {!errors.password && errors.confirmPassword && <p className="text-red-500 text-sm mt-1">{errors.confirmPassword.message}</p>}
                        </div>
                        <PrimaryBtn text='Create Account' hasBg />

                    </form>

                    <div className="flex items-center my-4">
                        <div className="flex-grow border-t border-gray-300"></div>
                        <span className="mx-2 text-gray-400">Or continue with</span>
                        <div className="flex-grow border-t border-gray-300"></div>
                    </div>

                    <div className="border flex items-center justify-center py-2 rounded-lg hover:bg-gray-100 cursor-pointer w-full max-w-xs mx-auto">
                        <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google logo" className="w-7 h-5" />

                        <PrimaryBtn text="Sign up with Google" addClass='me-auto font-medium text-sm text-gray-700' />

                    </div>

                    <p className="text-center text-sm text-gray-500 mt-4">
                        Already have an account?{" "}
                        <a href="#" className="text-blue-600 hover:underline">Login</a>
                    </p>
                </div>
            </div>

            <div className="flex justify-center items-center min-h-screen bg-gray-100">
                <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
                    <NavLink to='/login' >Login</NavLink>
                </div>
            </div>

        </>
    );
}
