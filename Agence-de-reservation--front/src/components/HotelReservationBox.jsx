import { useState } from "react";

const HotelReservationBox = ({ hotel, onConfirm, onSkip, disabled }) => {
  const [nbNuits, setNbNuits] = useState(1);
  const [error, setError] = useState("");

  const totalPrice = hotel.prix * nbNuits;

  const handleConfirm = () => {
    if (nbNuits <= 0) {
      setError("Le nombre de nuits doit être supérieur à 0");
      return;
    }
    setError("");
    onConfirm(nbNuits);
  };

  return (
    <div className="reservation-box shadow-sm rounded-3 p-4 bg-white mt-4">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4 className="mb-0 text-primary">
          {hotel.prix} $
          <span className="text-muted fs-6"> / nuit</span>
        </h4>
        <span className="badge bg-success">Available</span>
      </div>

      <hr />

      <div className="mb-3">
        <label className="form-label fw-semibold">Number of nights</label>
        <input
          type="number"
          className="form-control"
          min="0"
          value={nbNuits}
          onChange={(e) => setNbNuits(Number(e.target.value))}
        />
        {error && <p className="text-danger mt-1">{error}</p>}
      </div>

      <div className="d-flex justify-content-between align-items-center mb-3">
        <span className="fw-semibold">Total</span>
        <span className="fw-bold text-primary">{totalPrice} $</span>
      </div>

      <div className="d-grid gap-2">
        {/* 🔹 Bouton bloqué si infos client incomplètes */}
        <button
          className="btn btn-primary btn-lg"
          onClick={handleConfirm}
          disabled={disabled} 
        >
          Continue with this hotel
        </button>

        <button className="btn btn-outline-secondary" onClick={onSkip}>
          Continue without hotel
        </button>
      </div>
    </div>
  );
};

export default HotelReservationBox;
