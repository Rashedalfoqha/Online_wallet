import React from "react";
import "./index.css";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className="py-20">
      <div className="bg-white rounded-lg shadow-lg mx-auto max-w-md p-8">
        <h2 className="text-2xl font-semibold text-gray-700 text-center">
          Register
        </h2>
        <p className="text-xl text-gray-600 text-center">Create your account</p>
        <form className="mt-6">
          {/* Name */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              type="text"
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
              placeholder="Your Full Name"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              type="email"
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
              placeholder="youremail@example.com"
            />
          </div>

          {/* Birthdate */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Birthdate
            </label>
            <input
              type="date"
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
              placeholder="Your Phone Number"
            />
          </div>

          {/* Password */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Password
            </label>
            <input
              type="password"
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
              placeholder="Enter your password"
            />
          </div>

          {/* Password Confirmation */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Confirm Password
            </label>
            <input
              type="password"
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
              placeholder="Re-enter your password"
            />
          </div>

          {/* User Image */}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Upload Your Image
            </label>
            <input
              type="file"
              className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full"
              accept="image/*"
            />
          </div>

          {/* Submit Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="bg-blue-500 text-white font-bold py-2 px-4 w-full rounded hover:bg-blue-600"
            >
              Register
            </button>
          </div>
        </form>
        <div className="mt-4 text-center">
          <p className="text-gray-600 text-sm">
            Already have an account?{" "}
            <button
              type="button"
              className="text-xs text-gray-500 uppercase focus:outline-none"
            >
              <Link to="/login">Login</Link>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
