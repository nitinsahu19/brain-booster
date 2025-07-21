import React from 'react'

const AnswerFiled = ({ name, answers, value, selected, onSelect }) => {
    const isSelected = selected === value;
    return (
        <>
            <label className='cursor-pointer inputAnswer block'>
                <div className={`font-bold  border rounded-lg px-4 py-3 mt-3 flex items-center gap-2 transition 
                ${isSelected ? 'bg-green-400 text-white' : 'hover:bg-gray-100'}`}
                    onClick={() => onSelect(value)}>
                    <input type="radio" name={name} value={value} checked={isSelected} onChange={() => onSelect(value)} className='opacity-0 cursor-pointer ' />
                    <span>{answers}</span>
                </div>
            </label>
        </>
    )
}

export default AnswerFiled