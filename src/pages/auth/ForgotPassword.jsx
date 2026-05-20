import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Mail, KeyRound } from 'lucide-react';
import AuthLayout from '../../layouts/AuthLayout';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic fetch API untuk trigger pengiriman email OTP dari backend
    console.log("Reset password link sent to:", email);
    
    // Arahkan pengguna ke halaman input OTP setelah berhasil request
    navigate('/verify-otp');
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center mb-6">
        <div className="p-3 bg-red-50 border border-red-100 rounded-xl mb-4">
          <KeyRound className="w-6 h-6 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-red-600 mb-2">Forgot Password</h2>
        <p className="text-sm text-red-400 text-center px-4">
          Enter your registered email address and we'll send you an OTP to reset your password.
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
            placeholder="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition duration-200"
        >
          Send OTP
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-red-500">
        Remember your password? <Link to="/signin" className="font-bold text-red-600 hover:underline">Sign In</Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;