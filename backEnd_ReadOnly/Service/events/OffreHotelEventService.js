const OffreHotelRepository = require('../../repositories/OffreHotelRepository');
const EventType = require('../../Model/EventType');

class OffreHotelEventService {
  async handle(type, data) {
    
    switch (type) {
      case EventType.OFFRE_ADDED:
        console.log('OffreHotel ajouté via événement:!!!!!', EventType.OFFRE_ADDED);
        await this.onOffreHotelAdded(data);
        break;
      case EventType.OFFRE_UPDATED:
        await this.onOffreHotelUpdated(data);
        break;
      case EventType.OFFRE_DELETED:
        await this.onOffreHotelDeleted(data);
        break;
      default:
        throw new Error(`Type d'événement inconnu: ${type}`);
    }
  }

  async onOffreHotelAdded(data) {
    return await OffreHotelRepository.create(data);
  }

  async onOffreHotelUpdated(data) {
    return await OffreHotelRepository.update(data._id || data.id, data);
  }

  async onOffreHotelDeleted(data) {
    return await OffreHotelRepository.delete(data);
  }
}

module.exports = new OffreHotelEventService();