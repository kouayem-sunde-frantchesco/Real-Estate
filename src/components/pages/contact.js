import React, { useState } from "react";
import "./contact.css";
import body from '../m13.avif';

function Contact() {

  const sectionStyleHead = {
  backgroundImage: `url(${body})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 0',
};

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const errs = {};
    if (!form.name) errs.name = "Nom requis";
    if (!form.email) errs.email = "Email requis";
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = "Email invalide";
    if (!form.subject) errs.subject = "Sujet requis";
    if (!form.message) errs.message = "Message requis";
    return errs;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  const validationErrors = validate();
  setErrors(validationErrors);
  setSuccess(false);

  if (Object.keys(validationErrors).length === 0) {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi");
      }

      const data = await response.json();
      console.log("Message enregistré :", data);
      setSuccess(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("Erreur : ", error);
      setSuccess(false);
    }
  }
};


  return (

<>
  {/* section image */}
    <section className="head"  style={sectionStyleHead}   >
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-xl-7 col-lg-9 col-md-12">
                <div class="fpc-capstion text-center my-4">
                  <div class="fpc-captions">
                    <h1 class="title-head">Bienvenue chez <strong>Luxis Home Camer</strong></h1>
                    <p class="text-light">    Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>

    <div className="contact-page">
      
      <div className="contact-info">
        <h2>Contactez-nous</h2> 
        <p>📍 Akwa Bali</p>
        <p>📞 + 237 655-479-301</p>
        <a href="https://cat-sn3z.vercel.app/"><p>Notre site Web: Care Automobile Tracking</p></a>
        <p>✉️kouayemfrantchesco@gmail.com</p>
        <p>🕒 Du lundi au vendredi : 9h - 18h</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>

        <div className="map">
            <img src="./images/c9.jpg"></img>
        </div>
        {/* <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.3372275668073!2d2.352221615674864!3d48.85661407928783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877dd841d%3A0x5e9c8e622de0c391!2sParis!5e0!3m2!1sfr!2sfr!4v1673352069376!5m2!1sfr!2sfr"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> */}
      </div>

      {/* <div className="contact-form">
        <h2>Envoyez-nous un message</h2>
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

          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={form.subject}
            onChange={handleChange}
            className={errors.subject ? "input-error" : ""}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}

          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit">Envoyer</button>
          {success && <p className="success-msg">Message envoyé avec succès ! ✅</p>}
        </form>
      </div> */}
    </div>

    <div className="contact-page">
      
      <div className="contact-info">
        <h2>Contactez-nous</h2> 
        <p>📍 Akwa Bali</p>
        <p>📞 + 237 655-479-301</p>
        <a href="https://cat-sn3z.vercel.app/"><p>Notre site Web: Care Automobile Tracking</p></a>
        <p>✉️kouayemfrantchesco@gmail.com</p>
        <p>🕒 Du lundi au vendredi : 9h - 18h</p>
        <div className="social-links">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">Facebook</a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        </div>

        <div className="map">
            <img src="./images/c9.jpg"></img>
        </div>
        {/* <div className="map">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2625.3372275668073!2d2.352221615674864!3d48.85661407928783!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e671d877dd841d%3A0x5e9c8e622de0c391!2sParis!5e0!3m2!1sfr!2sfr!4v1673352069376!5m2!1sfr!2sfr"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div> */}
      </div>

   <div className="contact-form">
        <h2>Prendre Rendez-vous</h2>
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

          <input
            type="text"
            name="subject"
            placeholder="Sujet"
            value={form.subject}
            onChange={handleChange}
            className={errors.subject ? "input-error" : ""}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}

            <input 
            type="date"
            name="date-meet"
            placeholder="choose a date meet"
            value={form.date}
            onChange={handleChange}
            className={errors.date ? "input-error" : ""}/>
            {errors.date && <span className="error">{errors.date}</span>}
          <textarea
            name="message"
            placeholder="Votre message"
            rows="5"
            value={form.message}
            onChange={handleChange}
            className={errors.message ? "input-error" : ""}
          ></textarea>
          {errors.message && <span className="error">{errors.message}</span>}

          <button type="submit">Envoyer</button>
          {success && <p className="success-msg">Message envoyé avec succès ! ✅</p>}
        </form>
      </div>
    </div>

</>

  );
}

export default Contact;
