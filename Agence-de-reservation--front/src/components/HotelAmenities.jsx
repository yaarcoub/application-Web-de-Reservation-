import React from "react";
import { FaWifi, FaParking, FaSwimmingPool, FaConciergeBell, FaCoffee } from "react-icons/fa";

const HotelAmenities = ({ hotel }) => {
  // Si hotel n'est pas défini, renvoie tableau vide
  if (!hotel) return null;

  // Liste des équipements avec label, valeur et icône
  const amenitiesList = [
    { key: "disponible", label: "Disponible", icon: "✅" },
    { key: "petitDejeunerInclus", label: "Petit-déjeuner inclus", icon: <FaCoffee /> },
    { key: "wifiInclus", label: "WiFi", icon: <FaWifi /> },
    { key: "parkingDisponible", label: "Parking", icon: <FaParking /> },
    { key: "piscine", label: "Piscine", icon: <FaSwimmingPool /> },
    { key: "serviceChambre", label: "Service en chambre", icon: <FaConciergeBell /> },
  ];

  return (
    <div className="mt-4">
      <h5 className="mb-3">Amenities</h5>
      <div className="row g-2">
        {amenitiesList.map((item, index) => {
          const available = hotel[item.key];
          return (
            <div key={index} className="col-md-4 col-6">
              <div
                className={`border rounded-3 p-2 text-center small shadow-sm d-flex align-items-center justify-content-center gap-2`}
                style={{
                  backgroundColor: available ? "#e6ffed" : "#ffe6e6",
                  color: available ? "#2f855a" : "#c53030",
                  fontWeight: 500,
                }}
              >
                <span style={{ fontSize: "1.2rem" }}>
                  {available ? item.icon : "❌"}
                </span>
                <span>{item.label}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default HotelAmenities;
