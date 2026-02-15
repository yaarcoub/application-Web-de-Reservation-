import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const AgentSidebar = ({ isOpen }) => {
  const location = useLocation();

  const menuItems = [
    { href: '/agent/dashboard', icon: 'bi-house-door', label: 'Dashboard' },
    { href: '/agent/listings', icon: 'bi-journals', label: 'Listings' },
    { href: '/agent/bookings', icon: 'bi-bookmark-heart', label: 'Bookings' },
    { href: '/agent/activities', icon: 'bi-bell', label: 'Activities' },
    { href: '/agent/earnings', icon: 'bi-graph-up-arrow', label: 'Earnings' },
    { href: '/agent/reviews', icon: 'bi-star', label: 'Reviews' },
    { href: '/agent/settings', icon: 'bi-gear', label: 'Settings' }
  ];

  return (
    <aside className={`agent-sidebar ${isOpen ? 'open' : ''}`}>
      <nav className="navbar navbar-expand-xl">
        <ul className="navbar-nav navbar-offcanvas-menu w-100">
          {menuItems.map((item) => (
            <li className="nav-item" key={item.href}>
              <Link
                className={`nav-link ${
                  location.pathname === item.href ? 'active' : ''
                }`}
                to={item.href}
              >
                <i className={`bi ${item.icon} fa-fw me-1`}></i>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default AgentSidebar;