const OffreVolRepository = require('../../repositories/OffreVolRepository');
const OffreHotelRepository = require('../../repositories/OffreHotelRepository');

const EventType = require('../../Model/EventType');

class ImageEventService {
  async handle(type, data) {
         const {  typeOffre } = data ;
         console.log('Handling image event for typeOffre:', typeOffre);

    switch (type) {
      case EventType.IMAGE_ADDED:

     if(typeOffre === 'VOL') {

         await this.onImageVolAdded(data);

     }else if(typeOffre === 'HOTEL') {
        await this.onImageHotelAdded(data);
     }
     // A faire
        break;
      case EventType.IMAGE_UPDATED:
        
if(typeOffre === 'VOL') {

         await this.onOffreVolUpdated(data);

     }else if(typeOffre === 'HOTEL') {
        await this.onOffreHotelUpdated(data);
     }

        break;
      case EventType.IMAGE_DELETED:
        if(typeOffre === 'VOL') {   
            await this.onImageVolDeleted(data);

        }else if(typeOffre === 'HOTEL') {
         await this.onImageHotelDeleted(data);
            // Logic for HOTEL image deletion can be added here
        }        
    
                

        break;
      default:
        throw new Error(`Type d'événement inconnu: ${type}`);
    }
  }

  async onImageVolAdded(data) {

    const { id , idOffre, url} = data ;
      await OffreVolRepository.pushToArray(
      idOffre,
      "urlImages",
      { _id: id, url: url }
    );


  }

  async onOffreVolUpdated(data) {
    return await OffreVolRepository.update(data._id || data.id, data);
  }
  
  async onImageVolDeleted(data) {
    return await OffreVolRepository.pullFromArray(
      data.idOffre,
      "urlImages",
      { _id: data.id }   
    );
  }
async onImageHotelAdded(data) {

    const { id , idOffre, url} = data ;
      await OffreHotelRepository.pushToArray(
      idOffre,
      "urlImages",
      { _id: id, url: url }
    );


  }

  async onOffreHotelUpdated(data) {
    return await OffreHotelRepository.update(data._id || data.id, data);
  }

  async onImageHotelDeleted(data) {
    return await OffreHotelRepository.pullFromArray(
      data.idOffre,
      "urlImages",
      { _id: data.id }   
    );
  }
}





   


module.exports = new ImageEventService();