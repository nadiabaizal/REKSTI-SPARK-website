import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { UserPlus, Mail, Lock, EyeOff, User, ChevronDown } from 'lucide-react';
import AuthLayout from './AuthLayout';

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if(formData.password !== formData.confirmPassword) {
        alert("Passwords do not match!");
        return;
    }
    // Logic fetch API POST /auth/register
    console.log("Register submitted:", formData);
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center mb-6">
        <div className="p-3 bg-red-50 border border-red-100 rounded-xl mb-4">
          <UserPlus className="w-6 h-6 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-red-600 mb-2">Sign Up</h2>
        <p className="text-sm text-red-400 text-center px-4">
          Find available parking faster with real-time smart guidance
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Name Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-red-500" />
          </div>
          <input
            type="text"
            name="name"
            className="w-full pl-10 pr-3 py-3 border border-red-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 bg-transparent text-red-800 placeholder-red-300"
            placeholder="Name"
            onChange={handleChange}
            required
          />
        </div>

        {/* Email Input */}
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

        {/* Password Input */}
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

        {/* Confirm Password Input */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Lock className="h-5 w-5 text-red-500" />
          </div>
          <input
            type="password"
            name="confirmPassword"
            className="w-full pl-10 pr-10 py-3 border border-red-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 bg-transparent text-red-800 placeholder-red-300"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
          />
          <button type="button" className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <EyeOff className="h-5 w-5 text-red-500" />
          </button>
        </div>

        {/* Role Select */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <User className="h-5 w-5 text-red-500" />
          </div>
          <select
            name="role"
            className="w-full pl-10 pr-10 py-3 border border-red-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 bg-transparent text-red-800 appearance-none cursor-pointer"
            onChange={handleChange}
            required
            defaultValue=""
          >
            <option value="" disabled className="text-red-300">Choose role..</option>
            <option value="mahasiswa">Mahasiswa</option>
            <option value="dosen">Dosen</option>
            <option value="staf">Staf</option>
          </select>
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <ChevronDown className="h-5 w-5 text-red-500" />
          </div>
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition duration-200 mt-2"
        >
          Sign Up
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-red-500">
        Already have an account? <Link to="/signin" className="font-bold text-red-600 hover:underline">Sign In</Link>
      </div>
    </AuthLayout>
  );
};

export default SignUp;