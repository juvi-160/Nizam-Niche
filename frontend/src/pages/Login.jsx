import React, { useState } from 'react';
import Layout from '../components/Layout';

const Login = () => {
  const [currentState, setCurrentState] = useState('Sign Up');

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    // Handle login/signup logic here
  };

  return (
    <div className="bg-[#efd1c0] min-h-screen">
      <Layout>
        <form
          onSubmit={onSubmitHandler}
          className="flex flex-col items-center w-[90%] sm:max-w-md m-auto mt-16 mb-20 gap-5 text-[#6b1d1d]"
        >
          {/* Heading */}
          <div className="flex items-center gap-2 mb-6">
            <p className="prata-regular text-3xl font-bold">{currentState}</p>
            <hr className="border-none h-[2px] w-8 bg-[#24160f]" />
          </div>

          {/* Inputs */}

          {/* First Name and Last Name */}
          {currentState === 'Sign Up' ? (
            <>
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md focus:outline-none"
                placeholder="First Name"
                required
              />
              <input
                type="text"
                className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md focus:outline-none"
                placeholder="Last Name"
                required
              />
            </>
          ) : null}

          {/* Email */}
          <input
            type="email"
            className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md focus:outline-none"
            placeholder="Email"
            required
          />

{/* Password */}
          <input
            type="password"
            className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md focus:outline-none"
            placeholder="Password"
            required
          />

{/* Re-enter Password (only in Sign Up) */}
          {currentState === 'Sign Up' ? (
            <input
              type="password"
              className="w-full px-4 py-3 border border-[#6b1d1d] rounded-md focus:outline-none"
              placeholder="Re-enter Password"
              required
            />
          ) : null}

{/* Terms and Conditions (only in Sign Up) */}
          {currentState === 'Sign Up' ? (
            <div className="flex items-start gap-2 w-full text-sm">
              <input type="checkbox" className="mt-1" required />
              <label className="text-[#6b1d1d]">
                I accept the{" "}
                <a href="/terms" className="text-[#24160f] font-bold underline hover:text-[#6b1d1d]">
                  Terms and Conditions
                </a>
              </label>
            </div>
          ) : null}

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
