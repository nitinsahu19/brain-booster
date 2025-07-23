import React from 'react'
import Navbar from '../organisms/Navbar'
import { Outlet } from 'react-router'
import Foter from '../pages/Foter'

const Layout = () => {
  return (
    <div>
      <header>
        <Navbar/>
      </header>
      <main>
        <Outlet/>
      </main>
      <footer>
      <Foter/>
      </footer>
    </div>
  )
}

export default Layout
