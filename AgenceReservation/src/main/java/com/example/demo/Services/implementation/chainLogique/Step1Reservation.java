package com.example.demo.Services.implementation.chainLogique;

import com.example.demo.Dto.ReservationOffre;
import com.example.demo.Dto.context;
import com.example.demo.Services.PaypalService.CreatePaypalPaiement;
import com.example.demo.Services.implementation.CreateReservation;
import com.example.demo.Services.implementation.ReservationCreatedNotifier;
import com.example.demo.Services.implementation.SendReservationMQ;
import com.example.demo.exception.InvalidOperationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class Step1Reservation {

    @Autowired
    private CreatePaypalPaiement createPaypalPaiement ;

    @Autowired
    private CreateReservation createReservation ;

    @Autowired
    private SendReservationMQ reservationMQ ;

    @Autowired
    private ReservationCreatedNotifier reservationCreatedNotifier;




    public  String Step1(List<ReservationOffre> reservationOffres) throws Exception {
        context ctx = new context() ;
        System.out.println(" ##### "+reservationOffres.get(0).getId()+" ##### ");
      try {
          ctx.setReservationOffre(reservationOffres);
          createPaypalPaiement.setNext(createReservation);
          createReservation.setNext(reservationCreatedNotifier);
          reservationCreatedNotifier.setNext(reservationMQ);



      }catch (Exception e){
          throw new InvalidOperationException("problem test");
      }
       return createPaypalPaiement.handle(ctx);
    }

}
