const NotificationRepository = require('../../repositories/NotificationRepo');
const EventType = require('../../Model/EventType');

class NotificationEventService {

  async handle(type, data) {
    switch (type) {

      case EventType.NOTIFICATION_ADD:
        console.log('📦 Nouvelle offre - création notification');
        await this.onNotificationCreated(data);
        break;
      case EventType.NOTIFICATION_UPDATED:
        console.log('✏️ Notification modifiée via événement', data);
        await this.onNotificationUpdated(data);
        break;

      case EventType.NOTIFICATION_DELETED:
        console.log('🗑️ Notification supprimée via événement');
        await this.onNotificationDeleted(data);
        break;

      default:
        throw new Error(`Type d'événement Notification inconnu: ${type}`);
    }
  }

  /* ================= HANDLERS ================= */

  async onNotificationCreated(data) {
    // création ou upsert
    return await NotificationRepository.create(data);
  }

  async onNotificationUpdated(data) {
    // data doit contenir _id + champs à modifier
    return await NotificationRepository.update(data);
  }

  async onNotificationDeleted(data) {
    // data = { _id }
    return await NotificationRepository.delete(data._id);
  }

  /* ================= MÉTHODES UTILES ================= */
  async markAsRead(id) {
    return await NotificationRepository.markAsRead(id);
  }

  async findByClient(clientId) {
    return await NotificationRepository.findByClient(clientId);
  }

  async findUnreadByClient(clientId) {
    return await NotificationRepository.findUnreadByClient(clientId);
  }
}

module.exports = new NotificationEventService();
