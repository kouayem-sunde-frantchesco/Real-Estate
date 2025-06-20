import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './forgotPassword.css';
// import body from '../m10.avif';

  
const ForgotPassword = () => {

  // const sectionStyleHead = {
  //   backgroundImage: `url(${body})`,
  //   backgroundSize: 'cover',
  //   backgroundPosition: 'center',
  //   padding: '100px 0',
  // };

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

  {/* section image */}
    {/* <section className="head"  style={sectionStyleHead}   >
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-xl-7 col-lg-9 col-md-12">
                <div class="fpc-capstion text-center my-4">
                  <div class="fpc-captions">
                    <h1 class="title-head">Bienvenue chez <strong>Luxis Home Camer</strong></h1>
                    <p class="text-light">    Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.
    Nous sélectionnons rigoureusement les meilleures offres pour répondre aux attentes des particuliers, agences et investisseurs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section> */}


    <section className=''>
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
    </section>
    </div>
  );
};

export default ForgotPassword;
