import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LeftCard.css';
import avatar from '../assets/images/avatar.jpg';

const LeftCard = () => {
  const navigate = useNavigate();

  const goToDashboard = () => {
    navigate('/dashboard');
  };

  return (
    <div className="left-card">
      <div className="task-intro">
        <img src={avatar} alt="Avatar" />
        <div className="task-info">
          <h2>Easiest Way to Manage Your Task</h2>
          <p>Organize all your tasks in lists and projects to help you build new habits.</p>
          <button className="explore-btn" onClick={goToDashboard}>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default LeftCard;
