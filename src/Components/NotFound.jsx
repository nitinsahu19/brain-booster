import React from 'react'
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

const NotFound = () => {
  return (
    <div className='text-center '>
      <h2 className='mt-2 text-xl font-bold text-red-500'>404 - Page Not Found</h2>
      <p className='mt-2 text-xl hover:text-red-500'>Sorry, the page you are looking for does not exist</p>
      <DotLottieReact
      src="https://lottie.host/29ed88b7-81dd-4718-ab73-faaf5a971d43/n15R2MmhJl.lottie"
      loop
      autoplay
      style={{ width: '600px', height: '400px', margin: '0 auto' }}
    />
    
    </div>
  )
}

export default NotFound
