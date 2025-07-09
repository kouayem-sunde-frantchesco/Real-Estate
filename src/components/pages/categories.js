import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart } from 'react-icons/fa';
import '../pages/categories.css';
import body from '../m13.avif';

const serviceData = [
  {
    id: 1,
    title: 'Visite virtuelle 360°',
    category: 'Digital',
    description: 'Explorez les biens à distance grâce à une visite immersive.',
    image: '/images/m8.avif',
  },
  {
    id: 2,
    title: 'Service juridique',
    category: 'Assistance',
    description: 'Bénéficiez d’un accompagnement pour vos contrats et litiges.',
    image: '/images/m9.avif',
  },
  {
    id: 3,
    title: 'Gestion locative',
    category: 'Gestion',
    description: 'Confiez-nous vos biens et laissez-nous gérer vos locataires.',
    image: '/images/m10.avif',
  },
];

const Categorie = () => {

  const sectionStyleHead = {
  backgroundImage: `url(${body})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 0',
};


  const [filter, setFilter] = useState('Tous');
  const [likes, setLikes] = useState(Array(serviceData.length).fill(0));
  const [comments, setComments] = useState(Array(serviceData.length).fill([]));

  const handleLike = (index) => {
    const newLikes = [...likes];
    newLikes[index]++;
    setLikes(newLikes);
  };

  const handleComment = (index, e) => {
    e.preventDefault();
    const comment = e.target.elements.comment.value;
    if (comment.trim()) {
      const newComments = [...comments];
      newComments[index].push(comment);
      setComments(newComments);
      e.target.reset();
    }
  };

  const filteredServices =
    filter === 'Tous'
      ? serviceData
      : serviceData.filter((item) => item.category === filter);

  return (
<>
  {/* section image */}
    <section className="head"  style={sectionStyleHead}  >
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
    
    <div className="service-container">

      <h2>Nos Services</h2>

      <div className="filter-buttons">
        {['Tous', 'Digital', 'Assistance', 'Gestion'].map((cat) => (
          <button
            key={cat}
            className={filter === cat ? 'active' : ''}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="card-grid">
        {filteredServices.map((service, index) => (
          <motion.div
            className="service-card"
            key={service.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03 }}
            transition={{ duration: 0.4 }}
          >
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <button onClick={() => handleLike(index)}>
              <FaHeart style={{ marginRight: '5px' }} />
              J’aime {likes[index]}
            </button>

            <form onSubmit={(e) => handleComment(index, e)}>
              <input type="text" name="comment" placeholder="Votre commentaire..." />
            </form>
            <button type="submit">Envoyer</button>

            <ul className="comment-list">
              {comments[index].map((com, i) => (
                <li key={i}>{com}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
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

export default Categorie;
