import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import 'bootstrap/dist/css/bootstrap.min.css';
import './auth/Auth.scss'; 

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('');
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
    // Doctor fields
    specialization: '',
    licenseNumber: '',
    // Patient fields
    age: '',
    gender: ''
  });
  const { login, register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isLogin) {
        await login({ email: formData.email, password: formData.password });
        navigate('/dashboard');
      } else {
        await register({ ...formData, userType });
        navigate(userType === 'doctor' ? '/doctor-dashboard' : '/dashboard');
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="auth-container">
      <div className={`auth-card ${isLogin ? 'login-mode' : 'signup-mode'}`}>
        {/* Toggle Switch */}
        <div className="auth-toggle">
          <button
            className={`toggle-btn ${isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            className={`toggle-btn ${!isLogin ? 'active' : ''}`}
            onClick={() => setIsLogin(false)}
          >
            Sign Up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Common Fields */}
          <div className="mb-3">
            <label>Email</label>
            <input
              type="email"
              name="email"
              className="form-control"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="mb-3">
            <label>Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              value={formData.password}
              onChange={handleChange}
              required
              minLength="6"
            />
          </div>

          {/* Signup Specific Fields */}
          {!isLogin && (
            <>
              <div className="mb-3">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>I am a:</label>
                <select
                  className="form-select"
                  value={userType}
                  onChange={(e) => setUserType(e.target.value)}
                  required
                >
                  <option value="">Select role</option>
                  <option value="patient">Patient</option>
                  <option value="doctor">Doctor</option>
                </select>
              </div>

              {/* Patient Fields */}
              {userType === 'patient' && (
                <div className="patient-fields">
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <label>Age</label>
                      <input
                        type="number"
                        name="age"
                        className="form-control"
                        value={formData.age}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <label>Gender</label>
                      <select
                        className="form-select"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                      >
                        <option value="">Select</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>
              )}

              {/* Doctor Fields */}
              {userType === 'doctor' && (
                <div className="doctor-fields">
                  <div className="mb-3">
                    <label>Specialization</label>
                    <select
                      className="form-select"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Select specialization</option>
                      <option value="cardiologist">Cardiologist</option>
                      <option value="neurologist">Neurologist</option>
                      <option value="general">General Physician</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label>License Number</label>
                    <input
                      type="text"
                      name="licenseNumber"
                      className="form-control"
                      value={formData.licenseNumber}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              )}
            </>
          )}

          <button type="submit" className="btn btn-primary w-100 auth-submit">
            {isLogin ? 'Login' : 'Register'}
          </button>
        </form>

        <div className="auth-footer">
          {isLogin ? (
            <>
              Don't have an account?{' '}
              <span className="auth-link" onClick={() => setIsLogin(false)}>
                Sign up
              </span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span className="auth-link" onClick={() => setIsLogin(true)}>
                Login
              </span>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;