import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../redux/reducers/userSlice";


const Register = () => {

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user);

    const signupHandler = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password1 = e.target.password1.value;
        const password2 = e.target.password2.value;


        if (password1 !== password2) {
            alert("Passwords do not match!");
            return;
        }

        const isExistingUser = user.allUsers.find((u) => u.email === email);
        if (isExistingUser) {
            alert("User with this email already exists!");
            return;
        }

        const newuser = { name, email, password: password1 };
        dispatch(signup(newuser));
        navigate('/')
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-md shadow-md w-full max-w-sm">
                <h2 className="text-2xl font-semibold text-center mb-6">Register</h2>

                <form onSubmit={signupHandler} className="space-y-4">
                    <div>
                        <label className="block mb-1 text-sm">Full Name</label>
                        <input
                            name="name"
                            type="text"
                            required
                            className="w-full border px-3 py-2 rounded"
                            placeholder="Enter your name"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm">Email</label>
                        <input
                            name="email"
                            type="email"
                            required
                            className="w-full border px-3 py-2 rounded"
                            placeholder="Enter your email"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm">Password</label>
                        <input
                            name="password1"
                            type="password"
                            required
                            className="w-full border px-3 py-2 rounded"
                            placeholder="Create a password"
                        />
                    </div>
                    <div>
                        <label className="block mb-1 text-sm">Confirm Password</label>
                        <input
                            name="password2"
                            type="password"
                            required
                            className="w-full border px-3 py-2 rounded"
                            placeholder="Confirm your password"
                        />
                    </div>
                    <Link to="/login" className="text-blue-600 text-sm hover:underline"><button type="submit" className="w-full bg-blue-600 text-white py-2 rounded">Create Account</button>
                    </Link>
                </form>

                <p className="text-center text-sm mt-4">
                    Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;