const OffreVolRepository = require('../repositories/OffreVolRepository');

class OffreVolController {
  async getAllOffreVols(req, res) {
    try {
      const offres = await OffreVolRepository.findAll();
      res.status(200).json({
        success: true,
        count: offres.length,
        data: offres
      });
      

console.log('Offres récupérées avec succès');
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: error.message
      });
    }
  }

  async getOffreVolById(req, res) {
    try {
      const { id } = req.params;
      const offreVol = await OffreVolRepository.findById(id);

      if (!offreVol) {
        return res.status(404).json({
          success: false,
          msg: 'OffreVol non trouvée'
        });
      }

      res.status(200).json({
        success: true,
        data: offreVol
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

module.exports = new OffreVolController();