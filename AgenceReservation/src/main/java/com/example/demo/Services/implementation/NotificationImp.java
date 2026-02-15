package com.example.demo.Services.implementation;

import com.example.demo.Controllers.Api.NotificationApi;
import com.example.demo.Dto.NotificationDto;
import com.example.demo.Model.Notification;
import com.example.demo.Repo.NotificationRepo;
import com.example.demo.Services.ActiveMQ.DomainEvent;
import com.example.demo.Services.ActiveMQ.EntityType;
import com.example.demo.Services.ActiveMQ.EventProducer;
import com.example.demo.Services.ActiveMQ.EventType;
import com.example.demo.Services.NotificationService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class NotificationImp implements NotificationService {
    @Autowired
    private NotificationRepo notificationRepo;

    @Autowired
    private EventProducer eventProducer ;

    @Override
    public void update(int idClient) throws JsonProcessingException {
        System.out.println("##########################");

        List<Notification> notifications = notificationRepo.findByClient_IdAndLuFalse(idClient);

        List<Integer> sendUpdate = new ArrayList<>() ;
        for (Notification notification : notifications){
            notification.setLu(true);
            notificationRepo.save(notification);
            sendUpdate.add(notification.getId());
        }
        DomainEvent<List<Integer>> domainEvent = new DomainEvent(EventType.NOTIFICATION_UPDATED, EntityType.NOTIFICATION,sendUpdate);
        eventProducer.publish(domainEvent);
    }
}
