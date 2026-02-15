package com.example.demo.Services.PdfService;

import com.example.demo.Dto.ReservationOffre;
import com.example.demo.Dto.context;
import com.example.demo.Model.LigneReservation;
import com.example.demo.Model.Offre;
import com.example.demo.Model.Paiement;
import com.example.demo.Model.Reservation;
import com.example.demo.Repo.LigneReservationRepo;
import com.example.demo.Repo.PaiementRepo;
import com.example.demo.Services.LigneReservationService;
import com.example.demo.Services.implementation.LigneReservationHandlerFactory;
import com.example.demo.Services.implementation.chainLogique.Handler;
import com.example.demo.exception.ErrorCode;
import com.example.demo.exception.InvalidOperationException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
@Service
public class generateReservationPdf extends Handler {

    @Autowired
    private LigneReservationRepo ligneReservationRepo ;

   @Autowired
   private PaiementRepo paiementRepo ;

    @Autowired
    private LigneReservationHandlerFactory reservationHandlerFactory ;

    @Transactional
    public byte[] generatePdfReservation(String paiementID) throws Exception {
        Reservation reservation = paiementRepo.findByPaiementId(paiementID).getReservation();
        List<LigneReservation> ligneReservations = ligneReservationRepo.findByReservation(reservation);

        List<byte[]> pagesReservation  = new ArrayList<>();

        for (LigneReservation ligneReservation : ligneReservations){

            LigneReservationService handler = reservationHandlerFactory.getHandler(
                  ligneReservation.getOffre().getTypeOffre()

            );
            pagesReservation.add( handler.pdfLigneReservation(ligneReservation));


          /*
            ReservationMongo reservationMongo = new ReservationMongo();
            UserMongo  userMongo  = new UserMongo();
            userMongo.setAge(user.getAge());
            userMongo.setGenre(user.getGenre());
            userMongo.setPays(user.getPays());
            reservationMongo.setId(ligneReservation.getId());
            reservationMongo.setTotalePaix(ligneReservation.getPrixUnitaire());
            reservationMongo.setTypeOffre(offre.getTypeOffre());
            reservationMongo.setUserMongo(userMongo);

            DomainEvent<ReservationMongo> dtoDomainEvent = new DomainEvent<>(EventType.RESERVATION_ADDED, EntityType.RESERVATION,reservationMongo);
            eventProducer.publish(dtoDomainEvent);*/
        }


        byte[] pdf = PdfMergeUtil.merge(pagesReservation);
        return  pdf ;
    }



    @Override
    public byte[] handle(String PaiementId) throws Exception {
        byte[] pdf = generatePdfReservation(PaiementId);

           if (pdf==null)throw new InvalidOperationException("problem de pdf", ErrorCode.INVALID_OPERATION);
           next.setPdf(pdf);

        return next.handle(PaiementId) ;
    }
}
