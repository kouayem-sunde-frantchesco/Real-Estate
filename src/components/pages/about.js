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
                    <h1 class="title-head">Bienvenue chez <strong>Luxis Home Camer</strong></h1>
                    <p class="text-light">Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>

   <section class="about-container">

  <section className='header'>

      <h2 className='title1'>      <img src='../images/luxis home camer.png' className='img'></img>Bienvenue chez <strong>Luxis Home Camer<img src='../images/luxis home camer.png' className='img'></img></strong></h2>
    <section className='body'>
    <h2>Qui sommes nous?</h2>
    <img src="./images/dash-2.png" className='img'></img> <br/>
  </section>
  <p>
    Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.
    Nous sélectionnons rigoureusement les meilleures offres pour répondre aux attentes des particuliers, agences et investisseurs.
  </p>

    <h2><strong>Notre Mission</strong></h2>
  <p>
    Chez Luxis Home Camer, notre mission est de Réinventer l'expérience immobiliere en ligne.
  </p>

<div className=''>
  <p> Nous mettons la technologie au service de l'immobilier, pour permettre a chacun (particulier comme professionnel) de trouver vendre ou louer un bien immobilier en toute simplicité rapidité et sécurité</p>

<p>Dans un marché en constante évolution, nous croyons que l'immobilier ne devrait plus etre un parcours complexe. C'est pourquoi nous avons concu une plateforme moderne, intuitive et accessible, qui:</p>

<p> Facilite la recherche de biens grace a des filtres intellegents et des cartes interactives.</p>
<p>Valorise les propriétés avec des annonces enrichies (phtoss, vidéos, visites virtuelles)</p>
<p>Met en relation relation dircete acheteurs, locataires, propriétaire et agences</p>
<p>Assure la sécurité des échanges et la fialbilité des informations</p>
<p>Simplifie les démarches grace a des outils digitaux innovantes (prise de rendez-vous,)</p>

<h2>Notre Objectif</h2>
<p>Offrir a nos utilisateurs une expérience immobiliere fluide, transparente et efficace,  que ce soit pour acheter , louer, vendre ou investir.</p>
</div>


  <h3><strong>Pourquoi choisir Luxis Home Camer ?</strong></h3>
    <div className="img-news"><img src='./images/c5.avif'className='img-news'/>  </div>
  
  <ul>
    <li> <strong>✅Large choix de biens :</strong> appartements, maisons, bureaux, terrains, logements meublés, etc.{/*<img src='./images/cadeau1.avif' className='img-choix'/>*/}</li>
    <li>✅{/*<img src='./images/cadeau2.avif'className='img-news'/>*/} <strong>Offres actualisées :</strong> annonces vérifiées et régulièrement mises à jour.</li>
    <li>✅{/*<img src='./images/accompagnement3.avif' className='img-suivi'/>*/} <strong>Accompagnement personnalisé :</strong> conseils et assistance tout au long de votre projet immobilier.</li>
    <li>✅{/*<img src='./images/accompagnement3.avif' className='img-suivi'/>*/} <strong>Accompagnement personnalisé :</strong> conseils et assistance tout au long de votre projet immobilier.</li>
    <li>✅{/*<img src='./images/argent.avif' className='img-argent'/>*/} <strong>Transactions sécurisées :</strong> système de messagerie et options premium pour plus de visibilité.</li>
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

<section>
    <p>Luxis Home Camer, c'est bien plus qu'un site web immobilier. C'est un partenaire de confiance, engagé a transformer le marché immobilier au Cameroun et en Afrique grace a l'innovation, a la proximité et l'excellence du service.</p>
</section>

</div>

  );
};

export default About;

