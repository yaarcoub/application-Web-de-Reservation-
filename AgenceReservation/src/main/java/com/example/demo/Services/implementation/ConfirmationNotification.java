package com.example.demo.Services.implementation;

import com.example.demo.Dto.NotificationDto;
import com.example.demo.Model.Notification;
import com.example.demo.Model.Utilisateur;
import com.example.demo.Repo.NotificationRepo;
import com.example.demo.Repo.PaiementRepo;
import com.example.demo.Repo.UtilisateurRepo;
import com.example.demo.Services.ActiveMQ.DomainEvent;
import com.example.demo.Services.ActiveMQ.EntityType;
import com.example.demo.Services.ActiveMQ.EventProducer;
import com.example.demo.Services.ActiveMQ.EventType;
import com.example.demo.Services.EmailService.EmailService;
import com.example.demo.Services.implementation.chainLogique.Handler;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import static com.example.demo.Utils.NotificationType.NEW_PAYMENT;
import static com.example.demo.Utils.NotificationType.NEW_RESERVATION;

@Service
public class ConfirmationNotification extends Handler {

    @Autowired
    private EventProducer eventProducer ;

    @Autowired
    private EmailService emailService ;


    @Autowired
    private NotificationRepo notificationRepo ;

    @Autowired
    private PaiementRepo paiementRepo ;

    public  void  sendConfirmationNotification(String PaiementId) throws JsonProcessingException, MessagingException {


        Utilisateur client = paiementRepo.findByPaiementId(PaiementId).getClient() ;



        Notification notification = new Notification();
        notification.setNotificationType(NEW_PAYMENT);
        notification.setMessage("Votre paiement a été effectué avec succès.");
        notification.setDescription("Merci , Votre paiement a été effectué avec succès et votre réservation est maintenant confirmée.");
        notification.setLu(false);
        notification.setClient(client);
        notification.setReference(PaiementId);

        notification = notificationRepo.save(notification);

        NotificationDto notificationDto = NotificationDto.fromEntity(notification);

        DomainEvent<NotificationDto> dtoDomainEvent = new DomainEvent(EventType.NOTIFICATION_ADD, EntityType.NOTIFICATION,notificationDto);
        eventProducer.publish(dtoDomainEvent);

        emailService.sendPaymentSuccessEmailWithPdf(client,getPdf());

    }


    @Override
    public byte[] handle(String PaiementId) throws Exception {

       sendConfirmationNotification(PaiementId);

        return getPdf();
    }
}
