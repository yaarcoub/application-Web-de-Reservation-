import React from 'react';

const DownloadApp = () => {
  return (
    <section className="py-5 bg-primary text-white">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="mb-3">Download Our Mobile App</h2>
            <p className="lead mb-4">
              Get the best deals and book on the go with our mobile app. 
              Available for iOS and Android devices.
            </p>
            <div className="d-flex flex-column flex-sm-row gap-3">
              <a 
                href="https://apps.apple.com" 
                className="btn btn-light btn-lg d-flex align-items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="/assets/images/element/app-store.svg" 
                  alt="App Store" 
                  className="me-2" 
                  style={{height: '24px'}} 
                />
                <div className="text-start">
                  <small>Download on the</small>
                  <div className="fw-bold">App Store</div>
                </div>
              </a>
              
              <a 
                href="https://play.google.com" 
                className="btn btn-light btn-lg d-flex align-items-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img 
                  src="/assets/images/element/google-play.svg" 
                  alt="Google Play" 
                  className="me-2" 
                  style={{height: '24px'}} 
                />
                <div className="text-start">
                  <small>Get it on</small>
                  <div className="fw-bold">Google Play</div>
                </div>
              </a>
            </div>
          </div>
          
          <div className="col-lg-6 text-center">
            <img 
              src="/assets/images/bg/01.jpg" 
              alt="Mobile App" 
              className="img-fluid rounded-3 shadow"
              style={{maxHeight: '400px', objectFit: 'cover'}}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
