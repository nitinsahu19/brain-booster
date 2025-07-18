import React from "react";
import Avatar from "../atoms/Avatar";

export default function UserRow({ rank, name, points, avatar }) {
  return (
    <tr>
      <td className="py-2 px-4">#{rank}</td>
      <td className="py-2 px-4 flex items-center gap-2">
        <Avatar src={avatar} alt={name} /> {name}
      </td>
      <td className="py-2 px-4">{points} points</td>
      <td className="py-2 px-4">Various Subjects</td>
    </tr>
  );
}