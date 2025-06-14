import React, { useState, useEffect } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';
import axios from 'axios';

const UserStats = () => {
  const [stats, setStats] = useState(null);
  const [recentUsers, setRecentUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem('adminToken');
        const config = {
          headers: { Authorization: `Bearer ${token}` }
        };

        // Fetch stats
        const statsRes = await axios.get('http://localhost:4000/api/user/stats', config);
        setStats(statsRes.data.stats);

        // Fetch recent users
        const usersRes = await axios.get('http://localhost:4000/api/user/recent', config);
        setRecentUsers(usersRes.data.users);

        setLoading(false);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to load user data');
        setLoading(false);
      }
    };

    fetchData();
    
    // Refresh data every 5 minutes
    const interval = setInterval(fetchData, 300000);
    return () => clearInterval(interval);
  }, []);

  if (loading) return <div className="text-center py-8">Loading user statistics...</div>;
  if (error) return <div className="text-red-500 text-center py-8">{error}</div>;
  if (!stats) return <div className="text-center py-8">No data available</div>;

  // Prepare monthly growth data for chart
  const growthData = stats.monthlyGrowth.map(item => ({
    name: `${new Date(0, item._id.month - 1).toLocaleString('default', { month: 'short' })} ${item._id.year}`,
    users: item.count
  }));

  return (
    <div className="space-y-8">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <StatCard 
          title="Total Users" 
          value={stats.totalUsers} 
          icon="👥" 
          color="bg-blue-100 text-blue-800"
        />
        <StatCard 
          title="New Users (7d)" 
          value={stats.newUsers} 
          icon="🆕" 
          color="bg-green-100 text-green-800"
        />
        <StatCard 
          title="Active Carts" 
          value={stats.usersWithCart} 
          icon="🛒" 
          color="bg-purple-100 text-purple-800"
        />
        <StatCard 
          title="With Wishlist" 
          value={stats.usersWithWishlist} 
          icon="❤️" 
          color="bg-red-100 text-red-800"
        />
      </div>

      {/* Growth Chart */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">User Growth (Last 6 Months)</h3>
        <div className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={growthData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="users" fill="#8884d8" name="New Users" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Users Table */}
      <div className="bg-white p-6 rounded-lg shadow">
        <h3 className="text-lg font-semibold mb-4">Recent Signups</h3>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Joined</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {recentUsers.map(user => (
                <tr key={user._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {user.firstName} {user.lastName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {user.email}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-gray-500">
                    {new Date(user.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Reusable stat card component
const StatCard = ({ title, value, icon, color }) => (
  <div className={`p-4 rounded-lg ${color} flex items-center justify-between`}>
    <div>
      <p className="text-sm font-medium">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
    <span className="text-3xl">{icon}</span>
  </div>
);

export default UserStats;