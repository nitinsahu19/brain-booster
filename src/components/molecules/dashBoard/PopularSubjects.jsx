import React from 'react'

function PopularSubjects({ item, index }) {
    return (
        <>
            <div
                key={index}
                className="bg-white p-4 rounded-xl shadow-md border flex flex-col gap-3">
                <img src={item.icon} alt={item.name} className="w-10 h-10" />
                <h4 className="text-lg font-semibold text-gray-800">{item.name}</h4>
                <p className="text-sm text-gray-500">{item.quizzes} Quizzes</p>
                <div className="w-full bg-gray-200 h-2 rounded-full">
                    <div
                        className="bg-blue-500 h-2 rounded-full"
                        style={{ width: `${item.progress}%` }}
                    ></div>
                </div>
                <button className="mt-2 border border-blue-500 text-blue-500 px-4 py-1 rounded-lg hover:bg-blue-50 text-sm">
                    Start Quiz
                </button>
            </div>
        </>
    )
}

export default PopularSubjects