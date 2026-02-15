const express = require('express');
const OffreVolController = require('../controller/OffreVolController');

const router = express.Router();

// Afficher tous les produits
router.get('/offres-vol/all', OffreVolController.getAllOffreVols.bind(OffreVolController));

// Afficher un produit par ID
router.get('/offres-vol/:id', OffreVolController.getOffreVolById.bind(OffreVolController));

// Afficher les produits par catégorie
// router.get('/produits/category/:category', OffreVolController.getOffreVolsByCategory.bind(OffreVolController));

module.exports = router;