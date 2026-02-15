import React from "react";

const renderStars = (stars = 0) => {
  return (
    <span className="text-warning fs-5">
      {"★".repeat(stars)}
      {"☆".repeat(5 - stars)}
    </span>
  );
};

const HotelDetails = ({ hotel }) => {
  return (
    <div className="row g-4 align-items-center">
      
      {/* LEFT */}
      <div className="col-md-8">
        <h3 className="fw-bold">{hotel.nomHotel}</h3>

        <div className="mb-2">
          {renderStars(hotel.nombreEtoiles)}
        </div>

        <p className="text-muted mb-3">
          {hotel.description || "A comfortable hotel with excellent services."}
        </p>

        <div className="d-flex flex-wrap gap-2">
          <span className="badge bg-primary">
            📍 {hotel.ville}, {hotel.pays}
          </span>

          <span className="badge bg-success">
            💰 {hotel.prix} MAD / nuit
          </span>

          <span className={`badge ${hotel.recommander ? "bg-warning" : "bg-secondary"}`}>
            {hotel.recommander ? "🔥 Recommandé" : "Standard"}
          </span>
        </div>
      </div>

      {/* RIGHT */}
      <div className="col-md-4">
        <div className="border rounded-4 p-3 text-center shadow-sm">
          <h6 className="text-muted">Rating</h6>
          <h1 className="text-primary fw-bold">
            {hotel.note || "8.5"}
          </h1>
          <small className="text-muted">Excellent</small>
        </div>
      </div>
    </div>
  );
};

export default HotelDetails;
