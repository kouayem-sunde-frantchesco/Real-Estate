import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaCog, FaHeart, FaBell, FaHome, FaSignOutAlt,
  FaUser, FaClipboardList, FaCalendarCheck, FaCommentDots
} from 'react-icons/fa';
import './dashboard.css';
import UserInfoModal from './UserInfoModal'; // 👈 Import du modal

const Dashboard = ({ open, onClose }) => {
  const navigate = useNavigate();

  const [animateMenu, setAnimateMenu] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => setAnimateMenu(true), 50);
    } else {
      setAnimateMenu(false);
    }

    // Charger les infos utilisateur
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [open]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={`sidebar-dashboard ${open ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>

      <div className={`sidebar-menu ${animateMenu ? 'animate' : ''}`}>
        <button className="sidebar-item" onClick={() => setShowUserModal(true)}>
          <FaUser /> Mes infos
        </button>

        <Link to="/favoris" className="sidebar-item">
          <FaHeart /> Favoris
        </Link>

        <Link to="/annonces" className="sidebar-item">
          <FaClipboardList /> Annonces
        </Link>

        <Link to="/notifications" className="sidebar-item">
          <FaBell /> Notifications
        </Link>

        <Link to="/avis" className="sidebar-item">
          <FaCommentDots /> Laissez un avis
        </Link>

        <Link to="/services/maison/visite" className="sidebar-item">
          <FaCalendarCheck /> Prendre rendez-vous
        </Link>

        <Link to="/parametres" className="sidebar-item">
          <FaCog /> Paramètres
        </Link>

        <button onClick={handleLogout} className="sidebar-item logout">
          <FaSignOutAlt /> Déconnexion
        </button>
      </div>

      {/* 👇 Modal Mes Infos */}
      <UserInfoModal
        isOpen={showUserModal}
        onClose={() => setShowUserModal(false)}
        user={user}
      />
    </div>
  );
};

export default Dashboard;
