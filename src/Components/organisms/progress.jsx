
import React from 'react';

export function Progress({ value, color = 'bg-blue-500' }) {
  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`h-2 rounded-full transition-all duration-300 ${color}`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
}
