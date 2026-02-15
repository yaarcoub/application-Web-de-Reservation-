import React, { useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import HotelGallery from "../components/HotelGallery";
import HotelDetails from "../components/HotelDetails";
import HotelAmenities from "../components/HotelAmenities";
import HotelReservationBox from "../components/HotelReservationBox";
import { ServiceAffichage } from "../api/services/apiService2";

const HotelReservationPage = () => {
  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();
  const { payload } = location.state;

  const [hotel, setHotel] = useState(null);
  const [arrivalDate, setArrivalDate] = useState("");

  const [clientInfo, setClientInfo] = useState({
    nom: "",
    prenom: "",
    age: "",
    CIN: "",
    genre: "Homme",
  });

  const [dateError, setDateError] = useState(""); // ⚡ pour afficher l'erreur de date

  useEffect(() => {
    ServiceAffichage.getOfferHotelById(id)
      .then(res => {setHotel(res.data.data) ; console.log('Fetched hotel:', res.data.data); })
      .catch(console.error);
  }, [id]);

  if (!hotel) {
    return (
      <div className="text-center my-5">
        <div className="spinner-border text-primary"></div>
        <p className="mt-3">Loading hotel details...</p>
      </div>
    );
  }

  /* ---------------- LOGIQUE INCHANGÉE ---------------- */

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setClientInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleConfirmHotel = (nbNuits) => {
    setDateError(""); // reset erreur à chaque clic

    const arrival = new Date(arrivalDate);
    const today = new Date();
    today.setHours(0,0,0,0); // comparer seulement les dates sans l'heure

    if (arrival < today) {
      setDateError("La date d'arrivée ne peut pas être dans le passé !");
      return; // empêche la continuité
    }

    const departure = new Date(arrival);
    departure.setDate(arrival.getDate() + nbNuits);

    const cleanedPayload = payload.filter(
      item => item.typeOffre !== "HOTEL"
    );

    const updatedPayload = [
      ...cleanedPayload,
      {
        typeOffre: "HOTEL",
        id: hotel._id,
        prix: hotel.prix * nbNuits,
        dateArrivee: arrival.toISOString(),
        dateDepart: departure.toISOString(),
        nombreNuits: nbNuits,
        nombrePersonnes:
          payload.find(p => p.typeOffre === "VOL")?.nombre_passager || 1,
        client: {
          nom: clientInfo.nom,
          prenom: clientInfo.prenom,
          age: Number(clientInfo.age),
          cinOrPassport: clientInfo.CIN,
          genre: clientInfo.genre,
          pays: hotel.pays || "MAROC"
        }
      }
    ];

    navigate("/reservation/final", {
      state: { payload: updatedPayload }
    });
  };

  const handleSkipHotel = () => {
    const updatedPayload = payload.filter(item => item.type !== "HOTEL");
    navigate("/reservation/final", { state: { payload: updatedPayload } });
  };

  const isClientInfoComplete = () => {
    return (
      clientInfo.nom.trim() !== "" &&
      clientInfo.prenom.trim() !== "" &&
      clientInfo.age !== "" &&
      clientInfo.CIN.trim() !== "" &&
      arrivalDate !== ""
    );
  };

  return (
    <>
      {/* ================= HERO ================= */}
      <section
        className="py-5 text-white"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)),
            url(${hotel?.urlImages?.[0]?.url || 
              "https://images.unsplash.com/photo-1566073771259-6a8506099945"})
          `,
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
      >
        <div className="container">
          <h1 className="fw-bold">{hotel.nomHotel}</h1>
          <p className="lead mb-0">
            <i className="bi bi-geo-alt me-1"></i>
            {hotel.ville}, {hotel.pays}
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <div className="container my-5">

        {/* GALLERY */}
        <div className="mb-5 shadow rounded-4 overflow-hidden">
          <HotelGallery images={hotel.urlImages || []} />
        </div>

        {/* DETAILS */}
        <div className="card border-0 shadow-sm rounded-4 mb-5">
          <div className="card-body p-4">
            <h4 className="fw-bold text-primary mb-3">
              About this hotel
            </h4>
            <HotelDetails hotel={hotel} />
            <hr />
            <HotelAmenities hotel={hotel} />
          </div>
        </div>

        {/* GUEST INFO */}
        <div className="card border-0 shadow-sm rounded-4 mb-5">
          <div className="card-body p-4">
            <h4 className="fw-bold mb-4">
              <i className="bi bi-person-lines-fill me-2"></i>
              Guest information
            </h4>

            {dateError && <div className="alert alert-danger">{dateError}</div>}

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Nom</label>
                <input
                  className="form-control"
                  name="nom"
                  value={clientInfo.nom}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-6">
                <label className="form-label">Prénom</label>
                <input
                  className="form-control"
                  name="prenom"
                  value={clientInfo.prenom}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Âge</label>
                <input
                  type="number"
                  className="form-control"
                  name="age"
                  value={clientInfo.age}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">CIN / Passport</label>
                <input
                  className="form-control"
                  name="CIN"
                  value={clientInfo.CIN}
                  onChange={handleInputChange}
                />
              </div>

              <div className="col-md-4">
                <label className="form-label">Genre</label>
                <select
                  className="form-select"
                  name="genre"
                  value={clientInfo.genre}
                  onChange={handleInputChange}
                >
                  <option>Homme</option>
                  <option>Femme</option>
                </select>
              </div>

              <div className="col-md-6">
                <label className="form-label">
                  Arrival date
                </label>
                <input
                  type="date"
                  className="form-control"
                  value={arrivalDate}
                  onChange={(e) => setArrivalDate(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        {/* RESERVATION BOX */}
        <div className="card border-0 shadow-lg rounded-4 mb-5">
          <div className="card-body p-4">
            <h4 className="fw-bold mb-3">
              <i className="bi bi-calendar-check me-2"></i>
              Your reservation
            </h4>

            <HotelReservationBox
              hotel={hotel}
              onConfirm={handleConfirmHotel}
              onSkip={handleSkipHotel}
              disabled={!isClientInfoComplete()}
            />

          </div>
        </div>
      </div>
    </>
  );
};

export default HotelReservationPage;
