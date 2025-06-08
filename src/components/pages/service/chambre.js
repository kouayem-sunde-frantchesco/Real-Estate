// Achetr, louer, vendre, 

import React, { useState } from 'react';
import './appartement.css';

 const servicesData = [
  {
    id: 1,
    type: 'image',
    src: '/images/maison.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '/videos/apartment.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 3,
    type: 'video',
    src: '/videos/apartment.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 4,
    type: 'video',
    src: '/videos/apartment.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 5,
    type: 'video',
    src: '/videos/apartment.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

  {
    id: 6,
    type: 'image',
    src: '/images/maison.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },

    {
    id: 7,
    type: 'video',
    src: '/videos/apartment.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

  {
    id: 8,
    type: 'image',
    src: '/images/maison.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },

      {
    id: 9,
    type: 'video',
    src: '/videos/apartment.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },
];


const Chambre = () => {
  const [likes, setLikes] = useState({});
  const [comments, setComments] = useState({});

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
      <h2>Nos Services Immobiliers</h2>
      <div className="card-grid">
        {servicesData.map(({ id, type, src, title, price, location, description }) => (
          <div key={id} className="service-card">
            {type === 'image' ? (
              <img src={src} alt={title} />
            ) : (
              <video controls>
                <source src={src} type="video/mp4" />
              </video>
            )}
            <h3>{title}</h3>
            <p><strong>Prix :</strong> {price}</p>
            <p><strong>Lieu :</strong> {location}</p>
            <p>{description}</p>

            <button onClick={() => handleLike(id)}>👍 {likes[id] || 0}</button>

            <form onSubmit={(e) => handleComment(id, e)}>
              <input type="text" name="comment" placeholder="Laissez un commentaire" />
              <button type="submit">Envoyer</button>
            </form>

            <ul className="comment-list">
              {(comments[id] || []).map((c, i) => <li key={i}>{c}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chambre;
