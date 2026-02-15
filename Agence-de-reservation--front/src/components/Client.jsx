import React from 'react';

const Client = () => {
  const clients = [
    { name: 'Booking.com', logo: '/assets/images/client/01.svg' },
    { name: 'Expedia', logo: '/assets/images/client/02.svg' },
    { name: 'Airbnb', logo: '/assets/images/client/03.svg' },
    { name: 'TripAdvisor', logo: '/assets/images/client/04.svg' },
    { name: 'Hotels.com', logo: '/assets/images/client/05.svg' },
    { name: 'Agoda', logo: '/assets/images/client/06.svg' }
  ];

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row mb-4">
          <div className="col-12 text-center">
            <h2 className="mb-3">Trusted Partners</h2>
            <p className="text-muted">We work with the world's leading travel companies</p>
          </div>
        </div>
        
        <div className="row align-items-center">
          {clients.map((client, index) => (
            <div key={index} className="col-lg-2 col-md-4 col-6 text-center mb-4">
              <div className="client-logo">
                <img 
                  src={client.logo} 
                  alt={client.name}
                  className="img-fluid opacity-50"
                  style={{maxHeight: '60px', filter: 'grayscale(100%)'}}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Client;
