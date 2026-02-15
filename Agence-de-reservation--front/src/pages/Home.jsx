import React, { useState, useEffect } from 'react';
import { Hero, BestDeals, About, FeaturedHotels, Client, Testimonials, Nearby, DownloadApp } from '../components';
import { ServiceAffichage } from '../api/services/apiService2';

const Home = () => {
  const [hotels, setHotels] = useState([]);              // Tous les hôtels récupérés
  const [filteredHotels, setFilteredHotels] = useState([]); // Hôtels filtrés par ville/pays
  const [loading, setLoading] = useState(true);

  // Récupération des hôtels depuis l'API
  useEffect(() => {
    const fetchHotels = async () => {
      try {
        const res = await ServiceAffichage.getAllOffersHotel();
        setHotels(res.data.data);
        console.log('Hôtels récupérés :', res.data.data);
        setFilteredHotels(res.data.data); // Initialement afficher tous
      } catch (err) {
        console.error("Erreur récupération hôtels :", err);
      } finally {
        setLoading(false);
      }
    };
    fetchHotels();
  }, []);

  // Fonction de recherche passée à Hero
 const handleSearch = ({ ville = '', pays = '' }) => {
  const filtered = hotels.filter(hotel => {
    const hotelVille = hotel.ville ? hotel.ville.toLowerCase() : '';
    const hotelPays = hotel.pays ? hotel.pays.toLowerCase() : '';
     console.log('Recherche hôtel - Ville:', hotel, 'Pays:', );
    return (
      hotelVille.includes(ville.toLowerCase()) &&
      hotelPays.includes(pays.toLowerCase())
    );
  });

  setFilteredHotels(filtered);
};


  return (
    <>
      <Hero onSearch={handleSearch} />              {/* Barre de recherche */}
      <BestDeals hotels={filteredHotels} loading={loading} /> {/* Affichage hôtels filtrés */}
      <About />
      <FeaturedHotels />
      <Client />
      <Testimonials />
      <Nearby />
      <DownloadApp />
    </>
  );
};

export default Home;
