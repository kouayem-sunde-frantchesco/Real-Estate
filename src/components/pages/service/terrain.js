import React, { useState } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './appartement.css';
// import { motion } from 'framer-motion';
// import { FaHeart } from 'react-icons/fa';
import head from '../m13.avif';
  
const servicesData = [
  {
    id: 1,
    type: 'image',
    src: '../images/terrain1.jpg',
    title: 'Terrain',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: '600 m',
  },
  {
    id: 2,
    type:'image',
    src: '../images/terrain2.jpg',
    title: 'Terrain',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 3,
    type:'image',
    src: '../images/terrain3.jpg',
    title: 'Terrain',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 4,
    type:'image',
    src: '../images/terrain4.jpg',
    title: 'Terrain',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 5,
    type:'image',
    src: '../images/terrain5.jpg',
    title: 'Terrain',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 6,
    type:'image',
    src: '../images/terrain6.jpg',
    title: 'Terrain',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 7,
    type:'image',
    src: '../images/terrain7.jpg',
    title: 'Terrain',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },

    {
    id: 8,
    type:'image',
    src: '../images/terrain5.jpg',
    title: 'Terrain',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },

    {
    id: 9,
    type:'image',
    src: '../images/terrain5.jpg',
    title: 'Terrain',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 10,
    type:'image',
    src: '../images/terrain8.jpeg',
    title: 'Terrain',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 11,
    type:'image',
    src: '../images/terrain3.jpg',
    title: 'Terrain',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 12,
    type:'image',
    src: '../images/terrain9.jpeg',
    title: 'Terrain',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 13,
    type:'image',
    src: '../images/terrain2.jpg',
    title: 'Terrain',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 14,
    type:'image',
    src: '../images/terrain7.jpg',
    title: 'Terrain',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 15,
    type:'image',
    src: '../images/terrain6.jpg',
    title: 'Terrain',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 16,
    type:'image',
    src: '../images/terrain5.jpg',
    title: 'Terrain',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

    {
    id: 17,
    type:'image',
    src: '../images/terrain8.jpeg',
    title: 'Terrain',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },
  {
    id: 18,
    type:'image',
    src: '../images/terrain1.jpg',
    title: 'Terrain',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
  },

  {
    id: 19,
    type:'image',
    src: '../images/terrain2.jpg',
    title: 'Terrain',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },

  {
    id: 20,
    type:'image',
    src: '../images/terrain4.jpg',
    title: 'Terrain',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Maison 4 chambres, 3 douches, salon spacieux.',
  },

];

const Terrain = () => {

  const sectionStyleHead = {
  backgroundImage: `url(${head})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  padding: '100px 0',
};

const [buyerInfo, setBuyerInfo] = useState({
  nom: '',
  email: '',
  telephone: '',
  adresse: '',
});

const [contractModalOpen, setContractModalOpen] = useState(false);
const [contractService, setContractService] = useState(null);


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

// fonction pour generer le PDF du contrat de bail
const generatePDF = async (service, buyer) => {
  // Génération du PDF
  const doc = new jsPDF();

  doc.setFontSize(16);
  doc.text("CONTRAT DE VENTE D'UN TERRAIN", 70, 20);
  doc.setFontSize(12);
  doc.text("Entre les soussignés :", 14, 30);
  doc.text("Vendeur :", 14, 40);
  doc.text("Nom : Monsieur Jean Dupont", 20, 46);
  doc.text("Adresse : BP 12345 Yaoundé, Cameroun", 20, 52);
  doc.text("Téléphone : +237 699 00 00 00", 20, 58);

  doc.text("Acheteur :", 14, 70);
  doc.text(`Nom : ${buyer.nom}`, 20, 76);
  doc.text(`Adresse : ${buyer.adresse}`, 20, 82);
  doc.text(`Téléphone : ${buyer.telephone}`, 20, 88);
  doc.text(`Email : ${buyer.email}`, 20, 94);

  doc.text("Article 1 : Objet du contrat", 14, 106);
  doc.text("Le présent contrat a pour objet la vente du terrain ci-dessous :", 20, 112);

  doc.text(`- Désignation : ${service.title}`, 20, 118);
  doc.text(`- Lieu : ${service.location}`, 20, 124);
  doc.text(`- Superficie : 500 m² (exemple)`, 20, 130);
  doc.text(`- Prix de vente : ${service.price}`, 20, 136);

  autoTable(doc, {
    startY: 146,
    head: [['Clause', 'Détail']],
    body: [
      ['Transfert de propriété', 'Effectif après signature devant notaire et paiement intégral.'],
      ['Garantie', 'Le vendeur certifie que le terrain est libre de toute hypothèque ou litige.'],
      ['Frais', 'À la charge de l’acheteur sauf accord contraire.'],
      ['Paiement', 'Versement de 50% à la signature, solde à la mutation.'],
      ['Résiliation', 'En cas de manquement, le contrat peut être résilié avec conséquences.'],
    ],
  });

  const finalY = doc.lastAutoTable.finalY || 180;
  doc.text("Fait à Yaoundé, le " + new Date().toLocaleDateString(), 14, finalY + 10);
  doc.text("Signatures :", 14, finalY + 20);
  doc.text("Vendeur :", 20, finalY + 30);
  doc.line(40, finalY + 30, 100, finalY + 30);
  doc.text("Acheteur :", 120, finalY + 30);
  doc.line(145, finalY + 30, 190, finalY + 30);

  // Génère un Blob à envoyer
  const pdfBlob = doc.output('blob');

  // Prépare FormData
  const formData = new FormData();
  formData.append('pdf', pdfBlob, `contrat-${service.title}.pdf`);
  formData.append('nom', buyer.nom);
  formData.append('email', buyer.email);

  try {
    const res = await fetch(`${'http://109.199.107.125:5001'}/contratRoutes`, { 
      method: 'POST',
      body: formData,
    });

    if (!res.ok) throw new Error('Erreur serveur');

    alert('Contrat envoyé et sauvegardé avec succès !');
  } catch (err) {
    console.error('Erreur envoi contrat:', err);
    alert('Erreur lors de l’envoi du contrat.');
  }
};




  // const [likes, setLikes] = useState({});
  // const [comments, setComments] = useState({});
  const [selectedService, setSelectedService] = useState(null);

  // const handleLike = (id) => {
  //   setLikes((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));
  // };

  // const handleComment = (id, e) => {
  //   e.preventDefault();
  //   const commentText = e.target.elements.comment.value;
  //   if (!commentText) return;
  //   setComments((prev) => ({
  //     ...prev,
  //     [id]: [...(prev[id] || []), commentText],
  //   }));
  //   e.target.reset();
  // };

  // 🔗 Lien WhatsApp (tu peux remplacer le numéro par le tien)
  const whatsappLink = 'https://wa.me/237655479301?text=Bonjour,%20je%20suis%20intéressé%20par%20votre%20bien.';

  return (
<>

  {/* section image */}
    <section className="head"  style={sectionStyleHead}  >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-xl-7 col-lg-9 col-md-12">
                <div classv="fpc-capstion text-center my-4">
                  <div className="fpc-captions">
                  <h1 className="title-head">Bienvenue chez Luxis Home Camer</h1>                    <p class="text-light">  Luxis Home Camer est votre plateforme en ligne dédiée à l’achat, la vente et la location de biens immobiliers au Cameroun.</p>
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
              <button type="submit">Envoyer</button>

            <ul className="comment-list">
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
            <button onClick={() => {
              setContractService(item);
              setContractModalOpen(true);
            }} className="btn-generate">
              📄 Obtenir le contrat
            </button>

{/* modal du formulaire acheteur pour le contrat*/}
{contractModalOpen && (
  <div className="modal-overlay" onClick={() => setContractModalOpen(false)}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <h3>Informations de l'acheteur</h3>
          <form onSubmit={(e) => {
            e.preventDefault();
            generatePDF(contractService, buyerInfo);
            setContractModalOpen(false);
          }}>

        <input
          type="text"
          placeholder="Nom complet"
          value={buyerInfo.nom}
          onChange={(e) => setBuyerInfo({ ...buyerInfo, nom: e.target.value })}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={buyerInfo.email}
          onChange={(e) => setBuyerInfo({ ...buyerInfo, email: e.target.value })}
          required
        />
        <input
          type="tel"
          placeholder="Téléphone"
          value={buyerInfo.telephone}
          onChange={(e) => setBuyerInfo({ ...buyerInfo, telephone: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Adresse"
          value={buyerInfo.adresse}
          onChange={(e) => setBuyerInfo({ ...buyerInfo, adresse: e.target.value })}
          required
        />

        <button type="submit" className='btn-contrat'>Obténir le contrat</button>
      </form>
    </div>
  </div>
)}



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

export default Terrain;
