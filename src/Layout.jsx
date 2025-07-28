import React from 'react'
// import Navbar from './Components/Header/Header'
import { Outlet } from 'react-router-dom'
// import Navbar from './Pages/Header/Header'
import Footer from './Pages/Footer/Footer'
// import Navbar from './Components/organisms/Navbar'

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout