const Notification = require("../Model/Notification");

class NotificationRepository {

  /* ================= CREATE / UPSERT ================= */
  async create(data) {
    try {
      const { _id , ...rest } = data;
            console.log("✓ Notification sauvegardée:", data);
      const newNotification = new Notification({ _id : data.id , clientId : data.client, ...rest });
      const saved = await newNotification.save();
    

      return saved;
    } catch (error) {
      console.error(" Erreur create Notification:", error.message);
      throw error;
    }
  }

  /* ================= UPDATE ================= */
  async update( data) {

    try {
      const result = await Notification.updateMany(
      { _id: { $in: data } },
      { $set: { lu: true } }
    );

    console.log("✓ Notification mise à jour:", result);
    } catch (error) {
      console.error(" Erreur update Notification:", error.message);
      throw error;
    }
  }

  /* ================= MARK AS READ ================= */
  async markAsRead(id) {
    try {
      const updated = await Notification.findByIdAndUpdate(
        id,
        { $set: { lu: true } },
        { new: true }
      );
      console.log("✓ Notification marquée comme lue:", id);
      return updated;
    } catch (error) {
      console.error("❌ Erreur markAsRead:", error.message);
      throw error;
    }
  }

  /* ================= DELETE ================= */
  async delete(id) {
    try {
      await Notification.findByIdAndDelete(id);
      console.log("✓ Notification supprimée:", id);
    } catch (error) {
      console.error("❌ Erreur delete Notification:", error.message);
      throw error;
    }
  }

  /* ================= FIND ================= */
  async findById(id) {
    return await Notification.findById(id);
  }

  async findAll() {
    return await Notification.find({});
  }

  async findByClient(clientId) {
    return await Notification.find({ clientId }).sort({ createdAt: -1 });
  }

  async findUnreadByClient(clientId) {
    return await Notification.find({ clientId, lu: false }).sort({ createdAt: -1 });
  }

  async findByReference(reference) {
    return await Notification.find({ reference });
  }

  async findByType(notificationType) {
    return await Notification.find({ notificationType });
  }

}

module.exports = new NotificationRepository();
