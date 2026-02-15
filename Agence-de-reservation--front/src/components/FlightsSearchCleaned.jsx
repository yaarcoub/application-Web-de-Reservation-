import React from 'react'
import FlightsTabs from './FlightsTabs'
import TicketClass from './TicketClass'
import TravelersSelect from './TravelersSelect'
import OneWayForm from './OneWayForm'
import RoundTripForm from './RoundTripForm'

const FlightsSearchCleaned = () => {
  return (
    <div
      className="rounded-3 p-3 p-sm-5"
      style={{
        backgroundImage: "url('/assets/images/bg/01.jpg')",
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover'
      }}
    >
      <div className="row">
        <div className="col-md-10 mx-auto text-center">
          <h1 className="text-dark display-3 pt-sm-5 my-5">Ready to take off?</h1>
        </div>
      </div>

      <form className="bg-mode position-relative px-3 px-sm-4 pt-4 mb-4 mb-sm-0">
        <div className="row g-4 position-relative">
          <FlightsTabs />
          <TicketClass />
          <TravelersSelect />

          <div className="tab-content mt-4" id="pills-tabContent">
            <OneWayForm />
            <RoundTripForm />
          </div>
        </div>
      </form>
    </div>
  )
}

export default FlightsSearchCleaned
