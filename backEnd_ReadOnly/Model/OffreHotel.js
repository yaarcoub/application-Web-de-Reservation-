const mongoose = require("mongoose");

const OffreHotelSchema = new mongoose.Schema(
  {
    _id: {
      type: Number,
      required: true,
    },
    description: { type: String },
    dds: { type: Date }, // date de début service
    typeOffre: { type: String, enum: ["HOTEL"], default: "HOTEL" },

    nomHotel: { type: String, required: true },
    nombreEtoiles: { type: Number, min: 1, max: 5 },

    urlImages:[{
          _id:{
             type:Number
          },
          url : {
            type: String,
            required: true,
          }
        }],


    ville: { type: String },
    pays: { type: String },
    adresse: { type: String },

    disponible: { type: Boolean, default: true },

    petitDejeunerInclus: { type: Boolean, default: false },
    wifiInclus: { type: Boolean, default: false },
    parkingDisponible: { type: Boolean, default: false },
    piscine: { type: Boolean, default: false },
    serviceChambre: { type: Boolean, default: false },

    telephone: { type: String },
    email: { type: String },

    nombreChambres: { type: Number, min: 1 },
    typeChambre: { type: String },
    capaciteChambre: { type: Number },

      prix: { type: Number, required: true },

  },
  { timestamps: true }
);

module.exports = mongoose.model("OffreHotel", OffreHotelSchema);
