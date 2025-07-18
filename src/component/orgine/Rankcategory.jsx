import React from 'react'

const Rankcategory = ({ rank='', user='', score='' , subjectsF='', userImage }) => {
  return (
    <div className="grid grid-cols-4 items-center whitespace-nowrap px-4 py-3 hover:bg-gray-200 hover:cursor-pointer transition-all">
      <div className="w-1/6 font-medium">{rank}</div>
      <div className="w-1/3 flex items-center gap-3">
        <img src={userImage} className="w-10 h-10 rounded-full object-cover" />
        <span className="font-medium">{user}</span>
      </div>
      <div className="w-1/4 font-medium">{score} </div>
      <div className="w-1/4 text-gray-500">{subjectsF}</div>
    </div>
  )
}

export default Rankcategory
