import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

// Lazy loaded components


const Navbar = lazy(() => import("./Components/Navbar"));
const NotFound = lazy(() => import("./Components/NotFound"));

// Atomic-designed progress dashboard
import MyProgress from "./data/MyProgress"; // Make sure the path is correct
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Suspense fallback={<div className="text-center p-4">Loading...</div>}>
        <Routes>
          {/* Wrap these routes with Navbar layout */}
          <Route path="/" element={<Navbar />}>
            <Route index element={<Login />} />
           
            
            <Route path="progress" element={<MyProgress />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
