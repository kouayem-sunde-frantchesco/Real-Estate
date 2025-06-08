import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Connexion avec :', email, password);
    // Ici tu peux appeler ton API de login
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <div className="form-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Mot de passe</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="login-button">Se connecter</button>

        {/* Liens supplémentaires */}
        <div className="login-links">
          <p><Link to="/signin">Créer un compte</Link></p>
          <p><Link to="/forgotpassword">Mot de passe oublié ?</Link></p>
        </div>
      </form>
    </div>
  );
};

export default Login;
