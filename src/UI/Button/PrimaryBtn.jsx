import React from 'react'

const PrimaryBtn = ({ text, addClass, hasBg }) => {
  return (
    <button className={`w-full ${hasBg ? 'bg-blue-600 hover:bg-blue-700 text-white' : ''}  px-5  py-1.5 cursor-pointer rounded-lg transition duration-200 ${addClass}`}>{text}</button>
  )
}

export default PrimaryBtn