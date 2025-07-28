import React from 'react'

const Button = ({ label, active }) => {
  return (
    <>
      <button
        className={`w-25 h-9 bg-blue-100 text-blue-800 text-sm rounded-full border cursor-pointer ${active ? " text-black border-gray-300" : " border-gray-300"
          }`}> {label}
      </button>
    </>
  )
}

export default Button



