package com.example.demo.Services.implementation;

import com.example.demo.Model.LigneReservation;
import com.example.demo.Model.Reservation;
import com.example.demo.Repo.PaiementRepo;
import com.example.demo.Services.implementation.chainLogique.Handler;
import com.example.demo.Utils.StatusReservation;
import com.example.demo.exception.ErrorCode;
import com.example.demo.exception.InvalidOperationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CheckExpirationReservation extends Handler {

@Autowired
private PaiementRepo paiementRepo  ;
    @Override
    public byte[] handle(String PaiementId) throws Exception {
       Reservation reservation = paiementRepo.findByPaiementId(PaiementId).getReservation();
        List<LigneReservation> ligneReservation =  reservation.getLigneReservation();
       for (LigneReservation ligneReservation1 : ligneReservation ){
           if( ligneReservation1.getStatus()== StatusReservation.EXPIRED){
               throw new InvalidOperationException("EXPIRED RESERVATION", ErrorCode.INVALID_OPERATION);
           }
       }
        return next.handle(PaiementId);
    }
}
