import React from 'react'

function Card({item, index }) {
    return (
        <>
            <div
                key={index}
                className="bg-white p-4 rounded-xl flex items-center gap-4 shadow-md border"
            >
                <img src={item.Image} alt={item.Title} className="w-10 h-10" />
                <div>
                    <h4 className="text-sm text-gray-600 font-medium">{item.Title}</h4>
                    <p className="text-lg font-bold text-gray-800">{item.Value}</p>
                </div>
            </div>
        </>
    )
}

export default Card