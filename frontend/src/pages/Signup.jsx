import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Layout from '../components/Layout';
import { Eye, EyeOff } from 'lucide-react';

const Signup = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    toast.success("Signup Successful!", {
      position: "top-center",
      autoClose: 2000,
    });
  };

  return (
    <div className="bg-[#EFD1C0]">
      <Layout>
        <h1 className="text-[#24160f] text-3xl sm:text-4xl font-bold mb-6 text-center">SIGN UP</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full max-w-md mx-auto bg-[#6b1d1d] px-6 mb-30 sm:px-10 py-8 rounded-2xl shadow-2xl shadow-[#24160f]"
        >
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="text-[#efd1c0] text-lg font-bold">First Name</label>
            <input
              id="firstName"
              className="bg-[#EFD1C0] rounded-xl text-lg p-2 border-[#24160f] border-2 mt-1 w-full"
              type="text"
              placeholder="First name"
              {...register("firstName", { required: "First name is required", maxLength: 80 })}
            />
            {errors.firstName && <p className="text-sm text-yellow-300 mt-1">{errors.firstName.message}</p>}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="text-[#efd1c0] text-lg font-bold">Last Name</label>
            <input
              id="lastName"
              className="bg-[#EFD1C0] rounded-xl text-lg p-2 border-[#24160f] border-2 mt-1 w-full"
              type="text"
              placeholder="Last name"
              {...register("lastName", { required: "Last name is required", maxLength: 100 })}
            />
            {errors.lastName && <p className="text-sm text-yellow-300 mt-1">{errors.lastName.message}</p>}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-[#efd1c0] text-lg font-bold">Email</label>
            <input
              id="email"
              type="text"
              className="bg-[#EFD1C0] rounded-xl text-lg p-2 border-[#24160f] border-2 mt-1 w-full"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && <p className="text-sm text-yellow-300 mt-1">{errors.email.message}</p>}
          </div>

          {/* Password */}
          <div className="relative">
            <label htmlFor="password" className="text-[#efd1c0] text-lg font-bold">Password</label>
            <input
              id="password"
              type={showPassword ? "text" : "password"}
              className="bg-[#EFD1C0] rounded-xl text-lg p-2 pr-10 border-[#24160f] border-2 mt-1 w-full"
              placeholder="Password"
              {...register("password", {
                required: "Password is required",
                minLength: { value: 6, message: "Minimum 6 characters" },
                maxLength: { value: 12, message: "Maximum 12 characters" },
              })}
            />
            <span
              className="absolute top-10 right-3 cursor-pointer text-[#24160f]"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
            {errors.password && <p className="text-sm text-yellow-300 mt-1">{errors.password.message}</p>}
          </div>

          {/* Re-enter Password */}
          <div className="relative">
            <label htmlFor="rePassword" className="text-[#efd1c0] text-lg font-bold">Re-enter Password</label>
            <input
              id="rePassword"
              type={showRePassword ? "text" : "password"}
              className="bg-[#EFD1C0] rounded-xl text-lg p-2 pr-10 border-[#24160f] border-2 mt-1 w-full"
              placeholder="Re-enter Password"
              {...register("rePassword", {
                required: "Re-entering password is required",
                validate: (value) => value === watch("password") || "Passwords do not match",
              })}
            />
            <span
              className="absolute top-10 right-3 cursor-pointer text-[#24160f]"
              onClick={() => setShowRePassword(!showRePassword)}
            >
              {showRePassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </span>
            {errors.rePassword && <p className="text-sm text-yellow-300 mt-1">{errors.rePassword.message}</p>}
          </div>

          {/* Terms and Conditions */}
          <div className="flex items-start gap-2 mt-2">
            <input
              type="checkbox"
              className="mt-1"
              {...register("terms", { required: "You must accept the terms and conditions" })}
            />
            <label className="text-[#efd1c0] text-base font-semibold">
              I accept the{" "}
              <a href="/terms" className="text-[#24160f] font-bold hover:text-[#EFD1C0] underline">
                Terms and Conditions
              </a>
            </label>
          </div>
          {errors.terms && <p className="text-sm text-yellow-300">{errors.terms.message}</p>}

          {/* Submit Button */}
          <input
            type="submit"
            value="Sign Up"
            className="bg-[#EFD1C0] rounded-xl text-lg p-2 text-[#6b1d1d] font-bold cursor-pointer hover:bg-[#24160f] hover:text-[#EFD1C0] transition duration-300 ease-in-out mt-4 border-4 border-[#24160f]"
          />

          {/* Login Link */}
          <p className="text-[#efd1c0] text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-[#24160f] font-bold hover:text-[#EFD1C0] underline">
              Login
            </a>
          </p>
        </form>

        {/* Toast Notifications */}
        <ToastContainer />
      </Layout>
    </div>
  );
};

export default Signup;
