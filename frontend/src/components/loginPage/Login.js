import React from 'react';
import "./index.css";
import { Link } from 'react-router-dom';

function Login() {
  return (
    <>
      <div className="py-60">
        <div className="flex bg-white rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-6xl">
          <div
            className="hidden lg:block lg:w-1/2 bg-cover"
            style={{
              backgroundImage:
                "url('https://img.freepik.com/free-photo/3d-render-hand-holding-wallet-icon-white_107791-17573.jpg?t=st=1732279530~exp=1732283130~hmac=7f088eae1acbf7087a5124276f02160565be92baf8a1950a2569b7d978ad16e8&w=826')",
            }}
          ></div>
          <div className="w-full p-8 lg:w-1/2">
            <h2 className="text-2xl font-semibold text-gray-700 text-center">Brand</h2>
            <p className="text-xl text-gray-600 text-center">Welcome back!</p>
           
            <div className="mt-4 flex items-center justify-between">
             
            </div>
            <div className="mt-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">Email Address</label>
              <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="email" />
            </div>
            <div className="mt-4">
              <div className="flex justify-between">
                <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
                
              </div>
              <input className="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" type="password" />
            </div>
            <div className="mt-8">
              <button className="bg-gray-700 text-white font-bold py-2 px-4 w-full rounded hover:bg-gray-600">Login</button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="border-b w-1/5 md:w-1/4"></span>
              <button type="button" className="text-xs text-gray-500 uppercase focus:outline-none">
                or <Link to="/register">sign up</Link>
              </button>
              <span className="border-b w-1/5 md:w-1/4"></span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
