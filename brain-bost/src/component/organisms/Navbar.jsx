import React from 'react'
import Logo from '../molecules/navigation/Logo'
import Navigation from '../molecules/navigation/Navigation'

const Navbar = () => {
  return (
   <>
   <nav className="flex justify-between items-center px-8 py-4 shadow-md bg-white relative">
    <div className='md:w-70'>
      <Logo/>
    </div>
    <div className='md:w-240'>
      <Navigation/>
    </div>
   </nav>
   </>
  )
}

export default Navbar
