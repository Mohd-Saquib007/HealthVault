import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "./context/AuthContext";
import LandingPage from "./components/LandingPage";
import Login from "./components/Login";
import Dashboard from "./components/DoctorDashboard";
import HealthRecords from "./components/HealthRecords";
import Profile from "./components/Profile";
import DoctorDashboard from "./components/DoctorDashboard";
import LoadingSpinner from "./components/LoadingSpinner";
import Auth from './components/auth/Auth';
import Signup from './components/Signup'; 

// Protected Route Component
function PrivateRoute({ children, requiredRole }) {
  const { user, loading } = useAuth();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (requiredRole && user.user_type !== requiredRole) {
    return <Navigate to="/" />;
  }

  return children;
}

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/auth" element={<Auth />} />
        {/* Patient-Protected Routes */}
        <Route 
          path="/dashboard" 
          element={
            <PrivateRoute requiredRole="PATIENT">
              <Dashboard />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/health-records" 
          element={
            <PrivateRoute requiredRole="PATIENT">
              <HealthRecords />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/profile" 
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          } 
        />

        {/* Doctor-Protected Routes */}
        <Route 
          path="/doctor-dashboard" 
          element={
            <PrivateRoute requiredRole="DOCTOR">
              <DoctorDashboard />
            </PrivateRoute>
          } 
        />
      </Routes>
    </Router>
  );
}

export default App;