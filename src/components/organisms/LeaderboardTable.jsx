import React from "react";
import UserRow from "../molecules/UserRow";

export default function LeaderboardTable({ users }) {
  return (
    <table className="w-full mt-6 text-left">
      <thead>
        <tr className="bg-gray-100">
          <th className="py-2 px-4">Rank</th>
          <th className="py-2 px-4">User</th>
          <th className="py-2 px-4">Score</th>
          <th className="py-2 px-4">Subjects</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, i) => (
          <UserRow key={i} {...user} />
        ))}
      </tbody>
    </table>
  );
}
