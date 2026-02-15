import React, { useEffect, useState } from 'react';
import AgentMenu from '../components/Agent/AgentMenu';
import { Link } from 'react-router-dom';
import { ServiceAffichage } from '../api/services/apiService2';
import { serviceOffre } from '../api/services/apiService';

const AgentVols = () => {
  const [vols, setVols] = useState([]);
  const [stats, setStats] = useState({
    earning: 0,
    bookedVols: 0,
    totalVols: 0,
    availableVols: 0,
  });

  useEffect(() => {
    // 1️⃣ Récupérer tous les vols
    ServiceAffichage.getAllOffersVol()
      .then(res => setVols(res.data.data))
      .catch(err => console.error(err));

    // 2️⃣ Récupérer les stats des réservations
    ServiceAffichage.getReservationInfoVol()
      .then(res => {
        if (res.data.success) {
          setStats(res.data.data);
        }
      })
      .catch(err => console.error(err));
  }, []);

  const handleDelete = (volId) => {
    if (window.confirm("Êtes-vous sûr de vouloir supprimer cette offre ?")) {
      serviceOffre.deleteOffreVol(volId)
        .then(() => {
          alert("Offre supprimée !");
          setVols(prev => prev.filter(v => v._id !== volId));
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
                  <i className="bi bi-journals fa-fw me-1"></i>Vols
                </h1>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="row g-4">
              <div className="col-md-6 col-xl-4">
                <div className="card card-body border p-4 h-100">
                  <h6>Earning</h6>
                  <h2 className="text-success">${stats.earning}</h2>
                  <p className="mb-2">
                    <span className="text-primary me-1">vs last month</span>
                  </p>
                  <div className="mt-auto text-primary-hover">
                    <a href="#" className="text-decoration-underline p-0 mb-0">View statement</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-4">
                <div className="card card-body border p-4 h-100">
                  <h6>number of reserved seats</h6>
                  <h2 className="text-info">{stats.bookedVols}</h2>
                  <p className="mb-2">
                    <span className="text-danger me-1">{stats.totalVols}</span> Total Vols
                  </p>
                  <div className="mt-auto text-primary-hover">
                    <a href="#" className="text-decoration-underline p-0 mb-0">View Bookings</a>
                  </div>
                </div>
              </div>

              <div className="col-md-6 col-xl-4">
                <div className="card card-body border p-4 h-100">
                  <h6>Available Vols</h6>
                  <h2 className="text-warning">{stats.availableVols}</h2>
                  <p className="mb-2">
                    <span className="text-danger me-1">{stats.totalVols}</span> Total Vols
                  </p>
                  <div className="mt-auto text-primary-hover">
                    <a href="#" className="text-decoration-underline p-0 mb-0">View Vols</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Vols Table */}
            <div className="row">
              <div className="col-12">
                <div className="card border">
                  <div className="card-header border-bottom">
                    <h5 className="card-header-title">
                      My Vols <span className="badge bg-primary bg-opacity-10 text-primary ms-2">
                        {vols.length} Items
                      </span>
                    </h5>
                  </div>

                  <div className="card-body vstack gap-3">
                    {vols.map((vol) => (
                      <div className="card border p-2" key={vol._id}>
                        <div className="row g-4">

                          <div className="col-md-3 col-lg-2">
                            <img
                              src={vol.urlImages?.[0]?.url || '/assets/images/default.jpg'}
                              className="card-img rounded-2"
                              alt={vol.titre}
                            />
                          </div>

                          <div className="col-md-9 col-lg-10">
                            <div className="card-body d-flex flex-column p-0 h-100">
                              <h5 className="card-title mb-0">{vol.titre}</h5>
                              <small>
                                <i className="bi bi-geo-alt me-2"></i>
                                {vol.paysDepart} → {vol.paysArrivee}
                              </small>

                              <div className="d-flex justify-content-between mt-auto">
                                <h5 className="fw-bold">${vol.prix}</h5>

                                <div>
                                  {/* Edit Button */}
                                  <Link
                                    to={`/agent/vols/${vol._id}/edit`}
                                    className="btn btn-sm btn-primary me-2"
                                  >
                                    <i className="bi bi-pencil-square me-1"></i>Edit
                                  </Link>

                                  {/* Delete Button */}
                                  <button
                                    className="btn btn-sm btn-danger"
                                    onClick={() => handleDelete(vol._id)}
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

export default AgentVols;
