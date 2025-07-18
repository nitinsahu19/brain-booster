import React from 'react'

const AnswerFiled = (name) => {
    return (
        <>
            <div className='space-y-3'>
                <label className='border rounded-lg px-4 py-3 hover:bg-gray-50 cursor-pointer transition'>Answers
                </label>
                <input type="checkbox" name={name} />
            </div>
        </>
    )
}

export default AnswerFiled