import React from 'react'

const FlightsTabs = () => {
  return (
    <div className="col-lg-6">
      <ul className="nav nav-pills nav-pills-dark" id="pills-tab" role="tablist">
        <li className="nav-item" role="presentation">
          <button className="nav-link rounded-start rounded-0 mb-0 active" id="pills-one-way-tab" data-bs-toggle="pill" data-bs-target="#pills-one-way" type="button" role="tab" aria-selected="true">One Way</button>
        </li>
        <li className="nav-item" role="presentation">
          <button className="nav-link rounded-end rounded-0 mb-0" id="pills-round-trip-tab" data-bs-toggle="pill" data-bs-target="#pills-round-trip" type="button" role="tab" aria-selected="false">Round Trip</button>
        </li>
      </ul>
    </div>
  )
}

export default FlightsTabs
