import React from 'react';

const HotelsGrid = ({ hotels, onSelectHotel }) => {
  if (!hotels.length) {
    return (
      <div className="alert alert-warning text-center">
        No hotels available for this destination.
      </div>
    );
  }

  return (
    <div className="row g-4">
      {hotels.map(hotel => (
        <div key={hotel.id} className="col-sm-6 col-lg-4">
          <div
            className="card h-100 shadow-sm border-0 hotel-card"
            style={{ cursor: "pointer" }}
            onClick={() => onSelectHotel(hotel)}
          >
            <div className="hotel-image-wrapper position-relative">
              <img
                src={hotel.urlImages?.[0]?.url}
                className="card-img-top"
                alt={hotel.nomHotel}
              />
              <span className="badge bg-primary position-absolute top-0 start-0 m-3">
                Best Deal
              </span>
            </div>
            <div className="card-body d-flex flex-column">
              <h5 className="card-title mb-1">{hotel.nomHotel}</h5>
              <p className="card-text text-muted small flex-grow-1">
                {hotel.description}
              </p>
              <div className="d-flex justify-content-between align-items-center mt-3">
                <span className="h5 text-primary mb-0">
                  {hotel.prix} MAD
                  <small className="text-muted fs-6"> / night</small>
                </span>
                <span className="text-warning">★★★★☆</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  
};

export default HotelsGrid;
