import React, { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './appartement.css';
// import { motion } from 'framer-motion';
// import { FaHeart } from 'react-icons/fa';
import head from '../m13.avif';

  
const servicesData = [
  // {
  //   id: 1,
  //   type: 'image',
  //   src: '/images/image1.jpg',
  //   title: 'Chambre moderne',
  //   price: '75 000 000 FCFA',
  //   location: 'Douala, Bonamoussadi',
  //   description: 'chambre 4 chambres, 3 douches, salon spacieux.',
  // },
  {
    id: 2,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Chambre meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 3,
    type: 'image',
    src: '/images/image7.jpg',
    title: 'Chambre moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'chambre 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 4,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Chambre meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 5,
    type: 'image',
    src: '/images/hall6.avif',
    title: 'Chambre moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'chambre 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 6,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Chambre meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 7,
    type: 'image',
    src: '/images/hall5.avif',
    title: 'Chambre moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'chambre 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 8,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Chambre meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 9,
    type: 'image',
    src: '/images/hall.avif',
    title: 'Chambre moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'chambre 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 10,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Chambre meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 11,
    type: 'image',
    src: '/images/h5.avif',
    title: 'Chambre moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'chambre 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 12,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Chambre meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 13,
    type: 'image',
    src: '/images/h3.avif',
    title: 'Chambre moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'chambre 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 14,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Chambre meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 15,
    type: 'image',
    src: '/images/h4.avif',
    title: 'Chambre moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'chambre 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 16,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Chambre meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 17,
    type: 'image',
    src: '/images/h2.avif',
    title: 'Chambre moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'chambre 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 18,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Chambre meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 19,
    type: 'image',
    src: '/images/h1.avif',
    title: 'Chambre moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'chambre 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 20,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Chambre meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

  

];

const Chambre = () => {

  const sectionStyleHead = {
  backgroundImage: `url(${head})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 0',
};

  // fonction modal pour planifier la visite
  const [visitModalOpen, setVisitModalOpen] = useState(false);
  const [visitForm, setVisitForm] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    property: null,
  });

const handleVisitChange = (e) => {
  const { name, value } = e.target;
  setVisitForm((prev) => ({ ...prev, [name]: value }));
};

const handleVisitSubmit = (e) => {
  e.preventDefault();
  const message = `Bonjour, je souhaite visiter le bien "${visitForm.property.title}" à ${visitForm.date} à ${visitForm.time}. Mon nom est ${visitForm.name}, email: ${visitForm.email}.`;

  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/237655479301?text=${encoded}`, "_blank");

  setVisitModalOpen(false);
};

const generatePDF = (service) => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Contrat de Location / Vente Immobilier", 14, 22);

  doc.setFontSize(12);
  doc.text(`Nom du bien: ${service.title}`, 14, 40);
  doc.text(`Lieu: ${service.location}`, 14, 50);
  doc.text(`Prix: ${service.price}`, 14, 60);
  doc.text(`Description: ${service.description}`, 14, 70);
  doc.text(`Date: ${new Date().toLocaleDateString()}`, 14, 80);

  autoTable(doc, {
    startY: 90,
    head: [['Clause', 'Description']],
    body: [
      ['Durée', 'Ce contrat est valable pour une période de 12 mois renouvelable.'],
      ['Paiement', 'Le paiement doit être effectué mensuellement avant le 7 de chaque mois.'],
      ['Engagement', 'Le locataire s’engage à respecter les lieux.'],
    ],
  });

  // Position après la table
  const finalY = doc.lastAutoTable.finalY || 100;

  // Ajouter espace signature client
  doc.text("Signature du client :", 14, finalY + 20);
  doc.line(14, finalY + 25, 90, finalY + 25); // ligne signature client

  // Ajouter espace signature agent immobilier
  doc.text("Signature de l'agent immobilier :", 120, finalY + 20);
  doc.line(120, finalY + 25, 190, finalY + 25); // ligne signature agent

  doc.save(`contrat-${service.title}.pdf`);
};

 
  // const [likes, setLikes] = useState({});
  // const [comments, setComments] = useState({});
  const [selectedService, setSelectedService] = useState(null);

  const whatsappLink = 'https://wa.me/237655479301?text=Bonjour, je suis intéressé par votre chambre.'; // 🔁 Change ce numéro

  // const handleLike = (id) => {
  //   setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  // };

  // const handleComment = (id, e) => {
  //   e.preventDefault();
  //   const commentText = e.target.elements.comment.value.trim();
  //   if (!commentText) return;
  //   setComments((prev) => ({
  //     ...prev,
  //     [id]: [...(prev[id] || []), commentText],
  //   }));
  //   e.target.reset();
  // };

  return (

<>
  {/* section image */}
    <section className="head"  style={sectionStyleHead}  >
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

            {/* <button onClick={() => handleLike(item.id)}>👍 {likes[item.id] || 0}</button> */}

            {/* <form onSubmit={(e) => handleComment(item.id, e)}>
              <input type="text" name="comment" placeholder="Laissez un commentaire" />
            </form>
            <button type="submit">Envoyer</button> */}

            {/* <ul className="comment-list">
              {(comments[item.id] || []).map((c, i) => <li key={i}>{c}</li>)}
            </ul> */}

            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="whatsapp-button"
            >
              WhatsApp
            </a>

{/* bouton planifier visite */}
            <button onClick={() => {
              setVisitForm((prev) => ({ ...prev, property: item }));
              setVisitModalOpen(true);
            }} className="visit-button">
              Planifier une visite
            </button>

{/* bouton pour avoir le contrat PDF */}
        <button onClick={() => generatePDF(item)} className="btn-generate">
          📄 Obténir le contrat
        </button>

          </div>
        ))}
      </div>

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

{/* modal de planification */}
        {visitModalOpen && (
          <div className="modal-overlay" onClick={() => setVisitModalOpen(false)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>Planifier une visite</h3>
              <form onSubmit={handleVisitSubmit}>
                <input type="text" name="name" placeholder="Votre nom" required onChange={handleVisitChange} />
                <input type="email" name="email" placeholder="Votre email" required onChange={handleVisitChange} />
                <input type="date" name="date" required onChange={handleVisitChange} />
                <input type="time" name="time" required onChange={handleVisitChange} />
                <button type="submit" className='btn-planifier'>Envoyer</button>
              </form>
            </div>
          </div>
        )}


    </div>
</>
  );
};

export default Chambre;
