// src/components/Login.jsx
import React from "react";

export default function Login() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 p-4">
      <div className="bg-white shadow-lg rounded-2xl w-full max-w-md p-8 md:p-10 border border-orange-100">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <h1 className="text-3xl font-bold text-orange-500 tracking-wide">FoodFast</h1>
        </div>

        {/* Heading */}
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-6">
          Welcome Back 👋
        </h2>

        {/* Form */}
        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 text-sm font-medium text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
            />
          </div>

          {/* Remember me + Forgot password */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="w-4 h-4 text-orange-500 rounded focus:ring-orange-400" />
              Remember me
            </label>
            <a href="#" className="text-orange-500 hover:underline">
              Forgot password?
            </a>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold shadow-md transition-all duration-200"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-1 border-gray-300" />
          <span className="px-4 text-sm text-gray-500">OR</span>
          <hr className="flex-1 border-gray-300" />
        </div>

        {/* Social login */}
        <div className="flex flex-col gap-3">
          <button className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-50 transition-all">
            <img src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google" className="w-5 h-5" />
            Continue with Google
          </button>
         
        </div>

        {/* Sign up */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <a href="#" className="text-orange-500 hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
}
