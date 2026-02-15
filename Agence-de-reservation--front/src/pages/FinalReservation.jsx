import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Reservation } from '../api/services/apiService';

// Composant pour afficher les détails d'un vol
const FlightCard = ({ flight }) => (
  <div className="card mb-3 shadow-sm">
    <div className="card-body">
      <h5 className="card-title">Flight #{flight.id}</h5>

      <p>
        <strong>Passengers:</strong> {flight.nombre_passager}<br />
        <strong>Price per passenger:</strong> {flight.prix} $
      </p>

      <div>
        <strong>Passengers list:</strong>
        <ul>
          {flight.clients.map((c, i) => (
            <li key={i}>
              {c.prenom} {c.nom} – {c.age} ans – {c.pays}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);




const HotelCard = ({ hotel }) => (
  <div className="card mb-3 shadow-sm">
    <div className="card-body">
      <h5 className="card-title">Hotel #{hotel.id}</h5>

      <p>
        <strong>Arrival:</strong>{" "}
        {new Date(hotel.dateArrivee).toLocaleDateString()}<br />

        <strong>Departure:</strong>{" "}
        {new Date(hotel.dateDepart).toLocaleDateString()}<br />

        <strong>Nights:</strong> {hotel.nombreNuits}<br />
        <strong>Guests:</strong> {hotel.nombrePersonnes}
      </p>

      <p>
        <strong>Main guest:</strong>{" "}
        {hotel.client.prenom} {hotel.client.nom} ({hotel.client.pays})
      </p>

      <p className="fw-bold text-primary">
        Total Hotel Price: {hotel.prix} $
      </p>
    </div>
  </div>
);




const FinalReservation = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { payload } = location.state || [];

   console.log('Final reservation payload:', payload);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  if (!payload || payload.length === 0) return <p>No reservation data found.</p>;

  // Séparer hôtels et vols
 const flights = payload.filter(item => item.typeOffre === "VOL");
const hotels  = payload.filter(item => item.typeOffre === "HOTEL");


  // Calculer le prix total
  const totalPrice = payload.reduce((sum, item) => {
  if (item.typeOffre === "HOTEL") return sum + item.prix;
  if (item.typeOffre === "VOL")
    return sum + item.prix * item.nombre_passager;
  return sum;
}, 0);


  // ✅ Fonction de réservation centralisée
  const handleReservation = async () => {
    const token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/sign-in");
      return;
    }

    const backendPayload = payload.map(item => item.typeOffre === "VOL"
  ? {
      id: item.id,
      typeOffre: "VOL",
      prix: item.prix,
      nombre_passager: item.nombre_passager,
      clients: item.clients
    }
  : {
      id: item.id,
      typeOffre: "HOTEL",
      prix: item.prix,
      dateArrivee: item.dateArrivee,
      dateDepart: item.dateDepart,
      nombreNuits: item.nombreNuits,
      nombrePersonnes: item.nombrePersonnes,
      client: item.client
    }
);


    try {
      setLoading(true);
      setError(null);

      const response = await Reservation.createReservation(backendPayload, token);

      const paypalUrl = response.data; // le backend renvoie l'URL PayPal
      if (paypalUrl) {
        window.open(paypalUrl, "_blank");
         navigate("/", {
         replace: true,
         state: null
          });
      } else {
        setError("Erreur lors de la génération du paiement, réessayez plus tard.");
      }
    } catch (err) {
      console.error(err);
      setError("Erreur lors de la réservation. Réessayez plus tard.");
    } finally {
      setLoading(false);
    }
  };






  const handleCancelReservation = () => {
  // Optionnel : nettoyer aussi le localStorage si tu l'utilises ailleurs
  // localStorage.removeItem("reservationPayload");
  // localStorage.clear();

  navigate("/", {
    replace: true,
    state: null
  });
};


  return (
    <div className="container my-5">
      <h2 className="mb-4 text-center">Review Your Reservation</h2>

      {flights.length > 0 && (
        <div className="mb-5">
          <h4 className="mb-3">Flights</h4>
          {flights.map((flight, index) => (
            <FlightCard key={index} flight={flight} />
          ))}
        </div>
      )}

      {hotels.length > 0 && (
        <div className="mb-5">
          <h4 className="mb-3">Hotels</h4>
          {hotels.map((hotel, index) => (
            <HotelCard key={index} hotel={hotel} />
          ))}
        </div>
      )}

      <div className="text-center bg-light p-4 rounded shadow-sm">
        <h4 className="mb-3">Total Price: {totalPrice} $</h4>

        {error && <p className="text-danger mb-3">{error}</p>}

        <div className="d-flex justify-content-center gap-3 mt-4">
  <button
    className="btn btn-success btn-lg"
    onClick={handleReservation}
    disabled={loading}
  >
    {loading ? "Traitement..." : "Proceed to Payment"}
  </button>

  <button
    className="btn btn-outline-danger btn-lg"
    onClick={handleCancelReservation}
  >
    Cancel Reservation
  </button>
</div>

        


      </div>
    </div>
  );
};

export default FinalReservation;
