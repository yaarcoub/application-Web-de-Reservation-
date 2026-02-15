import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ServiceAffichage } from '../api/services/apiService2';
import { serviceOffre } from '../api/services/apiService';
import AgentMenu from '../components/Agent/AgentMenu';


const EditOffreVol = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [offre, setOffre] = useState({
    id: '',
    titre: '',
    description: '',
    prix: '',
    promotion: '',
    compagnie: '',
    add: '',
    ada: '',
    ddd: '',
    dda: '',
    dds: '',
    numeroVol: '',
    typeAvion: '',
    dureeVol: '',
    classe: '',
    nombrePlacesDisponibles: '',
    paysDepart: '',
    paysArrivee: ''
  });

  // =============================
  // FORMAT DATE POUR INPUT
  // =============================
  const formatDateForInput = (date) => {
    if (!date) return '';
    return new Date(date).toISOString().slice(0, 16);
  };

  // =============================
  // LOAD OFFER
  // =============================
  useEffect(() => {
    ServiceAffichage.getOffersVolbyId(id)
      .then(res => {
        const o = res.data.data;

        setOffre({
          id: o._id,
          titre: o.titre || '',
          description: o.description || '',
          prix: o.prix || '',
          promotion: o.promotion || '',
          compagnie: o.compagnie || '',
          add: o.add || '',
          ada: o.ada || '',
          ddd: formatDateForInput(o.ddd),
          dda: formatDateForInput(o.dda),
          dds: formatDateForInput(o.dds),
          numeroVol: o.numeroVol || '',
          typeAvion: o.typeAvion || '',
          dureeVol: o.dureeVol || '',
          classe: o.classe || '',
          nombrePlacesDisponibles: o.nombrePlacesDisponibles || '',
          paysDepart: o.paysDepart || '',
          paysArrivee: o.paysArrivee || ''
        });
      })
      .catch(err => console.error(err));
  }, [id]);

  // =============================
  // HANDLE CHANGE
  // =============================
  const handleChange = (e) => {
    setOffre({
      ...offre,
      [e.target.name]: e.target.value
    });
  };

  // =============================
  // SUBMIT
  // =============================
  const handleSubmit = (e) => {
    e.preventDefault();

    serviceOffre.updateOffreVol(offre)
      .then(() => {
        alert('Offre modifiée avec succès');
        navigate('/agent/vols');
      })
      .catch(err => {
        console.error(err);
        alert('Erreur lors de la modification');
      });
  };

  // =============================
  // RENDER
  // =============================
  return (
    <div className="container mt-4">

        <AgentMenu />
      <h3>Modifier Offre Vol</h3>

      <form onSubmit={handleSubmit}>

        <input type="hidden" name="id" value={offre.id} />

        <div className="mb-3">
          <label>Titre</label>
          <input className="form-control" name="titre" value={offre.titre} onChange={handleChange} />
        </div>

        <div className="mb-3">
          <label>Description</label>
          <textarea className="form-control" name="description" value={offre.description} onChange={handleChange} />
        </div>

        <div className="row">
          <div className="col">
            <label>Prix</label>
            <input type="number" className="form-control" name="prix" value={offre.prix} onChange={handleChange} />
          </div>
          <div className="col">
            <label>Promotion</label>
            <input type="number" className="form-control" name="promotion" value={offre.promotion} onChange={handleChange} />
          </div>
        </div>

        <div className="mb-3 mt-3">
          <label>Compagnie</label>
          <input className="form-control" name="compagnie" value={offre.compagnie} onChange={handleChange} />
        </div>

        <div className="row">
          <div className="col">
            <label>Aéroport départ (ADD)</label>
            <input className="form-control" name="add" value={offre.add} onChange={handleChange} />
          </div>
          <div className="col">
            <label>Aéroport arrivée (ADA)</label>
            <input className="form-control" name="ada" value={offre.ada} onChange={handleChange} />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label>Date départ</label>
            <input type="datetime-local" className="form-control" name="ddd" value={offre.ddd} onChange={handleChange} />
          </div>
          <div className="col">
            <label>Date arrivée</label>
            <input type="datetime-local" className="form-control" name="dda" value={offre.dda} onChange={handleChange} />
          </div>
        </div>

        <div className="mb-3 mt-3">
          <label>Date de suspension</label>
          <input type="datetime-local" className="form-control" name="dds" value={offre.dds} onChange={handleChange} />
        </div>

        <div className="row">
          <div className="col">
            <label>Numéro de vol</label>
            <input className="form-control" name="numeroVol" value={offre.numeroVol} onChange={handleChange} />
          </div>
          <div className="col">
            <label>Type avion</label>
            <input className="form-control" name="typeAvion" value={offre.typeAvion} onChange={handleChange} />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label>Durée (minutes)</label>
            <input type="number" className="form-control" name="dureeVol" value={offre.dureeVol} onChange={handleChange} />
          </div>
          <div className="col">
            <label>Classe</label>
            <select className="form-control" name="classe" value={offre.classe} onChange={handleChange}>
              <option value="">-- choisir --</option>
              <option value="ECONOMY">Economy</option>
              <option value="BUSINESS">Business</option>
              <option value="FIRST">First</option>
            </select>
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label>Places disponibles</label>
            <input
              type="number"
              className="form-control"
              name="nombrePlacesDisponibles"
              value={offre.nombrePlacesDisponibles}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="row mt-3">
          <div className="col">
            <label>Pays départ</label>
            <input className="form-control" name="paysDepart" value={offre.paysDepart} onChange={handleChange} />
          </div>
          <div className="col">
            <label>Pays arrivée</label>
            <input className="form-control" name="paysArrivee" value={offre.paysArrivee} onChange={handleChange} />
          </div>
        </div>

        <button className="btn btn-success mt-4">
          Enregistrer
        </button>

      </form>
    </div>
  );
};

export default EditOffreVol;
