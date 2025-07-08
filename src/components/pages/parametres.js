import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './parametres.css';
// import body from "../m13.avif";

const Parametres = () => {

  // const sectionStyleHead = {
  //   backgroundImage: `url(${body})`,
  //   backgroundSize: "cover",
  //   backgroundPosition: "center",
  //   padding: "100px 0",
  // };

  const { i18n, t } = useTranslation();
  const [theme, setTheme] = useState('light');
  const [langue, setLangue] = useState(i18n.language || 'fr');

  // Charger le thème enregistré (si stocké)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
    setTheme(savedTheme);
  }, []);

  const handleThemeChange = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    setTheme(newTheme);
  };

  const handleLangueChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    setLangue(newLang);
  };

  return (
    <div className="parametres-container">

  {/* section image */}
    {/* <section className="head"  style={sectionStyleHead}  >
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-xl-7 col-lg-9 col-md-12">
                <div class="fpc-capstion text-center my-4">
                  <div class="fpc-captions">
                  <h1 className="title-head">Bienvenue chez Luxis Home Camer</h1>                    <p class="text-light">    Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section> */}

      <h2>{t('Paramètres')}</h2>

      <div className="param-option">
        <label>{t('Langue')}:</label>
        <select value={langue} onChange={handleLangueChange}>
          <option value="fr">Français</option>
          <option value="en">English</option>
        </select>
      </div>

      <div className="param-option">
        <label>{t('Thème')}:</label>
        <button onClick={handleThemeChange}>
          {theme === 'light' ? t('Passer en mode sombre') : t('Passer en mode clair')}
        </button>
      </div>
    </div>
  );
};

export default Parametres;

