import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate(); 
  const [uniqueId, setUniqueId] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    // You can implement login logic here
    console.log("Logging in:", uniqueId, password);
    navigate("/dashboard");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow p-4" style={{ width: '100%', maxWidth: '400px' }}>
        <h3 className="text-center mb-4 text-primary">Login to HealthVault</h3>
        <form onSubmit={handleLogin}>
          <div className="mb-3">
            <label htmlFor="uniqueId" className="form-label">Unique ID</label>
            <input
              type="text"
              id="uniqueId"
              className="form-control"
              value={uniqueId}
              onChange={(e) => setUniqueId(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-control"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">Login</button>
        </form>
        <div className="text-center mt-3">
          <span>Don't have an account? </span>
          <Link to="/signup">Create one</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
