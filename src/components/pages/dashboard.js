import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  FaCog, FaHeart, FaBell, FaHome, FaSignOutAlt,
  FaUser, FaClipboardList, FaCalendarCheck, FaCommentDots
} from 'react-icons/fa';
import './dashboard.css';
import UserInfoModal from './UserInfoModal'; // Modal infos utilisateur
import GenericModal from './genericModal';   // Modal générique (à importer, créer si nécessaire)


const Dashboard = ({ open, onClose }) => {
  const navigate = useNavigate();

  // États React à l'intérieur du composant
  const [animateMenu, setAnimateMenu] = useState(false);
  const [showUserModal, setShowUserModal] = useState(false);
  const [user, setUser] = useState(null);

  const [activeModal, setActiveModal] = useState(null); // Pour gérer quel modal est actif
  const [annoncesConsultees, setAnnoncesConsultees] = useState([]); // Annonces consultées

  // Effet pour animation menu et récupération user
  useEffect(() => {
    if (open) {
      setTimeout(() => setAnimateMenu(true), 50);
    } else {
      setAnimateMenu(false);
    }

    // Charger les infos utilisateur depuis localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [open]);

  // Fonction pour récupérer les annonces consultées
  const fetchAnnoncesConsultees = async () => {
    const storedUser = localStorage.getItem("user");
    if (!storedUser) return;
    const user = JSON.parse(storedUser);

    try {
      const response = await fetch(`https://luxis-home-camer.onrender.com/api/annonces-consultees/${user.id}`);
      const data = await response.json();
      setAnnoncesConsultees(data);
      setActiveModal("annonces");
    } catch (error) {
      console.error("Erreur lors du chargement des annonces :", error);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className={`sidebar-dashboard ${open ? 'open' : ''}`}>
      <button className="close-btn" onClick={onClose}>×</button>

      <div className={`sidebar-menu ${animateMenu ? 'animate' : ''}`}>
        <Link className="sidebar-item" onClick={() => setShowUserModal(true)}>
          <FaUser /> Mes infos
        </Link>

        <Link to="/vehicule/vehicule" className="sidebar-item">
          <FaHeart /> Autres Catégories
        </Link>

        <Link to="/service/appartement" className="sidebar-item">
          <FaClipboardList /> Annonces
        </Link>

        {/* Modal pour les annonces consultées */}
        <GenericModal
          isOpen={activeModal === "annonces"}
          onClose={() => setActiveModal(null)}
          title="Mes Annonces Consultées"
        >
          {annoncesConsultees.length === 0 ? (
            <p>Vous n'avez consulté aucune annonce pour le moment.</p>
          ) : (
            <ul className="liste-annonces">
              {annoncesConsultees.map((annonce, index) => (
                <li key={index}>
                  <strong>{annonce.titre}</strong><br />
                  {annonce.ville} — {annonce.prix} FCFA<br />
                  <small>Consulté le {new Date(annonce.date_consultation).toLocaleDateString()}</small>
                </li>
              ))}
            </ul>
          )}
        </GenericModal>

        {/* <Link to="/notifications" className="sidebar-item">
          <FaBell /> Notifications
        </Link> */}

        <Link to="/contact" className="sidebar-item">
          <FaCommentDots /> Laissez un avis
        </Link>

        <Link to="/rendez-vous" className="sidebar-item">
          <FaCalendarCheck /> Prendre rendez-vous
        </Link>

        {/* <Link to="/parametres" className="sidebar-item">
          <FaCog /> Paramètres
        </Link> */}

        <button onClick={handleLogout} className="sidebar-item logout">
          <FaSignOutAlt /> Déconnexion
        </button>
      </div>

      {/* Modal Mes Infos */}
      <UserInfoModal
        isOpen={showUserModal}
        onClose={() => setShowUserModal(false)}
        user={user}
      />
    </div>
  );
};

export default Dashboard;
