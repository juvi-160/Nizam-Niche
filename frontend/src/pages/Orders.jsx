import React, { useContext } from 'react';
import Layout from '../components/Layout';
import { ShopContext } from '../context/ShopContext';

const Orders = () => {
  const { products, currency } = useContext(ShopContext);

  return (
    <div className="bg-[#efd1c0] min-h-screen">
      <Layout>
        <div className="border-t pt-16 px-5 sm:px-10 mb-20">
          <div className="text-3xl font-bold text-[#24160f] mb-10 text-center">
            <h1>MY ORDERS</h1>
          </div>

          <div className="flex flex-col gap-8">
            {products.slice(1, 4).map((item, index) => (
              <div
                key={index}
                className="py-6 border-2 rounded-lg  flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow-sm"
              >
                {/* Left Part - Image and Details */}
                <div className="flex items-start gap-6 px-4 text-sm">
                  <img className="w-20 sm:w-24 rounded-lg object-cover" src={item.images[0]} alt="product" />
                  <div>
                    <p className="sm:text-lg font-semibold text-[#24160f]">{item.title}</p>

                    <div className="flex flex-wrap items-center gap-4 mt-3 text-base text-[#6b1d1d] font-medium">
                      <p>{currency}{item.price}</p>
                      <p>Quantity: 1</p>
                      <p>Size: M</p>
                    </div>

                    <p className="mt-3 text-sm text-gray-600">
                      Date: <span className="text-[#6b1d1d] font-medium">27 April 2025</span>
                    </p>
                  </div>
                </div>

                {/* Right Part - Status and Button */}
                <div className="flex flex-col md:w-1/3 px-4 gap-4 md:items-end">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    <p className="text-sm md:text-base font-semibold text-green-600">Ready To Ship</p>
                  </div>

                  <button className="bg-[#6b1d1d] hover:bg-[#501414] text-white px-6 py-2 rounded-md text-sm font-semibold transition">
                    Track Order
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Layout>
    </div>
  );
};

export default Orders;
