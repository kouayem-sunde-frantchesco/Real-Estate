import React, { useState } from 'react';
import './appartement.css';

const servicesData = [
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
    src: '/videos/appartement1.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c78.jpg',
    title: 'Studio à louer',
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

const Studio = () => {
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [selectedService, setSelectedService] = useState(null);

  const handleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

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
      <h2>Nos Studios Disponibles</h2>
      <div className="card-grid">
        {servicesData.map((item) => {
          const whatsappLink = `https://wa.me/237655479301?text=Bonjour, je suis intéressé par: ${encodeURIComponent(item.title)} situé à ${encodeURIComponent(item.location)} pour ${encodeURIComponent(item.price)}`;
          return (
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
                <a href="#" onClick={() => setSelectedService(item)}>Observer les détails</a>
              </p>

              <button onClick={() => handleLike(item.id)}>👍 {likes[item.id] || 0}</button>

              <form onSubmit={(e) => handleComment(item.id, e)}>
                <input type="text" name="comment" placeholder="Laissez un commentaire" />
                <button type="submit">Envoyer</button>
              </form>

              <ul className="comment-list">
                {(comments[item.id] || []).map((c, i) => <li key={i}>{c}</li>)}
              </ul>

              {/* 🔗 Lien WhatsApp */}
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

export default Studio;
