import React, { useState } from "react";

const Signup = () => {
  const [userType, setUserType] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    phone: "",
    motherName: "",
    fatherName: "",
    password: "",
    email: "",
    specialization: "",
    licenseNumber: "",
    clinicName: "",
    experience: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUserTypeChange = (e) => {
    setUserType(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Data:", { userType, ...formData });
    alert("Signup successful!");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Sign Up</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow">
        <div className="mb-3">
          <label className="form-label">I am a:</label>
          <select
            className="form-select"
            value={userType}
            onChange={handleUserTypeChange}
            required
          >
            <option value="">Select user type</option>
            <option value="normal">Normal User</option>
            <option value="doctor">Doctor</option>
          </select>
        </div>

        {userType && (
          <>
            {/* Common Fields */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Phone Number</label>
              <input
                type="tel"
                className="form-control"
                name="phone"
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                name="email"
                onChange={handleChange}
                required
              />
            </div>

            {/* Fields for Normal User */}
            {userType === "normal" && (
              <>
                <div className="row">
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Age</label>
                    <input
                      type="number"
                      className="form-control"
                      name="age"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Gender</label>
                    <select
                      className="form-select"
                      name="gender"
                      onChange={handleChange}
                    >
                      <option value="">Select</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="col-md-4 mb-3">
                    <label className="form-label">Height</label>
                    <input
                      type="text"
                      className="form-control"
                      name="height"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Weight</label>
                    <input
                      type="text"
                      className="form-control"
                      name="weight"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Mother's Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="motherName"
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label">Father's Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="fatherName"
                    onChange={handleChange}
                  />
                </div>
              </>
            )}

            {/* Fields for Doctor */}
            {userType === "doctor" && (
              <>
                <div className="mb-3">
                  <label className="form-label">Specialization</label>
                  <select
                    className="form-select"
                    name="specialization"
                    onChange={handleChange}
                  >
                    <option value="">Select</option>
                    <option>Cardiologist</option>
                    <option>Neurologist</option>
                    <option>General Physician</option>
                    <option>Dermatologist</option>
                    <option>Gynecologist</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label className="form-label">Medical License Number</label>
                  <input
                    type="text"
                    className="form-control"
                    name="licenseNumber"
                    onChange={handleChange}
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Hospital/Clinic Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="clinicName"
                    onChange={handleChange}
                  />
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className="form-label">Years of Experience</label>
                    <input
                      type="number"
                      className="form-control"
                      name="experience"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label className="form-label">City/State/Country</label>
                    <input
                      type="text"
                      className="form-control"
                      name="location"
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </>
            )}

            {/* Common password field */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                name="password"
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-100">
              Sign Up
            </button>
          </>
        )}
      </form>

      <div className="text-center mt-3">
        Already have an account? <a href="/login">Login</a>
      </div>
    </div>
  );
};

export default Signup;
