import React, { useContext, useState } from 'react';
import Layout from '../components/Layout';
import CartTotal from '../components/CartTotal';
import stripLogo from '../assets/stripe-logo.png';
import razorpay from '../assets/razorpay.png';
import { ShopContext } from '../context/ShopContext';

const PlaceOrder = () => {
  const [method, setMethod] = useState('cod');
  const { navigate } = useContext(ShopContext);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    street: '',
    city: '',
    state: '',
    zipcode: '',
    country: '',
    phone: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!emailRegex.test(formData.email)) newErrors.email = 'Valid email is required';
    if (!formData.street.trim()) newErrors.street = 'Street address is required';
    if (!formData.city.trim()) newErrors.city = 'City is required';
    if (!formData.state.trim()) newErrors.state = 'State is required';
    if (!formData.zipcode.trim()) newErrors.zipcode = 'Zipcode is required';
    if (!formData.country.trim()) newErrors.country = 'Country is required';
    if (!formData.phone.trim() || formData.phone.length < 10) newErrors.phone = 'Valid phone number is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsSubmitting(true);
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        navigate('/orders');
      }, 1500);
    }
  };

  return (
    <div className="bg-[#efd1c0] min-h-screen">
      <Layout>
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row justify-between gap-8 pt-5 sm:pt-14 border-t min-h-[80vh] px-5 sm:px-10">
          {/* Left Side - Delivery Info */}
          <div className="flex flex-col gap-5 w-full lg:max-w-[500px] mb-20">
            <h1 className="text-2xl font-semibold text-[#24160f]">DELIVERY INFORMATION</h1>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className={`border-2 ${errors.firstName ? 'border-red-500' : 'border-[#6b1d1d]'} rounded py-2 px-4 w-full`}
                  type="text"
                  placeholder="First Name"
                />
                {errors.firstName && <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>}
              </div>
              <div className="w-full">
                <input
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className={`border-2 ${errors.lastName ? 'border-red-500' : 'border-[#6b1d1d]'} rounded py-2 px-4 w-full`}
                  type="text"
                  placeholder="Last Name"
                />
                {errors.lastName && <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>}
              </div>
            </div>

            <div>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`border-2 ${errors.email ? 'border-red-500' : 'border-[#6b1d1d]'} rounded py-2 px-4 w-full`}
                type="email"
                placeholder="Email"
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>

            <div>
              <input
                name="street"
                value={formData.street}
                onChange={handleChange}
                className={`border-2 ${errors.street ? 'border-red-500' : 'border-[#6b1d1d]'} rounded py-2 px-4 w-full`}
                type="text"
                placeholder="Street"
              />
              {errors.street && <p className="text-red-500 text-xs mt-1">{errors.street}</p>}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  className={`border-2 ${errors.city ? 'border-red-500' : 'border-[#6b1d1d]'} rounded py-2 px-4 w-full`}
                  type="text"
                  placeholder="City"
                />
                {errors.city && <p className="text-red-500 text-xs mt-1">{errors.city}</p>}
              </div>
              <div className="w-full">
                <input
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  className={`border-2 ${errors.state ? 'border-red-500' : 'border-[#6b1d1d]'} rounded py-2 px-4 w-full`}
                  type="text"
                  placeholder="State"
                />
                {errors.state && <p className="text-red-500 text-xs mt-1">{errors.state}</p>}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="w-full">
                <input
                  name="zipcode"
                  value={formData.zipcode}
                  onChange={handleChange}
                  className={`border-2 ${errors.zipcode ? 'border-red-500' : 'border-[#6b1d1d]'} rounded py-2 px-4 w-full`}
                  type="number"
                  placeholder="Zipcode"
                />
                {errors.zipcode && <p className="text-red-500 text-xs mt-1">{errors.zipcode}</p>}
              </div>
              <div className="w-full">
                <input
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className={`border-2 ${errors.country ? 'border-red-500' : 'border-[#6b1d1d]'} rounded py-2 px-4 w-full`}
                  type="text"
                  placeholder="Country"
                />
                {errors.country && <p className="text-red-500 text-xs mt-1">{errors.country}</p>}
              </div>
            </div>

            <div>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`border-2 ${errors.phone ? 'border-red-500' : 'border-[#6b1d1d]'} rounded py-2 px-4 w-full`}
                type="number"
                placeholder="Phone Number"
              />
              {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
            </div>
          </div>

          {/* Right Side - Cart and Payment */}
          <div className="flex flex-col gap-8 w-full lg:max-w-[500px]">
            <div>
              <h1 className="text-2xl font-semibold text-[#24160f] mb-2">CART DETAILS</h1>
              <CartTotal />
            </div>

            <div className="mt-4">
              <h1 className="text-xl font-semibold mb-4 text-[#24160f]">PAYMENT METHOD</h1>
              <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
                {/* Stripe */}
                <div
                  onClick={() => setMethod('stripe')}
                  className={`flex items-center gap-4 border-2 ${method === 'stripe' ? 'border-[#6b1d1d] shadow-md' : 'border-[#24160f]'} p-2 rounded cursor-pointer hover:border-[#6b1d1d] hover:shadow-md transition-all`}
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
                  className={`flex items-center gap-4 border-2 ${method === 'razorpay' ? 'border-[#6b1d1d] shadow-md' : 'border-[#24160f]'} p-2 rounded cursor-pointer hover:border-[#6b1d1d] hover:shadow-md transition-all`}
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
                  className={`flex items-center gap-4 border-2 ${method === 'cod' ? 'border-[#6b1d1d] shadow-md' : 'border-[#24160f]'} p-2 rounded cursor-pointer hover:border-[#6b1d1d] hover:shadow-md transition-all`}
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
              <button 
                type="submit"
                disabled={isSubmitting}
                className={`bg-[#24160f] text-[#efd1c0] font-bold px-16 py-3 text-sm hover:bg-[#6b1d1d] transition ease-in-out ${
                  isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                }`}
              >
                {isSubmitting ? 'PROCESSING...' : 'PLACE ORDER'}
              </button>
            </div>
          </div>
        </form>
      </Layout>
    </div>
  );
};

export default PlaceOrder;