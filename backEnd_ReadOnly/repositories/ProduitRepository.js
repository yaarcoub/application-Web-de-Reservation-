const Produit = require("../Model/produit");

class ProduitRepository {
  async create(data) {
    try {
      const newProduit = new Produit({ _id: data.id, ...data });
      await newProduit.save();
      console.log('✓ Produit ajouté:', data.id);
      return newProduit;
    } catch (error) {
      console.error(' Erreur ajout Produit:', error.message);
      throw error;
    }
  }

  async update(id, data) {
    try {
      const updated = await Produit.findByIdAndUpdate(id, data, { new: true });
      console.log('✓ Produit modifié:', id);
      return updated;
    } catch (error) {
      console.error(' Erreur modification Produit:', error.message);
      throw error;
    }
  }

  async delete(id) {
    try {
      await Produit.findByIdAndDelete(id);
      console.log('✓ Produit supprimé:', id);
    } catch (error) {
      console.error(' Erreur suppression Produit:', error.message);
      throw error;
    }
  }

  async findAll() {
    return await Produit.find({});
  }

  async findById(id) {
    return await Produit.findById(id);
  }
}

module.exports = new ProduitRepository();
