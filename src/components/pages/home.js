import React from 'react';
import { Link } from 'react-router-dom';
import './home.css';
// import m8 from '../components/m8.avif';

const categories1 = [
  { name: 'Maisons', image: '/images/c78.jpg' },
  { name: 'Appartements', image: '/images/c78.jpg' },
  { name: 'Studios', image: '/images/c78.jpg' },
  { name: 'Chambres', image: '/images/c78.jpg' },
  { name: 'Terrains', image: '/images/c78.jpg' },
];

const categories2 = [
  { name: 'Maisons', image: '/images/c78.jpg' },
  { name: 'Appartements', image: '/images/c78.jpg' },
  { name: 'Studios', image: '/images/c78.jpg' },
  { name: 'Chambres', image: '/images/c78.jpg' },
  { name: 'Terrains', image: '/images/c78.jpg' },
];

const categories3 = [
  { name: 'Maisons', image: '/images/c78.jpg' },
  { name: 'Appartements', image: '/images/c78.jpg' },
  { name: 'Studios', image: '/images/c78.jpg' },
  { name: 'Chambres', image: '/images/c78.jpg' },
  { name: 'Terrains', image: '/images/c78.jpg' },
];

const categories4 = [
  { name: 'Maisons', image: '/images/c78.jpg' },
  { name: 'Appartements', image: '/images/c78.jpg' },
  { name: 'Studios', image: '/images/c78.jpg' },
  { name: 'Chambres', image: '/images/c78.jpg' },
  { name: 'Terrains', image: '/images/c78.jpg' },
];


const Home = () => {
  return (
    <div className="home-container">
      <header
        className="banner"
        style={{
        //   backgroundImage: `url(${m8})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          textAlign: 'center',
          padding: '80px 20px',
        }}
      >
        <h1>Trouvez votre prochain logement facilement</h1>
        <p>Explorez notre sélection de biens immobiliers dans tout le pays.</p>
        <Link to="/service" className="cta-button">Offres Classiques</Link>
        <Link to="/service" className="cta-button">Offres VIP</Link>
        <Link to="/" className="cta-button">
            <a href="https://wa.me/237655479301" id="support" title="Service Client">
              <img src="../images/whatsap.avif"/>  Service Client
            </a>
        </Link>
      
      </header>


      <section className="category-section">
        <h2>Catégories populaires</h2>
        <div className="category-grid">
          {categories1.map((cat, index) => (
            <Link to={`/service?category=${cat.name.toLowerCase()}`} className="category-card" key={index}>
              <img src={cat.image} alt={cat.name} />
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>


      <section className="category-section">
        <h2>Catégories populaires</h2>
        <div className="category-grid">
          {categories2.map((cat, index) => (
            <Link to={`/service?category=${cat.name.toLowerCase()}`} className="category-card" key={index}>
              <img src={cat.image} alt={cat.name} />
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="category-section">
        <h2>Catégories populaires</h2>
        <div className="category-grid">
          {categories3.map((cat, index) => (
            <Link to={`/service?category=${cat.name.toLowerCase()}`} className="category-card" key={index}>
              <img src={cat.image} alt={cat.name} />
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="category-section">
        <h2>Catégories populaires</h2>
        <div className="category-grid">
          {categories4.map((cat, index) => (
            <Link to={`/service?category=${cat.name.toLowerCase()}`} className="category-card" key={index}>
              <img src={cat.image} alt={cat.name} />
              <span>{cat.name}</span>
            </Link>
          ))}
        </div>
      </section>


      <section className="info-section">
        <h2>Pourquoi choisir notre plateforme ?</h2>
        <ul>
          <li>✔️ Grande sélection de biens immobiliers</li>
          <li>✔️ Plateforme sécurisée et facile à utiliser</li>
          <li>✔️ Contact direct avec les vendeurs et propriétaires</li>
        </ul>
      </section>

      <footer className="home-footer">
        <p>© 2025 RealEstate - Tous droits réservés.</p>
      </footer>
    </div>
  );
};

export default Home;
