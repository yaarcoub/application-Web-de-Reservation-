import React from 'react';
import { Link } from 'react-router-dom';

const FeaturedHotels = () => {
  const hotels = [
    {
      id: 1,
      image: '/assets/images/category/hotel/01.jpg',
      title: 'Grand Palace Hotel',
      location: 'New York, USA',
      rating: 4.8,
      price: '$299',
      originalPrice: '$399'
    },
    {
      id: 2,
      image: '/assets/images/category/hotel/02.jpg',
      title: 'Ocean View Resort',
      location: 'Miami, USA',
      rating: 4.6,
      price: '$199',
      originalPrice: '$299'
    },
    {
      id: 3,
      image: '/assets/images/category/hotel/03.jpg',
      title: 'Mountain Lodge',
      location: 'Denver, USA',
      rating: 4.9,
      price: '$249',
      originalPrice: '$349'
    },
    {
      id: 4,
      image: '/assets/images/category/hotel/04.jpg',
      title: 'City Center Hotel',
      location: 'Chicago, USA',
      rating: 4.7,
      price: '$179',
      originalPrice: '$249'
    }
  ];

  return (
    <section className="py-5">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="mb-3">Featured Hotels</h2>
            <p className="text-muted">Discover our handpicked selection of premium hotels</p>
          </div>
        </div>
        
        <div className="row g-4">
          {hotels.map((hotel) => (
            <div key={hotel.id} className="col-lg-3 col-md-6">
              <div className="card h-100 shadow-sm">
                <div className="position-relative">
                  <img 
                    src={hotel.image} 
                    className="card-img-top" 
                    alt={hotel.title}
                    style={{height: '200px', objectFit: 'cover'}}
                  />
                  <div className="position-absolute top-0 start-0 m-3">
                    <span className="badge bg-success">Featured</span>
                  </div>
                  <div className="position-absolute top-0 end-0 m-3">
                    <span className="badge bg-warning text-dark">
                      <i className="bi bi-star-fill me-1"></i>
                      {hotel.rating}
                    </span>
                  </div>
                </div>
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{hotel.title}</h5>
                  <p className="card-text text-muted">
                    <i className="bi bi-geo-alt me-1"></i>
                    {hotel.location}
                  </p>
                  <div className="mt-auto">
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <span className="h5 text-primary">{hotel.price}</span>
                        <span className="text-muted text-decoration-line-through ms-2 small">{hotel.originalPrice}</span>
                        <div className="small text-muted">per night</div>
                      </div>
                      <Link to="/hotels" className="btn btn-primary btn-sm">
                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-4">
          <Link to="/hotels" className="btn btn-outline-primary">
            View All Hotels
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedHotels;
