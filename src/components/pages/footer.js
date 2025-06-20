import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import '../pages/footer.css';

const Footer = () => {
  const { t } = useTranslation();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Description */}
        <div className="footer-column description">
        <h3>LUXIS HOME CAMER</h3>
          <p>
            Luxis Home Camer est une plateforme de petites annonces au Cameroun.
            Une solution simple pour les particuliers, les agences et les investisseurs
            qui cherchent à acheter, louer ou vendre des biens immobiliers.
          </p>
          <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
            <img src="../images/playstore.jpg" alt="Télécharger sur Google Play" className="playstore-logo" />
          </a>
        </div>

        {/* À propos */}
        <div className="footer-column">
          <h4>À propos de nous</h4>
          <ul>
            <li><Link to="/about">Qui sommes-nous ?</Link></li>
            <li><Link to="/signin">Créer un compte</Link></li>
            <li><Link to={`/service?category`}>Blog</Link></li>
          </ul>
        </div>

        {/* Je cherche */}
        <div className="footer-column">
          <h4>Je cherche</h4>
          <ul>
            <li><Link to="../service/maison">Maison</Link></li>
            <li><Link to="../service/appartement">Appartements</Link></li>
            <li><Link to="../service/studio">Studios</Link></li>
            <li><Link to="../service/chambre">Chambres</Link></li>
            <li><Link to="../service/terrain">Terrain</Link></li>
            <li><Link to="../pages/services">Services</Link></li>
          </ul>
        </div>

        {/* Offres Premium */}
        <div className="footer-column">
          <h4>Nos Offres Premium</h4>
          <ul>
            <li><Link to="/premium/vip">Annonce VIP</Link></li>
            <li><Link to="/premium/banner">Bannière</Link></li>
            <li><Link to="/premium/label">Étiquette</Link></li>
            <li><Link to="/premium/promo">Promo</Link></li>
            <li><Link to="/premium">Premium</Link></li>
          </ul>

          <h4>Nos réseaux sociaux</h4>
          <div className="social-icons">
            <a href="#"><i className="bx bxl-instagram"></i></a>
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-tiktok"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {currentYear} Luxis Home Camer. Tous droits réservés.</p>
      </div>

      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </footer>
  );
};

export default Footer;
