import React from 'react'

function TopformersCard({ user }) {
    return (

        <>
            <li
                key={user.id}
                className="flex items-center justify-between"
            >
                <div className="flex items-center gap-3">
                    <span className="text-sm font-medium w-5">{user.id}</span>
                    <img
                        src={user.image}
                        alt={user.name}
                        className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                        <p className="text-sm font-semibold">{user.name}</p>
                        <p className="text-xs text-gray-500">{user.points} points</p>
                    </div>
                </div>
                <span className="text-gray-400 text-xl">&gt;</span>
            </li>
        </>
    )
}

export default TopformersCard