import React from 'react';

const Nearby = () => {
  const attractions = [
    {
      id: 1,
      name: 'Central Park',
      distance: '0.5 km',
      type: 'Park',
      image: '/assets/images/category/hotel/nearby/01.jpg'
    },
    {
      id: 2,
      name: 'Times Square',
      distance: '1.2 km',
      type: 'Landmark',
      image: '/assets/images/category/hotel/nearby/02.jpg'
    },
    {
      id: 3,
      name: 'Museum of Art',
      distance: '0.8 km',
      type: 'Museum',
      image: '/assets/images/category/hotel/nearby/03.jpg'
    },
    {
      id: 4,
      name: 'Shopping Mall',
      distance: '1.5 km',
      type: 'Shopping',
      image: '/assets/images/category/hotel/nearby/04.jpg'
    }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="mb-3">Nearby Attractions</h2>
            <p className="text-muted">Discover what's around your destination</p>
          </div>
        </div>
        
        <div className="row g-4">
          {attractions.map((attraction) => (
            <div key={attraction.id} className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-sm">
                <img 
                  src={attraction.image} 
                  className="card-img-top" 
                  alt={attraction.name}
                  style={{height: '150px', objectFit: 'cover'}}
                />
                <div className="card-body">
                  <h6 className="card-title">{attraction.name}</h6>
                  <p className="card-text text-muted small">{attraction.type}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="badge bg-primary">{attraction.distance}</span>
                    <button className="btn btn-outline-primary btn-sm">
                      <i className="bi bi-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Nearby;
