import React from 'react';

const StatCard = ({ icon, color, value, label }) => {
  return (
    <div className="col-sm-6 col-xl-3">
      <div className="card card-body border">
        <div className="d-flex align-items-center">
          <div className={`icon-xl bg-${color} rounded-3 text-white`}>
            <i className={`bi ${icon}`}></i>
          </div>
          <div className="ms-3">
            <h4>{value}</h4>
            <span>{label}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatCard;