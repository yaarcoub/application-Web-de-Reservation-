const ProduitRepository = require('../repositories/ProduitRepository');

class ProduitController {
  async getAllProduits(req, res) {
    try {
      const produits = await ProduitRepository.findAll();
      res.status(200).json({
        success: true,
        count: produits.length,
        data: produits
      });

console.log('Produits récupérés avec succès');

    } catch (error) {
      res.status(500).json({
        success: false,
        msg: error.message
      });
    }
  }

  async getProduitById(req, res) {
    try {
      const { id } = req.params;
      const produit = await ProduitRepository.findById(id);
      
      if (!produit) {
        return res.status(404).json({
          success: false,
          msg: 'Produit non trouvé'
        });
      }

      res.status(200).json({
        success: true,
        data: produit
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: error.message
      });
    }
  }
 /*
  async getProduitsByCategory(req, res) {
    try {
      const { category } = req.params;
      const produits = await ProduitRepository.findByCategory(category);
      
      res.status(200).json({
        success: true,
        count: produits.length,
        data: produits
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: error.message
      });
    }
  }*/
}

module.exports = new ProduitController();