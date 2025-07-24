import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { login } from "../../redux/reducers/userSlice";

const Login = () => {

    const user = useSelector(store => store.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const loginHandler = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const isExistingUser = user.allUsers.find((u) => u.email === email && u.password === password);
        if (isExistingUser) {
            dispatch(login(isExistingUser))
            navigate('/')
        } else {
            alert('Incorret email or password')
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded shadow w-full max-w-sm">

                <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
                <div>
                    <p className="flex justify-content-between text-sm mt-4">
                        <NavLink to="/login" className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold border-b-2  hover1 " : "text-gray-700 font-semibold hover"
                        }>Login</NavLink>
                        <NavLink className={({ isActive }) =>
                            isActive ? "text-blue-500 font-bold border-b-2  hover1 " : "text-gray-700 font-semibold hover"
                        } to="/register" >Register</NavLink>
                    </p>
                </div>

                <form onSubmit={loginHandler} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm">Email</label>
                        <input
                            type="email"
                            name="email"
                            className="w-full border px-3 py-2 rounded"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm">Password</label>
                        <input
                            type="password"
                            name="password"
                            className="w-full border px-3 py-2 rounded"
                            placeholder="Enter your password"
                        />
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            Remember me
                        </label>
                        <a href="#" className="text-blue-600">Forgot Password?</a>
                    </div>

                    <button className="w-full bg-blue-600 text-white py-2 rounded">Login</button>
                </form>

                <p className="text-center text-sm mt-4">
                    Don't have an account? <Link to="/register" className="text-blue-600">Register</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;