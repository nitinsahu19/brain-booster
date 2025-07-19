import React from 'react'
import Navbar from '../organisms/Navbar'
import { Outlet } from 'react-router'

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

      </footer>
    </div>
  )
}

export default Layout
