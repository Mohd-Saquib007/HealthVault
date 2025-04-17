import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { ReactComponent as DoctorIcon } from '../../components/auth/doctor-svgrepo-com.svg';
import { ReactComponent as PatientIcon } from '../../components/auth/reshot-icon-doctor-42BDJQEGLZ.svg';
import './Auth.scss';

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('');
  const { login, register } = useAuth();
  const navigate = useNavigate();

  // Form state management...

  return (
    <div className="auth-container">
      <div className="auth-glass-card">
        <div className="auth-header">
          <img src="/logo.svg" alt="HealthVault" className="auth-logo" />
          <h2>{isLogin ? 'Welcome Back' : 'Join HealthVault'}</h2>
          <p className="auth-subheader">
            {isLogin ? 'Secure access to medical records' : 'Get started in minutes'}
          </p>
        </div>

        <div className="auth-toggle-container">
          <button 
            className={`auth-toggle ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button 
            className={`auth-toggle ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Register
          </button>
        </div>

        {!isLogin && (
          <div className="role-selector">
            <div 
              className={`role-card ${userType === 'doctor' ? 'selected' : ''}`}
              onClick={() => setUserType('doctor')}
            >
              <DoctorIcon />
              <span>I'm a Doctor</span>
            </div>
            <div 
              className={`role-card ${userType === 'patient' ? 'selected' : ''}`}
              onClick={() => setUserType('patient')}
            >
              <PatientIcon />
              <span>I'm a Patient</span>
            </div>
          </div>
        )}

        <form className="auth-form">
          {/* Form fields with modern medical styling */}
          <div className="input-group medical-input">
            <label>Email</label>
            <input 
              type="email" 
              placeholder="your@email.com" 
              className="input-field"
            />
            <span className="input-icon">✉️</span>
          </div>

          {/* Conditional fields based on user type */}
          {userType === 'doctor' && !isLogin && (
            <div className="input-group medical-input">
              <label>Medical License</label>
              <input 
                type="text" 
                placeholder="MD-123456" 
                className="input-field"
              />
              <span className="input-icon">🩺</span>
            </div>
          )}
        </form>

        <button className="medical-button primary">
          {isLogin ? 'Login to Dashboard' : 'Create Account'}
        </button>

        <div className="auth-footer">
          {isLogin ? (
            <>
              New to HealthVault?{' '}
              <button className="text-button" onClick={() => setIsLogin(false)}>
                Create account
              </button>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <button className="text-button" onClick={() => setIsLogin(true)}>
                Sign in
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;