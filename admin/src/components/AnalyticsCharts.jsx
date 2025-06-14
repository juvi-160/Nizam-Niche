import React from 'react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  PieChart, 
  Pie, 
  Cell,
  Legend 
} from 'recharts';

const AnalyticsCharts = ({ 
  users, 
  orders, 
  productStats 
}) => {
  // Colors for charts
  const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EC4899', '#6366F1', '#F97316'];

  // Transform category data for the chart
  const categoryData = productStats?.productsByCategory?.map(item => ({
    category: item._id,
    count: item.count
  })) || [];

  // Stock status data
  const stockData = [
    { name: 'In Stock', value: productStats?.totalProducts - productStats?.outOfStockProducts },
    { name: 'Low Stock', value: productStats?.lowStockProducts },
    { name: 'Out of Stock', value: productStats?.outOfStockProducts }
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Products by Category Bar Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Products by Category</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={categoryData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" opacity={0.3} />
              <XAxis 
                dataKey="category" 
                tick={{ fontSize: 12 }}
                angle={-45}
                textAnchor="end"
                height={60}
              />
              <YAxis />
              <Tooltip />
              <Bar 
                dataKey="count" 
                name="Products"
                radius={[4, 4, 0, 0]}
                animationDuration={1500}
              >
                {categoryData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Stock Status Pie Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Product Stock Status</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={stockData}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={2}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                {stockData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => [`${value} products`, 'Count']} />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Users vs Orders Pie Chart */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Users vs Orders</h2>
        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={[
                  { name: 'Users', value: users },
                  { name: 'Orders', value: orders }
                ]}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                paddingAngle={5}
                dataKey="value"
                label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
              >
                <Cell fill={COLORS[0]} />
                <Cell fill={COLORS[1]} />
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Products Card */}
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-200">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
        <div className="space-y-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <p className="text-sm text-blue-600 font-medium">Recently Added Products</p>
            <p className="text-2xl font-bold text-blue-800">
              {productStats?.recentProducts || 0}
              <span className="text-sm font-normal ml-1">(last 7 days)</span>
            </p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg">
            <p className="text-sm text-purple-600 font-medium">Top Sub-Categories</p>
            <div className="mt-2 space-y-2">
              {productStats?.productsBySubCategory?.slice(0, 3).map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span className="text-gray-700">{item._id}</span>
                  <span className="font-medium">{item.count} products</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCharts;