const OffreHotelRepository = require('../repositories/OffreHotelRepository');

class OffreHotelController {
  async getAllOffreHotels(req, res) {
    try {
      const offres = await OffreHotelRepository.findAll();

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

  async getOffreHotelById(req, res) {
    try {
      const { id } = req.params;
      const offreHotel = await OffreHotelRepository.findById(id);
      
      if (!offreHotel) {
        return res.status(404).json({
          success: false,
          msg: 'OffreHotel non trouvée'
        });
      }

      res.status(200).json({
        success: true,
        data: offreHotel
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

module.exports = new OffreHotelController();