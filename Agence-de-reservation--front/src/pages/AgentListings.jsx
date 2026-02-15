import React, { useEffect, useState } from 'react';
import AgentMenu from '../components/Agent/AgentMenu';
import { Link } from 'react-router-dom';
import { ServiceAffichage } from '../api/services/apiService2';
import { serviceOffre } from '../api/services/apiService';

const AgentHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [stats, setStats] = useState({
    earning: 0,
    bookedHotels: 0,
    totalHotels: 0,
    availableHotels: 0,
  });

  useEffect(() => {
    // 1️⃣ Récupérer toutes les offres hôtel
    ServiceAffichage.getAllOffersHotel()
      .then(res => {
        if (res.data.success) {
          setHotels(res.data.data);
        }
      })
      .catch(err => console.error(err));

    // 2️⃣ Récupérer les stats depuis les réservations
    ServiceAffichage.getReservationInfoHotel()
      .then(res => {
        if (res.data.success) {
          const { earning, bookedHotels, totalHotels, availableHotels } = res.data.data;
          setStats({ earning, bookedHotels, totalHotels, availableHotels });
        }
      })
      .catch(err => console.error(err));
  }, []);

  // ⚡ Fonction pour supprimer une offre hôtel
  const handleDelete = (hotelId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette offre ?")) {
      serviceOffre.deleteOffreHotel(hotelId)
        .then(() => {
          alert("Offre supprimée !");
          setHotels(prev => prev.filter(h => h.id !== hotelId));
        })
        .catch(err => {
          console.error(err);
          alert("Erreur lors de la suppression");
        });
    }
  };

  return (
    <>
      <AgentMenu />

      <main>
        <section className="pt-0">
          <div className="container vstack gap-4">

            {/* Header */}
            <div className="row">
              <div className="col-12">
                <h1 className="fs-4 mb-0">
                  <i className="bi bi-journals fa-fw me-1"></i>Hotels
                </h1>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="row g-4">
              <div className="col-md-6 col-xl-3">
                <div className="card card-body border p-4 h-100">
                  <h6>Earning</h6>
                  <h2 className="text-success">${stats.earning}</h2>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="card card-body border p-4 h-100">
                  <h6>Booked Rooms</h6>
                  <h2 className="text-info">{stats.bookedHotels}</h2>
                  <p className="mb-2">Total Hotel  {stats.totalHotels}</p>
                </div>
              </div>

              <div className="col-md-6 col-xl-3">
                <div className="card card-body border p-4 h-100">
                  <h6>Available Hotels</h6>
                  <h2 className="text-warning">{stats.availableHotels}</h2>
                  <p className="mb-2"> Total Hotel  {stats.totalHotels}</p>
                </div>
              </div>
            </div>

            {/* Hotels Table */}
            <div className="row">
              <div className="col-12">
                <div className="card border">
                  <div className="card-header border-bottom">
                    <h5 className="card-header-title">
                      My Hotels <span className="badge bg-primary bg-opacity-10 text-primary ms-2">
                        {hotels.length} Items
                      </span>
                    </h5>
                  </div>

                  <div className="card-body vstack gap-3">
                    {hotels.map((hotel) => (
                      <div className="card border p-2" key={hotel.id}>
                        <div className="row g-4">
                          <div className="col-md-3 col-lg-2">
                            <img
                              src={hotel.image || '/assets/images/default.jpg'}
                              className="card-img rounded-2"
                              alt={hotel.title}
                            />
                          </div>

                          <div className="col-md-9 col-lg-10">
                            <div className="card-body position-relative d-flex flex-column p-0 h-100">
                              <h5 className="card-title mb-0">{hotel.title}</h5>
                              <small>{hotel.description}</small>

                              <div className="d-flex justify-content-between mt-auto">
                                <h5 className="fw-bold mb-0 me-1">${hotel.price}</h5>

                                <div>
                                  {/* Edit Button */}
                                  <Link 
                                    to={`/agent/hotels/${hotel.id}/edit`} 
                                    className="btn btn-sm btn-primary me-2"
                                  >
                                    <i className="bi bi-pencil-square fa-fw me-1"></i>Edit
                                  </Link>

                                  {/* Delete Button */}
                                  <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(hotel.id)}
                                  >
                                    <i className="bi bi-trash me-1"></i>Delete
                                  </button>
                                </div>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default AgentHotels;
