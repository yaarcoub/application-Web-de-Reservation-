import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { ServiceAffichage } from '../api/services/apiService2';

const DEFAULT_IMAGE =
  "https://images.unsplash.com/photo-1566073771259-6a8506099945";

const HotelsByCity = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const [hotelsData, setHotelsData] = useState([]);
  const { payload } = state;

  const flight = payload.find(item => item.typeOffre === "VOL");
  const destination = flight?.destination || "Unknown";

  /* ---------------- FETCH HOTELS ---------------- */
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await ServiceAffichage.getAllOffersHotel();
        setHotelsData(res.data.data || []);
      } catch (err) {
        console.error("Erreur récupération hôtels :", err);
      }
    };
    fetchHotels();
  }, []);

  /* ---------------- UTILS ---------------- */
  const normalize = (text = "") =>
    text.toLowerCase().replace(/[^a-zà-ÿ\s]/gi, " ").split(/\s+/);

  const hasCommonWord = (a, b) =>
    normalize(a).some(word => normalize(b).includes(word));

  const renderStars = (stars = 0) => {
    const max = 5;
    return (
      <span className="text-warning fs-6">
        {"★".repeat(stars)}
        {"☆".repeat(max - stars)}
      </span>
    );
  };

  /* ---------------- FILTER BY CITY ---------------- */
  const hotels = hotelsData.filter(h =>
    hasCommonWord(destination, h.ville)
  );

  /* ---------------- DYNAMIC RECOMMENDATION ---------------- */
  const averagePrice =
    hotels.reduce((sum, h) => sum + (h.price || 0), 0) / (hotels.length || 1);

  const isRecommended = (hotel, index) => {
    return (
      hotel.nombreEtoiles >= 4 ||
      hotel.price <= averagePrice ||
      index < 3
    );
  };

  /* ---------------- ACTIONS ---------------- */
  const handleSelectHotel = (hotel) => {
    navigate(`/hotel/${hotel.id}`, { state: { payload, hotel } });
  };

  const handleSkipHotel = () => {
    navigate('/reservation/final', { state: { payload } });
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="py-5 text-white"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)),
            url(https://images.unsplash.com/photo-1502602898657-3e91760cbb34)
          `,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container text-center">
          <h1 className="fw-bold mb-2">Hotels in {destination}</h1>
          <p className="lead mb-0">
            Handpicked stays for a perfect trip ✨
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-5 bg-light">
        <div className="container">

          {/* Header */}
          <div className="d-flex justify-content-between align-items-center mb-4">
            <div>
              <h3 className="fw-bold mb-1">Recommended hotels</h3>
              <p className="text-muted mb-0">
                Best options based on quality & price
              </p>
            </div>

            <button
              className="btn btn-outline-dark"
              onClick={handleSkipHotel}
            >
              Skip hotel →
            </button>
          </div>

          {/* Grid */}
          <div className="row g-4">
            {hotels.map((hotel, index) => (
              <div key={hotel.id} className="col-md-6 col-lg-4">
                <div
                  className="card h-100 border-0 shadow-sm hotel-card"
                  onClick={() => handleSelectHotel(hotel)}
                  style={{ cursor: "pointer" }}
                >

                  {/* IMAGE */}
                  <div className="position-relative">
                    <img
                      src={hotel.image || DEFAULT_IMAGE}
                      alt={hotel.nomHotel}
                      className="card-img-top"
                      style={{ height: "230px", objectFit: "cover" }}
                    />

                    {/* Gradient */}
                    <div
                      className="position-absolute top-0 start-0 w-100 h-100"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,.55), rgba(0,0,0,0))"
                      }}
                    />

                    {/* Dynamic badge */}
                    {isRecommended(hotel, index) && (
                      <span className="badge bg-success position-absolute top-0 end-0 m-3 px-3 py-2">
                        Recommended ⭐
                      </span>
                    )}
                  </div>

                  {/* BODY */}
                  <div className="card-body d-flex flex-column">

                    {/* Stars + City */}
                    <div className="d-flex justify-content-between mb-2">
                      {renderStars(hotel.nombreEtoiles)}
                      <small className="text-muted">
                        <i className="bi bi-geo-alt me-1"></i>
                        {hotel.ville}
                      </small>
                    </div>

                    {/* Name */}
                    <h5 className="fw-bold mb-2">
                      {hotel.nomHotel}
                    </h5>

                    {/* Description */}
                    <p className="text-muted small flex-grow-1 mb-3">
                      {hotel.description}
                    </p>

                    {/* Price */}
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="fs-4 fw-bold text-primary">
                          {hotel.price} $
                        </span>
                        <small className="text-muted"> / night</small>
                      </div>

                      <span className="badge bg-light text-dark border">
                        Free cancellation
                      </span>
                    </div>

                    {/* CTA */}
                    <div className="text-end mt-3">
                      <span className="text-primary fw-semibold small">
                        View details →
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* EMPTY */}
            {hotels.length === 0 && (
              <div className="col-12">
                <div className="alert alert-info text-center">
                  No hotels available for this destination.
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* ================= STYLE ================= */}
      <style>{`
        .hotel-card {
          transition: transform .35s ease, box-shadow .35s ease;
        }
        .hotel-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 18px 35px rgba(0,0,0,.18);
        }
      `}</style>
    </>
  );
};

export default HotelsByCity;
