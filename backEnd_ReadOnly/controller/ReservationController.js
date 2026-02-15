const Reservation = require("../Model/Reservation");
const OffreVol = require("../Model/OffreVol");

const OffreHotel = require("../Model/OffreHotel");

class ReservationController {

 async getDashboardStats(req, res) {
    const now = new Date();
    try {
      /** =========================
       * 1️⃣ Calcul EARNING + BOOKED VOLS
       ========================== */
      const bookingStats = await Reservation.aggregate([
        { $unwind: "$ligneReservation" },

        {
          $match: {
            "ligneReservation.status": "CONFIRME",
            "ligneReservation.offre": "VOL"
          }
        },

        {
          $group: {
            _id: null,
            bookedVols: { $sum: 1 },
            earning: { $sum: "$ligneReservation.prixUnitaire" }
          }
        }
      ]);

      const bookedVols = bookingStats[0]?.bookedVols || 0;
      const earning = bookingStats[0]?.earning || 0;

      /** =========================
       * 2️⃣ TOTAL VOLS
       ========================== */
      const totalVols = await OffreVol.countDocuments();

      /** =========================
       * 3️⃣ AVAILABLE VOLS
       ========================== */
      const availableVols = await OffreVol.countDocuments({
        // Date de départ pas encore passée
        ddd: { $gt: now },
        // Pas suspendu OU suspension après aujourd’hui
        $or: [
          { dds: { $exists: false } },
          { dds: null },
          { dds: { $gt: now } }
        ]
      });

      /** =========================
       * 4️⃣ RESPONSE
       ========================== */
      res.status(200).json({
        success: true,
        data: {
          earning,
          bookedVols,
          totalVols,
          availableVols
        }
      });


    } catch (error) {
      res.status(500).json({
        success: false,
        message: error.message
      });
    }
  }

  async getDashboardHotelStats(req, res) {
  const now = new Date();

  try {
    /** =========================
     * 1️⃣ Calcul EARNING + BOOKED HOTELS
     ========================== */
    const bookingStats = await Reservation.aggregate([
      { $unwind: "$ligneReservation" },

      {
        $match: {
          "ligneReservation.status": "CONFIRME",
          "ligneReservation.offre": "HOTEL"
        }
      },

      {
        $group: {
          _id: null,
          bookedHotels: { $sum: 1 },
          earning: { $sum: "$ligneReservation.prixUnitaire" }
        }
      }
    ]);

    const bookedHotels = bookingStats[0]?.bookedHotels || 0;
    const earning = bookingStats[0]?.earning || 0;

    /** =========================
     * 2️⃣ TOTAL HOTELS
     ========================== */
    const totalHotels = await OffreHotel.countDocuments();

    /** =========================
     * 3️⃣ AVAILABLE HOTELS
     ========================== */
    const availableHotels = await OffreHotel.countDocuments({
      // Hôtel non suspendu ou suspension après aujourd’hui
      $or: [
        { dds: { $exists: false } },
        { dds: null },
        { dds: { $gt: now } }
      ]
    });

    /** =========================
     * 4️⃣ RESPONSE
     ========================== */
    res.status(200).json({
      success: true,
      data: {
        earning,
        bookedHotels,
        totalHotels,
        availableHotels
      }
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    });
  }
}


  // Récupérer toutes les réservations du jour
  async getAllBookings(req, res) {
    try {
      const today = new Date();
      const todayStart = new Date(today.setHours(0, 0, 0, 0));
      const todayEnd = new Date(today.setHours(23, 59, 59, 999));

      const bookings = await Reservation.aggregate([
        { $unwind: "$ligneReservation" },

        // Filtrer uniquement les réservations créées aujourd'hui
        {
          $match: {
            "ligneReservation.creationDate": {
              $gte: todayStart,
              $lte: todayEnd
            }
          }
        },

        // Projeter les champs nécessaires
        {
          $project: {
            _id: 0,
            id: "$ligneReservation.id",
            name: "$ligneReservation.codeReservation",
            status: "$ligneReservation.status",
            offre: "$ligneReservation.offre",
            clientNom: "$ligneReservation.client.nom",
            clientPrenom: "$ligneReservation.client.prenom",
            payment: {
              // Paiement : si confirmé, c'est prixUnitaire, sinon 0
              $cond: [
                { $eq: ["$ligneReservation.status", "CONFIRME"] },
                "$ligneReservation.prixUnitaire",
                0
              ]
            },
            date: {
              $dateToString: { format: "%Y-%m-%d", date: "$ligneReservation.creationDate" }
            }
          }
        },

        // Optionnel : trier par date croissante
        { $sort: { date: 1, id: 1 } }
      ]);

      // Calcul du revenu total pour aujourd'hui
      const revenueToday = bookings.reduce((sum, b) => sum + b.payment, 0);

      res.status(200).json({
        success: true,
        data: bookings,
        revenueToday
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: error.message
      });
    }
  }
}

module.exports = new ReservationController();
