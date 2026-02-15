import React, { useState, useEffect } from 'react';
import AgentMenu from '../components/Agent/AgentMenu';
import { Link } from 'react-router-dom';
import { ServiceAffichage } from '../api/services/apiService2';

const AgentDashboard = () => {
  const [bookings, setBookings] = useState([]);
  const [revenueToday, setRevenueToday] = useState(0); // 💰 Revenu du jour

  useEffect(() => {
    ServiceAffichage.getReservationInfo()
      .then((response) => {
        // Mettre à jour les réservations
        setBookings(response.data.data);

        // Mettre à jour le revenu du jour
        setRevenueToday(response.data.revenueToday);

        console.log("Bookings fetched:", response.data.data);
        console.log("Revenue Today:", response.data.revenueToday);
      })
      .catch((error) => {
        console.error("Error fetching bookings:", error);
      });
  }, []);

  // 🎯 STATUS LABELS (UI only)
  const STATUS_LABELS = {
    HOLD: 'On Hold',
    CONFIRME: 'Confirmed',
    EXPIRED: 'Expired'
  };

  // 🎨 STATUS COLORS
  const STATUS_COLORS = {
    HOLD: 'warning',
    CONFIRME: 'success',
    EXPIRED: 'danger'
  };

  // 📊 Stats
  const stats = [
    {
      icon: 'bi-journals',
      color: 'warning',
      value: bookings.filter(b => b.status === 'HOLD').length,
      label: 'Reservations on Hold'
    },
    {
      icon: 'bi-bar-chart-line-fill',
      color: 'success',
      value: bookings.filter(b => b.status === 'CONFIRME').length,
      label: 'Confirmed Reservations'
    },
    {
      icon: 'bi-x-circle',
      color: 'danger',
      value: bookings.filter(b => b.status === 'EXPIRED').length,
      label: 'Expired Reservations'
    },
    {
      icon: 'bi-graph-up-arrow',
      color: 'info',
      value: revenueToday, // ✅ revenu calculé côté backend
      label: 'Revenue Today ($)'
    }
  ];

  return (
    <>
      <AgentMenu />

      <main>
        <section className="pt-0">
          <div className="container vstack gap-4">

            {/* Header */}
            <div className="row">
              <div className="col-12">
                <h1 className="fs-4 mb-0">
                  <i className="bi bi-house-door fa-fw me-1"></i> Dashboard
                </h1>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="row g-4">
              {stats.map((stat, index) => (
                <div className="col-sm-6 col-xl-3" key={index}>
                  <div className="card card-body border">
                    <div className="d-flex align-items-center">
                      <div className={`icon-xl bg-${stat.color} rounded-3 text-white`}>
                        <i className={`bi ${stat.icon}`}></i>
                      </div>
                      <div className="ms-3">
                        <h4>{stat.value}</h4>
                        <span>{stat.label}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Upcoming Bookings */}
            <div className="row">
              <div className="col-12">
                <div className="card border rounded-3">
                  <div className="card-header border-bottom">
                    <div className="d-sm-flex justify-content-between align-items-center">
                      <h5 className="mb-2 mb-sm-0">Today's Bookings</h5>
                      <Link to="/agent/bookings" className="btn btn-sm btn-primary mb-0">
                        View All
                      </Link>
                    </div>
                  </div>

                  <div className="card-body">
                    <div className="table-responsive border-0">
                      <table className="table align-middle p-4 mb-0 table-hover">
                        <thead className="table-light">
                          <tr>
                            <th>#</th>
                            <th>Reference</th>
                            <th>Date</th>
                            <th>Status</th>
                            <th>Payment</th>
                            <th>Client</th>
                            <th>Action</th>
                          </tr>
                        </thead>

                        <tbody>
                          {bookings.map((booking, index) => (
                            <tr key={booking.id}>
                              <td>{String(index + 1).padStart(2, '0')}</td>
                              <td><strong>{booking.name}</strong></td>
                              <td>{booking.date}</td>
                              <td>
                                <span
                                  className={`badge bg-${STATUS_COLORS[booking.status]} bg-opacity-10 text-${STATUS_COLORS[booking.status]}`}
                                >
                                  {STATUS_LABELS[booking.status]}
                                </span>
                              </td>
                              <td>
                                <span
                                  className={`badge bg-${booking.payment > 0 ? 'success' : 'danger'} bg-opacity-10 text-${booking.payment > 0 ? 'success' : 'danger'}`}
                                >
                                  {booking.payment > 0 ? `$${booking.payment}` : 'Unpaid'}
                                </span>
                              </td>
                              <td>{booking.clientPrenom} {booking.clientNom}</td>
                              <td>
                                <Link to={`/agent/bookings/${booking.id}`} className="btn btn-sm btn-primary-soft">
                                  View
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>

                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </section>
      </main>
    </>
  );
};

export default AgentDashboard;
