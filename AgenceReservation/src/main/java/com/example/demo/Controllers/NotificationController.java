package com.example.demo.Controllers;


import com.example.demo.Controllers.Api.NotificationApi;
import com.example.demo.Services.NotificationService;
import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class NotificationController implements NotificationApi {

  @Autowired
  private NotificationService notificationService ;

    @Override
    public void updateNotification(int Id) throws JsonProcessingException {
         notificationService.update(Id);
    }

}
