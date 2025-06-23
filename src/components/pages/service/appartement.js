import React, { useState } from 'react';
import './appartement.css';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';  
import head from '../m13.avif';


// Numéro WhatsApp du contact (format international, sans espace ni +)
const whatsappNumber = '237655479301'; // modifier par ton numéro réel
const whatsappMessage = encodeURIComponent("Bonjour, je suis intéressé par le bien immobilier que vous proposez.");
const whatsappLink = `https://wa.me/${237655479301}?text=${'Bonjour Bienvenue a Luxiz Home Camer immobilier que puis je faire pour vous?'}`;

const servicesData = [
  {
    id: 1,
    type: 'image',
    src: '/images/image1.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 2,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 3,
    type: 'image',
    src: '/images/image7.jpg',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 4,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 5,
    type: 'image',
    src: '/images/hall6.avif',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 6,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 7,
    type: 'image',
    src: '/images/hall5.avif',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 8,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 9,
    type: 'image',
    src: '/images/hall.avif',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 10,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 11,
    type: 'image',
    src: '/images/h5.avif',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 12,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 13,
    type: 'image',
    src: '/images/h3.avif',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 14,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 15,
    type: 'image',
    src: '/images/h4.avif',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 16,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 17,
    type: 'image',
    src: '/images/h2.avif',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 18,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 19,
    type: 'image',
    src: '/images/h1.avif',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 20,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

];

const Appartement = () => {

  const sectionStyleHead = {
  backgroundImage: `url(${head})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 0',
};
 

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
<>
  {/* section image */}
    <section className="head"  style={sectionStyleHead}  >
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-xl-7 col-lg-9 col-md-12">
                <div class="fpc-capstion text-center my-4">
                  <div class="fpc-captions">
                    <h1 class="title-head">Bienvenue chez <strong>Luxis Home Camer</strong></h1>
                    <p class="text-light">    Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

    <div className="service-container">

      <h2>Nos Services Immobiliers</h2>

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
              <a href="#" onClick={() => setSelectedService(item)}>Voir Plus...</a>
            </p>

            <button onClick={() => handleLike(item.id)}>👍 {likes[item.id] || 0}</button>

            <form onSubmit={(e) => handleComment(item.id, e)}>
              <input type="text" name="comment" placeholder="Laissez un commentaire" />
            </form>
            <button type="submit" className='btn-submit'>Envoyer</button>

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
    </div>
</>

  );
};

export default Appartement;
