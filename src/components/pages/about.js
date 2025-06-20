import React from 'react';
import '../pages/about.css';
import head from '../m10.avif';
  

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
                    <h1 class="title-head">Bienvenue chez <strong>Luxis Home Camer</strong></h1>
                    <p class="text-light">    Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.
    Nous sélectionnons rigoureusement les meilleures offres pour répondre aux attentes des particuliers, agences et investisseurs.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>

   <section class="about-container">

  <section className='header'>

      <h2>Bienvenue chez <strong>Luxis Home Camer</strong></h2>
  <p>
    Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.
    Nous sélectionnons rigoureusement les meilleures offres pour répondre aux attentes des particuliers, agences et investisseurs.
  </p>

  <h3><strong>Notre Mission</strong></h3>
  <p>
    Chez Luxis Home Camer, notre mission est de rendre l'immobilier plus simple, plus rapide et plus accessible. Nous vous
    offrons une expérience transparente et sécurisée, que vous soyez à la recherche d’un logement ou que vous souhaitiez vendre.
  </p>

  <h3><strong>Pourquoi choisir Luxis Home Camer ?</strong></h3>
  <ul>
    <li>✅<img src='./images/avif' className='img-choix'/> <strong>Large choix de biens :</strong> appartements, maisons, bureaux, terrains, logements meublés, etc.</li>
    <li>✅<img src='./images/cadeau2.avif'className='img-news'/> <strong>Offres actualisées :</strong> annonces vérifiées et régulièrement mises à jour.</li>
    <li>✅<img src='./images/accompagnement3.avif' className='img-suivi'/> <strong>Accompagnement personnalisé :</strong> conseils et assistance tout au long de votre projet immobilier.</li>
    <li>✅<img src='./images/argent.avif' className='img-argent'/> <strong>Transactions sécurisées :</strong> système de messagerie et options premium pour plus de visibilité.</li>
  </ul>
  </section>


<section className='engagement'>
  <h3><strong>Notre Engagement</strong></h3>
  <p>
    Nous nous engageons à vous offrir une plateforme fiable et facile d’utilisation. Notre équipe veille à la qualité
    des annonces et à la satisfaction des utilisateurs.
  </p>

  <h3><strong>Suivez-nous !</strong></h3>
  <p>
    Rejoignez-nous sur <strong>Facebook, Instagram, TikTok</strong> et restez informé de nos dernières offres, conseils immobiliers et services exclusifs.
  </p>

  <p>📍 <strong>Livraison de services dans toutes les régions :</strong> accédez à nos offres où que vous soyez au Cameroun.</p>

  <div class="about-icons">
    <div><strong>📦 Première Publication Gratuite</strong>Publiez votre première annonce gratuitement.</div>
    <div><strong>🏠 Annonces Authentiques</strong>Toutes nos annonces sont vérifiées manuellement.</div>
    <div><strong>🔐 Paiement Sécurisé</strong>Services Premium avec options de paiement sécurisées.</div>
    <div><strong>📞 Assistance 24/7</strong>Support client disponible en tout temps.</div>
  </div>
</section>

</section>

</div>

  );
};

export default About;

