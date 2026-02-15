import React from 'react'

const RoundTripForm = () => {
  return (
    <div className="tab-pane fade" id="pills-round-trip" role="tabpanel" aria-labelledby="pills-round-trip-tab">
      <div className="row g-4">
        <div className="col-md-6 col-xl-3 position-relative">
          <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
            <label className="mb-1"><i className="bi bi-geo-alt me-2"></i>From</label>
            <select className="form-select js-choice" data-search-enabled="true">
              <option value="">Select location</option>
              <option>San Jacinto, USA</option>
              <option>North Dakota, Canada</option>
              <option>West Virginia, Paris</option>
            </select>
          </div>
          <div className="btn-flip-icon mt-3 mt-md-0">
            <button className="btn btn-white shadow btn-round mb-0"><i className="fa-solid fa-right-left"></i></button>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
            <label className="mb-1"><i className="bi bi-send me-2"></i>To</label>
            <select className="form-select js-choice" data-search-enabled="true">
              <option value="">Select location</option>
              <option>San Jacinto, USA</option>
              <option>North Dakota, Canada</option>
              <option>West Virginia, Paris</option>
            </select>
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
            <label className="mb-1"><i className="bi bi-calendar me-2"></i>Departure</label>
            <input type="text" className="form-control flatpickr" data-date-format="d M Y" placeholder="Select date" />
          </div>
        </div>

        <div className="col-md-6 col-xl-3">
          <div className="form-border-transparent form-fs-lg bg-light rounded-3 h-100 p-3">
            <label className="mb-1"><i className="bi bi-calendar me-2"></i>Return</label>
            <input type="text" className="form-control flatpickr" data-date-format="d M Y" placeholder="Select date" />
          </div>
        </div>

        <div className="col-12 text-end pt-0">
          <a className="btn btn-primary mb-n4" href="#">Find ticket <i className="bi bi-arrow-right ps-3"></i></a>
        </div>
      </div>
    </div>
  )
}

export default RoundTripForm
