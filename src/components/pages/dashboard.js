import React from 'react';
import Sidebar from './sidebar';
import Topbar from './topbar';
import './dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Sidebar />
      <div className="dashboard-main">
        <Topbar />
        <div className="dashboard-content">
          <h2>Bienvenue sur le tableau de bord</h2>
          <div className="cards">
            <div className="card">Utilisateurs: 120</div>
            <div className="card">Messages: 34</div>
            <div className="card">Visites: 245</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
