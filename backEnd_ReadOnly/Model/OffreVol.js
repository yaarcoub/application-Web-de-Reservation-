const mongoose = require('mongoose');

const OffreVolSchema = new mongoose.Schema({

   _id: {
      type: Number,
      required: true,
    },

  titre: { type: String, required: true },
  description: { type: String },
  promotion: { type: Number },
  prix: { type: Number, required: true },
  typeOffre: { type: String, default: 'VOL' },

  urlImages:[{
          _id:{
             type:Number
          },
          url : {
            type: String,
            required: true,
          }
        }],

  // Informations sur le vol
  compagnie: { type: String },
  add: { type: String ,required: true, },  // Aéroport de départ
  ada: { type: String ,required: true,},  // Aéroport d'arrivée
  dda: { type: Date ,required: true, },    // Date d'arrivée
  ddd: { type: Date ,required: true, },    // Date de départ
  dds: { type: Date,required: false, },    // Date de suspension (si utilisé)

  numeroVol: { type: String ,required: true,},
  typeAvion: { type: String },
  dureeVol: { type: Number, required: true }, // en minutes,
  classe: { type: String ,required: true, },
  nombrePlacesDisponibles: { type: Number ,required: true, },
  paysDepart: { type: String ,required: true, },
  paysArrivee: { type: String ,required: true, },

  // Infos sur la création/modification
  creationDate: { type: Date, default: Date.now },
  lastModifiedDate: { type: Date, default: Date.now }
});

// Export du modèle
module.exports = mongoose.model('OffreVol', OffreVolSchema);
