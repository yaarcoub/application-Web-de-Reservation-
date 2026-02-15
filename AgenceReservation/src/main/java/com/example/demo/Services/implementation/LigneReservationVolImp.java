package com.example.demo.Services.implementation;

import com.example.demo.Dto.*;
import com.example.demo.Model.*;
import com.example.demo.Repo.OfferVolRepo;
import com.example.demo.Repo.ReservationVolRepo;
import com.example.demo.Services.ActiveMQ.EventProducer;
import com.example.demo.Services.LigneReservationService;
import com.example.demo.Services.PdfService.PdfService;
import com.example.demo.Utils.QrUtil;
import com.example.demo.Utils.StatusReservation;
import com.example.demo.Utils.TypeOffre;
import com.example.demo.exception.ErrorCode;
import com.example.demo.exception.InvalidOperationException;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.*;

import static com.example.demo.Utils.UrlApp.*;

@Service
public class LigneReservationVolImp implements LigneReservationService<ReservationOffreVol> {

   @Autowired
   private OfferVolRepo offerVolRepo ;
   @Autowired
   private ReservationVolRepo reservationVolRepo;

    @Autowired
    private EventProducer eventProducer;

    @Value("${app.base-url}")
    private String baseUrl;



   @Autowired
   private PdfService pdfService ;
    @Override
    @Transactional
    public  void save(Reservation reservation , context ctx , ReservationOffreVol reservationOffre) throws Exception {

        Optional<OffreVol> offre = offerVolRepo.findById(reservationOffre.getId());

        System.out.println("passager "+ reservationOffre.getNb_passager()+" ");

        if (offre.get().getDDD().isBefore(LocalDateTime.now())) {
            throw new InvalidOperationException("Vous ne pouvez pas réserver cette offre : la date de départ est dépassée", ErrorCode.INVALID_OPERATION);
        }

        if (offre.get().getNombrePlacesDisponibles() == 0) {
            throw new InvalidOperationException("Il n’y a aucune place disponible", ErrorCode.INVALID_OPERATION);
        }

        if (offre.get().getDDS().isBefore(LocalDateTime.now())) {
            throw new InvalidOperationException("le délai de validation d'offre est terminé ", ErrorCode.INVALID_OPERATION);
        }

        for (int i = 0; i < reservationOffre.getNb_passager(); i++) {
            System.out.println("##########################");
            String code = "RES-" + UUID.randomUUID();
            ReservationVol ligneReservation = new ReservationVol();
            ligneReservation.setReservation(reservation);
            ligneReservation.setDateArrivee(offre.get().getDDA());
            ligneReservation.setDateDepart(offre.get().getDDD());
            ligneReservation.setStatus(StatusReservation.HOLD);
            ligneReservation.setOffre(offre.get());
            ligneReservation.setCodeReservation(code);
            ligneReservation.setPrixReel(offre.get().getPrix());
            ligneReservation.setPrixPromotion(offre.get().getPrix()*(100-offre.get().getPromotion())/100);
            ligneReservation.setAge(reservationOffre.getClients().get(i).getAge());
            System.out.println("Nom :"+reservationOffre.getClients().get(i).getNom());
            ligneReservation.setNom(reservationOffre.getClients().get(i).getNom());
            ligneReservation.setPrénom(reservationOffre.getClients().get(i).getPrenom());
            ligneReservation.setCodePassport(reservationOffre.getClients().get(i).getCinOrPassport());
            ligneReservation.setGenre(reservationOffre.getClients().get(i).getGenre());
            ligneReservation.setPays(reservationOffre.getClients().get(i).getPays());
            ligneReservation.setDateExpiration(offre.get().getDDA());
            reservationVolRepo.save(ligneReservation);

            LigneReservationStep1 ligneReservationStep1 =LigneReservationStep1.fromEntity(ligneReservation);
            ligneReservationStep1.getClient().setCinOrPassport(ligneReservation.getCodePassport());
            ctx.getReservationSendStep1().getReservationSendStep1List().add(
                    ligneReservationStep1
                    );
        }

        offre.get().setNombrePlacesDisponibles(offre.get().getNombrePlacesDisponibles()- reservationOffre.getNb_passager());
        offerVolRepo.save(offre.get()) ;
        Map<String, Object> model = new HashMap<>();
      //  String url = VERIFY_VALIDE_TOKEN_RESERVATION + "?token="+code ;
      //  String dataUri = QrUtil.dataUri(url, 300);
       /* //Template pour offre de type vol
        model.put("compagnie", offre.get().getCompagnie());
        model.put("reservationId", reservationDto.getId());
        model.put("lineId", ligneReservation.getId());
        model.put("classe",offre.get().getClasse());
        model.put("type", offre.get().getTypeAvion());
        model.put("date", ligneReservation.getCreationDate());
        model.put("clientName", reservationDto.getClient().getName());
        model.put("ADD", offre.get().getADD());
        model.put("ADA", offre.get().getADA());
        model.put("numeroVol", offre.get().getNumeroVol());
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
        model.put("DDD", offre.get().getDDD().format(formatter));
        model.put("DDA", offre.get().getDDA().format(formatter));
        model.put("prix",  String.format("%.2f MDH", offre.get().getPrix()*(100-offre.get().getPromotion())/100));
        model.put("qrDataUri", dataUri); */

    }

