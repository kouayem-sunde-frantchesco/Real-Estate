import React, { useState } from 'react';
import './rendez-vous.css';

const RendezVous = () => {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    date: '',
    heure: '',
  });

  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async e => {
    e.preventDefault();

    const { nom, email, telephone, date, heure } = formData;

    if (!nom || !email || !telephone || !date || !heure) {
      setError('Veuillez remplir tous les champs.');
      return;
    }

    try {
      const response = await fetch(`${'http://109.199.107.125:5001'}/rendezvous`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Erreur serveur');
      }

      const result = await response.json();
      console.log(result.message);

      setShowSuccessModal(true);
      setFormData({ nom: '', email: '', telephone: '', date: '', heure: '' });
      setError(null);
    } catch (err) {
      console.error('Erreur envoi:', err);
      setError("Erreur lors de l'envoi. Veuillez réessayer.");
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: 8 }}>
      <h2>Prendre un rendez-vous</h2>

      {error && (
        <div style={{ marginBottom: '1rem', color: 'red' }}>{error}</div>
      )}

      <form onSubmit={handleSubmit}>
        <input type="text" name="nom" placeholder="Nom complet" value={formData.nom} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="telephone" placeholder="Téléphone" value={formData.telephone} onChange={handleChange} required />
        <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        <input type="time" name="heure" value={formData.heure} onChange={handleChange} required />

        <button type="submit">Prendre rendez-vous</button>
      </form>

      {showSuccessModal && (
        <div className="modal-overlay" onClick={() => setShowSuccessModal(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>✅ Rendez-vous enregistré !</h3>
            <p>Votre demande a été envoyée avec succès par email.</p>
            <button onClick={() => setShowSuccessModal(false)}>Fermer</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RendezVous;
