package com.example.demo.Services.implementation;

import com.example.demo.Dto.*;
import com.example.demo.Model.Offre;
import com.example.demo.Model.Reservation;
import com.example.demo.Model.Utilisateur;
import com.example.demo.Repo.OffreRepo;
import com.example.demo.Repo.ReservationRepo;
import com.example.demo.Repo.UtilisateurRepo;
import com.example.demo.Services.LigneReservationService;
import com.example.demo.Services.ReservationService;
import com.example.demo.Services.implementation.chainLogique.HandlerPart1;
import com.example.demo.Utils.StatusReservation;
import com.example.demo.exception.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class CreateReservation extends HandlerPart1 implements ReservationService {

    @Autowired
    private LigneReservationHandlerFactory reservationHandlerFactory ;

    @Autowired
    private ReservationRepo reservationRepo ;
    @Autowired
    private OffreRepo offreRepo ;
    @Autowired
    private PaiementServiceImp paiementServiceImp ;

    @Autowired
    private UtilisateurRepo utilisateurRepo ;



    @Override
    @Transactional
    public void save(context ctx) throws Exception {
        System.out.println("############################ hello1");

        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String email = authentication.getName();
        Utilisateur client = utilisateurRepo.findUtilisateurByEmail(email);
        ctx.setClient(client);

        Reservation reservation = new Reservation();
        reservation.setClient(client);
        reservation.setMontantTotal(ctx.getPrixTotal());
        reservation = reservationRepo.save(reservation);
        paiementServiceImp.Save(ctx.getPaiementId(),reservation,client);


        ReservationSendStep1 reservationSendStep1 = new ReservationSendStep1();

        reservationSendStep1.setIdReservation(reservation.getId());
        reservationSendStep1.setPrix(ctx.getPrixTotal());
        reservationSendStep1.setUserApp(UserApp.fromEntity(client));

         ctx.setReservationSendStep1(reservationSendStep1);
        System.out.println("############################ hello2");




        for (ReservationOffre offre : ctx.getReservationOffre()) {
            Offre offre1= offreRepo.findById(offre.getId()).orElseThrow(()->{
                throw new EntityNotFoundException("offre avec id "+offre.getId()+" ne exist pas ");
            });

            LigneReservationService handler = reservationHandlerFactory.getHandler(
                    offre1.getTypeOffre()
            );
            handler.save(reservation,ctx,offre);
        }

    }




/*
    @Override
    public byte[] handle(context ctx) throws Exception {
         Reservation reservation = save(ctx.getGetOffreReserver(),ctx.getPrixTotal(),ctx.getClient());
         ctx.setReservation(reservation);
         return  next.handle(ctx);
    }*/





/*
    public byte[] generatePdfReservation(Reservation reservation) throws Exception {
         List<byte[]> pagesReservation  = new ArrayList<>();
         List<LigneReservation> ligneReservations = ligneReservationRepo.findByReservation(reservation);

         for (LigneReservation ligneReservation : ligneReservations){
              Offre offre = ligneReservation.getOffre() ;
             LigneReservationService handler = reservationHandlerFactory.getHandler(
                    offre.getTypeOffre()
             );
             pagesReservation.add(handler.pdfLigneReservation(ligneReservation,offre,reservation));
         }
         byte[] pdf = PdfMergeUtil.merge(pagesReservation);
         return  pdf ;
    }

   */


    @Override
    public String handle(context ctx) throws Exception {
        save(ctx);
        return next.handle(ctx);
    }
}
