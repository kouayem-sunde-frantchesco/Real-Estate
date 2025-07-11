import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './login.css';
import head from '../m13.avif';

const Login = () => {
  const navigate = useNavigate(); // ✅ Pour rediriger après login

  const sectionStyleBackground = {
    backgroundImage: `url(${head})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 0',
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      const response = await fetch(`${'http://109.199.107.125:5001'}/auth/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }), // ✅ password correctement nommé
      });

      const data = await response.json();

      if (response.ok) {
        // ✅ Stocker le token et user dans localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        // ✅ Message succès + redirection
        Swal.fire({
          icon: "success",
          title: "Connexion réussie",
          text: data.message || "Bienvenue sur Luxis Home Camer !",
          timer: 2000,
          showConfirmButton: false,
        }).then(() => {
          navigate('/'); // ✅ Redirection vers l'accueil
        });

      } else {
        // ❌ Erreur d'authentification
        Swal.fire({
          icon: "error",
          title: "Erreur de connexion",
          text: data.message || "Email ou mot de passe incorrect",
        });
      }

    } catch (err) {
      console.error("Erreur réseau :", err);
      Swal.fire({
        icon: "error",
        title: "Erreur serveur",
        text: "Impossible de contacter le serveur. Réessayez plus tard.",
      });
    }
  };

  return (
    <div className="login-page" style={sectionStyleBackground}>
      <div className="login-container">
        <h2>Connexion</h2>
        <form onSubmit={handleLogin}>
          <input type="email" name="email" placeholder="Email" required />
          <input type="password" name="password" placeholder="Mot de passe" required />
          <button type="submit">Se connecter</button>
        </form>

        <div className="login-links">
          <Link to="/signin">Créer un compte</Link>
          <Link to="/forgotpassword">Mot de passe oublié ?</Link>
        </div>
      </div>
    </div>
  );
};

export default Login;