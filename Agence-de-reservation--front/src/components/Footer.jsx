import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark pt-5">
      <div className="container">
        {/* Row START */}
        <div className="row g-4">
          {/* Widget 1 START */}
          <div className="col-lg-3">
            {/* logo */}
            <Link to="/">
              <img className="h-40px" src="/assets/images/logo-light.svg" alt="logo" />
            </Link>
            <p className="my-3 text-body-secondary">
              Departure defective arranging rapturous did believe him all had supported.
            </p>
            <p className="mb-2">
              <a href="tel:+1234568963" className="text-body-secondary text-primary-hover">
                <i className="bi bi-telephone me-2"></i>+1234 568 963
              </a>
            </p>
            <p className="mb-0">
              <a href="mailto:example@gmail.com" className="text-body-secondary text-primary-hover">
                <i className="bi bi-envelope me-2"></i>example@gmail.com
              </a>
            </p>
          </div>
          {/* Widget 1 END */}

          {/* Widget 2 START */}
          <div className="col-lg-8 ms-auto">
            <div className="row g-4">
              {/* Link block */}
              <div className="col-6 col-md-3">
                <h5 className="text-white mb-2 mb-md-4">Page</h5>
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item">
                    <Link className="nav-link text-body-secondary" to="/about">About us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-body-secondary" to="/contact">Contact us</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-body-secondary" to="/blog">News and Blog</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-body-secondary" to="/team">Meet a Team</Link>
                  </li>
                </ul>
              </div>

              {/* Link block */}
              <div className="col-6 col-md-3">
                <h5 className="text-white mb-2 mb-md-4">Link</h5>
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item">
                    <Link className="nav-link text-body-secondary" to="/sign-up">Sign up</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-body-secondary" to="/sign-in">Sign in</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-body-secondary" to="/privacy">Privacy Policy</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-body-secondary" to="/terms">Terms</Link>
                  </li>
                </ul>
              </div>

              {/* Link block */}
              <div className="col-6 col-md-3">
                <h5 className="text-white mb-2 mb-md-4">Booking</h5>
                <ul className="nav flex-column text-primary-hover">
                  <li className="nav-item">
                    <Link className="nav-link text-body-secondary" to="/hotels">
                      <i className="fa-solid fa-hotel me-2"></i>Hotel
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-body-secondary" to="/flights">
                      <i className="fa-solid fa-plane me-2"></i>Flight
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-body-secondary" to="/tours">
                      <i className="fa-solid fa-globe-americas me-2"></i>Tour
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link text-body-secondary" to="/cabs">
                      <i className="fa-solid fa-car me-2"></i>Cabs
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Widget 2 END */}
        </div>
        {/* Row END */}

        {/* Divider */}
        <hr className="mt-4 mb-0" />

        {/* Bottom footer */}
        <div className="row">
          <div className="container">
            <div className="d-lg-flex justify-content-between align-items-center py-3 text-center text-lg-start">
              {/* copyright text */}
              <div className="text-body-secondary text-primary-hover">
                Copyrights ©{currentYear} Booking. Build by <a href="/" className="text-body-secondary">StackBros</a>.
              </div>
              {/* copyright links*/}
              <div className="nav mt-2 mt-lg-0">
                <ul className="list-inline text-primary-hover mx-auto mb-0">
                  <li className="list-inline-item me-0">
                    <Link className="nav-link text-body-secondary py-1" to="/privacy">Privacy policy</Link>
                  </li>
                  <li className="list-inline-item me-0">
                    <Link className="nav-link text-body-secondary py-1" to="/terms">Terms and conditions</Link>
                  </li>
                  <li className="list-inline-item me-0">
                    <Link className="nav-link text-body-secondary py-1 pe-0" to="/refund">Refund policy</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
