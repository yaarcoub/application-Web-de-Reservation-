package com.example.demo.Services.JobService;

import com.example.demo.Dto.UpdateReservationMessage;
import com.example.demo.Model.LigneReservation;
import com.example.demo.Model.Offre;
import com.example.demo.Repo.LigneReservationRepo;
import com.example.demo.Repo.ReservationRepo;
import com.example.demo.Services.implementation.OffreHandlerFactory;
import com.example.demo.Services.implementation.UpdateReservationMQ;
import com.example.demo.Utils.StatusReservation;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import java.time.Instant;
import java.util.List;

@Service
public class HoldExpirationJob {

    @Autowired
    private LigneReservationRepo ligneReservation;
    @Autowired
    private OffreHandlerFactory offreHandlerFactory ;
    @Autowired
    private ReservationRepo reservationRepo;
    @Autowired
    private UpdateReservationMQ updateReservationMQ ;


    @Scheduled(fixedDelay = 60000)
    public void releaseExpiredHolds() throws JsonProcessingException {

        Instant expirationLimit =
                Instant.now().minusSeconds(2 * 60);

        List<LigneReservation> expired =
                ligneReservation.findByStatusAndCreationDateBefore(
                        StatusReservation.HOLD, expirationLimit
                );


        for (LigneReservation lr : expired) {
            lr.setStatus(StatusReservation.EXPIRED);
            ligneReservation.save(lr);

            Offre offre = lr.getOffre();
            offreHandlerFactory.getHandler(offre.getTypeOffre()).updateAfterReservation(offre.getId());

            UpdateReservationMessage updateReservationMessage = new UpdateReservationMessage();
            updateReservationMessage.setIdLigneReservation(lr.getId());
            updateReservationMessage.setIdReservation(lr.getReservation().getId());
            updateReservationMessage.setStatusReservation(StatusReservation.EXPIRED);
            updateReservationMQ.updateReservation(updateReservationMessage);
        }
    }
}
