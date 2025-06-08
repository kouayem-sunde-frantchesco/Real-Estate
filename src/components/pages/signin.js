import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './signin.css';

const Signin = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.password !== form.confirmPassword) {
      setError("Les mots de passe ne correspondent pas");
      return;
    }

    setError('');
    console.log('Données du formulaire :', form);
    // Appel de l’API pour enregistrer l’utilisateur ici
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Créer un compte</h2>

        {error && <div className="error-message">{error}</div>}

        <div className="form-group">
          <label>Nom complet</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Adresse email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Confirmer le mot de passe</label>
          <input
            type="password"
            name="confirmPassword"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="register-button">S'inscrire</button>
        <div className="login-links">
          <p><Link to="/login">Se connecter</Link></p>
        </div>

      </form>
    </div>
  );
};

export default Signin;
