import React from 'react';
import { Link } from 'react-router-dom';

const AgentHeader = ({ onToggleSidebar }) => {
  return (
    <header className="agent-header navbar-light header-sticky">
      <nav className="navbar navbar-expand-xl">
        <div className="container-fluid">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img 
              className="light-mode-item navbar-brand-item" 
              src="/assets/images/logo-icon.svg" 
              width={50}
              alt="logo" 
            />
          </Link>

          {/* Toggle Button for Mobile */}
          <button
            className="btn btn-primary d-xl-none ms-auto"
            type="button"
            onClick={onToggleSidebar}
          >
            <i className="bi bi-list"></i> Menu
          </button>

          {/* Right Side Items */}
          <ul className="nav flex-row align-items-center list-unstyled ms-xl-auto">
            {/* Notifications */}
            <li className="nav-item ms-0 ms-md-3 dropdown">
              <a
                className="nav-link p-0"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="bi bi-bell fa-fw fs-5"></i>
              </a>
              <span className="notif-badge animation-blink"></span>

              <div className="dropdown-menu dropdown-animation dropdown-menu-end dropdown-menu-size-md p-0 shadow-lg">
                <div className="card bg-transparent">
                  <div className="card-header bg-transparent d-flex justify-content-between align-items-center border-bottom">
                    <h6 className="m-0">
                      Notifications <span className="badge bg-danger bg-opacity-10 text-danger ms-2">2 new</span>
                    </h6>
                    <a className="small" href="#">Clear all</a>
                  </div>
                  <div className="card-body p-0">
                    <ul className="list-group list-group-flush list-unstyled p-2">
                      <li>
                        <a
                          href="#"
                          className="list-group-item list-group-item-action rounded notif-unread border-0 mb-1 p-3"
                        >
                          <h6 className="mb-2">New booking received! 🎉</h6>
                          <p className="mb-0 small">You have a new booking for Deluxe Pool View</p>
                          <span>Today</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>

            {/* Profile Dropdown */}
            <li className="nav-item ms-3 dropdown">
              <a
                className="avatar avatar-xs p-0"
                href="#"
                id="profileDropdown"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  className="avatar-img rounded-circle"
                  src="/assets/images/avatar/01.jpg"
                  alt="avatar"
                />
              </a>

              <ul
                className="dropdown-menu dropdown-animation dropdown-menu-end shadow pt-3"
                aria-labelledby="profileDropdown"
              >
                <li className="px-3 mb-3">
                  <div className="d-flex align-items-center">
                    <div className="avatar me-3">
                      <img
                        className="avatar-img rounded-circle shadow"
                        src="/assets/images/avatar/01.jpg"
                        alt="avatar"
                      />
                    </div>
                    <div>
                      <a className="h6 mt-2 mt-sm-0" href="#">
                        Jacqueline Miller
                      </a>
                      <p className="small m-0">hello@gmail.com</p>
                    </div>
                  </div>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-bookmark-check fa-fw me-2"></i>My Bookings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-heart fa-fw me-2"></i>My Wishlist
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    <i className="bi bi-gear fa-fw me-2"></i>Settings
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a
                    className="dropdown-item bg-danger-soft-hover"
                    href="#"
                  >
                    <i className="bi bi-power fa-fw me-2"></i>Sign Out
                  </a>
                </li>
              </ul>
            </li>

            {/* Upgrade Button */}
            <li className="nav-item ms-3 d-none d-sm-block">
              <a className="btn btn-sm btn-primary-soft mb-0" href="#">
                <i className="bi bi-lightning-charge"></i> Upgrade now
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default AgentHeader;