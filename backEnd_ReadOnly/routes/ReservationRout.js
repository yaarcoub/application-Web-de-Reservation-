const express = require('express');
const  ReservationController = require('../controller/ReservationController');

const router = express.Router();

// Afficher tous les produits
router.get('/Reservation/all', ReservationController.getAllBookings.bind(ReservationController));
router.get('/Reservation/stats-vol', ReservationController.getDashboardStats.bind(ReservationController));
router.get('/Reservation/stats-hotel', ReservationController.getDashboardHotelStats.bind(ReservationController));
module.exports = router;