package com.example.demo.Services.implementation;

import com.example.demo.Dto.PaiementDto;
import com.example.demo.Dto.UtilisateurDto;
import com.example.demo.Model.Paiement;
import com.example.demo.Model.Reservation;
import com.example.demo.Model.TemporaryPayment;
import com.example.demo.Model.Utilisateur;
import com.example.demo.Repo.PaiementRepo;
import com.example.demo.Repo.TemporaryPayementRepo;
import com.example.demo.Repo.UtilisateurRepo;
import com.example.demo.Services.PaiementService;
import com.example.demo.Utils.StatusPaiement;
import com.example.demo.Utils.StatusReservation;
import com.example.demo.exception.EntityNotFoundException;
import com.example.demo.exception.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
@Service
public class PaiementServiceImp  implements PaiementService {



     @Autowired
     private PaiementRepo paiementRepo ;

     @Autowired
     private UtilisateurRepo utilisateurRepo ;


     @Autowired
     private TemporaryPayementRepo temporaryPayementRepo ;

    @Override
    public PaiementDto Save(String PaiementID , Reservation reservation , Utilisateur client) {
        Paiement paiement = new Paiement() ;
        paiement.setPaiementId(PaiementID);
        paiement.setReservation(reservation);
        paiement.setMontant(reservation.getMontantTotal());
        paiement.setClient(client);
        paiement.setStatus(StatusPaiement.PENDING);
        Paiement saved = paiementRepo.save(paiement) ;
        return PaiementDto.fromEntity(saved);


    }


    public  void  confirmPaiement(String paiementId){

        Paiement paiement = paiementRepo.findByPaiementId(paiementId);
        paiement.setStatus(StatusPaiement.COMPLETED);
        paiementRepo.save(paiement);

    }
    public TemporaryPayment getTemporaryPayment(String PaiementID){

        return  temporaryPayementRepo.findByPaiementID(PaiementID);
    }

    public  void deleteTemporaryPayment(String PaiementID){
        temporaryPayementRepo.deleteByPaiementID(PaiementID);
    }





    @Override
    public List<PaiementDto> getAllClientPaiement(UtilisateurDto utilisateurDto) {

        Optional<Utilisateur> utilisateur = utilisateurRepo.findById(utilisateurDto.getId());
        if(utilisateur == null){
            throw  new EntityNotFoundException("Not Found User", ErrorCode.USER_NOT_FOUND);
        }
        List<Paiement> paiements = paiementRepo.findByClient(UtilisateurDto.toEntity(utilisateurDto));
        List<PaiementDto> paiementDtos = new ArrayList<>();
        for(Paiement paiement : paiements){
            paiementDtos.add(PaiementDto.fromEntity(paiement)) ;
        }

        return paiementDtos ;
    }


}
