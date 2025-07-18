import React from 'react'

const TopRankCard = ({ rankSize, text, img, name, point, subject }) => {
  return (
    <div className="w-64 p-5 rounded-xl shadow-md border text-center space-y-3 bg-white hover:shadow-lg transition-all">
      <h1 className={`${rankSize} font-bold text-gray-800 text-2xl`}>{text}</h1>
      <img src={img} alt={name} className="w-20 h-20 rounded-full mx-auto object-cover" />
      <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
      <p className="text-blue-600 font-medium hover:underline cursor-pointer">{point} Points</p>
      <p className="text-gray-500">{subject}</p>
    </div>
  )
}

export default TopRankCard
