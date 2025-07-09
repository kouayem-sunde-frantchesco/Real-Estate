import React, { useState, useRef, useEffect } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './classique.css';
import head from '../m13.avif';

const whatsappLink = `https://wa.me/237655479301?text=${encodeURIComponent("Bonjour Bienvenue à Luxis Home Camer immobilier, que puis-je faire pour vous ?")}`;
const servicesData = [
  {
    id: 1,
    type: 'image',
    src: '/images/image1.jpg',
    title: 'Maison moderne',
    price: '120 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 700, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'maison moderne'
  },
  {
    id: 2,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement',
    price: '400 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 500, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'Appartemet'
  },

  {
    id: 3,
    type: 'image',
    src: '/images/image7.jpg',
    title: 'Maison moderne',
    price: '100 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 700, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'maison'
  },

  {
    id: 4,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Studio',
    price: '200 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 700, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'maison'
  },

  {
    id: 5,
    type: 'image',
    src: '/images/hall6.avif',
    title: 'Studio moderne',
    price: '175 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 700, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'maison'  },
  {
    id: 6,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '650 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 700, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'maison'
  },

  {
    id: 7,
    type: 'image',
    src: '/images/hall5.avif',
    title: 'Maison moderne',
    price: '90 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 700, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'maison'
  },
  {
    id: 8,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '200 000FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 700, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'maison'
  },

  {
    id: 9,
    type: 'image',
    src: '/images/hall.avif',
    title: 'Maison moderne',
    price: '75 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 700, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'maison'
  },
  {
    id: 10,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 700, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'maison'
  },

  {
    id: 11,
    type: 'image',
    src: '/images/h5.avif',
    title: 'Maison moderne',
    price: '75 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 700,
    statut: true,
    Propriété: 'maison'
  },
  {
    id: 12,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '500 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 700, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'maison'
  },

  {
    id: 13,
    type: 'image',
    src: '/images/h3.avif',
    title: 'Maison moderne',
    price: '65 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 700, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'maison'
  },
  {
    id: 14,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 3,
    superficie: 700, // superficie en m²
    statut: false,
    // disponibilit2: true,
    Propriété: 'Appartement meublé'
  },

  {
    id: 15,
    type: 'image',
    src: '/images/h4.avif',
    title: 'Maison moderne',
    price: '300 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'salon moins spacieux.',
    chambre: 2,
    douche: 3,
    superficie: 250, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'maison moderne'
  },
  {
    id: 16,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '1 200 0000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'salon spacieux.',
    chambre: 4,
    douche: 4,
    superficie: 900, // superficie en m²
    statut: true,
    // disponibilit2: true,
    Propriété: 'Appartemet meublés'
  },

  {
    id: 17,
    type: 'image',
    src: '/images/h2.avif',
    title: 'Maison moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    chambre: 2,
    douche: 1,
    superficie: 700, // superficie en m²
    statut: false,
    // disponibilit2: true,
    Propriété: 'maison moderne'
  },
  {
    id: 18,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'salon spacieux.',
    chambre: 3,
    douche: 3,
    superficie: 600, // superficie en m²
    statut: false,
    // disponibilit2: true,
    Propriété: 'Appartement meublé'
  },
];

const Vip = () => {
  const sectionStyleHead = {
    backgroundImage: `url(${head})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '100px 0',
  };

  // formulaire pour les informations de contrat du client
const [clientInfo, setClientInfo] = useState({
  fullName: '',
  email: '',
  phone: '',
  address: ''
});

const handleClientInfoChange = (e) => {
  const { name, value } = e.target;
  setClientInfo((prev) => ({ ...prev, [name]: value }));
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

  // fonction pour generer le PDF du contrat de location
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

  // filtre de recherche
  const [filters, setFilters] = useState({
    minPrice: '',
    maxPrice: '',
    propertyType: '',
    rooms: '',
    bathrooms: '',
    minSize: '',
    furnished: '',
    available: ''
  });

  const [comments, setComments] = useState({});
  const [selectedService, setSelectedService] = useState(null);

  // Infinite scroll states
  const itemsPerPage = 6;
  const [visibleCount, setVisibleCount] = useState(itemsPerPage);
  const loadMoreRef = useRef();

  const filteredServices = servicesData.filter(item => {
    const minPrice = filters.minPrice ? parseInt(item.price.replace(/\D/g, '')) >= parseInt(filters.minPrice) : true;
    const maxPrice = filters.maxPrice ? parseInt(item.price.replace(/\D/g, '')) <= parseInt(filters.maxPrice) : true;
    const type = filters.propertyType ? item.propertyType === filters.propertyType : true;
    const rooms = filters.rooms ? item.rooms === parseInt(filters.rooms) : true;
    const bathrooms = filters.bathrooms ? item.bathrooms === parseInt(filters.bathrooms) : true;
    const size = filters.minSize ? item.size >= parseInt(filters.minSize) : true;
    const furnished = filters.furnished ? item.furnished === (filters.furnished === 'true') : true;
    const available = filters.available ? item.available === (filters.available === 'true') : true;

    return minPrice && maxPrice && type && rooms && bathrooms && size && furnished && available;
  });

  const currentItems = filteredServices.slice(0, visibleCount);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && visibleCount < filteredServices.length) {
          setVisibleCount((prev) => prev + itemsPerPage);
        }
      },
      { threshold: 1 }
    );

    if (loadMoreRef.current) {
      observer.observe(loadMoreRef.current);
    }

    return () => {
      if (loadMoreRef.current) {
        observer.unobserve(loadMoreRef.current);
      }
    };
  }, [visibleCount, filteredServices]);

  return (
    <>
      {/* Section image */}
      <section className="head" style={sectionStyleHead}>
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-xl-7 col-lg-9 col-md-12">
              <div className="fpc-capstion text-center my-4">
                <div className="fpc-captions">
                  <h1 className="title-head">Bienvenue chez Luxis Home Camer</h1>
                  <p className="text-light">
                    Luxis Home Camer est votre plateforme en ligne dédiée à l’achat,
                    la vente et la location de biens immobiliers au Cameroun.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="service-container">
        <h2 className="">Services VIP</h2>

        <div className="card-grid">
          {currentItems.map((item) => {
            const emailSubject = encodeURIComponent(`Demande d'information sur le bien : ${item.title}`);
            const emailBody = encodeURIComponent(
              `Bonjour,\n\nJe souhaite avoir plus d'informations sur le bien immobilier suivant :\n\n` +
              `Titre : ${item.title}\n` +
              `Lieu : ${item.location}\n` +
              `Prix : ${item.price}\n\n` +
              `Merci de me recontacter rapidement.\n`
            );
            const mailtoLink = `mailto:?subject=${emailSubject}&body=${emailBody}`;

            return (
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
                  <strong>Lieu :</strong> {item.location}<br />
                  <a href="#" onClick={() => setSelectedService(item)}>Voir Plus...</a>
                </p>

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-button"
                >
                  WhatsApp
                </a>

                {/* <a
                  href={mailtoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="email-button"
                  style={{ marginLeft: '10px' }}
                >
                  Email
                </a> */}

                <button onClick={() => {
                  setVisitForm((prev) => ({ ...prev, property: item }));
                  setVisitModalOpen(true);
                }} className="visit-button">
                  Planifier une visite
                </button>


{/* formulaire */}


                <button onClick={() => generatePDF(item)} className="btn-generate">
                  📄 Obténir le contrat
                </button>
              </div>
            );
          })}
        </div>

        {/* formmulaire de filtre */}
        {/* <div className="filter-form">
          <h3>Recherche avancée</h3>
          <form>
            <input type="number" placeholder="Prix min" onChange={(e) => setFilters({ ...filters, minPrice: e.target.value })} />
            <input type="number" placeholder="Prix max" onChange={(e) => setFilters({ ...filters, maxPrice: e.target.value })} />

            <select onChange={(e) => setFilters({ ...filters, propertyType: e.target.value })}>
              <option value="">Type de bien</option>
              <option value="villa">Villa</option>
              <option value="duplex">Duplex</option>
              <option value="studio">Studio</option>
            </select>

            <input type="number" placeholder="Chambres" onChange={(e) => setFilters({ ...filters, rooms: e.target.value })} />
            <input type="number" placeholder="Salles de bain" onChange={(e) => setFilters({ ...filters, bathrooms: e.target.value })} />

            <input type="number" placeholder="Superficie min (m²)" onChange={(e) => setFilters({ ...filters, minSize: e.target.value })} />

            <select onChange={(e) => setFilters({ ...filters, furnished: e.target.value })}>
              <option value="">Meublé ?</option>
              <option value="true">Oui</option>
              <option value="false">Non</option>
            </select>

            <select onChange={(e) => setFilters({ ...filters, available: e.target.value })}>
              <option value="">Disponibilité</option>
              <option value="true">Immédiate</option>
              <option value="false">Non disponible</option>
            </select>
          </form>
        </div> */}

        {selectedService && (
          <div className="modal-overlay" onClick={() => setSelectedService(null)}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <h3>{selectedService.title}</h3>
              <p><strong>Prix :</strong> {selectedService.price}</p>
              <p><strong>Lieu :</strong> {selectedService.location}</p>
              <p><strong>Description :</strong> {selectedService.description}</p>
              {/* <p><strong>Label :</strong> {selectedService.label}</p> */}
              <p><strong>chambre :</strong> {selectedService.chambre}</p>
              <p><strong>Douches :</strong> {selectedService.douche}</p>
              <p><strong>Superficie :</strong> {selectedService.superficie}</p>
              <p><strong>Statut :</strong> {selectedService.statut ? 'Oui' : 'Non'}</p>
              {/* <p><strong>Available :</strong> {selectedService.available ? 'Oui' : 'Non'}</p> */}
              <p><strong>Type de propriété :</strong> {selectedService.Propriété}</p>
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

        <div ref={loadMoreRef} style={{ height: '20px' }}></div>
            <section className="info-section">
        <h2>Pourquoi choisir notre plateforme ?</h2>
        <ul>
          <li>✔️ Grande sélection de biens immobiliers</li>
          <li>✔️ Plateforme sécurisée et facile à utiliser</li>
          <li>✔️ Contact direct avec les vendeurs et propriétaires</li>
        </ul>
      </section>
      
      </div>
    </>
  );
};

export default Vip;
