import React, { useState } from 'react';

const Alerte = () => {
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [criteria, setCriteria] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('http://localhost:4000/api/alerts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, phone, criteria }),
    });

    const data = await response.json();
    setMessage(data.message);
    setEmail('');
    setPhone('');
    setCriteria('');
  };

  return (
    <div className='container'>
    <div className="alert-form">
      <h3>Recevez des alertes sur vos biens préférés</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Votre email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Votre numéro (SMS)"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <input
          type="text"
          placeholder="Critère de recherche (ex: Bastos, villa)"
          value={criteria}
          onChange={(e) => setCriteria(e.target.value)}
          required
        />
        <button type="submit">Activer l'alerte</button>
      </form>
      {message && <p>{message}</p>}
    </div>
</div>

  );
};

export default Alerte;
