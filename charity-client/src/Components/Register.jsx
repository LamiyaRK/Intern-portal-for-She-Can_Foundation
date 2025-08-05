import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div className="min-h-screen bg-[#F5F5F0] flex items-center justify-center">
      <div className="bg-white p-13 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-[#e48061] mb-6">
          Sign Up
        </h2>
        <form className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-600">Full Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Password</label>
            <input
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div>
            <label className="block mb-1 text-gray-600">Confirm Password</label>
            <input
              type="password"
              placeholder="Repeat your password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        <Link to='/dashboard'> <button
            type="submit"
            className="w-full bg-[#e48061] text-white font-semibold py-2 rounded-lg hover:bg-amber-900 transition"
          >
            Sign Up
          </button>
          </Link> 
        </form>
        <p className="text-center text-sm text-gray-600 mt-4">
          Already have an account?{" "}
         <Link to='/'><span className="text-[#e48061] hover:underline cursor-pointer">
            Log in
          </span></Link> 
        </p>
      </div>
    </div>
    );
};

export default Register;