import React from 'react';

const About = () => {
  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <img 
              src="/assets/images/about/01.jpg" 
              className="img-fluid rounded shadow" 
              alt="About Us" 
            />
          </div>
          <div className="col-lg-6">
            <h2 className="mb-4">About Our Platform</h2>
            <p className="lead text-muted mb-4">
              We are a leading booking platform that connects travelers with the best hotels, 
              flights, tours, and transportation services worldwide.
            </p>
            <div className="row g-4">
              <div className="col-6">
                <div className="text-center">
                  <div className="display-4 text-primary mb-2">500K+</div>
                  <div className="text-muted">Happy Customers</div>
                </div>
              </div>
              <div className="col-6">
                <div className="text-center">
                  <div className="display-4 text-primary mb-2">10K+</div>
                  <div className="text-muted">Hotels</div>
                </div>
              </div>
              <div className="col-6">
                <div className="text-center">
                  <div className="display-4 text-primary mb-2">50+</div>
                  <div className="text-muted">Countries</div>
                </div>
              </div>
              <div className="col-6">
                <div className="text-center">
                  <div className="display-4 text-primary mb-2">24/7</div>
                  <div className="text-muted">Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
