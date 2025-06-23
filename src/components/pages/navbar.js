import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSearch, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import '../pages/navbar.css';


const Navbar = ({ onHamburgerClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const { t, i18n } = useTranslation();

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

const [isDarkMode, setDarkMode] = useState(() => {
  return localStorage.getItem('theme') === 'dark';
});

useEffect(() => {
  document.body.classList.toggle('dark', isDarkMode);
  localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
}, [isDarkMode]);

const toggleDarkMode = () => setDarkMode((prev) => !prev);

  return (
<>
     {/* <nav> */}
      <div className="nav-container">
       <div className=''> <Link to="/" className="nav-logo"><img src="../images/luxis home camer.png"/></Link> </div>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">{t('home')}</Link>
          <Link to="/about" className="nav-link">{t('about')}</Link>
          
          <div
            className="nav-link dropdown"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >

            {t('Categories')}
            {dropdownOpen && (
              <div className="dropdown-menu">
                <Link to="/service/maison" className="dropdown-item">Maison</Link>
                <Link to="/service/chambre" className="dropdown-item">Chambre</Link>
                <Link to="/service/terrain" className="dropdown-item">Terrain</Link>
                <Link to="/service/studio" className="dropdown-item">Studio</Link>
                <Link to="/service/appartement" className="dropdown-item">Appartement</Link>
              </div>
            )}
          </div>

          <Link to="/contact" className="nav-link">{t('contact')}</Link>
          <Link to="/login" className="nav-link">{t('login')}</Link>
          {/* <Link to="/notification" className="nav-link">{t('notification')}</Link> */}

          <button onClick={toggleLanguage} className="language-switch">
            <FaGlobe />
            <span>{t('language')} ({i18n.language.toUpperCase()})</span>
          </button>

          {/* <div className="search-bar">
            <input
              type="text"
              placeholder={t('search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button><FaSearch /></button>
          </div> */}
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="nav-link">{t('home')}</Link>
          <Link to="/pages/about" className="nav-link">{t('about')}</Link>
          <details className="mobile-dropdown">
            <summary>{t('Categories')}</summary>
            <div>
              <Link to="/services/maison" className="dropdown-item">Maison</Link>
              <Link to="/services/chambre" className="dropdown-item">Chambre</Link>
              <Link to="/services/terrain" className="dropdown-item">Terrain</Link>
              <Link to="/services/studio" className="dropdown-item">Studio</Link>
              <Link to="/services/appartement" className="dropdown-item">Appartement</Link>
            </div>
          </details>
          <Link to="/contact" className="nav-link">{t('contact')}</Link>
          <Link to="/login" className="nav-link">{t('login')}</Link>
          {/* <Link to="/notification" className="nav-link">{t('notification')}</Link> */}

          <button onClick={toggleLanguage} className="language-switch">
            <FaGlobe />
            <span>{t('language')} ({i18n.language.toUpperCase()})</span>
          </button>

          {/* <div className="search-bar">
            <input
              type="text"
              placeholder={t('search')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button><FaSearch /></button>
          </div> */}

            {/* changer le mode */}
          {/* <button className="theme-toggle" onClick={toggleDarkMode}>
            {isDarkMode ? '🌞' : '🌙'}
          </button> */}

        </div>
      )}
  </>
    // </nav>
  );
};

export default Navbar;
