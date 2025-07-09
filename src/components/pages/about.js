import React from 'react';
import '../pages/about.css';
import head from '../m13.avif';  

const About = () => {

  const sectionStyleBackground = {
  backgroundImage: `url(${head})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 0',
};

  return (

<div className='container'>

  {/* section image */}
    <section className="head"  style={sectionStyleBackground}  >
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-xl-7 col-lg-9 col-md-12">
                <div class="fpc-capstion text-center my-4">
                  <div class="fpc-captions">
                  <h1 className="title-head">Bienvenue chez Luxis Home Camer</h1>                    <p class="text-light">Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>

   <section class="about-container">
  <h2 className='title-head'>Qui sommes nous?</h2>
  <section className='header'>

    <section className='body'>

  </section>
  <p>
    Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.
    Nous sélectionnons rigoureusement les meilleures offres pour répondre aux attentes des particuliers, agences et investisseurs.
  </p>

<div className=''>
  <p> Nous mettons la technologie au service de l'immobilier, pour permettre a chacun (particulier comme professionnel) de trouver vendre ou louer un bien immobilier en toute simplicité rapidité et sécurité</p>

<h2>Notre Objectif</h2>
<p>Offrir a nos utilisateurs une expérience immobiliere fluide, transparente et efficace,  que ce soit pour acheter , louer, vendre ou investir.</p>
</div>

    <h2 className='mission'>Notre Mission</h2>
  <p>
    Chez Luxis Home Camer, notre mission est de Réinventer l'expérience immobiliere en ligne.
  </p>


  <h3><strong>Pourquoi choisir Luxis Home Camer ?</strong></h3>
    {/* <div className="img-news"><img src='./images/c5.avif'className='img-news'/>  </div> */}
  
  <ul>
    <li> <strong>✅Large choix de biens :</strong> appartements, maisons, bureaux, terrains, logements meublés, etc.{/*<img src='./images/cadeau1.avif' className='img-choix'/>*/}</li>
    <li>✅{/*<img src='./images/cadeau2.avif'className='img-news'/>*/} <strong>Offres actualisées :</strong> annonces vérifiées et régulièrement mises à jour.</li>
    <li>✅{/*<img src='./images/accompagnement3.avif' className='img-suivi'/>*/} <strong>Accompagnement personnalisé :</strong> conseils et assistance tout au long de votre projet immobilier.</li>
    <li>✅{/*<img src='./images/accompagnement3.avif' className='img-suivi'/>*/} <strong>Accompagnement personnalisé :</strong> conseils et assistance tout au long de votre projet immobilier.</li>
    <li>✅{/*<img src='./images/argent.avif' className='img-argent'/>*/} <strong>Transactions sécurisées :</strong> système de messagerie et options premium pour plus de visibilité.</li>
  </ul>
  </section>


<section className='engagement'>
  <h2>Suivez-nous !</h2>
  <section>
  <p>
    Rejoignez-nous sur <strong><a href='#'>Facebook</a>, <a href='#'>Instagram</a>, <a href='#'>TikTok</a></strong> et restez informé de nos dernières offres, conseils immobiliers et services exclusifs.
  </p>
</section>

</section>

</section>
      <section className="info-section">
        <h2>Pourquoi choisir notre plateforme ?</h2>
        <ul>
          <li>✔️ Grande sélection de biens immobiliers</li>
          <li>✔️ Plateforme sécurisée et facile à utiliser</li>
          <li>✔️ Contact direct avec les vendeurs et propriétaires</li>
        </ul>
      </section>

</div>

  );
};

export default About;

