// src/components/UserInfoModal.js
import React from 'react';
import './modal.css'; // styles modaux généraux

const UserInfoModal = ({ isOpen, onClose, user }) => {
  if (!isOpen || !user) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Mes Informations</h2>
        <p><strong>Nom d'utilisateur :</strong> {user.username}</p>
        <p><strong>Email :</strong> {user.email}</p>

        <button className="modal-close" onClick={onClose}>Fermer</button>
      </div>
    </div>
  );
};

export default UserInfoModal;
