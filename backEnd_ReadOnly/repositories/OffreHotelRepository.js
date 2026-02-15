const OffreHotel = require("../Model/OffreHotel");

class OffreHotelRepository {
  async create(data) {
    try {
      const { id, ...restData } = data;
      const newOffreHotel = new OffreHotel({ _id: id , ...restData });
      const saved = await newOffreHotel.save();
      console.log('✓ OffreHotel ajouté ou Modifier:', id);
      console.log('💾 Sauvegardé dans DB:', saved);
      return newOffreHotel;
    } catch (error) {
      console.error(' Erreur ajout OffreVol:', error.message);
      throw error;
    }
  }
  
  async pushToArray(id, field, element) {
  try {
    const updated = await OffreHotel.findByIdAndUpdate(
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

      const updated = await OffreHotel.findByIdAndUpdate( id,
  { $set: data },  
  { new: true });

      console.log('✓ OffreHotel modifié:', id);
      return updated;
    } catch (error) {
      console.error(' Erreur modification OffreHotel:', error.message);
      throw error;
    }
  }

  async delete(id) {
    try {
      
      await OffreHotel.findByIdAndDelete(id);
      console.log('✓ OffreHotel supprimé:', id);
    } catch (error) {
      console.error(' Erreur suppression OffreHotel:', error.message);
      throw error;
    }
  }

  async findAll() {
  let offres = await OffreHotel.find({});
  offres = offres.map(offre => ({
    id: offre._id, 
    image: offre.urlImages[0].url ,
    title: offre.nomHotel,
    description: offre.description,
    price: `${offre.prix}`,
    originalPrice: offre.prix,
    ville: offre.ville,
    pays: offre.pays,
    nombreEtoiles: offre.nombreEtoiles,
  
  }));
     console.log('✓ Toutes les offres Hôtel récupérées', offres);
    return offres;

  }


  async findById(id) {
    return await OffreHotel.findById(id);
  }
}


module.exports = new OffreHotelRepository();
