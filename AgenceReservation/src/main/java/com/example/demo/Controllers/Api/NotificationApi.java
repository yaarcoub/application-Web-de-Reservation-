package com.example.demo.Controllers.Api;


import com.fasterxml.jackson.core.JsonProcessingException;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import static com.example.demo.Utils.UrlApp.UPDATE_NOTIFICATION;

@RestController
public interface NotificationApi {


    @PatchMapping(value = UPDATE_NOTIFICATION+"/{id}")
    @PreAuthorize("hasAnyRole('ADMIN','CLIENT')")
    public void  updateNotification(@PathVariable("id") int id) throws JsonProcessingException;

}
