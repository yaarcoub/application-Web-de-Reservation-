const OffreVol = require("../Model/OffreVol");

class OffreVolRepository {
  async create(data) {
    try {
      const { id, ...restData } = data;
      const newOffreVol = new OffreVol({ _id: id , ...restData });
      const saved = await newOffreVol.save();
      console.log('✓ OffreVol ajouté ou Modifier:', id);
      console.log('💾 Sauvegardé dans DB:', saved);
      return newOffreVol;
    } catch (error) {
      console.error(' Erreur ajout OffreVol:', error.message);
      throw error;
    }
  }

  async pushToArray(id, field, element) {
  try {
    const updated = await OffreVol.findByIdAndUpdate(
      id,
      { $push: { [field]: element } },
      { new: true }
    );
    console.log(`+ Élément ajouté dans ${field} pour offre ${id}`);
    return updated;
  } catch (error) {
    console.error('Erreur pushToArray:', error.message);
    throw error;
  }
}

async pullFromArray(id, field, condition) {
  try {
    const updated = await OffreVol.findByIdAndUpdate(
      id,
      { $pull: { [field]: condition } },
      { new: true }
    );

    console.log(`- Élément supprimé de ${field} pour offre ${id}`);
    return updated;
  } catch (error) {
    console.error('Erreur pullFromArray:', error.message);
    throw error;
  }
}




  async update(id, data) {
    try {

      Object.keys(data).forEach(key => {
            if (data[key] === null || data[key] === undefined) {
                delete data[key];
            }
        });

      const updated = await OffreVol.findByIdAndUpdate( id,
  { $set: data },  
  { new: true });

      console.log('✓ OffreVol modifié:', id);
      return updated;
    } catch (error) {
      console.error(' Erreur modification OffreVol:', error.message);
      throw error;
    }
  }

  async delete(id) {
    try {
      
      await OffreVol.findByIdAndDelete(id);
      console.log('✓ OffreVol supprimé:', id);
    } catch (error) {
      console.error(' Erreur suppression OffreVol:', error.message);
      throw error;
    }
  }

  async findAll() {
    return await OffreVol.find({});
  }


  async findById(id) {
    return await OffreVol.findById(id);
  }
}


module.exports = new OffreVolRepository();
