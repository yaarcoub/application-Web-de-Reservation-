import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ServiceAffichage } from '../api/services/apiService2';

const SpecialOffers = ({filters}) => {
  const navigate = useNavigate();

  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);



  useEffect(() => {
    const fetchOffers = async () => {
      try {
        const res = await ServiceAffichage.getAllOffersVol();
        setOffers(res.data.data || []);
      } catch (err) {
        console.error(err);
        setError("Impossible de charger les offres");
      } finally {
        setLoading(false);
      }
    };

    fetchOffers();
  }, []);

 const normalize = (v) =>
  v?.toString().trim().toLowerCase();

const filteredOffers = filters
  ? offers.filter(o => {
      return (
        (!filters.fromCity ||
          normalize(o.add).includes(normalize(filters.fromCity))) &&

        (!filters.toCity ||
          normalize(o.ada).includes(normalize(filters.toCity))) &&

        (!filters.ticketClass ||
          normalize(o.classe).includes(normalize(filters.ticketClass)))
      );
    })
  : offers;


  const handleSelectOffer = (offer) => {
   const payload = [
  {
    typeOffre: "VOL",
    id: offer._id,
    prix: offer.prix,
    nombre_passager: 0,
    destination : offer.ada,
    clients: []
  }
];

    navigate(`/flight-details/${offer._id}`, {
      state: { offer, payload }
    });
  };

const formatDateTime = (date) => {
  if (!date) return '—';

  return new Date(date).toLocaleString('fr-FR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
};



  // 🔄 Loading
  if (loading) {
    return (
      <div className="container my-5 text-center">
        <div className="spinner-border text-primary" />
        <p className="mt-3">Loading flight offers...</p>
      </div>
    );
  }

  // ❌ Error
  if (error) {
    return (
      <div className="container my-5 text-center text-danger">
        {error}
      </div>
    );
  }

  return (
    <section className="container my-4">
      <h4 className="mb-4">Special Flight Offers</h4>

      <div className="row g-4">
        {filteredOffers.map((offer) => (
          <div key={offer._id} className="col-sm-6 col-lg-4 col-xl-3">
            <div
              className="card h-100 shadow-sm cursor-pointer border-0"
              onClick={() => handleSelectOffer(offer)}
              style={{ transition: "transform 0.2s" }}
              onMouseEnter={e => e.currentTarget.style.transform = "translateY(-4px)"}
              onMouseLeave={e => e.currentTarget.style.transform = "translateY(0)"}
            >
              <img
                src={
                  offer.urlImages?.[0]?.url ||
                  "/assets/images/airlines/default-airline.png"
                }
                alt={offer.compagnie}
                className="card-img-top p-3"
                style={{ height: "120px", objectFit: "contain" }}
              />

              <div className="card-body">
  <h5 className="card-title mb-1">{offer.compagnie}</h5>

  <p className="text-muted small mb-1">
    {offer.add} → {offer.ada}
  </p>

  <p className="small mb-2">
    <span className="fw-semibold">Départ :</span>{' '}
    {formatDateTime(offer.ddd)}
    <br />
    <span className="fw-semibold">Arrivée :</span>{' '}
    {formatDateTime(offer.dda)}
  </p>

  <p className="fw-bold text-primary mb-0">
    {offer.prix || 0} $
  </p>
</div>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SpecialOffers;
