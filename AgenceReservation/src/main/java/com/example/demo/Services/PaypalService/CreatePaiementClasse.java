package com.example.demo.Services.PaypalService;


import com.example.demo.Dto.ReservationOffre;
import com.example.demo.Model.Offre;
import com.example.demo.Repo.OffreRepo;
import com.example.demo.Repo.TemporaryPayementRepo;
import com.example.demo.exception.EntityNotFoundException;
import com.example.demo.exception.ErrorCode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CreatePaiementClasse {

    @Autowired
    private TemporaryPayementRepo temporaryPayementRepo ;
    @Autowired
    private OffreRepo offreRepo ;

    public int createPaiementTemporaire(List<ReservationOffre> reservationOffres){
        int total  = 0 ;

        for(ReservationOffre offreReservation : reservationOffres){
            Offre offre = offreRepo.findById(offreReservation.getId())
                    .orElseThrow(() -> new EntityNotFoundException(
                            "On ne trouve pas l'offre avec id=" + offreReservation.getId(),
                            ErrorCode.OFFER_NOT_FOUND));
            total += offreReservation.calculerPrix(offre);
            offreReservation.setPrix(offre.getPrix());
        }
        return  total ;
    }


}
