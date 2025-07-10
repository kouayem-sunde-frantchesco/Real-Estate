import React, { useState, useRef, useEffect } from 'react';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';
import './appartement.css';
import head from '../m13.avif';

const whatsappLink = `https://wa.me/237655479301?text=${encodeURIComponent("Bonjour Bienvenue à Luxis Home Camer immobilier, que puis-je faire pour vous ?")}`;
const servicesData = [
  {
    id: 1,
    type: 'image',
    src: '/images/hall.avif',
    title: 'Appartement moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Appartement 4 chambres, 3 douches, salon spacieux.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },
  {
    id: 2,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },

  {
    id: 3,
    type: 'image',
    src: '/images/image7.jpg',
    title: 'Appartement moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Appartement 4 chambres, 3 douches, salon spacieux.',
    label: 'PREMIUM',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },
  {
    id: 4,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },

  {
    id: 5,
    type: 'image',
    src: '/images/hall6.avif',
    title: 'Appartement moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Appartement 4 chambres, 3 douches, salon spacieux.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },
  {
    id: 6,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },

  {
    id: 7,
    type: 'image',
    src: '/images/hall5.avif',
    title: 'Appartement moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Appartement 4 chambres, 3 douches, salon spacieux.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },
  {
    id: 8,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },

  {
    id: 9,
    type: 'image',
    src: '/images/hall.avif',
    title: 'Appartement moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Appartement 4 chambres, 3 douches, salon spacieux.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },
  {
    id: 10,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },

  {
    id: 11,
    type: 'image',
    src: '/images/h5.avif',
    title: 'Appartement moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Appartement 4 chambres, 3 douches, salon spacieux.',
    label: 'Premium',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },
  {
    id: 12,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    label: 'Premium',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },

  {
    id: 13,
    type: 'image',
    src: '/images/h3.avif',
    title: 'Appartement moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Appartement 4 chambres, 3 douches, salon spacieux.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },
  {
    id: 14,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    label: 'Premium',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },

  {
    id: 15,
    type: 'image',
    src: '/images/h4.avif',
    title: 'Appartement moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Appartement 4 chambres, 3 douches, salon spacieux.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },
  {
    id: 16,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },

  {
    id: 17,
    type: 'image',
    src: '/images/h2.avif',
    title: 'Appartement moderne',
    price: '75 000 000 FCFA',
    location: 'Douala, Bonamoussadi',
    description: 'Appartement 4 chambres, 3 douches, salon spacieux.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },
  {
    id: 18,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },

    {
    id: 19,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },

    {
    id: 20,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },
    {
    id: 21,
    type: 'video',
    src: '/video/m2.mp4',
    title: 'Appartement meublé',
    price: '350 000 FCFA/mois',
    location: 'Yaoundé, Bastos',
    description: 'Appartement 2 chambres avec cuisine équipée.',
    label: 'VIP',
    rooms: 4,
    bathrooms: 3,
    size: 200, // superficie en m²
    furnished: true,
    available: true,
    propertyType: 'villa'
  },
];

const Appartement = () => {
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
        <h2>Nos Services Immobiliers</h2>

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
              <p><strong>Label :</strong> {selectedService.label}</p>
              <p><strong>Rooms :</strong> {selectedService.rooms}</p>
              <p><strong>Bathrooms :</strong> {selectedService.bathrooms}</p>
              <p><strong>Size :</strong> {selectedService.size}</p>
              <p><strong>Furnished :</strong> {selectedService.furnished ? 'Oui' : 'Non'}</p>
              <p><strong>Available :</strong> {selectedService.available ? 'Oui' : 'Non'}</p>
              <p><strong>PropertyType :</strong> {selectedService.propertyType}</p>
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
      </div>
    </>
  );
};

export default Appartement;
