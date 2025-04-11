import React from 'react'
import { useForm } from 'react-hook-form'
import Header from './Header'
import { backendUrl } from '../App'
import axios from 'axios'

const Login = ({ setToken }) => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = async (data) => {
        try {
          const response = await axios.post(`${backendUrl}/api/user/admin`, {
            email: data.email,
            password: data.password,
          });
      
          console.log("Login Response:", response.data);
      
          if (response.data.token) {
            setToken(response.data.token); // if setToken is passed as a prop
            localStorage.setItem('token', response.data.token); // optional: persist token
          } else {
            toast.error(response.data.message || "Invalid login response");
          }
        } catch (err) {
          console.error("Login Error:", err);
          toast.error(err.massage);
        }
      };


  return (
    <>
    <Header />
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-md">
          <h1 className="text-2xl font-bold mb-6 text-center text-gray-800">Admin Login</h1>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div>
              <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
              <input
                id="email"
                type="text"
                {...register('email', { required: 'email is required' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="block mb-1 font-medium text-gray-700">Password</label>
              <input
                id="password"
                type="password"
                {...register('password', { required: 'Password is required' })}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              Login
            </button>
          </form>
        </div>
      </div>

    </>
  )
}

export default Login