package com.example.demo.Services.implementation.chainLogique;


import com.example.demo.Services.PaypalService.executePypalPaiement;
import com.example.demo.Services.PdfService.generateReservationPdf;
import com.example.demo.Services.implementation.CheckExpirationReservation;
import com.example.demo.Services.implementation.ConfirmationNotification;
import com.example.demo.Services.implementation.CreateReservation;
import com.example.demo.Services.implementation.ReservationValidator;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

@Service
public class Step2Reservation {
    @Autowired
    private executePypalPaiement payPalService;

    @Autowired
    private ReservationValidator reservationValidator;
    @Autowired
    private CheckExpirationReservation checkExpirationReservation ;

    @Autowired
    private generateReservationPdf generateReservationPdf ;

    @Autowired
    private ConfirmationNotification confirmationNotification ;


    public  byte[] Reservation( String paiementId) throws Exception {
             checkExpirationReservation.setNext(
                payPalService
                );
              payPalService.setNext(
                reservationValidator
                );
             reservationValidator.setNext(
                  generateReservationPdf);

             generateReservationPdf.setNext(
                     confirmationNotification
             );


      return checkExpirationReservation.handle(paiementId);
    }


}