    @Override
    public byte[] pdfLigneReservation( LigneReservation ligneReservation) throws Exception {
        OffreVol offre = (OffreVol) ligneReservation.getOffre();
         ReservationVol reservationVol = reservationVolRepo.findById(ligneReservation.getId()).orElseThrow();

            String url = baseUrl+VERIFY_VALIDE_TOKEN_RESERVATION + "?token=" + reservationVol.getCodeReservation();
            String dataUri = QrUtil.dataUri(url, 300);
            Map<String, Object> model = new HashMap<>();
            //Template pour offre de type vol
            model.put("compagnie", offre.getCompagnie());
            model.put("classe", offre.getClasse());
            model.put("type", offre.getTypeAvion());
            model.put("clientName", reservationVol.getNom() + reservationVol.getPrénom());
            model.put("ADD", offre.getADD());
            model.put("ADA", offre.getADA());
            model.put("numeroVol", offre.getNumeroVol());
            DateTimeFormatter formatter = DateTimeFormatter.ofPattern("dd/MM/yyyy");
            model.put("DDD", offre.getDDD());
            model.put("DDA", offre.getDDA());
            model.put("prix", String.format("%.2f MDH", reservationVol.getPrixPromotion()));
            model.put("qrDataUri", dataUri);



        return pdfService.generatePdfForLine(model , "ticket");

    }



    @Override
    public  void  confirmLigneReservation(LigneReservation reservation ) throws JsonProcessingException {



        /*
         reservationVol.setStatus(Status.CONFIRME);
         reservationVolRepo.save(reservationVol);
        ReservationMongo reservationMongo = new ReservationMongo();
        OffreVol offreVol = offerVolRepo.getReferenceById(reservationVol.getOffre().getId());
        UserMongo  userMongo  = new UserMongo();
        userMongo.setId(client.getId());
        userMongo.setAge(reservationVol.getAge());
        userMongo.setGenre(reservationVol.getGenre());
        userMongo.setPays(reservationVol.getPays());
        OffreVolMongo offreVolMongo = new OffreVolMongo();
        offreVolMongo.setId(offreVol.getId());
        offreVolMongo.setDureVol(offreVol.getDureeVol());
        offreVolMongo.setAdresseArrive(offreVol.getADA());
        offreVolMongo.setClasse(offreVol.getClasse());
        offreVolMongo.setDateDepart(offreVolMongo.getDateDepart());
        offreVolMongo.setDateArrive(offreVol.getDDA());
        offreVolMongo.setDateDepart(offreVol.getDDD());
        offreVolMongo.setAdresseDepart(offreVol.getADD());
        offreVolMongo.setTitre(offreVol.getTitre());
        offreVolMongo.setDescription(offreVol.getDescription());


        reservationMongo.setOffreMongo(offreVolMongo);
        reservationMongo.setIdReservation(reservationVol.getId());
        reservationMongo.setTotalePaix(reservationVol.getPrixPromotion());
        reservationMongo.setUserMongo(userMongo);

        DomainEvent<ReservationMongo> dtoDomainEvent = new DomainEvent<>(EventType.RESERVATION_ADDED, EntityType.RESERVATION,reservationMongo);
        eventProducer.publish(dtoDomainEvent);
}
*/

    }


    @Override
    public TypeOffre getSupportedType() {
        return TypeOffre.VOL;
    }



    @Override
    public List<LigneReservationDto> getAllReservationDetails(ReservationDto reservationDto) {
        return null;
    }



    @Override
    public void DeleteLigneReservation(LigneReservationDto ligneReservationDto) {


    }


}
