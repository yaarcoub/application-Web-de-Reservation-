package com.example.demo.Services.implementation;

import com.example.demo.Dto.OffreHotelDto;
import com.example.demo.Model.OffreHotel;
import com.example.demo.Repo.ImageOffreRepo;
import com.example.demo.Repo.OffreHotelRepo;
import com.example.demo.Services.ActiveMQ.DomainEvent;
import com.example.demo.Services.ActiveMQ.EntityType;
import com.example.demo.Services.ActiveMQ.EventProducer;
import com.example.demo.Services.ActiveMQ.EventType;
import com.example.demo.Services.OffreServices;
import com.example.demo.Utils.TypeOffre;
import com.example.demo.Validator.OffreHotelValidator;
import com.example.demo.exception.EntityNotFoundException;
import com.example.demo.exception.ErrorCode;
import com.example.demo.exception.InvalidOperationException;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OffreHotelServicesImpl implements OffreServices<OffreHotelDto> {

    @Autowired
    private OffreHotelRepo offreHotelRepo ;
    @Autowired
    private EventProducer eventProducer ;
    @Autowired
    private ImageOffreRepo imageOffreRepo;


    @Override
    public OffreHotelDto save(OffreHotelDto offreHotelDto) throws JsonProcessingException {
        //validé le contenu de l'offre avant à ajouter dans la base
        List<String> errors  = OffreHotelValidator.validator(offreHotelDto);
        if(!errors.isEmpty()){
            throw  new InvalidOperationException("Note Valid Offer Hotel ",ErrorCode.OFFER_NOT_VALID,errors);
        }
        offreHotelDto.setTypeOffre(TypeOffre.HOTEL);
        System.out.println(" 1################# "+offreHotelDto.getNombreEtoiles());
        OffreHotel hotel = OffreHotelDto.toEntity(offreHotelDto);
        System.out.println(" 1.1#################  "+hotel.getNombreEtoiles());
        OffreHotel offreHotel = offreHotelRepo.save(hotel);
        System.out.println("2#################");

        OffreHotelDto offreHotelDto1 =OffreHotelDto.fromEntity(offreHotel) ;
           System.out.println("3#################");
        DomainEvent<OffreHotel> dtoDomainEvent = new DomainEvent(EventType.OFFRE_ADDED, EntityType.OFFRE_HOTEL,offreHotelDto1);
        eventProducer.publish(dtoDomainEvent);

        return  offreHotelDto1 ;
    }

    @Override
    public OffreHotelDto updateOffre(OffreHotelDto dto) throws JsonProcessingException {
        OffreHotel entity = offreHotelRepo.findById(dto.getId()).orElseThrow(
                () ->{ throw  new EntityNotFoundException("ce  offre ne existe pas  !!",ErrorCode.OFFER_NOT_FOUND) ;}
        ) ;


        if (dto.getNomHotel() != null) entity.setNomHotel(dto.getNomHotel());
        if (dto.getVille() != null) entity.setVille(dto.getVille());
        if (dto.getAdresse() != null) entity.setAdresse(dto.getAdresse());
        if (dto.getEmail() != null) entity.setEmail(dto.getEmail());
        if (dto.getTelephone() != null) entity.setTelephone(dto.getTelephone());
        if (dto.getPays() != null) entity.setPays(dto.getPays());

        // champs numériques → vérifier si != 0 (si 0 est une valeur invalide)
        if (dto.getNombreChambres() > 0) entity.setNombreChambres(dto.getNombreChambres());
        if (dto.getCapaciteChambre() > 0) entity.setCapaciteChambre(dto.getCapaciteChambre());
        if (dto.getNombreEtoiles() > 0) entity.setNombreEtoiles(dto.getNombreEtoiles());
        if (dto.getPrix() > 0) entity.setPrix(dto.getPrix());

        // champs boolean → attention
        entity.setDisponible(dto.isDisponible());
        entity.setPetitDejeunerInclus(dto.isPetitDejeunerInclus());
        entity.setWifiInclus(dto.isWifiInclus());
        entity.setParkingDisponible(dto.isParkingDisponible());
        entity.setPiscine(dto.isPiscine());
        entity.setServiceChambre(dto.isServiceChambre()) ;
        entity.setDDS(dto.getDDS());



        offreHotelRepo.save(entity);
        DomainEvent<OffreHotelDto> dtoDomainEvent = new DomainEvent<>(EventType.OFFRE_UPDATED,EntityType.OFFRE_HOTEL,dto);
        eventProducer.publish(dtoDomainEvent);

        return null;
    }

    @Override
    @Transactional
    public void DeleteOffre(Integer id) throws JsonProcessingException {
        Optional<OffreHotel> offreHotel = offreHotelRepo.findById(id);
        if(offreHotel.isEmpty()){
            throw new EntityNotFoundException("Impossible a supprimer un Offre qui ne existe pas",ErrorCode.OFFER_NOT_FOUND );
        }

        imageOffreRepo.deleteByOffre_Id(id);

        DomainEvent<Integer> dtoDomainEvent = new DomainEvent<>(EventType.OFFRE_DELETED,EntityType.OFFRE_HOTEL,id);
        eventProducer.publish(dtoDomainEvent);




    }

    @Override
    public TypeOffre getSupportType() {
        return TypeOffre.HOTEL;
    }

    @Override
    public void updateAfterReservation(int id) {
     OffreHotel offreHotel = offreHotelRepo.findById(id).orElseThrow();
     offreHotel.setNombreChambres(offreHotel.getNombreChambres()+1);
     offreHotelRepo.save(offreHotel);
    }


    /*

    @Override
    public List<OffreHotelDto> getAllOffreHotel(){

        List<OffreHotel> offreHotels = offreHotelRepo.findAll();
        List<OffreHotelDto> offreHotelDtos = new ArrayList<>();
        for(OffreHotel offreHotel : offreHotels){
            offreHotelDtos.add((OffreHotelDto) OffreHotelDto.fromEntity(offreHotel));
        }

        return  offreHotelDtos ;
    }

    @Override
    public List<OffreHotelDto> getOffreHotelParVille(String Ville){
        List<OffreHotel> offreHotels =  offreHotelRepo.findByville(Ville);
        if(offreHotels.size()<1 || offreHotels == null){
            throw new EntityNotFoundException("ne exist aucun offre dans cette ville"
                    ,ErrorCode.OFFER_NOT_VALID );
        }
        List<OffreHotelDto> offreHotelDtos = new ArrayList<>();
        for (OffreHotel offreHotel : offreHotels){
            offreHotelDtos.add(OffreHotelDto.fromEntity(offreHotel));
        }
        return offreHotelDtos;
    }


 */
}
