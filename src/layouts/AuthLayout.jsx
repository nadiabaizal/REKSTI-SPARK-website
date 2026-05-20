import React from 'react';
import { Car } from 'lucide-react'; // Placeholder logo jika belum ada aset SVG

const AuthLayout = ({ children }) => {
  return (
    <div 
      className="min-h-screen w-full flex items-center justify-center bg-cover bg-center relative"
      // Ganti URL ini dengan path aset gambar kota hasil export dari Figma kamu
      style={{ backgroundImage: "url('/assets/city-background.jpg')" }} 
    >
      {/* Overlay gradasi transparan untuk melembutkan background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#FFFDF9]/80 to-[#FFF3E0]/60"></div>

      {/* Logo SPARK */}
      <div className="absolute top-6 left-8 flex items-center gap-2 z-10">
        <div className="bg-red-600 p-2 rounded-lg">
          <Car className="text-white w-6 h-6" />
        </div>
        <span className="text-red-700 font-bold text-xl tracking-wider">SPARK</span>
      </div>

      {/* Kontainer Form */}
      <div className="relative z-10 w-full max-w-md p-8 bg-[#FFFDF9] border border-red-200 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
        {children}
      </div>
    </div>
  );
};

export default AuthLayout;