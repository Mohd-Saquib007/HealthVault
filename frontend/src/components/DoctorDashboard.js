import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
//import PatientSearch from "./PatientSearch"; // New component for doctor functionality

const DoctorDashboard = () => {
  const navigate = useNavigate();
  const { user, logout } = useAuth();

  // Doctor-specific navigation handlers
  const handlePatientRecords = (patientId) => {
    navigate(`/patient-records/${patientId}`);
  };

  const handleCreateRecord = () => {
    navigate("/create-record");
  };

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="container mt-5">
      {/* Header Section */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <div>
          <h2>Welcome, Dr. {user?.username}</h2>
          <p className="text-muted">Doctor Dashboard - {user?.specialization || "General Physician"}</p>
        </div>
        <button className="btn btn-danger" onClick={handleLogout}>
          Logout
        </button>
      </div>

      {/* Doctor-Specific Features */}
      <div className="row mb-4">
        <div className="col-12">
          <PatientSearch onSelectPatient={handlePatientRecords} />
        </div>
      </div>

      {/* Quick Actions */}
      <div className="row justify-content-center">
        <div className="col-md-4 mb-4">
          <div className="card text-center p-3 shadow">
            <h5 className="card-title">Create New Record</h5>
            <p className="card-text">Add health records for your patients.</p>
            <button 
              className="btn btn-primary" 
              onClick={handleCreateRecord}
            >
              Create Record
            </button>
          </div>
        </div>

        <div className="col-md-4 mb-4">
          <div className="card text-center p-3 shadow">
            <h5 className="card-title">My Patients</h5>
            <p className="card-text">View all patients under your care.</p>
            <button 
              className="btn btn-primary" 
              onClick={() => navigate("/my-patients")}
            >
              View Patients
            </button>
          </div>
        </div>
      </div>

      {/* Recent Activity Section */}
      <div className="card mt-4 p-3 shadow">
        <h4>Recent Activity</h4>
        {/* Will be populated with API data */}
        <p className="text-muted">Your recent consultations will appear here</p>
      </div>
    </div>
  );
};

export default DoctorDashboard;