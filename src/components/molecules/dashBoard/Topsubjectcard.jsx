import React from 'react'

function Topsubjectcard({ subject, index }) {
    return (
        <>
            <div key={index} className="mb-5">
                <div className="flex justify-between items-center mb-1">
                    <div className="flex items-center gap-2">
                        <img
                            src={subject.icon}
                            alt={subject.title}
                            className="w-6 h-6"
                        />
                        <span className="text-sm font-medium text-gray-700">{subject.title}</span>
                    </div>
                    <span className="text-sm font-semibold text-gray-800">
                        {subject.percentage}%
                    </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                        className="bg-indigo-600 h-2 rounded-full"
                        style={{ width: `${subject.percentage}%` }}
                    ></div>
                </div>
            </div>
        </>
    )
}

export default Topsubjectcard