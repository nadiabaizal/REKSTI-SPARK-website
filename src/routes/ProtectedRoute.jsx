import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
  const { token } = useAuth();

  // Jika token JWT tidak ditemukan, paksa pengguna kembali ke halaman Sign In
  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  // Jika sudah login, izinkan akses masuk ke halaman internal
  return <Outlet />;
};

export default ProtectedRoute;