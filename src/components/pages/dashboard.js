import React, { useState, useEffect } from 'react';
import './dashboard.css';
import head from '../m13.avif'; 

const Dashboard = () => {

  const sectionStyleBackground = {
  backgroundImage: `url(${head})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 0',
};

  const [activeTab, setActiveTab] = useState('annonces');
  const [user, setUser] = useState(null);
  const [annonces, setAnnonces] = useState([]);
  const [favoris, setFavoris] = useState([]);
  const [notifications, setNotifications] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    fetch('http://localhost:4000/dashboard', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(res => res.json())
      .then(data => {
        setUser(data.user);
        setAnnonces(data.annonces);
        setFavoris(data.favoris);
        setNotifications(data.notifications || []);
      });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    window.location.href = '/login';
  };

  return (
    <div className="dashboard">

  {/* section image */}
    <section className="head"  style={sectionStyleBackground}  >
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-xl-7 col-lg-9 col-md-12">
                <div class="fpc-capstion text-center my-4">
                  <div class="fpc-captions">
                    <h1 class="title-head">Bienvenue chez <strong>Luxis Home Camer</strong></h1>
                    <p class="text-light">Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </section>

      <aside className="sidebar">
        <h2>{user?.name || 'Mon Compte'}</h2>
        <ul>
          <li onClick={() => setActiveTab('annonces')} className={activeTab === 'annonces' ? 'active' : ''}>Annonces</li>
          <li onClick={() => setActiveTab('favoris')} className={activeTab === 'favoris' ? 'active' : ''}>Favoris</li>
          <li onClick={() => setActiveTab('notifications')} className={activeTab === 'notifications' ? 'active' : ''}>Notifications</li>
          <li onClick={() => setActiveTab('parametres')} className={activeTab === 'parametres' ? 'active' : ''}>Paramètres</li>
          <li onClick={handleLogout} className="logout">Déconnexion</li>
        </ul>
      </aside>

      <main className="content">
        {activeTab === 'annonces' && (
          <div>
            <h2>Mes Annonces</h2>
            <ul>
              {annonces.map((a) => (
                <li key={a.id}>{a.title} - {a.price}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'favoris' && (
          <div>
            <h2>Mes Favoris</h2>
            <ul>
              {favoris.map((f) => (
                <li key={f.id}>{f.title} - {f.price}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'notifications' && (
          <div>
            <h2>Notifications</h2>
            <ul>
              {notifications.length === 0 && <li>Aucune notification</li>}
              {notifications.map((n, index) => (
                <li key={index}>{n.message}</li>
              ))}
            </ul>
          </div>
        )}

        {activeTab === 'parametres' && (
          <div>
            <h2>Paramètres</h2>
            <p>Gestion du profil, email, mot de passe, etc.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default Dashboard;
