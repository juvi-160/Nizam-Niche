import React, { useContext, useState } from 'react';
import Layout from '../components/Layout';
import CartTotal from '../components/CartTotal';
import stripLogo from '../assets/stripe-logo.png';
import razorpay from '../assets/razorpay.png';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const {navigate} = useContext(ShopContext);


  return (
    <div className="bg-[#efd1c0] min-h-screen">
      <Layout>
        <div className="flex flex-col lg:flex-row justify-between gap-8 pt-5 sm:pt-14 border-t min-h-[80vh] px-5 sm:px-10">

          {/* Left Side - Delivery Info */}
          <div className="flex flex-col gap-5 w-full lg:max-w-[500px] mb-20">
            <h1 className="text-2xl font-semibold text-[#24160f]">DELIVERY INFORMATION</h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="border-2 border-[#6b1d1d] rounded py-2 px-4 w-full"
                type="text"
                placeholder="First Name"
              />
              <input
                className="border-2 border-[#6b1d1d] rounded py-2 px-4 w-full"
                type="text"
                placeholder="Last Name"
              />
            </div>

            <input
              className="border-2 border-[#6b1d1d] rounded py-2 px-4 w-full"
              type="email"
              placeholder="Email"
            />
            <input
              className="border-2 border-[#6b1d1d] rounded py-2 px-4 w-full"
              type="text"
              placeholder="Street"
            />

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="border-2 border-[#6b1d1d] rounded py-2 px-4 w-full"
                type="text"
                placeholder="City"
              />
              <input
                className="border-2 border-[#6b1d1d] rounded py-2 px-4 w-full"
                type="text"
                placeholder="State"
              />
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <input
                className="border-2 border-[#6b1d1d] rounded py-2 px-4 w-full"
                type="number"
                placeholder="Zipcode"
              />
              <input
                className="border-2 border-[#6b1d1d] rounded py-2 px-4 w-full"
                type="text"
                placeholder="Country"
              />
            </div>

            <input
              className="border-2 border-[#6b1d1d] rounded py-2 px-4 w-full"
              type="number"
              placeholder="Phone Number"
            />
          </div>

          {/* Right Side - Cart and Payment */}
          <div className="flex flex-col gap-8 w-full lg:max-w-[500px]">
            <div>
              <h1 className="text-2xl font-semibold text-[#24160f] mb-2">CART DETAILS</h1>
              <CartTotal />
            </div>

            <div className="mt-4">
              <h1 className="text-xl font-semibold mb-4 text-[#24160f]">PAYMENT METHOD</h1>
              <div className="flex flex-col sm:flex-row gap-4">

                {/* Stripe */}
                <div
                  onClick={() => setMethod('stripe')}
                  className="flex items-center gap-4 border-2 border-[#24160f] p-2 rounded cursor-pointer hover:border-[#6b1d1d] hover:shadow-md transition-all"
                >
                  <div
                    className={`w-4 h-4 border-2 border-[#24160f] rounded-full ${
                      method === 'stripe' ? 'bg-[#6b1d1d]' : ''
                    }`}
                  ></div>
                  <img className="h-8 w-[100px]" src={stripLogo} alt="stripe" />
                </div>

                {/* Razorpay */}
                <div
                  onClick={() => setMethod('razorpay')}
                  className="flex items-center gap-4 border-2 border-[#24160f] p-2 rounded cursor-pointer hover:border-[#6b1d1d] hover:shadow-md transition-all"
                >
                  <div
                    className={`w-4 h-4 border-2 border-[#24160f] rounded-full ${
                      method === 'razorpay' ? 'bg-[#6b1d1d]' : ''
                    }`}
                  ></div>
                  <img className="h-8 w-[100px]" src={razorpay} alt="razorpay" />
                </div>

                {/* Cash on Delivery */}
                <div
                  onClick={() => setMethod('cod')}
                  className="flex items-center gap-4 border-2 border-[#24160f] p-2 rounded cursor-pointer hover:border-[#6b1d1d] hover:shadow-md transition-all"
                >
                  <div
                    className={`w-4 h-4 border-2 border-[#24160f] rounded-full ${
                      method === 'cod' ? 'bg-[#6b1d1d]' : ''
                    }`}
                  ></div>
                  <span className="text-[#24160f] font-medium">Cash on Delivery</span>
                </div>

              </div>
            </div>

            <div className='w-full text-end'>
              <button onClick={() => navigate('/orders')} className='bg-[#24160f] text-[#efd1c0] font-bold px-16 py-3 text-sm hover:bg-[#6b1d1d] transition ease-in-out'>PLACE ORDER</button>
              
            </div>
          </div>

        </div>
      </Layout>
    </div>
  );
};

export default PlaceOrder;
