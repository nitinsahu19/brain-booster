import React from 'react'

function LatestfromBlog({ item }) {
    return (
        <>
            <div
                key={item.id}
                className="bg-white rounded-xl shadow overflow-hidden border"
            >
                <img src={item.image}alt={item.title}className="w-full h-48 object-cover"/>

                <div className="p-4">
                    <p className="text-sm text-blue-600 font-medium mb-1">
                        {item.category} &nbsp; <span className="text-gray-400">· {item.readTime}</span>
                    </p>
                    <h3 className="text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    <a href="#"className="text-blue-600 text-sm font-medium hover:underline flex items-center gap-1">
                        Read More <span className="text-lg">→</span>
                    </a>
                </div>
            </div>
        </>
    )
}

export default LatestfromBlog