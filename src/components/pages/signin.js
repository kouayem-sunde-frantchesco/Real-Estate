import React, { useState } from "react";
import "./signin.css";
import head from '../m13.avif';
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";


const Register = () => {
  const sectionStyleBackground = {
    backgroundImage: `url(${head})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 0',
  };

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.username.trim()) errs.username = "Nom requis";
    if (!formData.email.trim()) {
      errs.email = "Email requis";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = "Email invalide";
    }
    if (!formData.password) errs.password = "Mot de passe requis";
    if (formData.password !== formData.confirmPassword)
      errs.confirmPassword = "Les mots de passe ne correspondent pas";
    return errs;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);
  setSuccess(false);

  if (Object.keys(validationErrors).length === 0) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: formData.username,
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        Swal.fire({
          icon: "error",
          title: "Erreur",
          text: data.message || "Erreur lors de l'inscription",
        });
        return;
      }

      // Succès
      Swal.fire({
        icon: "success",
        title: "Inscription réussie",
        text: data.message || "Votre compte a été créé.",
        timer: 2000,
        showConfirmButton: false,
      });

      setSuccess(true);
      setFormData({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Redirection vers la page principale
      if (data.redirectTo) {
        setTimeout(() => {
          window.location.href = data.redirectTo;
        }, 2000); // laisser le temps à l'alerte de s'afficher
      }

    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: "error",
        title: "Erreur",
        text: error.message || "Erreur lors de l'inscription.",
      });
    }
  }
};


  return (
    <div className="form-container" style={sectionStyleBackground}>
      <form onSubmit={handleSubmit} noValidate>
        <h2>Créer un compte</h2>

        <div className="form-group">
          <label>Nom d'utilisateur</label>
          <input
            type="text"
            name="username"
            placeholder="Entrez votre nom"
            value={formData.username}
            onChange={handleChange}
            className={errors.username ? "input-error" : ""}
          />
          {errors.username && <span className="error">{errors.username}</span>}
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="exemple@mail.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? "input-error" : ""}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <label>Mot de passe</label>
          <input
            type="password"
            name="password"
            placeholder="••••••••"
            value={formData.password}
            onChange={handleChange}
            className={errors.password ? "input-error" : ""}
          />
          {errors.password && <span className="error">{errors.password}</span>}
        </div>

        <div className="form-group">
          <label>Confirmer mot de passe</label>
          <input
            type="password"
            name="confirmPassword"
            placeholder="••••••••"
            value={formData.confirmPassword}
            onChange={handleChange}
            className={errors.confirmPassword ? "input-error" : ""}
          />
          {errors.confirmPassword && (
            <span className="error">{errors.confirmPassword}</span>
          )}
        </div>
        <button type="submit">S'inscrire</button>
         
         <div className="login-links">
            <Link to="../login">Se connecter</Link>
          </div>

        {success && <p className="success-msg">Inscription réussie ! 🎉</p>}
      </form>
    </div>
  );
};

export default Register;
