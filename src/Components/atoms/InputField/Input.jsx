import React from 'react'

const Input = ({ type, placeholder, name , ...rest }) => {
    return (
        <div>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                {...rest}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
        </div>
    )
}

export default Input