const ReservationRepository = require('../../repositories/ReservationRepo');
const EventType = require('../../Model/EventType');

class ReservationEventService {

  async handle(type, data) {
    switch (type) {

      case EventType.RESERVATION_ADDED:
        console.log('📦 Reservation ajoutée via événement');
        await this.onReservationAdded(data);
        break;

      case EventType.RESERVATION_UPDATED:
        console.log('✏️ Reservation modifiée via événement' , data);
        await this.onReservationUpdated(data);
        break;

      case EventType.RESERVATION_DELETED:
        console.log('🗑️ Reservation supprimée via événement');
        await this.onReservationDeleted(data);
        break;

      default:
        throw new Error(`Type d'événement Reservation inconnu: ${type}`);
    }
  }

  /* ================= HANDLERS ================= */

  async onReservationAdded(data) {
    // création ou upsert
    return await ReservationRepository.create(data);
  }

  async onReservationUpdated(data) {
    
    return await ReservationRepository.update(data);
  }

  async onReservationDeleted(data) {
    return await ReservationRepository.delete(data);
  }
}

module.exports = new ReservationEventService();
