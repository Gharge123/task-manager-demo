import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Planning.css';
import trip from '../assets/images/trip.jpg';

const Planning = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const goBack = () => {
    navigate(-1); // Navigate to the previous page
  };

  return (
    <div className="planning">
      <button className="back-btn" onClick={goBack}>Back</button>
      <div className="planning-content">
        <div className="trip-card">
          <img src={trip} alt="Trip" />
          <h3>Planning Your Trip</h3>
          <p>Total Hours: X</p>
        </div>
        <div className="tasks">
          <h3>Today's Tasks</h3>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
          <input 
            type="text" 
            value={newTask} 
            onChange={(e) => setNewTask(e.target.value)} 
            placeholder="Add a new task" 
          />
          <button onClick={addTask}>Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default Planning;

