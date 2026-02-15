import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import { useAuth } from '../../store/AuthContext';
import { ROUTES } from '../../constants/appConstants';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCategoryMenuOpen, setIsCategoryMenuOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const { theme, setLightTheme, setDarkTheme, setAutoTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();
  const location = useLocation();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleCategoryMenu = () => setIsCategoryMenuOpen(!isCategoryMenuOpen);

  const isActive = (path) => location.pathname === path;

  const handleLogout = () => {
    logout();
    setIsProfileOpen(false);
  };

  const navLinks = [
    { path: ROUTES.FLIGHTS, label: 'Vols' },
    { path: ROUTES.HOTELS, label: 'Hôtels' },
    { path: ROUTES.TOURS, label: 'Tours' },
    { path: ROUTES.CABS, label: 'Taxis' },
  ];

  const leftNavLinks = [
    { path: ROUTES.ABOUT, label: 'À propos' },
    { path: ROUTES.CONTACT, label: 'Contact' },
  ];

  return (
    <header className="navbar-light header-sticky">
      <nav className="navbar navbar-expand-xl">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to={ROUTES.HOME}>
            <img 
              className="light-mode-item navbar-brand-item" 
              src="/assets/images/logo.svg" 
              alt="logo" 
            />
            <img 
              className="dark-mode-item navbar-brand-item" 
              src="/assets/images/logo-light.svg" 
              alt="logo" 
            />
          </Link>

          {/* Left Navigation - Next to Logo */}
          <div className="d-none d-xl-flex ms-3">
            <ul className="navbar-nav">
              {leftNavLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <Link
                    className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                    to={link.path}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Responsive navbar toggler */}
          <button 
            className="navbar-toggler ms-auto ms-sm-0 p-0 p-sm-2" 
            type="button" 
            onClick={toggleMenu}
            aria-controls="navbarCollapse" 
            aria-expanded={isMenuOpen} 
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-animation">
              <span></span>
              <span></span>
              <span></span>
            </span>
            <span className="d-none d-sm-inline-block small">Menu</span>
          </button>

          {/* Navbar collapse */}
          <div className={`navbar-collapse collapse ${isMenuOpen ? 'show' : ''}`} id="navbarCollapse">
            <button 
              className="navbar-toggler d-xl-none p-0 float-end" 
              type="button" 
              onClick={toggleMenu}
              aria-controls="navbarCollapse" 
              aria-expanded={isMenuOpen} 
              aria-label="Toggle navigation"
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Main Navigation */}
            <ul className="navbar-nav navbar-nav-scroll ms-auto">
              {/* Left nav links for mobile */}
              {leftNavLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <Link
                    className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {navLinks.map((link) => (
                <li key={link.path} className="nav-item">
                  <Link
                    className={`nav-link ${isActive(link.path) ? 'active' : ''}`}
                    to={link.path}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}

              {/* Authentication Section */}
              {isAuthenticated && (
                <>
                  {/* Notification dropdown - only show when authenticated */}
                  <li className="nav-item dropdown ms-0 ms-md-3">
                    <button 
                      className="nav-notification btn btn-light p-0 mb-0" 
                      onClick={() => setIsNotificationOpen(!isNotificationOpen)}
                      aria-expanded={isNotificationOpen}
                    >
                      <i className="bi bi-bell fa-fw"></i>
                    </button>
                    <span className="notif-badge animation-blink"></span>
                    {isNotificationOpen && (
                      <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md shadow-lg p-0 show">
                        <div className="card bg-transparent">
                          <div className="card-header bg-transparent d-flex justify-content-between align-items-center border-bottom">
                            <h6 className="m-0">Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">4 new</span></h6>
                            <button className="btn btn-link btn-sm p-0" onClick={() => setIsNotificationOpen(false)}>Clear all</button>
                          </div>
                          <div className="card-body p-0">
                            <ul className="list-group list-group-flush list-unstyled p-2">
                              <li>
                                <div className="list-group-item list-group-item-action rounded notif-unread border-0 mb-1 p-3">
                                  <h6 className="mb-2">New! Booking flights from New York ✈️</h6>
                                  <p className="mb-0 small">Find the flexible ticket on flights around the world. Start searching today</p>
                                  <span>Wednesday</span>
                                </div>
                              </li>
                              <li>
                                <div className="list-group-item list-group-item-action rounded border-0 mb-1 p-3">
                                  <h6 className="mb-2">Sunshine saving are here 🌞 save 30% or more on a stay</h6>
                                  <span>15 Nov 2022</span>
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="card-footer bg-transparent text-center border-top">
                            <button className="btn btn-sm btn-link mb-0 p-0">See all incoming activity</button>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>

                  {/* Profile Dropdown */}
                  <li className="nav-item ms-3 dropdown">
                    <button 
                      className="avatar avatar-sm p-0" 
                      onClick={() => setIsProfileOpen(!isProfileOpen)}
                      aria-expanded={isProfileOpen}
                    >
                      <img className="avatar-img rounded-2" src="/assets/images/avatar/01.jpg" alt="avatar" />
                    </button>
                    {isProfileOpen && (
                      <ul className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3 show">
                        <li className="px-3 mb-3">
                          <div className="d-flex align-items-center">
                            <div className="avatar me-3">
                              <img className="avatar-img rounded-circle shadow" src="/assets/images/avatar/01.jpg" alt="avatar" />
                            </div>
                            <div>
                              <h6 className="mt-2 mt-sm-0">{user?.name || 'User'}</h6>
                              <p className="small m-0">{user?.email}</p>
                            </div>
                          </div>
                        </li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to={ROUTES.MY_BOOKINGS}><i className="bi bi-bookmark-check fa-fw me-2"></i>Mes réservations</Link></li>
                        <li><button className="dropdown-item"><i className="bi bi-heart fa-fw me-2"></i>Ma liste de souhaits</button></li>
                        <li><button className="dropdown-item"><i className="bi bi-gear fa-fw me-2"></i>Paramètres</button></li>
                        <li><button className="dropdown-item"><i className="bi bi-info-circle fa-fw me-2"></i>Centre d'aide</button></li>
                        <li><button className="dropdown-item bg-danger-soft-hover" onClick={handleLogout}><i className="bi bi-power fa-fw me-2"></i>Se déconnecter</button></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li>
                          <div className="nav-pills-primary-soft theme-icon-active d-flex justify-content-between align-items-center p-2 pb-0">
                            <span>Mode:</span>
                            <button 
                              type="button" 
                              className={`btn btn-link nav-link text-primary-hover mb-0 p-0 ${theme === 'light' ? 'active' : ''}`}
                              onClick={setLightTheme}
                              title="Light"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sun fa-fw mode-switch" viewBox="0 0 16 16">
                                <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"/>
                              </svg>
                            </button>
                            <button 
                              type="button" 
                              className={`btn btn-link nav-link text-primary-hover mb-0 p-0 ${theme === 'dark' ? 'active' : ''}`}
                              onClick={setDarkTheme}
                              title="Dark"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-moon-stars fa-fw mode-switch" viewBox="0 0 16 16">
                                <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278zM4.858 1.311A7.269 7.269 0 0 0 1.025 7.71c0 4.02 3.279 7.276 7.319 7.276a7.316 7.316 0 0 0 5.205-2.162c-.337.042-.68.063-1.029.063-4.61 0-8.343-3.714-8.343-8.29 0-1.167.242-2.278.681-3.286z"/>
                                <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/>
                              </svg>
                            </button>
                            <button 
                              type="button" 
                              className={`btn btn-link nav-link text-primary-hover mb-0 p-0 ${theme === 'auto' ? 'active' : ''}`}
                              onClick={setAutoTheme}
                              title="Auto"
                            >
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle-half fa-fw mode-switch" viewBox="0 0 16 16">
                                <path d="M8 15A7 7 0 1 0 8 1v14zm0 1A8 8 0 1 1 8 0a8 8 0 0 1 0 16z"/>
                              </svg>
                            </button>
                          </div>
                        </li>
                      </ul>
                    )}
                  </li>
                </>
              )}

              {!isAuthenticated && (
                <>
                  {/* Sign In Button */}
                  <li className="nav-item ms-3">
                    <Link 
                      to={ROUTES.SIGN_IN}
                      className="btn btn-sm btn-link mb-0"
                    >
                      Se connecter
                    </Link>
                  </li>

                  {/* Sign Up Button */}
                  <li className="nav-item ms-2">
                    <Link 
                      to={ROUTES.SIGN_UP}
                      className="btn btn-sm btn-primary mb-0"
                    >
                      S'inscrire
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
