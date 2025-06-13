import React, { useState } from 'react';
import './appartement.css';

const servicesData = [
  {
    id: 1,
    type: 'image',
    src: '/images/c6.avif',
    title: 'Chambre moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '/videos/sakamoto.mp4',
    title: 'Chambre moderne',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 3,
    type: 'image',
    src: '/images/c9.jpg',
    title: 'Chambre Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },
  {
    id: 4,
    type: 'image',
    src: '/images/c6.avif',
    title: 'Chambre moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 5,
    type: 'video',
    src: '/videos/sakamoto.mp4',
    title: 'Chambre moderne',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 6,
    type: 'image',
    src: '/images/c45.avif',
    title: 'Chambre Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },
  {
    id: 7,
    type: 'image',
    src: '/images/c5.avif',
    title: 'Chambre moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 8,
    type: 'video',
    src: '/videos/sakamoto.mp4',
    title: 'Chambre moderne',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 9,
    type: 'image',
    src: '/images/c10.avif',
    title: 'Chambre Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },
  {
    id: 10,
    type: 'image',
    src: '/images/c3.avif',
    title: 'Chambre moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 11,
    type: 'video',
    src: '/videos/sakamoto.mp4',
    title: 'Chambre Classique',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
  {
    id: 12,
    type: 'image',
    src: '/images/c1.avif',
    title: 'Chambre Classique',
    price: '150 000 FCFA/mois',
    location: 'Douala, Akwa',
    description: 'Studio moderne avec douche interne.',
  },
];

const Chambre = () => {
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});
  const [selectedService, setSelectedService] = useState(null);

  const whatsappLink = 'https://wa.me/237655479301?text=Bonjour, je suis intéressé par votre chambre.'; // 🔁 Change ce numéro

  const handleLike = (id) => {
    setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  };

  const handleComment = (id, e) => {
    e.preventDefault();
    const commentText = e.target.elements.comment.value.trim();
    if (!commentText) return;
    setComments((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), commentText],
    }));
    e.target.reset();
  };

  return (
    <div className="service-container">
      <h2>Nos Chambres Disponibles</h2>
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

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              Contacter sur WhatsApp
            </a>
          </div>
        ))}
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

export default Chambre;
