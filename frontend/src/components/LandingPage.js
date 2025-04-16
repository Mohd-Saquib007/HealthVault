import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css'; // optional for custom styles

const LandingPage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-3 text-primary" href="#">HealthVault</a>
          <div>
            <Link to="/login" className="btn btn-outline-primary me-2">Login</Link>
            <Link to="/signup" className="btn btn-primary">Sign Up</Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-light vh-100 d-flex align-items-center">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <h1 className="display-4 fw-bold">Securely Manage Your Health Records</h1>
              <p className="lead text-muted">HealthVault helps you store and access your medical data anytime, anywhere.</p>
              <div className="mt-4">
                <Link to="/signup" className="btn btn-primary btn-lg me-3">Get Started</Link>
                <Link to="/login" className="btn btn-outline-secondary btn-lg">Login</Link>
              </div>
            </div>
            <div className="col-md-6 d-none d-md-block">
              <img
                src="https://cdn.pixabay.com/photo/2017/03/02/16/54/medical-2111405_1280.png"
                alt="Health illustration"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
