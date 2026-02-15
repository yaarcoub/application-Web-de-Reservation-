import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ServiceAffichage } from '../api/services/apiService2';
import { serviceOffre } from '../api/services/apiService';
import AgentMenu from '../components/Agent/AgentMenu';



const EditHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [hotel, setHotel] = useState({
    nomHotel: '',
    description: '',
    prix: '',
    nombreChambres: '',
    ville: '',
    pays: '',
    adresse: '',
    disponible: true,
    petitDejeunerInclus: false,
    wifiInclus: false,
    parkingDisponible: false,
    piscine: false,
    serviceChambre: false,
    telephone: '',
    email: '',
    typeChambre: '',
    capaciteChambre: '',
    urlImages: [],
    dds: ''
  });

  // Convertir date pour input type="datetime-local"
  const formatDateForInput = (date) => date ? new Date(date).toISOString().slice(0, 16) : '';

  useEffect(() => {
    ServiceAffichage.getOfferHotelById(id)
      .then(res => {
        const h = res.data.data;
        setHotel({
          ...h,
          dds: formatDateForInput(h.dds),
          id: h._id
        });
      })
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setHotel(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Appel au service pour modifier l'hôtel
    serviceOffre.updateOffreHotel(hotel)
      .then(() => {
        alert('Hôtel mis à jour avec succès');
        navigate('/agent/listings');
      })
      .catch(err => {
        console.error(err);
        alert('Erreur lors de la mise à jour');
      });
  };

  return (
    <div className="container mt-4">
        <AgentMenu />
      <h3>Modifier Hôtel</h3>
      <form onSubmit={handleSubmit}>

        <div className="mb-3">
          <label>Nom Hôtel</label>
          <input className="form-control" name="nomHotel" value={hotel.nomHotel} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" name="description" value={hotel.description} onChange={handleChange} />
        </div>

        <div className="row g-3">
          <div className="col-md-4">
            <label>Prix</label>
            <input type="number" className="form-control" name="prix" value={hotel.prix} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label>Nombre Chambres</label>
            <input type="number" className="form-control" name="nombreChambres" value={hotel.nombreChambres} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label>Capacité Chambre</label>
            <input type="number" className="form-control" name="capaciteChambre" value={hotel.capaciteChambre} onChange={handleChange} />
          </div>
        </div>

        <div className="row g-3 mt-2">
          <div className="col-md-4">
            <label>Ville</label>
            <input className="form-control" name="ville" value={hotel.ville} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label>Pays</label>
            <input className="form-control" name="pays" value={hotel.pays} onChange={handleChange} />
          </div>
          <div className="col-md-4">
            <label>Adresse</label>
            <input className="form-control" name="adresse" value={hotel.adresse} onChange={handleChange} />
          </div>
        </div>

        <div className="row g-3 mt-2">
          <div className="col-md-6">
            <label>Téléphone</label>
            <input className="form-control" name="telephone" value={hotel.telephone} onChange={handleChange} />
          </div>
          <div className="col-md-6">
            <label>Email</label>
            <input type="email" className="form-control" name="email" value={hotel.email} onChange={handleChange} />
          </div>
        </div>

        <div className="mb-3 mt-2">
          <label>Type Chambre</label>
          <input className="form-control" name="typeChambre" value={hotel.typeChambre} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Date de Suspension (dds)</label>
          <input type="datetime-local" className="form-control" name="dds" value={hotel.dds} onChange={handleChange} />
        </div>

        {/* Options */}
        <div className="form-check">
          <input type="checkbox" className="form-check-input" name="disponible" checked={hotel.disponible} onChange={handleChange} />
          <label className="form-check-label">Disponible</label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" name="petitDejeunerInclus" checked={hotel.petitDejeunerInclus} onChange={handleChange} />
          <label className="form-check-label">Petit-déjeuner inclus</label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" name="wifiInclus" checked={hotel.wifiInclus} onChange={handleChange} />
          <label className="form-check-label">WiFi inclus</label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" name="parkingDisponible" checked={hotel.parkingDisponible} onChange={handleChange} />
          <label className="form-check-label">Parking disponible</label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" name="piscine" checked={hotel.piscine} onChange={handleChange} />
          <label className="form-check-label">Piscine</label>
        </div>
        <div className="form-check">
          <input type="checkbox" className="form-check-input" name="serviceChambre" checked={hotel.serviceChambre} onChange={handleChange} />
          <label className="form-check-label">Service de chambre</label>
        </div>

        <button className="btn btn-success mt-3">Enregistrer</button>
      </form>
    </div>
  );
};

export default EditHotel;
