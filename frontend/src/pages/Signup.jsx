import React from 'react';
import { useForm } from "react-hook-form";
import Layout from '../components/Layout';

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className="bg-[#EFD1C0] ">
      <Layout>
        <h1 className="text-[#24160f] text-4xl font-bold mb-6 text-center">SIGN UP</h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full max-w-md mx-auto bg-[#6b1d1d] p-10 rounded-lg shadow-2xl shadow-[#24160f] mb-30"
        >
          {/* First Name */}
          <div>
            <label htmlFor="firstName" className="text-[#efd1c0] text-xl font-bold">
              First Name
            </label>
            <input
              id="firstName"
              className="bg-[#EFD1C0] rounded-xl text-xl p-2 border-[#24160f] border-2 mt-1 w-full"
              type="text"
              placeholder="First name"
              {...register("firstName", { required: "First name is required", maxLength: 80 })}
            />
            {errors.firstName && (
              <p className="text-sm text-yellow-300 mt-1">{errors.firstName.message}</p>
            )}
          </div>

          {/* Last Name */}
          <div>
            <label htmlFor="lastName" className="text-[#efd1c0] text-xl font-bold">
              Last Name
            </label>
            <input
              id="lastName"
              className="bg-[#EFD1C0] rounded-xl text-xl p-2 border-[#24160f] border-2 mt-1 w-full"
              type="text"
              placeholder="Last name"
              {...register("lastName", { required: "Last name is required", maxLength: 100 })}
            />
            {errors.lastName && (
              <p className="text-sm text-yellow-300 mt-1">{errors.lastName.message}</p>
            )}
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="text-[#efd1c0] text-xl font-bold">
              Email
            </label>
            <input
              id="email"
              type="text"
              className="bg-[#EFD1C0] rounded-xl text-xl p-2 border-[#24160f] border-2 mt-1 w-full"
              placeholder="Email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\S+@\S+$/i,
                  message: "Invalid email address",
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-yellow-300 mt-1">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="text-[#efd1c0] text-xl font-bold">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="bg-[#EFD1C0] rounded-xl text-xl p-2 border-[#24160f] border-2 mt-1 w-full"
              placeholder="Password"
              {...register("password", {
                required: "Password number is required",
                minLength: {
                  value: 6,
                  message: "Minimum 6 digits",
                },
                maxLength: {
                  value: 12,
                  message: "Maximum 12 digits",
                },
              })}
            />
            {errors.password && (
              <p className="text-sm text-yellow-300 mt-1">{errors.password.message}</p>
            )}
          </div>

          {/* re-enter password */}
          <div>
            <label htmlFor="rePassword" className="text-[#efd1c0] text-xl font-bold">
              Re-enter Password
            </label>
            <input
              id="rePassword"
              type="password"
              className="bg-[#EFD1C0] rounded-xl text-xl p-2 border-[#24160f] border-2 mt-1 w-full"
              placeholder="Re-enter Password"
              {...register("rePassword", {
                required: "Re-entering password is required",
                validate: (value) => {
                  if (value !== watch("password")) {
                    return "Passwords do not match";
                  }
                },
              })}
            />
            {errors.rePassword && (
              <p className="text-sm text-yellow-300 mt-1">{errors.rePassword.message}</p>
            )}
          </div>
            
            {/* Terms and Conditions */}
          <div className="flex items-center mt-4">
            <input
              type="checkbox"
              className="mr-2"
              {...register("terms", { required: "You must accept the terms and conditions" })}
            />
            <label className="text-[#efd1c0] text-xl font-bold">
              I accept the{" "}
              <a href="/terms" className="text-[#24160f] font-bold hover:text-[#EFD1C0]">
                Terms and Conditions
              </a>
            </label>
          </div>

          <input
            type="submit"
            value="Sign Up"
            className="bg-[#EFD1C0] rounded-xl text-xl p-2 text-[#6b1d1d] font-bold cursor-pointer hover:bg-[#24160f] hover:text-[#EFD1C0] transition duration-300 ease-in-out mt-4 border-4 border-[#24160f]"
          />
          <p className="text-[#efd1c0] text-center mt-4">
            Already have an account?{" "}
            <a href="/login" className="text-[#24160f] font-bold hover:text-[#EFD1C0]">
              Login
            </a>
          </p>
        </form>
      </Layout>
    </div>
  );
};

export default Signup;
