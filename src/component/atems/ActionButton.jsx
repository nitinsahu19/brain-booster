import React from 'react'

const ActionButton = ({ bgColor = '', text = '' }) => {
  return (
    <button className={`w-20 text-xs cursor-pointer h-9 border rounded-md font-medium ${bgColor}`}>
      {text}
    </button>
  )
}

export default ActionButton
