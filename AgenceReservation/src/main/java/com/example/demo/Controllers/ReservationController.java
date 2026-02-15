package com.example.demo.Controllers;

import com.example.demo.Controllers.Api.ReservationApi;
import com.example.demo.Dto.*;
import com.example.demo.Model.LigneReservation;
import com.example.demo.Services.PaypalService.executePypalPaiement;
import com.example.demo.Services.implementation.PaiementServiceImp;
import com.example.demo.Services.implementation.ValidationReservation;
import com.example.demo.Services.implementation.chainLogique.Step1Reservation;
import com.example.demo.Services.implementation.chainLogique.Step2Reservation;
import com.example.demo.Utils.StatusReservation;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.io.ByteArrayInputStream;
import java.util.List;

@RestController
public class ReservationController implements ReservationApi {


    @Autowired
    private PaiementServiceImp paiementServiceImp ;

    @Autowired
    private Step2Reservation gestionReservation ;

   @Autowired
   private Step1Reservation createReservation ;

   @Autowired
    private ValidationReservation validationReservation;




  /*  public ResponseEntity<?> createPayment( @RequestBody List<OffreDto> offreDtoList) throws Exception {

        String approvalLink = payPalService.createPayment(offreDtoList);

        return ResponseEntity.ok(approvalLink);
    }
  */


    @Override
    public ResponseEntity<?> createPayment(List<ReservationOffre> reservationOffres) throws Exception {

        String approvalLink = createReservation.Step1(reservationOffres);
        return ResponseEntity.ok(approvalLink);
    }

    public ResponseEntity<?> success(@RequestParam("token") String orderId) throws Exception {


/*
        TemporaryPayment temporaryPayment = paiementServiceImp.getTemporaryPayment(orderId);
        ObjectMapper mapper = new ObjectMapper();
        mapper.configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
        List<ReservationOffre> offres = mapper.readValue(temporaryPayment.getOffreListJson(), new TypeReference<List<ReservationOffre>>() {});
*/

       /*  context ctx = new context();
         ctx.setGetOffreReserver(offres);
         ctx.setPrixTotal(temporaryPayment.getPrixTotal());
         ctx.setClient(temporaryPayment.getUtilisateur());

        System.out.println(temporaryPayment.getOffreListJson());*/

          byte[] pdf = gestionReservation.Reservation(orderId);



         /*
        ReservationResult reservationResult = reservationImp.save(offres,
                 temporaryPayment.getPrixTotal(),temporaryPayment.getUtilisateur());

         JsonNode capture = payPalService.capturePayment(orderId);

        if (capture.get("status").asText().equals("COMPLETED")) {
            paiementServiceImp.Save(temporaryPayment.getPaiementID(), ReservationDto.fromEntity(reservationResult.getReservation()));
            reservationImp.setCONFIRMEReservation(reservationResult.getReservation());


        }
        paiementServiceImp.deleteTemporaryPayment(temporaryPayment.getPaiementID());
        throw new InvalidOperationException("No valide Paiement ", ErrorCode.NOT_VALID_PAIEMENT); */

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=ticket-" + 1 + ".pdf")
                .contentType(MediaType.APPLICATION_PDF)
                .body(new InputStreamResource(new ByteArrayInputStream(pdf))) ;

    }

    @Override
    public ResponseEntity<?> cancel(String orderId) {
        return null;
    }


}
