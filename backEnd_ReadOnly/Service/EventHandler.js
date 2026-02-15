const OffreVolEventService = require('./events/OffreVolEventService');
const ImageEventService = require('./events/ImageEventService');
const ReservationEventService = require('./events/ReservationEventService');
const NotificationEventService = require('./events/NotifucationEventService');  

const EntityType = require('../Model/EntityType');
const OffreHotelEventService = require('./events/OffreHotelEventService');

class EventHandler {
  async handle(domainEvent) {
    const { type, entity, data } = domainEvent;

    if (entity == EntityType.OFFRE_VOL) {
      await OffreVolEventService.handle(type, data);

    } else if (entity == EntityType.OFFRE_HOTEL) {
      await OffreHotelEventService.handle(type, data);
    } else if(entity == EntityType.IMAGE) {
      await ImageEventService.handle(type, data);
    } else if (entity == EntityType.RESERVATION) {
      await ReservationEventService.handle(type, data);
    }
    else if (entity == EntityType.NOTIFICATION) {
      await NotificationEventService.handle(type, data);
    }
    else {
      throw new Error(`Entity inconnue: ${entity}`);
    }
  
  }
}

module.exports = new EventHandler(); 