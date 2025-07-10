import React, { useState } from 'react';
import './vehicule.css';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';  
import head from '../m13.avif';


// Numéro WhatsApp du contact (format international, sans espace ni +)
const whatsappNumber = '237655479301'; // modifier par ton numéro réel
const whatsappMessage = encodeURIComponent("Bonjour, je suis intéressé par le bien immobilier que vous proposez.");
const whatsappLink = `https://wa.me/${237655479301}?text=${'Bonjour, je suis intéressé par le bien immobilier que vous proposez'}`;

const servicesData = [
  {
    id: 1,
    type: 'image',
    src: '/images/moto/moto1.avif',
    title: 'Mitsubishi Pajero ',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
    statut: "A vendre"
  },
  {
    id: 2,
    type: 'image',
    src: '/images/moto/moto1.avif',
    title: 'KAWASAKI KLE 500',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    statut: "A vendre"
  },

    {
    id: 3,
    type: 'image',
    src: '/images/moto/moto2.avif',
    title: 'Mitsubishi Pajero ',
    price: '10 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
    statut: "A louer"
  },
  {
    id: 4,
    type: 'image',
    src: '/images/moto/moto4.avif',
    title: 'KAWASAKI KLE 500',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    statut: "A vendre"
  },

    {
    id: 5,
    type: 'image',
    src: '/images/moto/moto3.avif',
    title: 'Mitsubishi Pajero ',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
    statut: "A vendre"
  },
  {
    id: 6,
    type: 'image',
    src: '/images/moto/moto6.avif',
    title: 'KAWASAKI KLE 500',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    statut: "A vendre"
  },

    {
    id: 7,
    type: 'image',
    src: '/images/moto/moto8.avif',
    title: 'Mitsubishi Pajero ',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
    statut: "A louer"
  },
  {
    id: 8,
    type: 'image',
    src: '/images/moto/moto9.avif',
    title: 'KAWASAKI KLE 500',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    statut: "A vendre"
  },

    {
    id: 9,
    type: 'image',
    src: '/images/moto/moto10.avif',
    title: 'Mitsubishi Pajero ',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
    statut: "A louer"
  },
  {
    id: 10,
    type: 'image',
    src: '/images/moto/moto9.avif',
    title: 'KAWASAKI KLE 500',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    statut: "A louer"
  },

    {
    id: 11,
    type: 'image',
    src: '/images/moto/moto12.avif',
    title: 'Mitsubishi Pajero ',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
    statut: "A vendre"
  },
  {
    id: 12,
    type: 'image',
    src: '/images/moto/moto13.avif',
    title: 'KAWASAKI KLE 500',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    statut: "A louer"
  },

    {
    id: 13,
    type: 'image',
    src: '/images/car6.jpg',
    title: 'Mitsubishi Pajero ',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
    statut: "A louer"
  },
  {
    id: 14,
    type: 'image',
    src: '/images/voiture/voiture10.jpg',
    title: 'KAWASAKI KLE 500',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    statut: "A vendre"
  },

    {
    id: 15,
    type: 'image',
    src: '/images/voiture/voiture1.avif',
    title: 'Mitsubishi Pajero ',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
    statut: "A vendre"
  },
  {
    id: 16,
    type: 'image',
    src: '/images/voiture/voiture11.avif',
    title: 'KAWASAKI KLE 500',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    statut: "A louer"
  },

    {
    id: 17,
    type: 'image',
    src: '/images/car4.avif',
    title: 'Mitsubishi Pajero ',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
    statut: "A louer"
  },
  {
    id: 18,
    type: 'image',
    src: '/images/voiture/voiture12.jpg',
    title: 'KAWASAKI KLE 500',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    statut: "A louer"
  },

    {
    id: 19,
    type: 'image',
    src: '/images/voiture/tesla.avif',
    title: 'Mitsubishi Pajero ',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
    statut: "A Vendre"
  },
  {
    id: 20,
    type: 'image',
    src: '/images/voiture/voiture2.avif',
    title: 'KAWASAKI KLE 500',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    statut: "A louer"
  },
    {
    id: 21,
    type: 'image',
    src: '/images/voiture/voiture3.avif',
    title: 'Mitsubishi Pajero ',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
    statut: "A Vendre"
  },

];

const Vehicule = () => {

  const sectionStyleHead = {
  backgroundImage: `url(${head})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 0',
};
 

  // const [likes, setLikes] = useState({});
  // const [comments, setComments] = useState({});
  const [selectedService, setSelectedService] = useState(null);

  // const handleLike = (id) => {
  //   setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  // };

  // const handleComment = (id, e) => {
  //   e.preventDefault();
  //   const commentText = e.target.elements.comment.value;
  //   if (!commentText) return;
  //   setComments((prev) => ({
  //     ...prev,
  //     [id]: [...(prev[id] || []), commentText],
  //   }));
  //   e.target.reset();
  // };

  return (
<>
  {/* section image */}
    <section className="head"  style={sectionStyleHead}  >
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

    <div className="service-container">

      <h2>Annonces Véhicules</h2>

      <div className="card-grid">
        {servicesData.map((item) => (
          <div key={item.id} className="service-card">
            {item.type === 'image' ? (
              <img src={item.src} alt={item.title} />
            ) : (
              <video controls>
                <source src={item.src} type="video/mp4" />
              </video>
            )}
            <h3>{item.title}</h3>
            <p><strong>Prix :</strong> {item.price}</p>
            <p>
              <strong>Lieu :</strong> {item.location} <br />
              <strong>Statut:</strong> {item.statut} <br/>
              <a href="#" onClick={() => setSelectedService(item)}>Voir plus</a>
            </p>

            {/* <button onClick={() => handleLike(item.id)}>👍 {likes[item.id] || 0}</button> */}

            {/* <form onSubmit={(e) => handleComment(item.id, e)}>
              <input type="text" name="comment" placeholder="Laissez un commentaire" />
            </form>
            <button type="submit">Envoyer</button>

            <ul className="comment-list">
              {(comments[item.id] || []).map((c, i) => <li key={i}>{c}</li>)}
            </ul> */}

            {/* 🔗 Lien vers WhatsApp */}
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              WhatsApp
            </a>

          </div>
        ))}
      </div>

      {/* Modal de détails */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{selectedService.title}</h3>
            <p><strong>Prix :</strong> {selectedService.price}</p>
            <p><strong>Lieu :</strong> {selectedService.location}</p>
            <p><strong>Description :</strong> {selectedService.description}</p>
            <button onClick={() => setSelectedService(null)}>Fermer</button>
          </div>
        </div>
      )}

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
};

export default Vehicule;
