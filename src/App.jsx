import React, { Suspense, lazy } from 'react'; 
import { Routes, Route } from 'react-router-dom'; 

const BlogSection = lazy(() => import('./components/templates/BlogSection')); 
const CardMaster = lazy(() => import('./components/templates/CardMaster'))


function App() {
  return (
    <Suspense fallback={<div className='text-red-600 text-4xl flex justify-center items-center h-screen'>Loading...</div>}>
      <Routes> 
        <Route path='/' element={<BlogSection />}>   
        </Route>
      </Routes>
    </Suspense>
 
  )
}

export default App;

 