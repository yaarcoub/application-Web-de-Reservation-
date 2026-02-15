import React from 'react'

const TicketClass = () => {
  return (
    <div className="col-lg-3 ms-auto">
      <div className="form-control-bg-light form-fs-md">
        <select className="form-select js-choice">
          <option value="">Select Class</option>
          <option>Economy</option>
          <option>Premium Economy</option>
          <option>Business</option>
          <option>First Class</option>
        </select>
      </div>
    </div>
  )
}

export default TicketClass
