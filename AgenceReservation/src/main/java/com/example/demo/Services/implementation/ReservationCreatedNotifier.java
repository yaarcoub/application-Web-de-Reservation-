package com.example.demo.Services.implementation;

import com.example.demo.Dto.NotificationDto;
import com.example.demo.Dto.ReservationSendStep1;
import com.example.demo.Dto.context;
import com.example.demo.Model.Notification;
import com.example.demo.Repo.NotificationRepo;
import com.example.demo.Services.ActiveMQ.DomainEvent;
import com.example.demo.Services.ActiveMQ.EntityType;
import com.example.demo.Services.ActiveMQ.EventProducer;
import com.example.demo.Services.ActiveMQ.EventType;
import com.example.demo.Services.EmailService.EmailService;
import com.example.demo.Services.implementation.chainLogique.HandlerPart1;
import com.fasterxml.jackson.core.JsonProcessingException;
import jakarta.mail.MessagingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

import static com.example.demo.Utils.NotificationType.NEW_RESERVATION;

@Service
public class ReservationCreatedNotifier extends HandlerPart1 {

    @Autowired
    private NotificationRepo notificationRepo ;

    @Autowired
    private EventProducer eventProducer ;

    @Autowired
    private EmailService emailService;


    @Async
    public  void  CreateNotification(context ctx) throws JsonProcessingException, MessagingException {
        Notification notification = new Notification();
        notification.setNotificationType(NEW_RESERVATION);
        notification.setMessage("Votre réservation a été créée.");
        notification.setDescription("Merci de finaliser le paiement dans les 10 minutes afin de confirmer votre réservation.");
        notification.setLu(false);
        notification.setClient(ctx.getClient());
        notification.setReference(String.valueOf(ctx.getReservationSendStep1().getIdReservation()));
        notification = notificationRepo.save(notification);


        NotificationDto notificationDto = NotificationDto.fromEntity(notification);
        DomainEvent<NotificationDto> dtoDomainEvent = new DomainEvent(EventType.NOTIFICATION_ADD, EntityType.NOTIFICATION,notificationDto);
        eventProducer.publish(dtoDomainEvent);

        emailService.sendNotificationEmail(ctx.getUrL(),ctx.getPrixTotal(),ctx.getClient());


    }


    @Override
    public String handle(context ctx) throws Exception {
        CreateNotification(ctx);
        return next.handle(ctx);
    }
}
