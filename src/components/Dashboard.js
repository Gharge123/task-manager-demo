import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';
import chartImage from '../assets/images/chart.png'; // Example image
import projectImage from '../assets/images/project.jpg'; // Example image

const Dashboard = () => {
  const navigate = useNavigate();

  const goToPlanning = () => {
    navigate('/planning');
  };

  return (
    <div className="dashboard">
      <button className="back-btn" onClick={() => navigate('/')}>Back</button>
      <div className="charts">
        <img src={chartImage} alt="Chart" />
      </div>
      <div className="projects">
        <div className="project-card">
          <img src={projectImage} alt="Project" />
          <h3>Project Name</h3>
          <p>Project Description</p>
        </div>
        {/* Add more project cards as needed */}
      </div>
      <button className="next-btn" onClick={goToPlanning}>Go to Planning</button>
    </div>
  );
};

export default Dashboard;
