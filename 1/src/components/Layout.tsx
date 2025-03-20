import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BarChart2, TrendingUp, Activity } from 'lucide-react';

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex space-x-8">
              <Link
                to="/"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                <BarChart2 className="w-5 h-5 mr-2" />
                Top Users
              </Link>
              <Link
                to="/trending"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                <TrendingUp className="w-5 h-5 mr-2" />
                Trending Posts
              </Link>
              <Link
                to="/feed"
                className="flex items-center px-3 py-2 text-gray-700 hover:text-blue-600"
              >
                <Activity className="w-5 h-5 mr-2" />
                Feed
              </Link>
            </div>
          </div>
        </div>
      </nav>
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Outlet />
      </main>
    </div>
  );
}