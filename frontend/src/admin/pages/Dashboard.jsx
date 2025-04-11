import React from "react";
import Header from "../components/Header";
import Nav from "../components/Nav";
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

const Dashboard = () => {
  // Dummy Stats (replace with fetched backend data)
  const stats = {
    users: 120,
    products: 80,
    orders: 150,
  };

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

  const recentOrders = [
    { id: 1, customer: "Alice", status: "Delivered", amount: "$100" },
    { id: 2, customer: "Bob", status: "Pending", amount: "$60" },
    { id: 3, customer: "Charlie", status: "Shipped", amount: "$80" },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />

      <div className="flex">
        {/* Sidebar */}
        <div className="w-1/4 bg-[#f3e5dc] min-h-screen shadow-lg">
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

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
            {/* Bar Chart */}
            <div className="bg-white p-6 rounded shadow">
              <h2 className="text-lg font-semibold mb-4">Bar Chart</h2>
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

          {/* Recent Orders Table */}
          <div className="bg-white p-6 rounded shadow">
            <h2 className="text-lg font-semibold mb-4">Recent Orders</h2>
            <table className="w-full table-auto text-left border border-gray-300">
              <thead className="bg-gray-200">
                <tr>
                  <th className="px-4 py-2">Order ID</th>
                  <th className="px-4 py-2">Customer</th>
                  <th className="px-4 py-2">Status</th>
                  <th className="px-4 py-2">Amount</th>
                </tr>
              </thead>
              <tbody>
                {recentOrders.map((order) => (
                  <tr key={order.id} className="hover:bg-gray-100">
                    <td className="px-4 py-2">{order.id}</td>
                    <td className="px-4 py-2">{order.customer}</td>
                    <td className="px-4 py-2">{order.status}</td>
                    <td className="px-4 py-2">{order.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
