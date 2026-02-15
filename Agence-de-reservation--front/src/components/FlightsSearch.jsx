import React, { useEffect, useState } from 'react';
import { LOCATIONS } from '../data';

const FlightsSearch = ({ onSearch }) => {
  const [fromCountry, setFromCountry] = useState('');
  const [fromCity, setFromCity] = useState('');
  const [toCountry, setToCountry] = useState('');
  const [toCity, setToCity] = useState('');
  const [ticketClass, setTicketClass] = useState('');

  const [fromCities, setFromCities] = useState([]);
  const [toCities, setToCities] = useState([]);

  // 🔁 Mise à jour villes départ
  useEffect(() => {
    setFromCities(fromCountry ? LOCATIONS[fromCountry] || [] : []);
    setFromCity('');
  }, [fromCountry]);

  // 🔁 Mise à jour villes arrivée
  useEffect(() => {
    setToCities(toCountry ? LOCATIONS[toCountry] || [] : []);
    setToCity('');
  }, [toCountry]);

  const handleSubmit = (e) => {
    e.preventDefault();

    onSearch({
      fromCountry,
      fromCity,
      toCountry,
      toCity,
      ticketClass
    });
  };

  return (

  <div className="rounded-3 p-3 p-sm-5" style={{backgroundImage: "url('/assets/images/bg/01.jpg')", backgroundPosition: 'center center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
    <div className="row">
      <div className="col-md-10 mx-auto text-center">
        <h1 className="text-dark display-3 pt-sm-5 my-5">Ready to take off?</h1>
      </div>
    </div>

    {/* Booking form START */}
     <form className="bg-mode p-4 rounded-3 shadow mb-4" onSubmit={handleSubmit}>
      <div className="row g-3">

        {/* PAYS DEPART */}
        <div className="col-md-3">
          <label className="form-label">Pays départ</label>
          <select className="form-select" value={fromCountry} onChange={e => setFromCountry(e.target.value)}>
            <option value="">Choisir</option>
            {Object.keys(LOCATIONS).map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        {/* VILLE DEPART */}
        <div className="col-md-3">
          <label className="form-label">Ville départ</label>
          <select className="form-select" value={fromCity} onChange={e => setFromCity(e.target.value)} disabled={!fromCountry}>
            <option value="">Choisir</option>
            {fromCities.map(v => <option key={v}>{v}</option>)}
          </select>
        </div>

        {/* PAYS ARRIVÉE */}
        <div className="col-md-3">
          <label className="form-label">Pays arrivée</label>
          <select className="form-select" value={toCountry} onChange={e => setToCountry(e.target.value)}>
            <option value="">Choisir</option>
            {Object.keys(LOCATIONS).map(c => <option key={c}>{c}</option>)}
          </select>
        </div>

        {/* VILLE ARRIVÉE */}
        <div className="col-md-3">
          <label className="form-label">Ville arrivée</label>
          <select className="form-select" value={toCity} onChange={e => setToCity(e.target.value)} disabled={!toCountry}>
            <option value="">Choisir</option>
            {toCities.map(v => <option key={v}>{v}</option>)}
          </select>
        </div>

        {/* CLASSE */}
        <div className="col-md-3">
          <label className="form-label">Classe (optionnel)</label>
          <select className="form-select" value={ticketClass} onChange={e => setTicketClass(e.target.value)}>
            <option value="">Toutes</option>
            <option value="ECONOMY">Économique</option>
            <option value="BUSINESS">Business</option>
            <option value="FIRST">First Class</option>
          </select>
        </div>

      </div>

      <button className="btn btn-primary mt-4">
        Rechercher un vol
      </button>
    </form>
    {/* Booking form END */}
  </div>
);
}
export default FlightsSearch; 
