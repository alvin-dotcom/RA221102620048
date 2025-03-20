import React from 'react';
import { useUsers } from '../api';
import { MessageSquare } from 'lucide-react';

export default function TrendingPosts() {
  const { data: users, error } = useUsers();

  if (error) return <div>Failed to load trending posts</div>;
  if (!users) return <div>Loading...</div>;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold text-gray-900">Trending Posts</h1>
      <div className="grid gap-6">
        {/* Posts will be populated here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center space-x-4 mb-4">
            <img
              src="https://source.unsplash.com/random/100x100?portrait"
              alt="User avatar"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <h2 className="text-lg font-semibold">Sample Post</h2>
              <p className="text-gray-500">User Name</p>
            </div>
          </div>
          <p className="text-gray-700 mb-4">
            This is a sample post content. Real posts will be populated here.
          </p>
          <div className="flex items-center text-gray-500">
            <MessageSquare className="w-5 h-5 mr-2" />
            <span>0 comments</span>
          </div>
        </div>
      </div>
    </div>
  );
}