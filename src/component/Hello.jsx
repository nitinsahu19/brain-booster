import React, { useState } from 'react'

const Hello = () => {

  const [color , setcolor] = useState('white')
  return (
    <>
      <div style={{background : color}} className='flex'>
        <button onClick={()=>setcolor('red')} className='w-25 h-9 bg-red-500'>Red</button>
        <button onClick={()=>setcolor('green')} className='w-25 h-9 bg-green-500'>Green</button>
        <button onClick={()=>setcolor('blue')} className='w-25 h-9 bg-blue-500'>Blue</button> 
        <button onClick={()=>setcolor('yellow')} className='w-25 h-9 bg-yellow-500'>yellow</button>
        <button onClick={()=>setcolor('pink')} className='w-25 h-9 bg-pink-500'>pink</button>
        <button onClick={()=>setcolor('white')} className='w-25 h-9 bg-white'>white</button>
        <button onClick={()=>setcolor('black')} className='w-25 h-9 bg-black'>black</button>
        <button onClick={()=>setcolor('purple')} className='w-25 h-9 bg-sky-500'>sky</button>
      </div>
    </>
  )
}

export default Hello
