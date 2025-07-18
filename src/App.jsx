import React, { Suspense, lazy } from 'react';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';

const Signin = lazy(() => import('./component/Signin'));
const Login = lazy(() => import('./component/Login'));
 
function App() {
    return (
        <> 
            {<Suspense fallback={<div className='text-red-600 text-4xl flex justify-center items-center h-screen'>Loading...</div>}>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Signin />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Suspense> } 
        </>
    );
}

export default App;
