import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import "./forgotpassword.css";
import body from '../m13.avif';
import Swal from "sweetalert2";

const ForgotPassword = ()=> {

  const sectionStyleBackground = {
  backgroundImage: `url(${body})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 0',
};

  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);


const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setSuccess(false);

  // Validation simple de l'email
  if (!email.trim()) {
    Swal.fire("Erreur", "L'adresse email est requise", "error");
    return;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    Swal.fire("Erreur", "Adresse email invalide", "error");
    return;
  }

  try {
    const response = await fetch(`${'http://109.199.107.125:5001'}/auth/forgot-password`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message || "Une erreur est survenue");
    }

    Swal.fire("Succès", "Un nouveau mot de passe a été envoyé à votre email", "success");
    setSuccess(true);
    setEmail("");

  } catch (err) {
    console.error(err);
    Swal.fire("Erreur", err.message || "Échec de l'envoi de l'email", "error");
  }
};


  return (
    <div className="" style={sectionStyleBackground}>
        <div className="form-container">

      <form onSubmit={handleSubmit} noValidate>
        <h2>Mot de passe oublié</h2>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="exemple@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={error ? "input-error" : ""}
          />
          {error && <span className="error">{error}</span>}
        </div>

        <button type="submit">Envoyer un lien de réinitialisation</button>

        {success && (
          <p className="success-msg">
            📩 Un lien a été envoyé à votre adresse email.
          </p>
        )}
        
        {/* lien pour le login */}
          <div className="login-links">
              <Link to="../login">Se connecter</Link>
          </div>

      </form>
    </div>
</div>
  );
}

export default ForgotPassword;