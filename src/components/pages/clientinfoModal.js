import React from 'react';

const ClientInfoModal = ({ show, onClose, clientData, onChange, onSubmit }) => {
  if (!show) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content animated" onClick={(e) => e.stopPropagation()}>
        <h3>Informations du client</h3>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" placeholder="Nom complet" required onChange={onChange} value={clientData.name} />
          <input type="email" name="email" placeholder="Email" required onChange={onChange} value={clientData.email} />
          <input type="text" name="phone" placeholder="Téléphone" required onChange={onChange} value={clientData.phone} />
          <input type="text" name="address" placeholder="Adresse" required onChange={onChange} value={clientData.address} />
          <button type="submit" className="btn-planifier">Générer le contrat</button>
        </form>
      </div>
    </div>
  );
};

export default ClientInfoModal;
