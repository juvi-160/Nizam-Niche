import React, { useContext, useState } from 'react';
import axios from 'axios';
import Layout from '../components/Layout';
import { ShopContext } from '../context/ShopContext';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');
  const { token, setToken, navigate, backendUrl } = useContext(ShopContext);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rePassword, setRePassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    if (currentState === 'Sign Up' && password !== rePassword) {
      toast.error('Passwords do not match.');
      return;
    }

    try {
      if (currentState === 'Sign Up') {
        const response = await axios.post(`${backendUrl}/api/user/register`, {
          firstName,
          lastName,
          email,
          password,
          rePassword,
          termsAccepted,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          navigate('/');
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(`${backendUrl}/api/user/login`, {
          email,
          password,
        });

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem('token', response.data.token);
          navigate('/');
        } else {
          toast.error(response.data.message);
        }
      }
    } catch (error) {
      console.error('Error during authentication:', error);
      toast.error('Authentication failed. Please try again.');
    }
  };

  return (
    <div className="bg-[#efd1c0] min-h-screen">
      <Layout>
        <ToastContainer />
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center w-[90%] sm:max-w-md m-auto mt-16 mb-20 gap-5 text-[#6b1d1d]"
        >
          {/* Heading */}
          <div className="flex items-center gap-2 mb-6">
            <p className="prata-regular text-3xl font-bold">{currentState}</p>
            <hr className="border-none h-[2px] w-8 bg-[#24160f]" />
          </div>

          {/* First Name and Last Name (only in Sign Up) */}
          {currentState === 'Sign Up' && (
            <>
              <input
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md focus:outline-none"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                onChange={(e) => setLastName(e.target.value)}
                className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md focus:outline-none"
                placeholder="Last Name"
                required
              />
            </>
          )}

          {/* Email */}
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md focus:outline-none"
            placeholder="Email"
            required
          />

          {/* Password */}
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md focus:outline-none"
            placeholder="Password"
            required
          />

          {/* Re-enter Password (only in Sign Up) */}
          {currentState === 'Sign Up' && (
            <input
              type="password"
              onChange={(e) => setRePassword(e.target.value)}
              className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md focus:outline-none"
              placeholder="Re-enter Password"
              required
            />
          )}

          {/* Terms and Conditions (only in Sign Up) */}
          {currentState === 'Sign Up' && (
            <div className="flex items-start gap-2 w-full text-sm">
              <input
                type="checkbox"
                className="mt-1"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
                required
              />
              <label className="text-[#6b1d1d]">
                I accept the{" "}
                <a
                  href="/terms"
                  className="text-[#24160f] font-bold underline hover:text-[#6b1d1d]"
                >
                  Terms and Conditions
                </a>
              </label>
            </div>
          )}

          {/* Bottom Links */}
          <div className="w-full flex justify-between text-sm mt-[-6px]">
            <p className="cursor-pointer hover:underline">Forgot password?</p>
            {currentState === 'Login' ? (
              <p
                onClick={() => setCurrentState('Sign Up')}
                className="cursor-pointer hover:underline"
              >
                Create Account
              </p>
            ) : (
              <p
                onClick={() => setCurrentState('Login')}
                className="cursor-pointer hover:underline"
              >
                Login Here
              </p>
            )}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#6b1d1d] text-[#efd1c0] font-semibold px-8 py-3 mt-6 rounded-md hover:bg-[#501414] transition"
          >
            {currentState === 'Login' ? 'Sign In' : 'Sign Up'}
          </button>
        </form>
      </Layout>
    </div>
  );
};

export default Login;
