package com.example.demo.Services.implementation;

import com.example.demo.Dto.ReservationSendStep1;
import com.example.demo.Dto.UpdateReservationMessage;
import com.example.demo.Dto.context;
import com.example.demo.Services.ActiveMQ.DomainEvent;
import com.example.demo.Services.ActiveMQ.EntityType;
import com.example.demo.Services.ActiveMQ.EventProducer;
import com.example.demo.Services.ActiveMQ.EventType;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UpdateReservationMQ {
    @Autowired
    private EventProducer eventProducer ;

    public void updateReservation(UpdateReservationMessage updateReservationMessage) throws JsonProcessingException {

        DomainEvent<UpdateReservationMessage> dtoDomainEvent = new DomainEvent(EventType.RESERVATION_UPDATED, EntityType.RESERVATION,updateReservationMessage );
        eventProducer.publish(dtoDomainEvent);

    }
}
