import React, { useMemo } from 'react';
import { useUsers } from '../api';
import { User } from 'lucide-react';

export default function TopUsers() {
  const { data: users, error } = useUsers();

  const topUsers = useMemo(() => {
    if (!users) return [];
    return Object.entries(users)
      .map(([id, name]) => ({ id, name }))
      .slice(0, 5);
  }, [users]);

  if (error) return <div>Failed to load users</div>;
  if (!users) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Top Users</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {topUsers.map((user) => (
          <div
            key={user.id}
            className="bg-white rounded-lg shadow-md p-6 flex items-center space-x-4"
          >
            <div className="bg-blue-100 p-3 rounded-full">
              <User className="w-6 h-6 text-blue-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-900">{user.name}</h2>
              <p className="text-gray-500">User ID: {user.id}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}