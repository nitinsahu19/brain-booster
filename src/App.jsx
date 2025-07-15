
import React , {lazy} from 'react';

import {Routes, Route } from 'react-router-dom';
const Login = lazy(() => import('./Components/Login'))
const NotFound  = lazy(() => import('./Components/NotFound'))
const Blog  = lazy(() => import('./Components/Blog'))
const SignUp  = lazy(() => import('./Components/SignUp'))
const Navbar  = lazy(() => import('./Components/Navbar'))





function App() {
  return (
    <div>
      

     
        <React.Suspense fallback={<div>Loading...</div>}>
          <Routes>
           
            <Route path="/" element={<Navbar/>}>
             
              <Route path="SignUp" element={<SignUp />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="*" element={<NotFound/>} />
          
            </Route>
          </Routes>
        </React.Suspense>
     
    
    </div>
  );
}

export default App;
