import React from "react";
import { useForm } from "react-hook-form";
import Layout from "../components/Layout";
import { Link } from "react-router";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="bg-[#EFD1C0]">
      <Layout>
        <h1 className="text-[#24160f] text-4xl font-bold mb-6 text-center">
          LOGIN
        </h1>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col gap-4 w-full max-w-md mx-auto bg-[#6b1d1d] p-10 rounded-lg shadow-2xl shadow-[#24160f] mb-30"
        >
          {/* Email */}
          <div>
            <label htmlFor="Email" className="text-[#efd1c0] text-xl font-bold">
              Email
            </label>
            <input
              type="text"
              className="bg-[#EFD1C0] w-full rounded-xl text-xl p-2 border-[#24160f] border-2 mt-1"
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
              <p className="text-sm text-yellow-300 mt-1">
                {errors.Email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="Password"
              className="text-[#efd1c0] text-xl font-bold"
            >
              Password
            </label>
            <input
              type="password"
              className="bg-[#EFD1C0] w-full rounded-xl text-xl p-2 border-[#24160f] border-2 mt-1"
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
            {errors.Password && (
              <p className="text-sm text-yellow-300 mt-1">
                {errors.Password.message}
              </p>
            )}
          </div>

          {/* forget password */}
          <div className="flex justify-end mt-2">
            <a
              href="/forgot-password"
              className="text-[#efd1c0] text-sm font-bold hover:text-[#24160f] "
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
            <label className="text-[#efd1c0] text-xl font-bold">
              Remember Me
            </label>
          </div>

          <input
            type="submit"
            value="Login"
            className="bg-[#EFD1C0] rounded-xl text-xl p-2 text-[#6b1d1d] font-bold cursor-pointer hover:bg-[#24160f] hover:text-[#EFD1C0] transition duration-300 ease-in-out mt-4"
          />
          {/* new user */}
          <div className="flex justify-center items-center mt-4">
            <p className="text-[#24160f] text-xl font-bold">Dont have an account yet?</p>
            <Link to="/signup" className="text-[#efd1c0] text-xl font-bold ml-2 hover:text-[#24160f] transition duration-300 ease-in-out">Signup</Link>
          </div>
        </form>
        
      </Layout>
    </div>
  );
};

export default Login;
