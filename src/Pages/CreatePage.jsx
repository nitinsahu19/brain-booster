import React, { useState } from "react";
import { z } from "zod";

// Zod Schema
const schema = z.object({
    fullName: z.string().min(1, "Full name is required."),
    email: z.string().min(1, "Email is required.").email("Enter a valid email address."),
    password: z.string().min(6, "Password must be at least 6 characters."),
    confirmPassword: z.string().min(1, "Please confirm your password."),
}).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
});

export default function CreatePage() {
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState({});

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        setError({ ...error, [e.target.name]: "" }); // Clear error on change
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const result = schema.safeParse(form);

        if (!result.success) {
            const newErrors = {};
            result.error.errors.forEach((err) => {
                newErrors[err.path[0]] = err.message;
            });
            setError(newErrors);
        } else {
            setError({});
            alert("Account created successfully!");
            console.log("✅ Form Data:", form);
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-md rounded-xl p-8 w-full max-w-md">
                <h2 className="text-2xl font-semibold text-center mb-6">Create Your Account</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <input
                            type="text"
                            name="fullName"
                            placeholder="Enter your full name"
                            value={form.fullName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {error.fullName && <p className="text-red-500 text-sm mt-1">{error.fullName}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={form.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {error.email && <p className="text-red-500 text-sm mt-1">{error.email}</p>}
                    </div>

                    <div>
                        <input
                            type="password"
                            name="password"
                            placeholder="Create a password"
                            value={form.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {error.password && <p className="text-red-500 text-sm mt-1">{error.password}</p>}
                    </div>

                    <div>
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirm your password"
                            value={form.confirmPassword}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        {error.confirmPassword && (
                            <p className="text-red-500 text-sm mt-1">{error.confirmPassword}</p>
                        )}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg transition duration-200"
                    >
                        Create Account
                    </button>
                </form>

                <div className="flex items-center my-4">
                    <div className="flex-grow border-t border-gray-300"></div>
                    <span className="mx-2 text-gray-400">Or continue with</span>
                    <div className="flex-grow border-t border-gray-300"></div>
                </div>

                <button className="w-full border flex items-center justify-center py-2 rounded-lg hover:bg-gray-100">
                    <img
                        src="https://www.svgrepo.com/show/475656/google-color.svg"
                        alt="Google logo"
                        className="w-5 h-5 mr-2"
                    />
                    Sign up with Google
                </button>

                <p className="text-center text-sm text-gray-500 mt-4">
                    Already have an account?{" "}
                    <a href="#" className="text-blue-600 hover:underline">Login</a>
                </p>
            </div>
        </div>
    );
}
