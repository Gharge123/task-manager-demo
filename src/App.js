import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LeftCard from './components/LeftCard';
import Dashboard from './components/Dashboard';
import Planning from './components/Planning';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LeftCard />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/planning" element={<Planning />} />
      </Routes>
    </Router>
  );
};

export default App;
