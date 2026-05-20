import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Lock, EyeOff, LogIn } from 'lucide-react';
import AuthLayout from './AuthLayout';

const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Logic fetch API POST /auth/login akan diletakkan di sini
    console.log("Login submitted:", formData);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center mb-6">
        <div className="p-3 bg-red-50 border border-red-100 rounded-xl mb-4">
          <LogIn className="w-6 h-6 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-red-600 mb-2">Sign In</h2>
        <p className="text-sm text-red-400 text-center px-4">
          Find available parking faster with real-time smart guidance
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Mail className="h-5 w-5 text-red-500" />
          </div>
          <input
            type="email"
            name="email"
            className="w-full pl-10 pr-3 py-3 border border-red-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 bg-transparent text-red-800 placeholder-red-300"
            placeholder="Email"
            onChange={handleChange}
            required
          />
        </div>

        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-red-500" />
          </div>
          <input
            type="password"
            name="password"
            className="w-full pl-10 pr-10 py-3 border border-red-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 bg-transparent text-red-800 placeholder-red-300"
            placeholder="Password"
            onChange={handleChange}
            required
          />
          <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <EyeOff className="h-5 w-5 text-red-500" />
          </button>
        </div>

        <div className="flex justify-end">
          <a href="#" className="text-sm text-red-500 hover:text-red-700 font-medium">
            Forgot password?
          </a>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition duration-200"
        >
          Sign In
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-red-500">
        Don't have an account? <Link to="/signup" className="font-bold text-red-600 hover:underline">Sign Up</Link>
      </div>
    </AuthLayout>
  );
};

export default SignIn;