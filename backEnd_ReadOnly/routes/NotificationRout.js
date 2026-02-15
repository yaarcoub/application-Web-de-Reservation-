const express =  require('express');
const  NotificationController = require('../controller/notificationController');

const router = express.Router();

router.get('/Notification/:clientId', NotificationController.getClientNotifications.bind(NotificationController));


module.exports = router;