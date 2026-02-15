import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const FlightDetails = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  if (!state) return <p>Flight not found</p>;

  const { offer, payload } = state;

  const [passengers, setPassengers] = useState(1);
  const [clients, setClients] = useState([
    { nom: "", prenom: "", age: "", codePassport: "", genre: "", pays: "" }
  ]);

  const [formError, setFormError] = useState("");

  // 🔁 Ajuster automatiquement le nombre de formulaires
  useEffect(() => {
    setClients(prev => {
      const updated = [...prev];
      if (passengers > prev.length) {
        for (let i = prev.length; i < passengers; i++) {
          updated.push({
            nom: "",
            prenom: "",
            age: "",
            codePassport: "",
            genre: "",
            pays: ""
          });
        }
      } else {
        updated.length = passengers;
      }
      return updated;
    });
  }, [passengers]);

  // ✏️ Modifier un champ passager
  const handleClientChange = (index, field, value) => {
    const updated = [...clients];
    updated[index][field] = value;
    setClients(updated);
  };

  // ✅ Validation du formulaire
  const isFormValid = () => {
    if (passengers < 1) return false;

    for (let client of clients) {
      if (
        !client.nom?.trim() ||
        !client.prenom?.trim() ||
        !client.age ||
        client.age <= 0 ||
        !client.codePassport?.trim() ||
        !client.genre ||
        !client.pays?.trim()
      ) {
        return false;
      }
    }

    return true;
  };

  const handleNext = () => {
    if (!isFormValid()) {
      setFormError("Tous les champs des passagers sont obligatoires et valides.");
      return;
    }

    const updatedPayload = payload.map(item =>
      item.typeOffre === "VOL"
        ? {
            ...item,
            nombre_passager: passengers,
            clients: clients.map(c => ({
              nom: c.nom,
              prenom: c.prenom,
              age: Number(c.age),
              cinOrPassport: c.codePassport,
              genre: c.genre,
              pays: c.pays
            }))
          }
        : item
    );

    navigate(`/hotels/${offer.ada}`, {
      state: { payload: updatedPayload }
    });
  };

  return (
    <div className="container my-5">

      {/* Header */}
      <div className="mb-4 text-center">
        <h2 className="mb-1">{offer.compagnie}</h2>
        <p className="text-muted">{offer.add} → {offer.ada}</p>
        <p className="text-muted small">Vol n°: {offer.numeroVol}</p>
      </div>

      <div className="row g-4">

        {/* Flight info and passenger forms */}
        <div className="col-lg-8">
          <div className="card shadow-sm p-3">

            {/* Nombre de passagers */}
            <div className="mb-4">
              <label className="form-label fw-bold">Nombre de passagers</label>
              <input
                type="number"
                className="form-control"
                min="1"
                max={offer.nombrePlacesDisponibles}
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
              />
              <small className="text-muted">Places disponibles : {offer.nombrePlacesDisponibles}</small>
            </div>

            {/* Passengers forms */}
            {clients.map((client, index) => (
              <div key={index} className="border rounded p-3 mb-3 bg-light">
                <h6 className="mb-3">Passager {index + 1}</h6>

                <div className="row g-2">
                  <div className="col-md-6">
                    <input
                      className="form-control"
                      placeholder="Nom"
                      value={client.nom}
                      onChange={e => handleClientChange(index, "nom", e.target.value)}
                    />
                  </div>

                  <div className="col-md-6">
                    <input
                      className="form-control"
                      placeholder="Prénom"
                      value={client.prenom}
                      onChange={e => handleClientChange(index, "prenom", e.target.value)}
                    />
                  </div>

                  <div className="col-md-4">
                    <input
                      type="number"
                      className="form-control"
                      placeholder="Âge"
                      value={client.age}
                      onChange={e => handleClientChange(index, "age", e.target.value)}
                    />
                  </div>

                  <div className="col-md-4">
                    <input
                      className="form-control"
                      placeholder="Passport / CIN"
                      value={client.codePassport}
                      onChange={e => handleClientChange(index, "codePassport", e.target.value)}
                    />
                  </div>

                  <div className="col-md-4">
                    <select
                      className="form-select"
                      value={client.genre}
                      onChange={e => handleClientChange(index, "genre", e.target.value)}
                    >
                      <option value="">Genre</option>
                      <option value="Homme">Homme</option>
                      <option value="Femme">Femme</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <input
                      className="form-control"
                      placeholder="Pays"
                      value={client.pays}
                      onChange={e => handleClientChange(index, "pays", e.target.value)}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Summary */}
        <div className="col-lg-4">
          <div className="card shadow-sm sticky-top" style={{ top: 90, padding: '1rem' }}>
            <h5>Résumé</h5>
            <p className="text-muted mb-2">{passengers} passager(s)</p>
            <h4 className="text-primary">{offer.prix * passengers} $</h4>

            {formError && (
              <div className="alert alert-danger mt-3">
                {formError}
              </div>
            )}

            <button
              className="btn btn-primary w-100 mt-3"
              onClick={handleNext}
              disabled={!isFormValid()}
            >
              Continuer vers l'hôtel
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FlightDetails;
