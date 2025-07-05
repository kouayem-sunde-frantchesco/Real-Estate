import React from 'react';
import body from "../m13.avif";

const Parametres = () => {

    const sectionStyleHead = {
    backgroundImage: `url(${body})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    padding: "100px 0",
  };

  return (
    <div className="dashboard-content">


  {/* section image */}
    <section className="head"  style={sectionStyleHead}  >
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-xl-7 col-lg-9 col-md-12">
                <div class="fpc-capstion text-center my-4">
                  <div class="fpc-captions">
                  <h1 className="title-head">Bienvenue chez Luxis Home Camer</h1>                    <p class="text-light">    Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>

      <h2>⚙️ Paramètres</h2>
      <p>Gérez ici vos informations personnelles, préférences et sécurité.</p>
      {/* Ajoute un formulaire pour modifier email, mot de passe, etc. */}
    </div>
  );
};

export default Parametres;
