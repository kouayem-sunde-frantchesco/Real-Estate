import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import './home.css';
import body from '../m13.avif';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const sectionStyleHead = {
    backgroundImage: `url(${body})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 0',
  };

  const appartement = [
    { name: 'Maisons', image: '/images/m13.avif' },
    { name: 'Appartements', image: '/images/h4.avif' },
    { name: 'Studios', image: '/images/m14.jpg' },
    { name: 'Chambres', image: '/images/c78.jpg' },
    { name: 'Terrains', image: '/images/t1.jpeg' },
  ];

  const maison = [
    { name: 'Maisons', image: '/images/m2.avif' },
    { name: 'Appartements', image: '/images/hall6.avif' },
    { name: 'Studios', image: '/images/m12.avif' },
    { name: 'Chambres', image: '/images/c9.jpg' },
    { name: 'Terrains', image: '/images/t3.jpg' },
  ];

  const studio = [
    { name: 'Maisons', image: '/images/m7.avif' },
    { name: 'Appartements meublé', image: '/images/hall2.avif' },
    { name: 'Studios', image: '/images/m10.avif' },
    { name: 'Chambres', image: '/images/c8.jpg' },
    { name: 'Terrains', image: '/images/t4.avif' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } }
    ]
  };

  const renderSlider = (title, categories) => (
    <section className="category-section">
      <h2>{title}</h2>
      <Slider {...settings} className="category-slider">
        {categories.map((cat, index) => (
          <div key={index} className="category-card">
            <Link to={`/service/appartement=${cat.name.toLowerCase()}`}>
              <img src={cat.image} alt={cat.name} />
              <span>{cat.name}</span>
            </Link>
          </div>
        ))}
      </Slider>
    </section>

  );

  return (
    <div className="home-container">
      <section className="head" style={sectionStyleHead}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-12">
              <div className="fpc-capstion text-center my-4">
                <div className="fpc-captions">
                  <h1 className="title-head">Bienvenue chez Luxis Home Camer</h1>
                  <p className="text-light">Votre plateforme dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <header className="banner" style={{
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
        textAlign: 'center',
        padding: '80px 20px'
      }}>
        <h1>Trouvez votre prochain logement facilement</h1>
        <p>Explorez notre sélection de biens immobiliers dans tout le pays.</p>
        <Link to="/classique" className="cta-button">Offres Classiques</Link>
        <Link to="/vip" className="cta-button-vip">Offres VIP</Link>
        {/* <Link to="/categorie" className="cta-button-premium">Offres Premium</Link> */}
        <Link to="/vehicule/vehicule" className="cta-button-premium">Autres Services</Link>
        <a href="https://wa.me/237655479301" className="cta-button" id="support" title="Service Client">
          Service Client
        </a>
      </header>

      {renderSlider("Nos Offres", appartement)}
      {renderSlider("Nos Offres", maison)}
      {renderSlider("Nos Offres", studio)}
      

      <section className="info-section">
        <h2>Pourquoi choisir notre plateforme ?</h2>
        <ul>
          <li>✔️ Grande sélection de biens immobiliers</li>
          <li>✔️ Plateforme sécurisée et facile à utiliser</li>
          <li>✔️ Contact direct avec les vendeurs et propriétaires</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;