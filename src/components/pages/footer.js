import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import '../pages/footer.css';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>🌍 F & S IMMOBILIER</h3>
          {/* <p>{t('footer.description')}</p> */}
        </div>

        <div className="footer-column">
          <h4>{t('Use Links')}</h4>
          <ul>
          <li><Link to="/" className="nav-link">{t('home')}</Link> </li>
          <li><Link to="/about" className="nav-link">{t('about')}</Link></li>
          <li><Link to="/contact" className="nav-link">{t('contact')}</Link></li>
          <li><Link to="/login" className="nav-link">{t('login')}</Link></li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>{t('contact')}</h4>
          <p>📍 {t('location')}</p>
          <p>📞 +237 655-479-301</p>
          <p>📧 f&simmobilier@gmail.com</p>
        </div>

        <div className="footer-column">
          <h4>{t('FollowUs')}</h4>
          <div className="social-icons">
            <a href="#"><i className="bx bxl-facebook"></i></a>
            <a href="#"><i className="bx bxl-instagram"></i></a>
            <a href="#"><i className="bx bxl-twitter"></i></a>
            <a href="#"><i className="bx bxl-linkedin"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} F & S IMMOBILIER. {t('Right')}</p>
      </div>

      {/* BOUTON RETOUR EN HAUT */}
      <button className="scroll-to-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        ↑
      </button>
    </footer>
  );
};

export default Footer;
