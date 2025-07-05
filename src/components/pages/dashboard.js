import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaCog, FaHeart, FaBell, FaHome, FaSignOutAlt, FaThLarge } from 'react-icons/fa';
import './dashboard.css';

const Dashboard = ({ open, onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={`sidebar-dashboard ${open ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}> 
        <Link to="/" className="nav-logo">
          <img src="../images/luxis home camer.png" alt="logo" />
        </Link>
      </button>
      
      <div className="sidebar-menu">
        {/* <Link to="/dashboard" className="sidebar-item"><FaThLarge /> Tableau de bord</Link> */}
        <Link to="/dashboard/favoris" className="sidebar-item"><FaHeart /> Favoris</Link>
        <Link to="/dashboard/annonces" className="sidebar-item"><FaHome /> Annonces</Link>
        <Link to="/dashboard/notifications" className="sidebar-item"><FaBell /> Notifications</Link>
        <Link to="/dashboard/parametres" className="sidebar-item"><FaCog /> Paramètres</Link>
        <button onClick={handleLogout} className="sidebar-item logout"><FaSignOutAlt />👤Déconnexion</button>
      </div>
    </div>
  );
};

export default Dashboard;
