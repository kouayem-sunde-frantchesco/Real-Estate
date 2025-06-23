import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import "./login.css";
import head from '../m13.avif';

const Login =() =>{

  const sectionStyleBackground = {
  backgroundImage: `url(${head})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 0',
};


const handleLogin = async (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const mot_de_passe = e.target.password.value;

  try {
    const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password: mot_de_passe }), // 👈 toujours Vérifie bien le nom utilisé côté backend
    });

    const data = await response.json();

    if (response.ok) {
      // ✅ Stocker le token dans le localStorage
      localStorage.setItem("token", data.token);

      // ✅ Afficher message de succès
      Swal.fire({
        icon: "success",
        title: "Connexion réussie",
        text: data.message || "Bienvenue !",
        timer: 2000,
        showConfirmButton: false,
      }).then(() => {
        // ✅ Redirection
        if (data.redirectTo) {
          window.location.href = data.redirectTo;
        }
      });

    } else {
      // ❌ Afficher une alerte d’erreur
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

}

export default Login;