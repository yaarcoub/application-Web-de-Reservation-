package com.example.demo.Services.implementation;

import com.example.demo.Dto.OffreVolDto;
import com.example.demo.Model.Offre;
import com.example.demo.Model.OffreVol;
import com.example.demo.Repo.ImageOffreRepo;
import com.example.demo.Repo.OfferVolRepo;
import com.example.demo.Services.ActiveMQ.DomainEvent;
import com.example.demo.Services.ActiveMQ.EntityType;
import com.example.demo.Services.ActiveMQ.EventProducer;
import com.example.demo.Services.ActiveMQ.EventType;
import com.example.demo.Services.OffreServices;
import com.example.demo.Utils.TypeOffre;
import com.example.demo.Validator.OffreVolValidator;
import com.example.demo.exception.EntityNotFoundException;
import com.example.demo.exception.ErrorCode;
import com.example.demo.exception.InvalidEntityException;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class OffreVolServicesImpl implements OffreServices<OffreVolDto> {

    @Autowired
    private OfferVolRepo offreVolRepo ;
    @Autowired
    private EventProducer eventProducer ;
    @Autowired
    private ImageOffreRepo imageOffreRepo;



    @Override
    public OffreVolDto save(OffreVolDto offreVolDto) throws JsonProcessingException {
        List<String> errors  = OffreVolValidator.validate(offreVolDto);
        if(errors.size() > 0){
            throw  new InvalidEntityException("Note Valid Offer",ErrorCode.OFFER_NOT_VALID,errors);
        }

        offreVolDto.setTypeOffre(TypeOffre.VOL);
        OffreVol offreVol = offreVolRepo.save(OffreVolDto.toEntity(offreVolDto));
        OffreVolDto offreVolDto1 =OffreVolDto.fromEntity(offreVol);
        DomainEvent<OffreVolDto> dtoDomainEvent = new DomainEvent<>(EventType.OFFRE_ADDED,EntityType.OFFRE_VOL,offreVolDto1);
        eventProducer.publish(dtoDomainEvent);
        return  offreVolDto1;
    }


    @Override
    public OffreVolDto updateOffre(OffreVolDto dto) throws JsonProcessingException {

        OffreVol offre = offreVolRepo.findById(dto.getId())
                .orElseThrow(() -> new EntityNotFoundException(
                        "Offre vol introuvable", ErrorCode.OFFER_NOT_FOUND));

        // Mise à jour partielle
        if (dto.getTitre() != null) offre.setTitre(dto.getTitre());
        if (dto.getDescription() != null) offre.setDescription(dto.getDescription());
        if (dto.getPromotion() > 0) offre.setPromotion(dto.getPromotion());
        if (dto.getPrix() > 0) offre.setPrix(dto.getPrix());

        if (dto.getCompagnie() != null) offre.setCompagnie(dto.getCompagnie());
        if (dto.getADD() != null) offre.setADD(dto.getADD());
        if (dto.getADA() != null) offre.setADA(dto.getADA());
        if (dto.getDDD() != null) offre.setDDD(dto.getDDD());
        if (dto.getDDA() != null) offre.setDDA(dto.getDDA());
        if (dto.getDDS() != null) offre.setDDS(dto.getDDS());
        if (dto.getNumeroVol() != null) offre.setNumeroVol(dto.getNumeroVol());
        if (dto.getTypeAvion() != null) offre.setTypeAvion(dto.getTypeAvion());
        if (dto.getDureeVol() > 0) offre.setDureeVol(dto.getDureeVol());
        if (dto.getClasse() != null) offre.setClasse(dto.getClasse());
        if (dto.getNombrePlacesDisponibles() > 0)
            offre.setNombrePlacesDisponibles(dto.getNombrePlacesDisponibles());
        if (dto.getPaysDepart() != null) offre.setPaysDepart(dto.getPaysDepart());
        if (dto.getPaysArrivee() != null) offre.setPaysArrivee(dto.getPaysArrivee());

         OffreVolDto offreVolDto =  OffreVolDto.fromEntity(offreVolRepo.save(offre)) ;

        DomainEvent<OffreVolDto> dtoDomainEvent = new DomainEvent<>(EventType.OFFRE_UPDATED,EntityType.OFFRE_VOL,dto);
        eventProducer.publish(dtoDomainEvent);

        return offreVolDto;
    }


    @Override
    @Transactional
    public void DeleteOffre(Integer idOffreVol) throws JsonProcessingException {
        Optional<OffreVol> offreVol = offreVolRepo.findById(idOffreVol);

        if(offreVol == null){
            throw new EntityNotFoundException("Impossible a supprimer un Offre qui ne existe pas",ErrorCode.OFFER_NOT_FOUND );
        }
        imageOffreRepo.deleteByOffre_Id(idOffreVol);

        DomainEvent<Integer> dtoDomainEvent = new DomainEvent<>(EventType.OFFRE_DELETED,EntityType.OFFRE_VOL,idOffreVol);
        eventProducer.publish(dtoDomainEvent);


    }

    @Override
    public TypeOffre getSupportType() {
        return TypeOffre.VOL;
    }

    @Override
    public void updateAfterReservation(int id) {
       OffreVol offreVol =  offreVolRepo.findById(id).orElseThrow();
       offreVol.setNombrePlacesDisponibles(offreVol.getNombrePlacesDisponibles()+1);
       offreVolRepo.save(offreVol);
    }



    /*
        return  offreVolDtos ;
    }

    @Override
    public List<OffreVolDto> getOffreVolParAreport(String AreportD, String AreportA) {
        List<OffreVol> offreVols = offreVolRepo.findByADDAndADA(AreportD , AreportA);
        if (offreVols.size()<1 || offreVols == null){
            throw new EntityNotFoundException("ne exist pas un offre avec Areport de départ "+AreportA+" et Areport d'arrive "+AreportD
                    ,ErrorCode.OFFER_NOT_VALID );
        }

        List<OffreVolDto> offreVolDtos = new ArrayList<>();
        for(OffreVol offreVol : offreVols){
            offreVolDtos.add((OffreVolDto) OffreVolDto.fromEntity(offreVol));
        }

        return  offreVolDtos ;

    }*/
}
