// Repository/ReservationSendStep1Repository.js
const ReservationSendStep1 = require("../Model/Reservation");

class ReservationSendStep1Repository {

  /* ================= CREATE / UPSERT ================= */
  async create(data) {
    try {
      const { _id , ...rest } = data;
      const newReservation = new ReservationSendStep1({ _id:data.idReservation,ligneReservation: data.reservationSendStep1List, ...rest });

     const saved =  await newReservation.save();

      console.log("✓ Reservation sauvegardée:", _id);
      return saved;
    } catch (error) {
      console.error("Erreur createOrUpdate:", error.message);
      throw error;
    }
  }

  async update( data) {
    try {
      const updated = await ReservationSendStep1.findOneAndUpdate(
        { _id: data.idReservation,
            "ligneReservation.id": data.idLigneReservation
         },
        { $set: {
            "ligneReservation.$.status": data.statusReservation

        } },
        { new: true }
      );

      console.log("✓ Reservation mise à jour:", data.idReservation);
      return updated;
    } catch (error) {
      console.error("Erreur update:", error.message);
      throw error;
    }
  }


  /* ================= ADD LIGNE ================= */
  async addLigneReservation(reservationId, ligne) {
    try {
      const updated = await ReservationSendStep1.findByIdAndUpdate(
        reservationId,
        { $push: { ligneReservation: ligne } },
        { new: true }
      );

      console.log("+ Ligne ajoutée à la réservation:", reservationId);
      return updated;
    } catch (error) {
      console.error("Erreur addLigneReservation:", error.message);
      throw error;
    }
  }

  /* ================= REMOVE LIGNE ================= */
  async removeLigneReservation(reservationId, ligneId) {
    try {
      const updated = await ReservationSendStep1.findByIdAndUpdate(
        reservationId,
        { $pull: { ligneReservation: { id: ligneId } } },
        { new: true }
      );

      console.log("- Ligne supprimée:", ligneId);
      return updated;
    } catch (error) {
      console.error("Erreur removeLigneReservation:", error.message);
      throw error;
    }
  }

  /* ================= UPDATE STATUS ================= */
  async updateStatus(reservationId, status) {
    try {
      const updated = await ReservationSendStep1.findByIdAndUpdate(
        reservationId,
        { $set: { statusReservation: status } },
        { new: true }
      );

      console.log("✓ Status modifié:", reservationId);
      return updated;
    } catch (error) {
      console.error("Erreur updateStatus:", error.message);
      throw error;
    }
  }

  /* ================= FIND ================= */
  async findById(id) {
    return await ReservationSendStep1.findById(id);
  }

  async findByUser(userId) {
    return await ReservationSendStep1.find({ "userApp.id": userId });
  }

  async findByCin(cinOrPassport) {
    return await ReservationSendStep1.find({
      "ligneReservation.client.cinOrPassport": cinOrPassport
    });
  }

  async findAll() {
    return await ReservationSendStep1.find({});
  }

  /* ================= DELETE ================= */
  async delete(id) {
    try {
      await ReservationSendStep1.findByIdAndDelete(id);
      console.log("✓ Reservation supprimée:", id);
    } catch (error) {
      console.error("Erreur delete:", error.message);
      throw error;
    }
  }
}

module.exports = new ReservationSendStep1Repository();
