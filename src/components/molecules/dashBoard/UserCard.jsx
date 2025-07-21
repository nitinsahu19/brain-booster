import React from "react";
import Avatar from "../../atoms/Avatar";

export default function UserCard({ rank, name, points, subjects, avatar }) {
  return (
    <div className="text-center bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold">#{rank}</h2>
      <div className="flex justify-center my-2">
        <Avatar src={avatar} alt={name} />
      </div>
      <p className="font-semibold">{name}</p>
      <p className="text-blue-600 font-medium">{points} points</p>
      <p className="text-sm text-gray-500">{subjects}</p>
    </div>
  );
}