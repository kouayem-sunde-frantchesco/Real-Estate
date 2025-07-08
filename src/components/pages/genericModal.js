import React from 'react';
import './genericModal.css'; // tu peux créer un css pour le style du modal

const GenericModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <header className="modal-header">
          <h2>{title}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </header>
        <main className="modal-body">
          {children}
        </main>
      </div>
    </div>
  );
};

export default GenericModal;
