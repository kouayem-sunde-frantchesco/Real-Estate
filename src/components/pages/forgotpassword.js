import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './forgotPassword.css';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Demande de réinitialisation envoyée pour :', email);
    // Ici, vous pouvez appeler votre API pour envoyer un email de réinitialisation
    setSubmitted(true);
  };

  return (
    <div className="forgot-password-container">
      <form className="forgot-password-form" onSubmit={handleSubmit}>
        <h2>Mot de passe oublié</h2>

        {submitted ? (
          <p className="success-message">
            Si l’adresse existe, un lien de réinitialisation vous a été envoyé.
          </p>
        ) : (
          <>
            <div className="form-group">
              <label>Adresse email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                placeholder="ex: email@exemple.com"
              />
            </div>

            <button type="submit" className="submit-button">
              Envoyer le lien de réinitialisation
            </button>
          </>
        )}

        <div className="login-links">
          <p><Link to="/login">Se connecter</Link></p>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
