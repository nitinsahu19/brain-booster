import { NavLink, Outlet } from 'react-router-dom';
// import logo from '../image/logo'
import { MdWbSunny } from "react-icons/md";
import { LuMoonStar } from "react-icons/lu";
import { useState } from 'react';

const Navbar = () => {
    const [darkMode, setDarkMode] = useState(true)

    const handlclike = () => {
        setDarkMode(!darkMode)
    }
    return (
        <>

            <nav className={`${darkMode ? 'bg-black text-white' : 'bg-black text-red-500'} p-4 flex justify-between items-center`}> 
                <div className="text-2xl flex font-bold items-center space-x-2">
                    <img className='w-10 object-center' src='https://thumbs.dreamstime.com/b/blue-graduation-cap-gold-tassel-dark-background-383531998.jpg' alt="" />
                    <span>Brain Booster</span>
                </div>
                <ul className="hidden md:flex space-x-6">
                    <li className="hover:text-blue-400 cursor-pointer">Home</li>
                    <li className="hover:text-blue-400 cursor-pointer">Subjects</li>
                    <li className="hover:text-blue-400 cursor-pointer">Leaderboard</li>
                    <li className="hover:text-blue-400 cursor-pointer">Blog</li>
                    <button className='cursor-pointer text-2xl' onClick={handlclike}>{darkMode ? <MdWbSunny /> : <LuMoonStar />}</button>
                </ul>
                <ul className="hidden md:flex space-x-6">
                    <p><NavLink to="/signin" className={({ isActive }) => isActive ? 'text-blue-400' : ''}>Sign in</NavLink></p>
                    <button className='bg-blue-600 w-25 rounded-2xl cursor-pointer h-8'><NavLink to="/login" className={({ isActive }) => isActive ? 'text-red-500' : ''}>Login</NavLink></button>
                </ul>
            </nav>

            <Outlet />
        </>
    );
};

export default Navbar;
