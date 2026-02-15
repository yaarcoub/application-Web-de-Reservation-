const express = require('express');
const OffreHotelController = require('../controller/OffreHotelController');

const router = express.Router();

// Afficher tous les produits
router.get('/offres-hotel/all', OffreHotelController.getAllOffreHotels.bind(OffreHotelController));

// Afficher un produit par ID
router.get('/offres-hotel/:id', OffreHotelController.getOffreHotelById.bind(OffreHotelController));

// Afficher les produits par catégorie
// router.get('/produits/category/:category', OffreHotelController.getOffreHotelsByCategory.bind(OffreHotelController));

module.exports = router;