package com.example.demo.Services.implementation;

import com.example.demo.Dto.ReservationSendStep1;
import com.example.demo.Dto.context;
import com.example.demo.Model.OffreHotel;
import com.example.demo.Services.ActiveMQ.DomainEvent;
import com.example.demo.Services.ActiveMQ.EntityType;
import com.example.demo.Services.ActiveMQ.EventProducer;
import com.example.demo.Services.ActiveMQ.EventType;
import com.example.demo.Services.implementation.chainLogique.HandlerPart1;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SendReservationMQ extends HandlerPart1 {

@Autowired
private EventProducer eventProducer ;

    public void sendReservation(context ctx) throws JsonProcessingException {

        DomainEvent<ReservationSendStep1> dtoDomainEvent = new DomainEvent(EventType.RESERVATION_ADDED, EntityType.RESERVATION,ctx.getReservationSendStep1());
        eventProducer.publish(dtoDomainEvent);

        System.out.println(" "+ctx.getReservationSendStep1().getIdReservation()+" "+" "+
                ctx.getReservationSendStep1().getPrix()+" "+ctx.getReservationSendStep1().getReservationSendStep1List().get(0).getClient().getCinOrPassport());

    }


    @Override
    public String handle(context ctx) throws Exception {
        sendReservation(ctx);
        return ctx.getUrL();
    }
}
