import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './login.css';
// import body from '../m10.avif';
  
const Login = () => {

//   const sectionStyleHead = {
//   backgroundImage: `url(${body})`,
//   backgroundSize: 'cover',
//   backgroundPosition: 'center',
//   padding: '100px 0',
// };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Connexion avec :', email, password);
    // Ici je vais appeler mon API de login
  };

  return (

    <div className="container">

  {/* section image */}
    {/* <section className="head" style={sectionStyleHead}  >
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-xl-7 col-lg-9 col-md-12">
                <div class="fpc-capstion text-center my-4">
                  <div class="fpc-captions">
                    <h1 class="title-head">Bienvenue chez <strong>Luxis Home Camer</strong></h1>
                    <p class="text-light"> Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.
    Nous sélectionnons rigoureusement les meilleures offres pour répondre aux attentes des particuliers, agences et investisseurs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}

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
        </div>
  );
};

export default Login;
