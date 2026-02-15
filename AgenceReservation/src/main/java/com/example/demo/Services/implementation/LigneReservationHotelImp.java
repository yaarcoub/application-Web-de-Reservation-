package com.example.demo.Services.implementation;

import com.example.demo.Dto.*;
import com.example.demo.Model.*;
import com.example.demo.Repo.OffreHotelRepo;
import com.example.demo.Repo.ReservationHotelRepo;
import com.example.demo.Services.ActiveMQ.EventProducer;
import com.example.demo.Services.LigneReservationService;
import com.example.demo.Services.PdfService.PdfService;
import com.example.demo.Utils.QrUtil;
import com.example.demo.Utils.StatusReservation;
import com.example.demo.Utils.TypeOffre;
import com.example.demo.exception.ErrorCode;
import com.example.demo.exception.InvalidOperationException;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.ZoneId;
import java.time.ZoneOffset;
import java.util.*;

import static com.example.demo.Utils.UrlApp.*;

@Service
public class LigneReservationHotelImp implements LigneReservationService<ReservationOffreHotel> {


    @Autowired
    private OffreHotelRepo offreHotelRepo ;

    @Autowired
    private ReservationHotelRepo ligneReservationHotel;


    @Autowired
    private EventProducer eventProducer;


    @Autowired
    private PdfService pdfService ;

    @Value("${app.base-url}")
    private String baseUrl;


    @Override
    public List<LigneReservationDto> getAllReservationDetails(ReservationDto reservationDto) {
        return null;
    }

    @Override
    public  void save(Reservation reservation,context ctx , ReservationOffreHotel reservationOffre) throws Exception {
        Optional<OffreHotel> offre =offreHotelRepo.findById(reservationOffre.getId());

        if(!offre.get().isDisponible()){
            throw new InvalidOperationException("l'Offre demander n'est pas disponible ",ErrorCode.INVALID_OPERATION);
        }



        String code = "RES-"+ UUID.randomUUID().toString();
        ReservationHotel ligneReservation = new ReservationHotel();
        ligneReservation.setReservation(reservation);
        ligneReservation.setOffre(offre.get());
        ligneReservation.setStatus(StatusReservation.HOLD);
        ligneReservation.setCodeReservation(code);
        ligneReservation.setPrixReel(offre.get().getPrix()*reservationOffre.getNombreNuits());
        ligneReservation.setNb_Nuit(reservationOffre.getNombreNuits());
        ligneReservation.setNombrePersonnes(reservationOffre.getNombrePersonnes());
        ligneReservation.setCIN(reservationOffre.getClient().getCinOrPassport());
        ligneReservation.setNom(reservationOffre.getClient().getNom());
        ligneReservation.setAge(reservationOffre.getClient().getAge());
        ligneReservation.setDateArrivée(reservationOffre.getDateArrivee());
        ligneReservation.setGenre(reservationOffre.getClient().getGenre());
        ligneReservation.setPays(reservationOffre.getClient().getPays());
        ligneReservation.setPrénom(reservationOffre.getClient().getPrenom());

        ligneReservationHotel.save(ligneReservation);
        LigneReservationStep1 ligneReservationStep1 =LigneReservationStep1.fromEntity(ligneReservation);
        ligneReservationStep1.getClient().setCinOrPassport(ligneReservation.getCIN())                  ;
        ctx.getReservationSendStep1().getReservationSendStep1List().add(
                ligneReservationStep1
        );

        String url = VERIFY_VALIDE_TOKEN_RESERVATION + "?token="+code ;
        offre.get().setNombreChambres(offre.get().getNombreChambres()-1);
        offreHotelRepo.save(offre.get());



    }

    @Override
    public byte[] pdfLigneReservation( LigneReservation ligneReservation) throws Exception {

        OffreHotel offre = (OffreHotel) ligneReservation.getOffre();
        ReservationHotel reservationHotel = (ReservationHotel) ligneReservation ;

       List<byte[]> pdfHotel = new ArrayList<>();

           String url = baseUrl + VERIFY_VALIDE_TOKEN_RESERVATION + "?token="+ligneReservation.getCodeReservation() ;
           String dataUri = QrUtil.dataUri(url, 300);
           Map<String, Object> model = new HashMap<>();
           //Template pour offre de type vol
           model.put("nomHotel", offre.getNomHotel());
           model.put("reservationId", ligneReservation.getId());
           model.put("dateArrivée",reservationHotel.getDateArrivée());
           model.put("nombreEtoiles",offre.getNombreEtoiles());
           model.put("telephone", offre.getTelephone());
           model.put("email", offre.getEmail());
           model.put("clientName", reservationHotel.getNom());
           model.put("pays", offre.getPays());
           model.put("adresse", offre.getAdresse());
           model.put("ville", offre.getVille());
           model.put("typeChambre",offre.getTypeChambre());
           model.put("petitDejeunerInclus",offre.isPetitDejeunerInclus());
           model.put("wifiInclus",offre.isWifiInclus());
           model.put("parkingDisponible",offre.isParkingDisponible());
           model.put("nombreNuit",reservationHotel.getNb_Nuit());
           model.put("piscine",offre.isPiscine());
           model.put("serviceChambre",offre.isServiceChambre());
           model.put("price",offre.getPrix());
           model.put("qrDataUri", dataUri);
           pdfService.generatePdfForLine(model,"ticketHotel");


        return pdfService.generatePdfForLine(model , "ticketHotel.html");
    }

    @Override
    public TypeOffre getSupportedType() {
        return TypeOffre.HOTEL ;
    }

    @Override
    public  void  confirmLigneReservation(LigneReservation reservation) throws JsonProcessingException {
        /*ReservationMongo reservationMongo = new ReservationMongo();
        UserMongo  userMongo  = new UserMongo();
        userMongo.setAge(client.getAge());
        userMongo.setGenre(client.getGenre());
        userMongo.setPays(client.getPays());
        reservationMongo.setIdReservation(ligneReservation.getId());
        reservationMongo.setTotalePaix(ligneReservation.getPrixPromotion());
        OffreHotelMongo hotelMongo = new OffreHotelMongo() ;
        reservationMongo.setOffreMongo(hotelMongo);
        reservationMongo.setUserMongo(userMongo);
        DomainEvent<ReservationMongo> dtoDomainEvent = new DomainEvent<>(EventType.RESERVATION_ADDED, EntityType.RESERVATION,reservationMongo);
        eventProducer.publish(dtoDomainEvent); */
    }

    @Override
    public void DeleteLigneReservation(LigneReservationDto ligneReservationDto) {

    }
}
