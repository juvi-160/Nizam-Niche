import React, { useState, useEffect } from "react";
import Header from "../components/Header.jsx";
import Nav from "../components/Nav.jsx";
import UserStats from "../components/UserStats.jsx";
import ProductStats from "../components/ProductStats.jsx";
import OrderStats from "../components/OrderStats.jsx"; // Add this import
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
} from "recharts";
import axios from "axios";
import { backendUrl } from "../App"; // Ensure this points to your backend URL

const Dashboard = () => {
  const [stats, setStats] = useState({
    users: 0,
    products: 0,
    orders: 0,
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch all data on component mount
  useEffect(() => {
    const fetchData = async () => {
  try {
    const adminToken = localStorage.getItem('adminToken');
    const config = {
      headers: {
        Authorization: `Bearer ${adminToken}`
      }
    };

    const [usersResponse, productsResponse, ordersResponse] = await Promise.all([
      axios.get(`${backendUrl}/api/user/stats`, config),
      axios.get(`${backendUrl}/api/product/stats`, config),
      axios.get(`${backendUrl}/api/order/stats`, config)
    ]);

    console.log("Users Response:", usersResponse.data);
    console.log("Products Response:", productsResponse.data);
    console.log("Orders Response:", ordersResponse.data);

    setStats({
      users: usersResponse.data.stats.totalUsers,
      products: productsResponse.data.stats.totalProducts,
      orders: ordersResponse.data.stats.totalOrders,
    });

    setLoading(false);
  } catch (err) {
    console.error("Failed to fetch data:", err);
    setError("Failed to load dashboard data");
    setLoading(false);
  }
};
    fetchData();
    // Refresh data every 5 minutes
    const interval = setInterval(fetchData, 300000);
    return () => clearInterval(interval);
  }, []);


  // Prepare chart data
  const pieData = [
    { name: "Users", value: stats.users },
    { name: "Products", value: stats.products },
    { name: "Orders", value: stats.orders },
  ];

  const COLORS = ["#e53935", "#8e24aa", "#3949ab"];

  const barData = [
    { name: "Users", count: stats.users },
    { name: "Products", count: stats.products },
    { name: "Orders", count: stats.orders },
  ];

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="flex">
          <div className="w-1/4 bg-[#24160f] min-h-screen shadow-lg">
            <Nav />
          </div>
          <div className="flex-1 p-8 flex items-center justify-center">
            <p>Loading dashboard data...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100">
        <Header />
        <div className="flex">
          <div className="w-1/4 bg-[#24160f] min-h-screen shadow-lg">
            <Nav />
          </div>
          <div className="flex-1 p-8 flex items-center justify-center">
            <p className="text-red-500">{error}</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-[#24160f] min-h-screen shadow-lg">
          <Nav />
        </div>

        {/* Main Dashboard */}
        <div className="flex-1 p-8">
          <h1 className="text-3xl font-bold text-[#24160f] mb-6">
            Admin Dashboard
          </h1>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
            <div className="bg-white p-6 shadow rounded text-center">
              <h2 className="text-xl font-semibold">Users</h2>
              <p className="text-3xl text-red-600">{stats.users}</p>
            </div>
            <div className="bg-white p-6 shadow rounded text-center">
              <h2 className="text-xl font-semibold">Products</h2>
              <p className="text-3xl text-purple-700">{stats.products}</p>
            </div>
            <div className="bg-white p-6 shadow rounded text-center">
              <h2 className="text-xl font-semibold">Orders</h2>
              <p className="text-3xl text-blue-700">{stats.orders}</p>
            </div>
          </div>

          {/* User Statistics Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">User Statistics</h2>
            <UserStats />
          </section>

          {/* Product Statistics Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Product Statistics</h2>
            <ProductStats />
          </section>

          {/* Order Statistics Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-semibold mb-4">Order Statistics</h2>
            <OrderStats />
          </section>

          {/* Overview Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Bar Chart */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-lg font-semibold mb-4">System Overview</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={barData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="count" fill="#ef4444" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-lg font-semibold mb-4">Data Distribution</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    label
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {pieData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;