import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldCheck } from 'lucide-react';
import AuthLayout from '../../layouts/AuthLayout';

const OtpVerification = () => {
  const [otp, setOtp] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic fetch API POST untuk verifikasi OTP ke backend
    console.log("Verifying OTP:", otp);
    
    // Jika OTP valid, arahkan kembali ke signin atau langsung login
    navigate('/signin');
  };

  return (
    <AuthLayout>
      <div className="flex flex-col items-center mb-6">
        <div className="p-3 bg-red-50 border border-red-100 rounded-xl mb-4">
          <ShieldCheck className="w-6 h-6 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-red-600 mb-2">Verify OTP</h2>
        <p className="text-sm text-red-400 text-center px-4">
          We have sent a secure code to your email. Please enter it below to continue.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="relative flex justify-center">
          <input
            type="text"
            maxLength="6"
            className="w-3/4 text-center tracking-[0.5em] font-mono text-2xl py-3 border border-red-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-400 bg-transparent text-red-800 placeholder-red-200"
            placeholder="000000"
            value={otp}
            onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))}
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 bg-red-600 hover:bg-red-700 text-white rounded-xl font-semibold transition duration-200"
        >
          Verify & Continue
        </button>
      </form>

      <div className="mt-6 text-center text-sm text-red-500">
        Didn't receive the code? <button className="font-bold text-red-600 hover:underline">Resend OTP</button>
      </div>
    </AuthLayout>
  );
};

export default OtpVerification;