"use client";
import React, { useEffect, useState } from "react";

interface User {
  _id: string;
  name: string;
  email: string;
  role: string;
  course?: string;
}

export default function AdminUserTable() {
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`/api/users${search ? `?name=${search}` : ""}`)
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .finally(() => setLoading(false));
  }, [search]);

  return (
    <div className=" py-28 px-4 max-w-3xl mx-auto min-h-screen">
      <input
        type="text"
        placeholder="Search by name..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        className="mb-4 px-3 py-2 border rounded w-full"
      />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <table className="w-full border rounded shadow">
          <thead className="text-left bg-amber-50 text-black">
            <tr>
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Course</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user: User) => (
              <tr key={user._id} className="border-t text-left">
                <td className="p-2">{user.name}</td>
                <td className="p-2">{user.email}</td>
                <td className="p-2">{user.role}</td>
                <td className="p-2">{user.course || "-"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
