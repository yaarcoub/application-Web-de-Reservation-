package com.example.demo.Services.implementation;

import com.example.demo.Dto.UpdateReservationMessage;
import com.example.demo.Model.LigneReservation;
import com.example.demo.Model.Reservation;
import com.example.demo.Repo.LigneReservationRepo;
import com.example.demo.Repo.PaiementRepo;
import com.example.demo.Services.implementation.chainLogique.Handler;
import com.example.demo.Utils.StatusReservation;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class ReservationValidator extends Handler {
    @Autowired
    private PaiementRepo paiementRepo ;
    @Autowired
    private LigneReservationRepo ligneReservationRepo ;
    @Autowired
    private LigneReservationHandlerFactory reservationHandlerFactory;
    @Autowired
    private UpdateReservationMQ updateReservationMQ ;

    public void ConfirmReservation(String paiementId) throws JsonProcessingException {

        Reservation reservation = paiementRepo.findByPaiementId(paiementId).getReservation();
        List<LigneReservation> ligneReservations = ligneReservationRepo.findByReservation(reservation);

        for (LigneReservation ligneReservation : ligneReservations) {
          ligneReservation.setStatus(StatusReservation.CONFIRME);
          ligneReservationRepo.save(ligneReservation);

            UpdateReservationMessage updateReservationMessage = new UpdateReservationMessage();
            updateReservationMessage.setIdLigneReservation(ligneReservation.getId());
            updateReservationMessage.setIdReservation(reservation.getId());
            updateReservationMessage.setStatusReservation(StatusReservation.CONFIRME);
            updateReservationMQ.updateReservation(updateReservationMessage);
        }


    }


    @Override
    public byte[] handle(String paiementId) throws Exception {
        ConfirmReservation(paiementId);
        return next.handle(paiementId);
    }
}
