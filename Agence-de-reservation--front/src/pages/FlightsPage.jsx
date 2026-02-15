import React, { useState } from 'react';
import FlightsSearch from '../components/FlightsSearch';
import SpecialOffers from '../components/SpecialOffers';
import PopularDestinations from '../components/PopularDestinations';

const Flights = () => {
  const [filters, setFilters] = useState(null);

  return (
    <section className="py-0">
      <div className="container">
        <FlightsSearch onSearch={setFilters} />
        <SpecialOffers filters={filters} />
        <PopularDestinations />
      </div>
    </section>
  );
};

export default Flights;
