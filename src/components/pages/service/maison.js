import React, { useState } from 'react';
import './appartement.css';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import body from '../m10.avif';

const servicesData = [
  // Données des biens immobiliers
  {
    id: 1,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '../video/sakamoto.mp4',
    title: 'Maison Classique',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },

    {
    id: 1,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '../video/sakamoto.mp4',
    title: 'Maison Classique',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },

    {
    id: 1,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '../video/sakamoto.mp4',
    title: 'Maison Classique',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },

    {
    id: 1,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '../video/sakamoto.mp4',
    title: 'Maison Classique',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },

    {
    id: 1,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '../video/sakamoto.mp4',
    title: 'Maison Classique',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },

    {
    id: 1,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '../video/sakamoto.mp4',
    title: 'Maison Classique',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },
  {
    id: 1,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '../video/sakamoto.mp4',
    title: 'Maison Classique',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },

    {
    id: 1,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '../video/sakamoto.mp4',
    title: 'Maison Classique',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },

    {
    id: 1,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '../video/sakamoto.mp4',
    title: 'Maison Classique',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },

    {
    id: 1,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '../video/sakamoto.mp4',
    title: 'Maison Classique',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },

    {
    id: 1,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '../video/sakamoto.mp4',
    title: 'Maison Classique',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },

    {
    id: 1,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '../video/sakamoto.mp4',
    title: 'Maison Classique',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Maison Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },

];

const Maison = () => {

  const sectionStyleHead = {
  backgroundImage: `url(${body})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 0',
};

  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [selectedService, setSelectedService] = useState(null);

  // Fonction de like
  const handleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  // Fonction pour poster un commentaire
  const handleComment = (id, e) => {
    e.preventDefault();
    const commentText = e.target.elements.comment.value;
    if (!commentText) return;
    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), commentText],
    }));
    e.target.reset();
  };

  return (
    <div className="service-container">

  {/* section image */}
    <section className="head"  style={sectionStyleHead}  >
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

      <h2>Nos Services Immobiliers</h2>
      
      <div className="card-grid">
        {servicesData.map((item) => {
          // Numéro WhatsApp (exemple, à remplacer par le vrai)
          const phoneNumber = '237655479301';

          // Message WhatsApp personnalisé avec encodage de l’URL
          const message = `Bonjour, je suis intéressé par "${item.title}" situé à ${item.location}. Pouvez-vous me donner plus d'informations ?`;
          const whatsappLink = `https://wa.me/${'237655479301'}?text=${encodeURIComponent(message)}`;

          return (
            <div key={item.id} className="service-card">
              {/* Affichage de l'image ou de la vidéo */}
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
                <a href="#" onClick={() => setSelectedService(item)}>Observer les détails</a>
              </p>

              {/* Bouton Like */}
              <button onClick={() => handleLike(item.id)}>👍 {likes[item.id] || 0}</button>

              {/* Formulaire de commentaire */}
              <form onSubmit={(e) => handleComment(item.id, e)}>
                <input type="text" name="comment" placeholder="Laissez un commentaire" />
                <button type="submit">Envoyer</button>
              </form>

              {/* Liste des commentaires */}
              <ul className="comment-list">
                {(comments[item.id] || []).map((c, i) => <li key={i}>{c}</li>)}
              </ul>

              {/* 🔗 Lien vers WhatsApp */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-button"
              >
                Contacter sur WhatsApp
              </a>
            </div>
          );
        })}
      </div>

      {/* Fenêtre modale pour afficher les détails */}
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
    </div>
  );
};

export default Maison;
