import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { backendUrl } from '../App';
import Header from '../components/Header';
import Nav from '../components/Nav';
import SummaryCards from '../components/SummaryCards';
import AnalyticsCharts from '../components/AnalyticsCharts';
import LoadingSpinner from '../components/LoadingSpinner';
import ErrorMessage from '../components/ErrorMessage';

const Dashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    users: 0,
    products: 0,
    orders: 0,
    productsByCategory: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const adminToken = localStorage.getItem('adminToken');
        const config = {
          headers: {
            Authorization: `Bearer ${adminToken}`
          }
        };

        const [usersRes, productsRes, ordersRes] = await Promise.all([
          axios.get(`${backendUrl}/api/user/stats`, config),
          axios.get(`${backendUrl}/api/product/stats`, config),
          axios.get(`${backendUrl}/api/order/stats`, config),
        ]);

        setDashboardData({
          users: usersRes.data.stats.totalUsers,
          products: productsRes.data.stats.totalProducts,
          orders: ordersRes.data.stats.totalOrders,
          loading: false,
          error: null
        });
      } catch (err) {
        setDashboardData(prev => ({
          ...prev,
          loading: false,
          error: err.response?.data?.message || 'Failed to fetch dashboard data'
        }));
      }
    };

    fetchDashboardData();
    const interval = setInterval(fetchDashboardData, 300000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-[#24160f] min-h-screen shadow-lg fixed">
          <Nav />
        </div>
        
        {/* Main Content */}
        <div className="ml-64 flex-1 p-8">
          {dashboardData.loading ? (
            <LoadingSpinner fullPage={true} />
          ) : dashboardData.error ? (
            <ErrorMessage message={dashboardData.error} />
          ) : (
            <>
              <h1 className="text-3xl font-bold text-gray-800 mb-8">Dashboard Overview</h1>

              <div className="space-y-8">
                <SummaryCards
                  users={dashboardData.users}
                  products={dashboardData.products}
                  orders={dashboardData.orders}
                />

                <AnalyticsCharts
                  users={dashboardData.users}
                  orders={dashboardData.orders}
                  products={dashboardData.products}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;