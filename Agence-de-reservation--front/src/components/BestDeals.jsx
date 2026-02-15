import { useNavigate } from 'react-router-dom';
import { ServiceAffichage } from '../api/services/apiService2';
import { useEffect, useState } from 'react';  

const BestDeals = ({ hotels, loading }) => {
  const navigate = useNavigate();

  const [deals, setDeals] = useState(hotels || []);
  const [error, setError] = useState(null);

useEffect(() => {
    // Filtrer les meilleures offres (par exemple, les 6 premiers hôtels avec promotion)
    setDeals(
      hotels
    );
  }, [hotels]);

  const handleBooking = (deal) => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      navigate('/sign-in');
      return;
    }

    // Naviguer vers HotelReservationPage avec payload vide
    navigate(`/hotel/${deal.id}`, { state: { payload: [] } });
  };

  if (loading) return <p>Chargement des offres...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="row g-4">
      {deals.map((deal) => (
        <div key={deal.id} className="col-md-4">
          <div className="card h-100 shadow-sm">
            <img
              src={deal.image || "/assets/images/hotel-placeholder.png"}
              className="card-img-top"
              alt={deal.title}
              style={{ height: '200px', objectFit: 'cover' }}
            />
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{deal.title}</h5>
              <p className="card-text text-muted flex-grow-1">{deal.description}</p>
              <div className="d-flex justify-content-between align-items-center mt-auto">
                <span className="h4 text-primary">{deal.price} $</span>
                {deal.originalPrice && deal.originalPrice !== deal.price && (
                  <span className="text-muted text-decoration-line-through ms-2">
                    {deal.originalPrice} $
                  </span>
                )}
                <button
                  className="btn btn-primary"
                  onClick={() => handleBooking(deal)}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BestDeals;
