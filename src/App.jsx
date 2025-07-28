import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";




const Navbar = lazy(() => import("./Components/Navbar"));
const NotFound = lazy(() => import("./Components/NotFound"));


import MyProgress from "./data/MyProgress"; 


function App() {
  return (
    <div>
      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
        <Routes>
          
          <Route path="/" element={<Navbar />}>
            <Route path="progress" element={<MyProgress />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
