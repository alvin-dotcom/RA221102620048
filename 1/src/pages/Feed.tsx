import React from 'react';
import { useUsers } from '../api';
import { Clock } from 'lucide-react';

export default function Feed() {
  const { data: users, error } = useUsers();

  if (error) return <div>Failed to load feed</div>;
  if (!users) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Live Feed</h1>
      <div className="space-y-6">
        {/* Posts will be populated here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="https://source.unsplash.com/random/100x100?nature"
              alt="Post image"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">Sample Post</h2>
              <div className="flex items-center text-gray-500">
                <Clock className="w-4 h-4 mr-1" />
                <span>Just now</span>
              </div>
            </div>
          </div>
          <p className="text-gray-700">
            This is a sample post content. Real-time posts will appear here.
          </p>
        </div>
      </div>
    </div>
  );
}