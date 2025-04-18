import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import { Link } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { EyeClosed, Eye  } from 'lucide-react';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Login successful!", {
      position: "top-center",
    });

    // You can add your actual login logic here
  };

  return (
    <div className="bg-[#EFD1C0] min-h-screen flex flex-col">
      <Layout>
        <h1 className="text-[#24160f] text-3xl md:text-4xl font-bold mb-6 text-center mt-8">
          LOGIN
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full max-w-md mx-auto bg-[#6b1d1d] p-6 sm:p-10 rounded-lg shadow-2xl shadow-[#24160f] mb-10"
        >
          {/* Email */}
          <div>
            <label htmlFor="Email" className="text-[#efd1c0] text-lg md:text-xl font-bold">
              Email
            </label>
            <input
              type="text"
              className="bg-[#EFD1C0] w-full rounded-xl text-base md:text-xl p-2 border-[#24160f] border-2 mt-1"
              placeholder="Enter your email"
              {...register("Email", {
                required: "Email is required!",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email format",
                },
              })}
            />
            {errors.Email && (
              <p className="text-sm text-yellow-300 mt-1">{errors.Email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="Password" className="text-[#efd1c0] text-lg md:text-xl font-bold">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="bg-[#EFD1C0] w-full rounded-xl text-base md:text-xl p-2 border-[#24160f] border-2 mt-1"
                placeholder="Enter your password"
                {...register("Password", {
                  required: "Password is required!",
                  minLength: {
                    value: 6,
                    message: "Password must be at least 6 characters",
                  },
                  maxLength: {
                    value: 15,
                    message: "Password must be at most 15 characters",
                  },
                })}
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-3 text-sm font-bold text-[#6b1d1d] hover:text-[#24160f]"
              >
                {showPassword ? <Eye /> : <EyeClosed />}
              </button>
            </div>
            {errors.Password && (
              <p className="text-sm text-yellow-300 mt-1">{errors.Password.message}</p>
            )}
          </div>

          {/* Forget password */}
          <div className="flex justify-end mt-2">
            <a
              href="/forgot-password"
              className="text-[#efd1c0] text-sm font-bold hover:text-[#24160f]"
            >
              Forgot Password?
            </a>
          </div>

          {/* Remember Me */}
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              className="mr-2"
              {...register("rememberMe")}
            />
            <label className="text-[#efd1c0] text-base md:text-xl font-bold">
              Remember Me
            </label>
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Login"
            className="bg-[#EFD1C0] rounded-xl text-base md:text-xl p-2 text-[#6b1d1d] font-bold cursor-pointer hover:bg-[#24160f] hover:text-[#EFD1C0] transition duration-300 ease-in-out mt-4"
          />

          {/* New user */}
          <div className="flex flex-col sm:flex-row justify-center items-center mt-4 text-center sm:text-left">
            <p className="text-[#24160f] text-base md:text-xl font-bold">
              Don’t have an account yet?
            </p>
            <Link
              to="/signup"
              className="text-[#efd1c0] text-base md:text-xl font-bold sm:ml-2 hover:text-[#24160f] transition duration-300 ease-in-out"
            >
              Signup
            </Link>
          </div>
        </form>

        {/* Toast Container */}
        <ToastContainer />
      </Layout>
    </div>
  );
};

export default Login;
