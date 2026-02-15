const Notification = require("../Model/Notification");    


class NotificationController {
    async getClientNotifications(req, res) {
        try {
            const clientId = req.params.clientId;
            const notifications = await Notification.find({ clientId }).sort({ createdAt: -1 });

            res.status(200).json({ notifications });    
        } catch (error) {
            res.status(500).json({ error: 'Erreur serveur' });
        }   
    }
}


module.exports = new NotificationController();