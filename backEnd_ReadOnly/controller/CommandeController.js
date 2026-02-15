const CommandeRepository = require('../repositories/CommandeRepository');

class CommandeController {

    async getAllCommandes(req, res) {
    try {
      const commandes = await CommandeRepository.findAll();
      res.status(200).json({
        success: true,
        count: commandes.length,
        data: commandes
      });

      
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: error.message
      });
    }
  }



  async getCommandeById(req, res) {
    try {
      const { id } = req.params;
      const commande = await CommandeRepository.findById(id);
      
      if (!commande) {
        return res.status(404).json({
          success: false,
          msg: 'Commande non trouvée'
        });
      }

      res.status(200).json({
        success: true,
        data: commande
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: error.message
      });
    }
  }

  async getCommandesByClient(req, res) {
    try {
      const { idClient } = req.params;
      const commandes = await CommandeRepository.findByClient(idClient);
      
      res.status(200).json({
        success: true,
        count: commandes.length,
        data: commandes
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: error.message
      });
    }
  }

  async getCommandeDetails(req, res) {
    try {
      const { id } = req.params;
      const commande = await CommandeRepository.findByIdWithProduits(id);
      
      if (!commande) {
        return res.status(404).json({
          success: false,
          msg: 'Commande non trouvée'
        });
      }

      res.status(200).json({
        success: true,
        data: commande
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        msg: error.message
      });
    }
  }
}

module.exports = new CommandeController();