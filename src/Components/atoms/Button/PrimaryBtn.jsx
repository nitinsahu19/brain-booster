import React from 'react'

const PrimaryBtn = ({onClick, text, addClass, hasBg }) => {
  return (
    <button onClick={onClick} className={` ${hasBg ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}  px-6  py-1.5 cursor-pointer rounded-lg transition duration-200 font-semibold ${addClass}`}>{text}</button>
  )
}

export default PrimaryBtn 