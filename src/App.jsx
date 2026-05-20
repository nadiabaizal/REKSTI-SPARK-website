import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';

// Import Halaman Auth
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import OtpVerification from './pages/auth/OTPVerification';

// Import Halaman Internal (Core)
import MainLayout from './layouts/MainLayout';
import Home from './pages/core/Home';
import MapDashboard from './pages/core/MapDashboard';
import Prediction from './pages/core/Prediction';
import History from './pages/core/History';
import Profile from './pages/core/Profile';

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          {/* ================= PUBLIC / AUTH ROUTES ================= */}
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/verify-otp" element={<OtpVerification />} />

          {/* ================= PROTECTED INTERNAL ROUTES ================= */}
          <Route element={<ProtectedRoute />}>
            {/* MainLayout akan otomatis menyisipkan Sidebar & Navbar di sekeliling halaman ini */}
            <Route element={<MainLayout />}>
              <Route path="/home" element={<Home />} />
              <Route path="/map" element={<MapDashboard />} />
              <Route path="/prediction" element={<Prediction />} />
              <Route path="/history" element={<History />} />
              <Route path="/profile" element={<Profile />} />
            </Route>
          </Route>

          {/* Rute Default: Jika URL tidak dikenali, arahkan otomatis */}
          <Route path="*" element={<Navigate to="/home" replace />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;