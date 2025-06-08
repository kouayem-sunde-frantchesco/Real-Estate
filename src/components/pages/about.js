import React from 'react';
import '../pages/about.css';

const About = () => {
  return (
    <div style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}>
      <h1>À propos de RealEstate</h1>
      
      <p>
        Chez <strong>RealEstate</strong>, nous sommes passionnés par l'immobilier et nous mettons tout en œuvre pour offrir à nos clients des services fiables, personnalisés et professionnels. Notre mission est de vous accompagner dans tous vos projets immobiliers, qu’il s’agisse d’achat, de location, de vente ou d’investissement.
      </p>

      <h2>Notre expertise</h2>
      <p>
        Forts d'une expérience solide dans le domaine de l'immobilier, nous mettons à votre disposition une équipe d’experts dédiée à la recherche de solutions adaptées à vos besoins. Grâce à notre connaissance approfondie du marché local et national, nous vous aidons à faire les bons choix, au bon moment.
      </p>

      <h2>Nos services</h2>
      <ul>
        <li><strong>Achat et vente de biens immobiliers :</strong> maisons, appartements, terrains, studios, etc.</li>
        <li><strong>Location :</strong> mise en relation entre propriétaires et locataires avec un accompagnement de A à Z.</li>
        <li><strong>Conseil en investissement :</strong> analyse de rentabilité, choix de l’emplacement, fiscalité.</li>
        <li><strong>Estimation gratuite :</strong> estimation fiable et rapide de la valeur de vos biens.</li>
        <li><strong>Gestion locative :</strong> prise en charge de la gestion quotidienne de vos locations.</li>
      </ul>

      <h2>Notre engagement</h2>
      <p>
        Nous croyons en une relation de confiance, fondée sur la transparence et la satisfaction client. Nous vous garantissons un accompagnement humain, réactif et personnalisé à chaque étape de votre parcours immobilier.
      </p>

      <p>
        Merci de faire confiance à <strong>RealEstate</strong> — votre partenaire immobilier de confiance.
      </p>
    </div>
  );
};

export default About;
