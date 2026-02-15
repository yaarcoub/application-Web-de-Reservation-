const OffreVolRepository = require('../../repositories/OffreVolRepository');
const EventType = require('../../Model/EventType');

class OffreVolEventService {
  async handle(type, data) {
    
    switch (type) {
      case EventType.OFFRE_ADDED:
        console.log('OffreVol ajouté via événement:!!!!!', EventType.OFFRE_ADDED);
        await this.onOffreVolAdded(data);
        break;
      case EventType.OFFRE_UPDATED:
        await this.onOffreVolUpdated(data);
        break;
      case EventType.OFFRE_DELETED:
        await this.onOffreVolDeleted(data);
        break;
      default:
        throw new Error(`Type d'événement inconnu: ${type}`);
    }
  }

  async onOffreVolAdded(data) {
    return await OffreVolRepository.create(data);
  }

  async onOffreVolUpdated(data) {
    return await OffreVolRepository.update(data._id || data.id, data);
  }

  async onOffreVolDeleted(data) {
    return await OffreVolRepository.delete(data);
  }
}

module.exports = new OffreVolEventService();