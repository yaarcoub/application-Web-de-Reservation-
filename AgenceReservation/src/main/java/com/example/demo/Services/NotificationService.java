package com.example.demo.Services;
import com.example.demo.Dto.ReservationDto;
import com.example.demo.Dto.UtilisateurDto;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.boot.autoconfigure.integration.IntegrationProperties;

public interface NotificationService {

    public  void  update(int idClient) throws JsonProcessingException;


}
