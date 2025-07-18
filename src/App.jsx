import React, { Suspense, lazy } from 'react';
// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Leaderboard from './component/template/Leaderboard';

const Signin = lazy(() => import('./component/Signin'));
const Login = lazy(() => import('./component/Login'));

function App() {
    return (
        <>
            {<Suspense fallback={<div className='text-red-600 text-4xl flex justify-center items-center h-screen'>Loading...</div>}>
                <Leaderboard />
                <Routes>
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </Suspense>}
        </>
    );
}

export default App;
