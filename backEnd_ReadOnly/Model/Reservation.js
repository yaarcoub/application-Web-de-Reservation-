const mongoose = require("mongoose");

/* ================= CLIENT ================= */
const ClientSchema =
  {
    nom: { type: String, required: true },
    prenom: { type: String, required: true },
    age: { type: Number, required: true },
    cinOrPassport: { type: String, required: true },
    genre: { type: String, required: true },
    pays: { type: String, required: true }
  };
  


/* ================= UTILISATEUR ================= */
const UserAppSchema = new mongoose.Schema(
  {
    id: { type: Number, required: false },
    email: { type: String, required: false },
    name: { type: String, required: false },
    pays: { type: String, required: false },
    age: { type: Number, required: false },
    genre: { type: String, required: false }



  },
  { _id: false }
);

/* ================= RESERVATION DTO ================= */
const ReservationDtoSchema = 
  {
    id: { type: Number, required: true },
    montantTotal: { type: Number, required: true },
    client: UserAppSchema
  };
  


/* ================= LIGNE RESERVATION ================= */
const LigneReservationStep1Schema = new mongoose.Schema(
  {
    id: { type: Number, required: true },
    creationDate: { type: Date, default: Date.now },

    status: {
      type: String,
      enum: ["HOLD", "CONFIRMED", "EXPIRED"],
      required: true
    },

    prixUnitaire: { type: Number, required: true },
    codeReservation: { type: String, required: true },
    offre: {
      type: String,
      enum: ["VOL", "HOTEL"],
      required: true
    },
    client: ClientSchema

  },
  { _id: false } 
);


/* ================= RESERVATION PRINCIPALE ================= */
const ReservationSendStep1Schema = new mongoose.Schema(
  {
    _id: { type: Number, required: true },
    prix: { type: Number, required: true },
  
    userApp: UserAppSchema,
    ligneReservation: [LigneReservationStep1Schema]
     
  },
  {
    timestamps: true,
    collection: "reservations"
  }
);

/* ================= INDEX ================= */


module.exports = mongoose.model(
  "ReservationSendStep1",
  ReservationSendStep1Schema
);
