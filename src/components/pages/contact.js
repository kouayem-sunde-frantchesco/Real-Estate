import React, { useState } from 'react';
import './contact.css';

const Contact = () => {
  const [contactData, setContactData] = useState({
    nom: '',
    email: '',
    message: ''
  });

  const [rdvData, setRdvData] = useState({
    nom: '',
    email: '',
    date: '',
    heure: '',
    message: ''
  });

  const handleContactChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleRdvChange = (e) => {
    setRdvData({ ...rdvData, [e.target.name]: e.target.value });
  };

  const handleContactSubmit = (e) => {
    e.preventDefault();
    console.log('Formulaire contact envoyé:', contactData);
    alert("Message envoyé !");
    setContactData({ nom: '', email: '', message: '' });
  };

  const handleRdvSubmit = (e) => {
    e.preventDefault();
    console.log("Demande de rendez-vous :", rdvData);
    alert("Votre demande de rendez-vous a été envoyée !");
    setRdvData({ nom: '', email: '', date: '', heure: '', message: '' });
  };

  return (
    <div className="contact-container">
      <h1>Contactez-nous</h1>
      <p>Pour toute question ou information, n'hésitez pas à nous écrire.</p>

      <form onSubmit={handleContactSubmit} className="contact-form">
        <h2>Formulaire de contact</h2>

        <label>Nom</label>
        <input
          type="text"
          name="nom"
          value={contactData.nom}
          onChange={handleContactChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={contactData.email}
          onChange={handleContactChange}
          required
        />

        <label>Message</label>
        <textarea
          name="message"
          value={contactData.message}
          onChange={handleContactChange}
          rows="5"
          required
        ></textarea>

        <button type="submit">Envoyer</button>
      </form>

      <form onSubmit={handleRdvSubmit} className="contact-form">
        <h2>Prendre un rendez-vous</h2>

        <label>Nom</label>
        <input
          type="text"
          name="nom"
          value={rdvData.nom}
          onChange={handleRdvChange}
          required
        />

        <label>Email</label>
        <input
          type="email"
          name="email"
          value={rdvData.email}
          onChange={handleRdvChange}
          required
        />

        <label>Date</label>
        <input
          type="date"
          name="date"
          value={rdvData.date}
          onChange={handleRdvChange}
          required
        />

        <label>Heure</label>
        <input
          type="time"
          name="heure"
          value={rdvData.heure}
          onChange={handleRdvChange}
          required
        />

        <label>Message (facultatif)</label>
        <textarea
          name="message"
          value={rdvData.message}
          onChange={handleRdvChange}
          rows="4"
        ></textarea>

        <button type="submit">Prendre rendez-vous</button>
      </form>
    </div>
  );
};

export default Contact;
