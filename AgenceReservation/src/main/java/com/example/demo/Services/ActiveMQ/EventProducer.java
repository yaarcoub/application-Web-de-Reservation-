package com.example.demo.Services.ActiveMQ;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jms.core.JmsTemplate;
import org.springframework.stereotype.Service;

@Service
public class EventProducer {

    @Autowired
    private JmsTemplate jmsTemplate;


    @Autowired
    private ObjectMapper objectMapper;
    public void publish(DomainEvent<?> event) throws JsonProcessingException {

        try {
        String json = objectMapper.writeValueAsString(event);
        System.out.println("######  "+json);

        jmsTemplate.convertAndSend("events.queue", json);

    } catch (Exception e) {
        e.printStackTrace();
    }

    }
}