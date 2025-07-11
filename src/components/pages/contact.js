import React, { useState} from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import {FaMapMarkerAlt } from 'react-icons/fa';
import "./contact.css";
import body from "../m13.avif";

function Contact() {
  const sectionStyleHead = {
    backgroundImage: `url(${body})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "100px 0",
  };

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Nom requis";
    if (!form.email) errs.email = "Email requis";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email invalide";
    if (!form.message) errs.message = "Message requis";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    setSuccess(false);
    setServerError("");

    if (Object.keys(validationErrors).length === 0) {
      try {
        setLoading(true);
        const response = await fetch(`${'http://109.199.107.125:5001'}/avis`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          const errData = await response.json();
          throw new Error(errData.error || "Erreur lors de l'envoi");
        }

        const data = await response.json();
        console.log("Avis enregistré :", data);
        setSuccess(true);
        setForm({ name: "", email: "", message: "" });
      } catch (error) {
        console.error("Erreur :", error);
        setServerError(error.message || "Erreur inattendue");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <>
      <section className="head" style={sectionStyleHead}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-12">
              <div className="fpc-capstion text-center my-4">
                <div className="fpc-captions">
                  <h1 className="title-head">Bienvenue chez Luxis Home Camer</h1>
                  <p className="text-light">
                    Luxis Home Camer est votre plateforme en ligne dédiée à
                    l’achat, la vente et la location de biens immobiliers au
                    Cameroun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="contact-page">
        <div className="contact-info">
          <h2>Contactez-nous</h2>
          <p><FaMapMarkerAlt />  Bonanjo en Face BGFI Bank</p>
          <p>📞 + 237 655-479-301</p>
          <a href="https://real-estate-9hbg.vercel.app">
            <p>Notre site Web: Luxis Home Camer</p>
          </a>
          <p>✉️ kouayemfrantchesco@gmail.com</p>
          <p>🕒 Du lundi au vendredi : 9h - 18h</p>
          <div className="social-links">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>

          <div className="map">
            <img src="../images/luxis home camer.png" alt="carte" />
          </div>
        </div>

        <div className="contact-form">
          <h2>Nous laissez un Message (Avis/Recommandation)</h2>
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="name"
              placeholder="Nom"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? "input-error" : ""}
            />
            {errors.name && <span className="error">{errors.name}</span>}

            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? "input-error" : ""}
            />
            {errors.email && <span className="error">{errors.email}</span>}

            <textarea
              name="message"
              placeholder="Votre message"
              rows="5"
              value={form.message}
              onChange={handleChange}
              className={errors.message ? "input-error" : ""}
            ></textarea>
            {errors.message && (
              <span className="error">{errors.message}</span>
            )}

            <button type="submit" disabled={loading}>
              {loading ? "Envoi en cours..." : "Envoyer"}
            </button>

            {success && (
              <p className="success-msg">
                ✅ Votre message a été envoyé avec succès !
              </p>
            )}

            {serverError && (
              <p className="error-msg">
                ❌ Une erreur est survenue : {serverError}
              </p>
            )}
          </form>
        </div>

      <section className="info-section">
        <h2>Pourquoi choisir notre plateforme ?</h2>
        <ul>
          <li>✔️ Grande sélection de biens immobiliers</li>
          <li>✔️ Plateforme sécurisée et facile à utiliser</li>
          <li>✔️ Contact direct avec les vendeurs et propriétaires</li>
        </ul>
      </section>
      </div>
    </>
  );
}

export default Contact;
