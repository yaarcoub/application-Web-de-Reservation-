import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

const AgentMenu = () => {
  const location = useLocation();

  const menuItems = [
    { path: '/agent/dashboard', icon: 'bi-house-door', label: 'Dashboard' },
    { path: '/agent/listings', icon: 'bi-journals', label: 'Hotels' },
    { path: '/agent/vols', icon: 'bi-journals', label: 'Vols' },
  ];

  const [user, setUser] = useState(null);

useEffect(() => {
  const storedUser = localStorage.getItem("user");
  if (storedUser) {
    setUser(JSON.parse(storedUser));
  }
}, []);


  const isActive = (path) => location.pathname === path;

  return (
    <>
      

      {/* Menu Section START */}
      <section className="pt-4">
        <div className="container">
          <div className="card rounded-3 border p-3 pb-2">
            <div className="d-sm-flex align-items-center">
              <div className="avatar avatar-xl mb-2 mb-sm-0">
              <img 
  className="avatar-img rounded-circle" 
  src={user?.urlImage || "/assets/images/avatar/default.jpg"} 
  alt={user?.nom || "User"}
/>

              </div>
              <h4 className="mb-2 mb-sm-0 ms-sm-3">
  <span className="fw-light">Hi</span> {user?.nom || "User"}
</h4>

              <div className="hstack gap-2 ms-auto flex-shrink-0">
                {user?.role === "ADMIN" && (
  <>
    <Link 
      to="/agent/add-listing" 
      className="btn btn-sm btn-primary-soft mb-0"
    >
      <i className="bi bi-plus-lg fa-fw me-1"></i>Add Hotel
    </Link>

    <Link 
      to="/agent/add-vol" 
      className="btn btn-sm btn-primary-soft mb-0"
    >
      <i className="bi bi-plus-lg fa-fw me-1"></i>Add Vol
    </Link>
  </>
)}

              </div>
            </div>

            <button
              className="btn btn-primary w-100 d-block d-xl-none mt-2"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#dashboardMenu"
              aria-controls="dashboardMenu"
            >
              <i className="bi bi-list"></i> Dashboard Menu
            </button>

            {/* Sidebar Offcanvas START */}
            <div
              className="offcanvas-xl offcanvas-end mt-xl-3"
              tabIndex="-1"
              id="dashboardMenu"
            >
              <div className="offcanvas-header border-bottom p-3">
                <h5 className="offcanvas-title">Menu</h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  data-bs-target="#dashboardMenu"
                  aria-label="Close"
                ></button>
              </div>

              <div className="offcanvas-body p-3 p-xl-0">
                <div className="navbar navbar-expand-xl">
                  <ul className="navbar-nav navbar-offcanvas-menu">
                    {menuItems.map((item) => (
                      <li className="nav-item" key={item.path}>
                        <Link 
                          className={`nav-link ${isActive(item.path) ? 'active' : ''}`}
                          to={item.path}
                        >
                          <i className={`bi ${item.icon} fa-fw me-1`}></i>
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            {/* Sidebar Offcanvas END */}
          </div>
        </div>
      </section>
      {/* Menu Section END */}
    </>
  );
};

export default AgentMenu;