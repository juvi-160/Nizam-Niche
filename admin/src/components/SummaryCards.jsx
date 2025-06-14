import React from 'react';

const SummaryCards = ({ users, products, orders }) => {
  const stats = [
    {
      title: 'Total Users',
      value: users,
      icon: '👥',
      color: 'bg-gradient-to-r from-blue-500 to-blue-600',
      textColor: 'text-white'
    },
    {
      title: 'Total Products',
      value: products,
      icon: '🛍️',
      color: 'bg-gradient-to-r from-purple-500 to-purple-600',
      textColor: 'text-white'
    },
    {
      title: 'Total Orders',
      value: orders,
      icon: '📦',
      color: 'bg-gradient-to-r from-green-500 to-green-600',
      textColor: 'text-white'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {stats.map((stat, index) => (
        <div 
          key={index}
          className={`${stat.color} rounded-xl shadow-lg p-6 ${stat.textColor} transition-transform hover:scale-105`}
        >
          <div className="flex justify-between items-center">
            <div>
              <p className="text-sm font-medium opacity-80">{stat.title}</p>
              <p className="text-3xl font-bold mt-2">{stat.value}</p>
            </div>
            <span className="text-4xl">{stat.icon}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SummaryCards;