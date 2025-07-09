import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaGlobe } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import Dashboard from './dashboard';
import '../pages/navbar.css';

const Navbar = ({ onHamburgerClick }) => {
  const [dashboardOpen, setDashboardOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  // const [searchTerm, setSearchTerm] = useState('');
  const [user, setUser] = useState(null);

  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleLanguage = () => {
    const newLang = i18n.language === 'fr' ? 'en' : 'fr';
    i18n.changeLanguage(newLang);
  };

  const [isDarkMode] = useState(() => {
    return localStorage.getItem('theme') === 'dark';
  });

  useEffect(() => {
    document.body.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  // const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  return (
    <>     
      <div className="nav-container">

    <Dashboard open={dashboardOpen} onClose={() => setDashboardOpen(false)} />
{/* dashboard */}
        <div className="nav-left">
          <button className="dashboard-toggle" onClick={() => setDashboardOpen(true)}>
            <FaBars />
          </button>
          <Link to="/" className="nav-logo">
            <img src="../images/luxis home camer.png" alt="logo" />
          </Link>
        </div>

        {/* <div>
          <Link to="/" className="nav-logo">
            <img src="../images/luxis home camer.png" alt="logo" />
          </Link>
        </div> */}

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
          {/* <Link to="/dashboard" className="nav-link">{t('dashboard')}</Link> */}


          {!user ? (
            <>
              <Link to="/login" className="nav-link">{t('login')}</Link>
            </>
          ) : (
            <>
              <button onClick={handleLogout} className="logout-btn">              
                <span className="nav-link">👤 {user.username}</span>
                 Déconnecter
              </button>
            </>
          )}

          <button onClick={toggleLanguage} className="language-switch">
            <FaGlobe />
            <span>{t('language')} ({i18n.language.toUpperCase()})</span>
          </button>
        </div>

        <button className="menu-toggle" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <Link to="/" className="nav-link">{t('home')}</Link>
          <Link to="/about" className="nav-link">{t('about')}</Link>
          <details className="mobile-dropdown">
            <summary>{t('Categories')}</summary>
            <div>
              <Link to="/service/maison" className="dropdown-item">Maison</Link>
              <Link to="/service/chambre" className="dropdown-item">Chambre</Link>
              <Link to="/service/terrain" className="dropdown-item">Terrain</Link>
              <Link to="/service/studio" className="dropdown-item">Studio</Link>
              <Link to="/service/appartement" className="dropdown-item">Appartement</Link>
            </div>
          </details>
          <Link to="/contact" className="nav-link">{t('contact')}</Link>


          {!user ? (
            <>
              <Link to="/login" className="nav-link">{t('login')}</Link>
              <Link to="/signin" className="nav-link">{t('signin')}</Link>
            </>
          ) : (
            <>
              <span className="nav-link">👤 {user.username}</span>
              <button onClick={handleLogout} className="logout-btn">Se déconnecter</button>
            </>
          )}

          <button onClick={toggleLanguage} className="language-switch">
            <FaGlobe />
            <span>{t('language')} ({i18n.language.toUpperCase()})</span>
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;